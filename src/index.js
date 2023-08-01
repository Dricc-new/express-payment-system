import express from 'express'
import { engine } from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url';
// Inicializacion
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
const router = express.Router()

router.get('/', (req, res) => {
    res.render('partials/index')
})

app.use(router)

// Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs',
}));

app.set('view engine', '.hbs');

// Static files
app.use(express.static(path.join(__dirname,'../public')))

// Start Server
app.listen(3000, () => {
    console.log('Server on port', 3000)
})