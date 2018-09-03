const express = require('express')
const session = require('express-session')
const massive = require('massive')
const bodyParser = require('body-parser')
const path = require('path');
require('dotenv').config()

const app = express();
const port = process.env.SERVER_PORT;

app.use(bodyParser.json())

app.use( express.static( `${__dirname}/../build` ) );

const AuthCtrl = require('./controllers/authCntrl');
const S3Ctrl = require('./controllers/S3Cntrl')
const GearCtrl = require('./controllers/gearCtrl')
const AvatarCtrl = require('./controllers/AvatarCtrl')

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB Connected Successfully')
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}))

app.use('/s3', require('react-s3-uploader/s3router')({
    bucket: "gearhubuserphotos",
    /*region: 'us-west-2', //optional*/
    headers: {'Access-Control-Allow-Origin': '*'}, // optional
    ACL: 'public-read', // this is default
  }))



// app.use(express.static(`${__dirname}/../build`))


//AUTH ENDPOINTS
app.get('/auth/callback', AuthCtrl.auth)
app.get('/api/currentUser', (req, res) => {
    res.send(req.session.user)})
app.get('/api/logout', (req, res) => {
    req.session.destroy()
    res.redirect("/#/")})

//GEAR ENDPOINTS

app.get('/api/gearCategoryView', GearCtrl.getCategoryView)
app.get('/api/gear/:id', GearCtrl.getGearById)
app.post('/api/gear', GearCtrl.post)
app.delete('/api/gear/:id', GearCtrl.deleteGearById)
app.put('/api/gear/:id', GearCtrl.updateGearById)

//S3 ENDPOINTS

app.get('/api/images', S3Ctrl.getImages)
app.post('/api/images', S3Ctrl.postImage)

//AVATAR ENDPOINT

app.get('/api/avatars', AvatarCtrl.getAvatar)

//BUILD FILES

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../build/index.html'), function(err) {
//       if (err) {
//         res.status(500).send(err)
//       }
//     })
//   })

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});


app.listen(port, () => {
    console.log("listening on port : ", port)
})