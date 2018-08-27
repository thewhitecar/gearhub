
const categoryArray = require('../../src/jsData/categoryVariables')


module.exports = {

  post: async (req, res) => {
    try {
      let db = req.app.get('db')
      let { owner_id, make, model, name, serial, condition, category, description, photo1, photo2, photo3, photo4 } = req.body;
      let categoryObject = categoryArray.find(obj => obj.categoryPath === category);
      let categorySlug = categoryObject.slug;
      let category_id = categoryObject.categoryid
      let gearInfo = await db.addGear([owner_id, name, make, model, serial, condition, category, category_id, categorySlug, description, photo1, photo2, photo3, photo4])
      res.send(gearInfo[0])
    } catch (error) {
      console.log('Gear Post Error', error)
      res.status(500).send(error)
    }
  },

  getCategoryView: async (req, res) => {
    try {
      let db = req.app.get('db')
      let owner_id = req.session.user ? req.session.user.id : 1
      let categoryView = await db.getCategoryView(owner_id);

      let categories = categoryView.reduce((array, category) => {
        if (!array.length) {
          let obj = {
            categoryId: category.category_id,
            categoryName: category.categoryslug.replace(/-/g, ' '),
            images: [category.photo_url_1],
            id: [category.id]
          }
          array.push(obj)
          return array
        } else {
          let count = 0;
          array.forEach(elem => {
            if (elem.categoryId === category.category_id) {
              elem.images.push(category.photo_url_1)
              elem.id.push(category.id)
            } else {
              count++
            }
          })
          if (count === array.length) {
            let obj = {
              categoryId: category.category_id,
              categoryName: category.categoryslug.replace(/-/g, ' '),
              images: [category.photo_url_1],
              id: [category.id]
            }
            array.push(obj)
          }
          return array
        }
      }, [])
      res.send(categories)
    } catch (error) {
      console.log('Get Categories Error', error)
      res.status(500).send(error)
    }
  },

  getGearById: async (req, res) => {
    try {
      let db = req.app.get('db')
      let { id } = req.params
      console.log(id)
      let gearInfo = await db.getGearById(id);
      res.send(gearInfo[0])
    } catch (error) {
      console.log('Gear Post Error', error)
      res.status(500).send(error)
    }
  },

  deleteGearById: async (req, res) => {
    try {
      let db = req.app.get('db')
      let { id } = req.params
      let gearInfo = await db.getGearById(id);
      res.send(gearInfo[0])
    } catch (error) {
      console.log('Gear Delete Error', error)
      res.status(500).send(error)
    }
  }


}