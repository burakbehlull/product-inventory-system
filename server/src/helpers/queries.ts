import { InsertType, UpdateOneType, UpdateOneIdType, DeleteOneType, DeleteOneIdType } from '../types/IQueryTypes.js'
import {inquery,colonQuery} from './sqlActions.js'
import {repeatString} from './littleHelpers.js'

async function findAll(key:string){
    const result = await inquery(`SELECT * FROM ${key}`)
    return result
}

async function insert({ name, row, value }:InsertType) {
    const rowSplit = row.split(',')
    let valueLen = repeatString('?', rowSplit.length)
    const query = `INSERT INTO ${name} (${row}) VALUES (${valueLen})`
    return await colonQuery(query, value)
}

async function updateOne({ name, targetKey, whereKey, values }:UpdateOneType){
    const query = `UPDATE ${name} SET ${targetKey} = ? WHERE ${whereKey} = ?`
    return await colonQuery(query, values)
}

async function updateOneById({ name, key, values }:UpdateOneIdType){
    const query = `UPDATE ${name} SET ${key} = ? WHERE id = ?`
    return await colonQuery(query,values)
}

async function deleteOne({tableName, key, value}:DeleteOneType){
    const query = `DELETE FROM ${tableName} WHERE ${key} = ?`
    return await colonQuery(query, [value])
}


async function deleteOneId({tableName, id}:DeleteOneIdType){
    const query = `DELETE FROM ${tableName} WHERE id = ?`
    return await colonQuery(query, [id])
}

export {
    findAll,
    insert,

    updateOne,
    updateOneById,
    
    deleteOne,
    deleteOneId
}