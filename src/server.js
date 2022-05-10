var express = require("express"),
	swaggerUi = require("swagger-ui-express"),
	swaggerDocs = require("./swagger.json");
const cors = require('cors')
const Router  = require('./routes.js')
const app = express()
app.use(cors())

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use("/", Router)

try {
	app.listen(3333,() => {
		console.log("server is on fire!")
	})
} catch (err){
	console.log(err)
}

// yarn add nodemon -D
// add nodemon  no package.json