import db from '../config/db.js'

async function inquery(query:string){
    const IQuery = await db.execute(query, (err,data)=> {
        if(err){
            console.log(err)
            return err
        }

        console.log(data)
    })
    return IQuery
}

async function prepareQuery(query:string, values:any[]){
    const IQuery= await db.prepare(query, (err, state)=>{
        if(err) {
            console.log(err)
            return err
        }
        state.execute(values, (err,data)=> {
            if(err) {
                console.log(err)
                return err
            }
            console.log('prepare', data)
        })

    })
    console.log('IQuery', IQuery)
}

export {
    inquery,
    prepareQuery
}