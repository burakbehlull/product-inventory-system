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
    whereKey: string,
    whereValue: string|any,
    key: string,
    value: string|any,
}
interface UpdateOneIdType {
    name: string,
    targetId: string|any,
    key: string,
    value: string|any,
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