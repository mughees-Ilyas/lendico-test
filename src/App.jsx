import React from "react";
import Navigation from "./showData";
import { Provider } from 'react-redux'
import configureStore from '../src/Redux/store';


export default () => {
    return (
        <Provider store={configureStore()}>
            <Navigation />
        </Provider>
    );
};
