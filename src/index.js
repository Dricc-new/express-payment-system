const express = require('express')
const expbhs = require('express-handlebars')
const path = require('path')
// Inicializacion
const app = express()

// Settings
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', expbhs({
    
}))

// Start Server
app.listen(3000, () => {
    console.log('Server on port', 3000)
})