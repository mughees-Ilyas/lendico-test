export default (state = {}, action) => {

    switch (action.type) {
        case 'GET_DATA':
            return {
                payload: action.payload
            };
        default:
            return state
    }
}
