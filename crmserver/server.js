const express = require('express')
const bodyParser = require(`body-parser`)
const app = express()
const path = require('path')
const api = require('./Router/routes')


app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api)

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

let PORT = 8989
 app.listen(process.env.PORT || PORT, function() {
console.log(`Server up and running on port ${PORT}`)})