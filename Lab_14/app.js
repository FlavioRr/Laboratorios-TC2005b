const express = require('express');
const bodyParser = require('body-parser');
const bodyCookie = require('cookie-parser');
const rutas_capybaras = require('./routes/capybaras.routes');
const rutas_usuarios = require('./routes/user.routes/')
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()(
            app.use(session({
                secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
                resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
                saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
            }));
        )

        app.use('/capybaras', rutas_capybaras);

        //Middleware
        app.use((request, response, next) => {
            console.log('Middleware!');
            next(); //Le permite a la petición avanzar hacia el siguiente middleware
        });

        app.use((request, response, next) => {
            console.log('Otro middleware!');
            response.send('¡Hola mundo!'); //Manda la respuesta
        });

        app.listen(3000);