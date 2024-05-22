
interface InsertManyType {
    name: string,
    rows: any[],
    values: any[]
}
interface InsertType {
    name: string,
    row: string | any,
    value: string | any
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
export {
    InsertType,
    InsertManyType,
    UpdateOneType,
    UpdateOneIdType
}