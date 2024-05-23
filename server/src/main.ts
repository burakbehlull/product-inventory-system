import express, {Application, Request, Response} from 'express'
import cors, { CorsOptions } from 'cors'
import morgan from 'morgan'
import {findAll} from './helpers/queries.js'
import {colonQuery} from './helpers/sqlActions.js'

import productRoute from './routers/productRoute.js'

const app:Application = express()

const port = process.env.PORT || 3000

const corsOptions : CorsOptions = {
    origin: "*",
    credentials: true
}

// middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors(corsOptions))
app.use(morgan('dev'))

// sayfalar

app.use('/api', productRoute)

app.get('/q', (req:Request,res:Response)=> {
    const name = "todos"
    const row = "title"
    const value = "olurins"
    let convert = `INSERT INTO ${name}(id, ${row}, description) VALUES (?,?, ?)`
    const x = colonQuery(convert, [31, value, value, value])
    console.log(x)
    res.send("xx")
})
app.get('/', (req:Request,res:Response)=> {
	res.send("merhaba product system!")
})


app.listen(port, ()=> console.log(`${port} portunda başlatıldı.`))

