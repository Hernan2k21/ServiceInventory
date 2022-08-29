const Sequelize     = require('sequelize');
const itemModel      = require('../Database/models').Item;
const { EntityNotFoundError} = require ('../Helpers/error')
const errorResponses = require('../Responses/error')
const addItem = async (itemData) => {
    try {
        const item =  await itemModel.create(itemData)
        return item
    } catch (e) {
        throw(e)
    }
}
const getAllItems = async () => {
    try {
        const items = await itemModel.findAll({
            raw: true
        })
        return items
    } catch (e) {
        throw(e)
    }
}
const getItemById = async (itemID) => {
    try {
        const item = await itemModel.findOne({
            where: {
                id: itemID
            },
            raw: true
        })
        if(!item) throw new EntityNotFoundError(errorResponses.item_not_found)
        return item
    } catch (e) {
        throw(e)
    }
}
const updateItem = async (itemID, itemData) => {
    try {
        const item = await itemModel.findOne({
            where: {
                id: itemID
            }
        })
        if(!item) throw new EntityNotFoundError(errorResponses.item_not_found)
        const updatedItem= await item.update(
            itemData,
                {
                    where: {
                        id: itemID
                    },
                },
        
            )
        return updatedItem.dataValues
    } catch (e) {
        throw(e)
    }
   
}
module.exports = {addItem, getAllItems, getItemById, updateItem}