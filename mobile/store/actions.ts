const initialStore = {
    id: 0
}

const reducers = (state:any, action:any)=> {
    switch(action.type) {
        case 'SET_ID':
            state.id = parseInt(action.payload, 10)
            return {id: parseInt(action.payload, 10)}
    default:
        return state
    }
}

export {
    initialStore,
    reducers
}