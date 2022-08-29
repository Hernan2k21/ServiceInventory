
const {exampleAction}= require('../Actions/example')

module.exports = {
	async example(req, res, next) {
        try { 
            const data = await exampleAction()
			res.status(200).json(data)
            
        }catch(e){

            next(e)
        }
	}
		
}
