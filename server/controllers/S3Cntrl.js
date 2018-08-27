module.exports={
    
    getImages: async (req, res) => {
    let db = req.app.get('db')
    let images = await db.getImages()
    res.send(images)
  },
  
  postImage: async (req, res) => {
    try {
      let db = req.app.get('db')
      let images = await db.addImage(req.body.imageUrl)
      res.send(images[0])
    } catch (error) {
      console.log('we have a big problem:', error)
      res.status(500).send(error)
    }
  }}