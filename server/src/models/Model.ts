import {findAll, insert} from '../helpers/queries.js'
interface xd { 
    values: Promise<any>
}
class Model {
    name;
    columns;
    constructor(name:any,columns:any){
        this.name = name
        this.columns = columns
    }

    all(){
        return findAll(this.name)
    }

    create(...values:any[]){
        
        return insert({
            name: this.name,
            row: this.columns,
            value: values
        })
    }
    
}

export default Model
