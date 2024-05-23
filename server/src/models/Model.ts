import {findAll, insert} from '../helpers/queries.js'
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
    create(value:Array<any>){
        return insert({
            name: this.name,
            row: this.columns,
            value
        })
    }
    
}

export default Model
