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
    value: string
}

interface DeleteOneIdType {
    tableName: string,
    value: string
}

export {
    InsertType,
    InsertManyType,

    UpdateOneType,
    UpdateOneIdType,

    DeleteOneType,
    DeleteOneIdType
}