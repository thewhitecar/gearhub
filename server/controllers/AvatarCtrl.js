module.exports = {

    getAvatar: async (req, res) => {
        try {
            let db = req.app.get('db');
            let owner = req.session.user
            let avatarURL = await db.FullJoin([owner.id])
            res.send(avatarURL[0])
        } catch (error) {
          console.log('Gear Post Error', error)
          res.status(500).send(error)
        }

    }
}