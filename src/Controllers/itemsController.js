
const {addItem, getAllItems, getItemById, updateItem}= require('../Actions/items')
const {validateSchema} = require('../Validations/index')
const itemSchema = require('../Validations/Schemas/item')
module.exports = {
	async postItem(req, res, next) {
        try { 
            const itemData = await validateSchema(req.body, itemSchema)
            const data = await addItem(itemData)
			res.status(200).json(data)
            
        }catch(e){

            next(e)
        }
	},
    async putItem(req, res, next) {
        try { 
            const itemData = await validateSchema(req.body, itemSchema)
            const data = await updateItem(req.params.id, itemData)
			res.status(200).json(data)
            
        }catch(e){

            next(e)
        }
	},
    async getItemById(req, res, next) {
        try { 
            const data = await getItemById(req.params.id)
			res.status(200).json(data)
            
        }catch(e){

            next(e)
        }
	},
    async getAllItem(req, res, next) {
        try { 
            const data = await getAllItems()
			res.status(200).json(data)
            
        }catch(e){

            next(e)
        }
	}
		
}
