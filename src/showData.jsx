import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Form from './Form';
import Info from './Info';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import {getData} from "./Redux/action/simpleAction";


function Navigation({dispatch, payload}) {
    const [updateKeys, setUpdateKeys] = useState('');
    const [keys, setKeys]=useState([]);
    const handleChange = val => {
            setKeys(val);
            console.log(keys);
            dispatch(getData());
        };
    useEffect(() => {
        if (payload){
            setUpdateKeys(payload.monthlyInstallment);
        }
    }, [payload]);

    return (
        <div className="container">
            {console.log(payload)}
            <div className="row center">
            </div>
            <div className="row">
                <div className="col m12 s12">
                    <Form change={handleChange} />
                    <div>
                        <div className="data-container row">
                            <Info
                                key={1}
                                id={1}
                                amount={keys.amount}
                                duration={keys.installment}
                                monthlyInstallment={updateKeys}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => ({...ownProps, ...state.simpleReducer});

export default connect(mapStateToProps)(Navigation);