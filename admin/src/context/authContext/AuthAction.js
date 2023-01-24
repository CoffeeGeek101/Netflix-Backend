export const loginStart = () =>({
    type: "LOGIN_START",
});

export const loginSucess = (user) => ({
    type: "LOGIN_SUCESS",
    payLoad : user,
});

export const loginFail = () =>({
    type: "LOGIN_FAIL",
});

export const logOut = () =>({
    type: "LOG_OUT",
});