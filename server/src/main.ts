import express, {Application, Request, Response} from 'express'
import cors, { CorsOptions } from 'cors'
import morgan from 'morgan'
import {findAll} from './helpers/queries.js'
const app:Application = express()

const port = process.env.PORT || 3000

const corsOptions : CorsOptions = {
    origin: true,
    credentials: true
}

// middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors(corsOptions))
app.use(morgan('dev'))

// sayfalar

app.get('/q', (req:Request,res:Response)=> {
    console.log(findAll('todos'))
	res.send("oke")
})
app.get('/', (req:Request,res:Response)=> {
	res.send("merhaba product system!")
})


app.listen(port, ()=> console.log(`${port} portunda başlatıldı.`))

