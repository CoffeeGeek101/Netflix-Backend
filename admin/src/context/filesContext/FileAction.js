export const fileStart = ()=>({
    type: "FILE_START",
});

export const fileSucess = (movies) =>({
    type: "FILE_SUCESS",
    payLoad:movies,
});

export const fileFail = () =>({
    type:"FILE_FAIL",
});