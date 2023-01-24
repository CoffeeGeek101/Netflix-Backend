const AuthReducer = (state, action) =>{
    switch (action.type){
        case "LOGIN_START":
            return{
                user: null,
                isFetching: true,
                error : false,
            };
        case "LOGIN_SUCESS":
            return{
                user: action.payLoad,
                isFetching: false,
                error: false,
            };
        case "LOGIN_FAIL":
            return{
                user:null,
                isFetching:false,
                error:true,
            }
        case "LOG_OUT":
            return{
                user:null,
                isFetching:false,
                error:false,
            }    
        default:
            return{...state};            
    }
};

export default AuthReducer;

