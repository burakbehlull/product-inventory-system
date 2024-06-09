const initialStore = {
    id: 0
}

const reducers = (state:any, action:any)=> {
    switch(action.type) {
        case 'SET_ID':
            const value = parseInt(action.payload, 10)
            state.id = value
            return {id: value}
    default:
        return state
    }
}

export {
    initialStore,
    reducers
}