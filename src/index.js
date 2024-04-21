import express from 'express'
import { engine } from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url';
import router from './routes/index.js';
import { PORT } from './config.js';
// Inicializacion
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
app.use(router)

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs',
}));

app.set('view engine', '.hbs');

// Static files
app.use(express.static(path.join(__dirname, '../public')))

// Start Server
app.listen(PORT, () => {
    console.log(`Server on: http://localhost:${PORT}`)
})