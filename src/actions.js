import axios from "axios"
import * as actions from './actionType';

export const onGetData = () => {
    return (dispatch) => {
        let url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url).then((res => {

            dispatch(
                ((data) => {
                    return {
                        type: actions.GET_POSTS,
                        payload: {
                            httpResponse: data
                        }
                    }
                })(res.data)
            )

        })).catch(err => console.log(err))
    }
}

export const onAddData = (item) =>{
    return{
        type: actions.ADD_ITEM,
        payload: item
    }
}

export const onDelete = (id) => {
    return{
        type: actions.REMOVE_ITEM,
        payload: id
    }
}