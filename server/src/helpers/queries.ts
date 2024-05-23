import { InsertType,InsertManyType, UpdateOneType, UpdateOneIdType, DeleteOneType, DeleteOneIdType } from '../types/IQueryTypes.js'
import {inquery,colonQuery} from './sqlActions.js'
import {repeatString} from './littleHelpers.js'
async function findAll(key:string){
    const result = await inquery(`SELECT * FROM ${key}`)
    return result
}

async function insert({ name, row, value }:InsertType) {
    let valueLen = repeatString('?', value.length)
    const query = `INSERT INTO ${name} (${row}) VALUES (${valueLen})`
    return await colonQuery(query, value)
}

async function updateOne({ name, key, value, whereKey, whereValue }:UpdateOneType){
    return await inquery(`UPDATE ${name} SET ${key} = '${value}' WHERE ${whereKey} = ${whereValue}`)
}

async function updateOneId({ name, targetId, key, value }:UpdateOneIdType){
    return await inquery(`UPDATE ${name} SET ${key} = '${value}' WHERE id = ${targetId}`)
}

async function deleteOne({tableName, key, value}:DeleteOneType){
    return await inquery(`DELETE FROM ${tableName} WHERE ${key} = '${value}'`)
}


async function deleteOneId({tableName, value}:DeleteOneIdType){
    return await inquery(`DELETE FROM ${tableName} WHERE id = '${value}'`)
}



export {
    findAll,
    insert,

    updateOne,
    updateOneId,
    
    deleteOne,
    deleteOneId
}