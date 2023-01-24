import axios from "axios";
import { fileFail, fileStart, fileSucess } from "./FileAction";

export const getFiles = async(dispatch)=>{
    dispatch(fileStart());
    try{
        const res = await axios.get("/movies", {
            headers: {
                token : "Bearer "+ JSON.parse(localStorage.getItem("apple")).accessToken,
            },
        });
        dispatch(fileSucess(res.data));
    }catch(err){
        dispatch(fileFail());
    }
};