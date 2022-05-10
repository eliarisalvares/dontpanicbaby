const { Router } = require('express')
const { verifyRules } = require('./services.js')

const routes = Router()

routes.post("/", async (req, res) => {
	const { str } = req.body
	try {
		const resp = await verifyRules(str)
		res.status(200).json({response:resp})
	}
	catch (err){
		res.status(400).json({message:err.message})
	};
})

module.exports = routes

