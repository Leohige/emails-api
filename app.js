const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./src/routes")
const app = express()
const hostname = process.env.HOSTNAME || "0.0.0.0"
const port = process.env.PORT || 8080

app.use(bodyParser.json())

app.listen(port, hostname, () => {
  console.log(`Email Api app listening at http://${hostname}:${port}`)
})

app.use("/api/v1", routes);
