import React from 'react';

type initialState = {
    popup: boolean,
    setPopup:(loginStatus: boolean) => void
}
const initialState = {
    popup: false,
    setPopup: (loginStatus: boolean)=>{}
};

const popupContext = React.createContext(initialState);

export default popupContext;