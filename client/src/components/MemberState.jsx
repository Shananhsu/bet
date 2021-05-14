import React, { Component, useState } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Axios from "axios";
import $ from "jquery";
import { ReactDOM } from "react-dom"
import Modal from "./Modal";
import Memberbanner from './memberhome/Memberbanner';

const MemberState = (props) => {
    // constructor (){
    //     super()
    // }
    //  

    Axios.defaults.withCredentials = true;
    const history = useHistory();
    const [main_balance, setMain_balance] = useState("");
    const logoutButtonClick = () => {
        Axios.get('http://localhost:3001/api/logout').then((res) => {
            // props.close('logout')
            // console.log(props)
            props.props.history.go(0);
        })
    }
    const [isModalOpen, toggleModal] = useState(false);
    // 打後台拿資料
    const getMemberBalance = () => {
        Axios.post('http://localhost:3001/api/getBalance',
            {
                "account": props.memberData.account,
            }).then((res) => {
                // console.log( res)
                if (res.data.message === undefined) {
                    setMain_balance(res.data[0].main_balance);
                }
            })
    }
    return (
        <React.Fragment>

            {/* {console.log("///memberstate//props////")}
            {console.log(props)}
            {console.log("///memberstate//props////")} */}
            <div id="masthead">
                {getMemberBalance()}
                <div className="">
                    <div className="row">
                        <div className="col-xs-1 auto_left">

                        </div>
                        <div className="col-xs-12 auto_left" style={{ "float": "inherit" }}>
                            <div className="auth" style={{ "float": "right" }}>
                                <div>
                                    <div style={{ "width": "150px", "float": "left" }}>
                                        <a className="btn btn-sm btn-danger glyphicon glyphicon-log-out " onClick={logoutButtonClick}
                                            style={{ "marginTop": "4px" }}></a>
                                        {/* <a className="btn btn-sm btn-primary membercenter glyphicon glyphicon-home" href="/memberinfo" */}
                                        <a className="btn btn-sm btn-primary membercenter glyphicon glyphicon-home" onClick={() => toggleModal(!isModalOpen)}
                                            style={{ "marginTop": "4px" }}> 會員中心</a>
                                        <Modal isOpen={isModalOpen} toggle={toggleModal}>
                                            <Memberbanner props={props} />
                                        </Modal>
                                    </div>
                                    <div style={{ "width": "150px", "float": "left" }}>
                                        <a className="btn btn-sm btn-danger glyphicon glyphicon-log-out " onClick={logoutButtonClick}
                                            style={{ "marginTop": "4px" }}></a>
                                        {/* <a className="btn btn-sm btn-primary membercenter glyphicon glyphicon-home" href="/memberinfo" */}
                                        <a className="btn btn-sm btn-primary membercenter glyphicon glyphicon-home" onClick={() => toggleModal(!isModalOpen)}
                                            style={{ "marginTop": "4px" }}> 會員中心</a>
                                        <Modal isOpen={isModalOpen} toggle={toggleModal}>
                                            <Memberbanner props={props} />
                                        </Modal>
                                    </div>
                                </div>
                                <div className="info_member"
                                    style={{ "float": "right",  "marginTop": "5px" ,"fontSize":"18px"}}>
                                    <b>您好,
                                            <a href="/" >
                                            {/* {console.log(props)} */}
                                            {props.memberData.account}
                                        </a>
                                    </b> |
                                        <div id="sf-membermsg-button-00001" style={{ "display": "inline" }}>
                                        <b> 主帳戶餘額 :
                                                <a >
                                                {main_balance.toLocaleString()}
                                            </a>
                                        </b>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment >
    );
}




export default MemberState;
