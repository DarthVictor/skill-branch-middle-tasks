const express = require('express')
const url = require('url')
const cors = require('cors')
const app = express()
const port = 3000 
app.use(cors())
function process(request, response) {
    const urlParts = url.parse(request.url, true)
    const query = urlParts.query
    const a = Number(query.a) || 0
    const b = Number(query.b) || 0
    response.send('' + (a + b)  )  
}
app.get('/', process)
app.listen(port, (error) => {
    if (error) {
        console.error(error)
    }
    else {
        console.log('App running on port ' + port + '!')
    }
})