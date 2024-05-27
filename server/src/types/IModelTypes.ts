interface UpdateOneIdType {
    value: any,
    id: number
}


interface UpdateAllByIdType{
    values: any[] | any,
    id: number
}

export {
    UpdateOneIdType,
    UpdateAllByIdType
}