import { InsertType,InsertManyType, UpdateOneType, UpdateOneIdType } from '../types/IQueryTypes.js'
import {inquery} from './sqlActions.js'

async function findAll(key:string){
    return await inquery(`SELECT * FROM ${key}`)
}

async function insertMany({ name, rows, values }:InsertManyType) {
    return await inquery(`INSERT INTO ${name}(${rows}) VALUES(${values})`)
}

async function insert({ name, row, value }:InsertType) {
    return await inquery(`INSERT INTO ${name}(${row}) VALUES(${value})`)
}

async function updateOne({
    name, 
    key, 
    value, 
    whereKey, 
    whereValue
}:UpdateOneType){
    return await inquery(`UPDATE ${name} SET ${key} = '${value}' WHERE ${whereKey} = ${whereValue}`)
}

async function updateOneId({
    name, 
    targetId,
    key, 
    value, 
}:UpdateOneIdType){
    return await inquery(`UPDATE ${name} SET ${key} = '${value}' WHERE id = ${targetId}`)
}

export {
    findAll,
    insert,
    insertMany,

    updateOne,
    updateOneId
}