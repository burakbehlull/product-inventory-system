import {findAll, insert,updateOneById, deleteOneId, updateAllById} from '../helpers/queries.js'
import {UpdateOneIdType,UpdateAllByIdType} from '../types/IModelTypes.js'
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
    updateAllById({values, id}:UpdateAllByIdType){
        return updateAllById({
            tableName: this.name,
            columns: this.columns,
            values: values,
            id: id
        })
    }

    updateOneById(key:string, {value, id}:UpdateOneIdType){
        return updateOneById({
            name: this.name,
            key: key,
            values: [value, id]
        })
    }
    
    deleteOneById(id:number){
        return deleteOneId({
            tableName: this.name,
            id: id
        })
    }
    

    
}

export default Model
