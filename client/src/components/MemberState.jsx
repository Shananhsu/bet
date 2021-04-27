import React, { Component } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Axios from "axios";



class MemberState extends Component {
    constructor (){
        super()

    }
    

    render() {
        return (
            <React.Fragment>
                
                <div id="masthead">
                    
                    <div className="">
                        <div className="row">
                            <div className="col-xs-1 auto_left">

                            </div>
                            <div className="col-xs-11 auto_left" style={{ "float": "inherit" }}>
                                <div className="auth" style={{ "float": "right" }}>
                                    <div>
                                        <div style={{ "width": "300px", "float": "left" }}>
                                            <a className="btn btn-sm btn-danger glyphicon glyphicon-log-out" href="/logout"
                                                style={{ "marginTop": "4px" }}></a>
                                            <a className="btn btn-sm btn-primary  glyphicon glyphicon-home" href="/memberinfo"
                                                style={{ "marginTop": "4px" }}> 會員中心</a>
                                        </div>
                                    </div>
                                    <div className="info"
                                        style={{ "float": "right", "marginLeft": "150px", "marginTop": "-24px" }}>
                                        <b>您好,
                                            <a href="/" >
                                                {this.props.account}
                                            </a>
                                        </b> | 
                                        <div id="sf-membermsg-button-00001" style={{ "display": "inline" }}>
                                            <b> 主帳戶餘額 :
                                                <a >
                                                    {this.props.balance}
                                                </a>
                                            </b>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default MemberState;