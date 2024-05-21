import express, {Application, Request, Response} from 'express'
import cors, { CorsOptions } from 'cors'
const app:Application = express()

const corsOptions : CorsOptions = {
    origin: true,
    credentials: true
}

// middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors(corsOptions))


// sayfalar
app.use('/', (req:Request,res:Response)=> {
	res.send("merhaba product system!")
})
app.listen(80, ()=> console.log('80 portunda başlatıldı.'))

