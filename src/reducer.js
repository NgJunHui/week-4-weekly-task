import * as actions from './actionType';

const initState = {
    posts: [],
    employee: []
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actions.GET_POSTS:
            console.log(action.payload.httpResponse)
            return { ...state, posts: action.payload.httpResponse }
        case actions.ADD_ITEM:
            return { ...state, employee: [...state.employee, action.payload] }
        case actions.REMOVE_ITEM:
            let emp = state.employee.filter((info => {
                return info.id != action.payload
            }))
            return { ...state, employee: emp }
        default:
            return state;
    }

}

export default reducer;