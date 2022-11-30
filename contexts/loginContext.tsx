import React from 'react';

type initialState = {
    loginStatus: boolean,
    setLoginStatus:(loginStatus: boolean) => void
}
const initialState = {
    loginStatus: false,
    setLoginStatus: (loginStatus: boolean)=>{}
};

const loginContext = React.createContext(initialState);

export default loginContext;
