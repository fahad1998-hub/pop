const Reducer = (state = {islogin : false, userDetails:{}}, action) => {

    console.log("REDUCER RAN", state);
    switch (action.type){
        case 'LOGIN':
            return {
                ...state,
                isLogin:true,
                userDetails:action.payload
            };
        case 'LOGOUT' :
            return {
                ...state,
                isLogin:false,
            }; 
        default:
            return state;
    }

}
export default Reducer;