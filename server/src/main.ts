import express, {Application, Request, Response} from 'express'

const app:Application = express()

// middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// sayfalar
app.use('/', (req:Request,res:Response)=> {
	res.send("merhaba product system!")
})
app.listen(80, ()=> console.log('80 portunda başlatıldı.'))

