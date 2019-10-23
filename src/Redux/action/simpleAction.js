import items from "../items";


export const getData = () => dispatch => {
    dispatch({
        type: 'GET_DATA',
        payload: items
    })
};

