import { InsertType,InsertManyType, UpdateOneType, UpdateOneIdType, DeleteOneType, DeleteOneIdType } from '../types/IQueryTypes.js'
import {inquery} from './sqlActions.js'

async function findAll(key:string){
    const result = await inquery(`SELECT * FROM ${key}`)
    return result
}

async function insertMany({ name, rows, values }:InsertManyType) {
    return await inquery(`INSERT INTO ${name}(${rows}) VALUES(${values})`)
}

async function insert({ name, row, value }:InsertType) {
    return await inquery(`INSERT INTO ${name}(${row}) VALUES(${value})`)
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
    insertMany,

    updateOne,
    updateOneId,
    
    deleteOne,
    deleteOneId
}