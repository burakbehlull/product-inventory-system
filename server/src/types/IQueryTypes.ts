interface InsertManyType {
    name: string,
    rows: any[],
    values: any[]
}
interface InsertType {
    name: string,
    row: string | any,
    value: Array<any> | any,
}

interface UpdateAllIdType {
    tableName: string,
    columns: string,
    values: any,
    id: number
}
interface UpdateOneType {
    name: string,
    targetKey: string,
    whereKey: string,
    values: Array<any> | any
}
interface UpdateOneIdType {
    name: string,
    key: string,
    values: string|any,
}
interface DeleteOneType {
    tableName: string,
    key: string,
    value: string | number | any
}

interface DeleteOneIdType {
    tableName: string,
    id: number
}


export {
    InsertType,
    InsertManyType,

    UpdateAllIdType,
    UpdateOneType,
    UpdateOneIdType,

    DeleteOneType,
    DeleteOneIdType
}