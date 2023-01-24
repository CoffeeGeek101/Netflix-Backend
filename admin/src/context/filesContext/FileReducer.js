const FileReducer = (state, action) =>{
    switch(action.type){
        case "FILE_START":
            return{
                movies: [],
                isFetching : true,
                error:false,
            };
        case "FILE_SUCESS" :
            return{
                movies: action.payLoad,
                isFetching: false,
                error:false,
            };
        case "FILE_FAIL" :
            return{
                movies : [],
                isFetching:false,
                error:true,
            };
        default:
            return{...state};     
    }
};

export default FileReducer;