import express, {Application, Request, Response} from 'express'
import cors, { CorsOptions } from 'cors'
import morgan from 'morgan'

const app:Application = express()

const port = process.env.PORT || 80

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
app.use('/', (req:Request,res:Response)=> {
	res.send("merhaba product system!")
})
app.listen(port, ()=> console.log(`${port} portunda başlatıldı.`))

