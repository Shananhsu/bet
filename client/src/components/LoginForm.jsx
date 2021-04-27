import React, { Component } from 'react';

class LoginForm extends Component {
    // state = {  }
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
                                    <div className="col-xs-11">
                                        {/* <script type="text/javascript" src="/js/Auth/zh_tw/login.js"></script> */}

                                        <div id="sf-login-00003">
                                            <form
                                                id="loginForm"
                                                className="form-horizontal bv-form"
                                                role="form" action="/login"
                                                noValidate="novalidate">
                                                {/* <button
                                                    type="submit"
                                                    className="bv-hidden-submit"
                                                    style={{ "display": "none", "width": "0px", "height": "0px" }}></button>
                                                <input type="hidden" name="_token" value="" /> */}
                                                <div className="row">
                                                    {/* <div className="col-xs-3">
                                                        <div className="form-group has-feedback">
                                                            <input
                                                                id="account"
                                                                type="text"
                                                                className="form-control input-sm"
                                                                name="account"
                                                                placeholder="帳號"
                                                                data-bv-field="account" />
                                                            <i
                                                                className="form-control-feedback bv-no-label"
                                                                data-bv-icon-for="account"
                                                                style={{ "display": "none" }}></i>
                                                            <small
                                                                className="help-block"
                                                                data-bv-validator="notEmpty"
                                                                data-bv-for="account"
                                                                data-bv-result="NOT_VALIDATED"
                                                                style={{ "display": "none" }}>請填寫必填欄位</small>
                                                            <small
                                                                className="help-block"
                                                                data-bv-validator="stringLength"
                                                                data-bv-for="account"
                                                                data-bv-result="NOT_VALIDATED"
                                                                style={{ "display": "none" }}>請輸入符合長度限制的值</small>
                                                            <small className="help-block"
                                                                data-bv-validator="regexp"
                                                                data-bv-for="account"
                                                                data-bv-result="NOT_VALIDATED"
                                                                style={{ "display": "none" }}>請輸入英數(半形字母)</small>
                                                        </div>
                                                    </div> */}
                                                    {/* <div className="col-xs-3">
                                                        <div className="form-group has-feedback">
                                                            <input
                                                                id="password"
                                                                type="password"
                                                                className="form-control input-sm"
                                                                name="password"
                                                                placeholder="密碼"
                                                                data-bv-field="password" />
                                                            <i
                                                                className="form-control-feedback bv-no-label"
                                                                data-bv-icon-for="password"
                                                                style={{ "display": "none" }}></i>
                                                            <small
                                                                className="help-block"
                                                                data-bv-validator="notEmpty"
                                                                data-bv-for="password"
                                                                data-bv-result="NOT_VALIDATED"
                                                                style={{ "display": "none" }}>請填寫必填欄位</small>
                                                            <small
                                                                className="help-block"
                                                                data-bv-validator="stringLength"
                                                                data-bv-for="password"
                                                                data-bv-result="NOT_VALIDATED"
                                                                style={{ "display": "none" }}>請輸入符合長度限制的值</small>
                                                            <small
                                                                className="help-block"
                                                                data-bv-validator="regexp"
                                                                data-bv-for="password"
                                                                data-bv-result="NOT_VALIDATED"
                                                                style={{ "display": "none" }}>請輸入英數(半形字母)</small>
                                                        </div>
                                                    </div> */}
                                                    {/* <div className="col-xs-3">
                                                        <div className="form-group col-sm has-feedback">
                                                            <input
                                                                id="captcha_code"
                                                                type="text"
                                                                className="form-control input-sm captcha"
                                                                name="captcha"
                                                                placeholder="驗證碼"
                                                                minLength="4"
                                                                maxLength="4"
                                                                required=""
                                                                autoComplete="off"
                                                                data-bv-field="captcha" />
                                                            <i className="form-control-feedback bv-no-label"
                                                                data-bv-icon-for="captcha"
                                                                style={{ "display": "none" }}></i>
                                                            <small
                                                                className="help-block"
                                                                data-bv-validator="notEmpty"
                                                                data-bv-for="captcha"
                                                                data-bv-result="NOT_VALIDATED"
                                                                style={{ 'display': 'none' }}>請填寫必填欄位</small>
                                                            <small
                                                                className="help-block"
                                                                data-bv-validator="stringLength"
                                                                data-bv-for="captcha"
                                                                data-bv-result="NOT_VALIDATED"
                                                                style={{ 'display': 'none' }}>請輸入符合長度限制的值</small>
                                                        </div>
                                                    </div> */}
                                                    <div className="col-xs-5">
                                                        <div className="form-group col-sm">
                                                            {/* <img id="captcha" src="images/logo/passpic.png" /> */}
                                                            <button
                                                                type="submit"
                                                                className="btn btn-sm btn-primary login" href = "/">登入</button>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-1" style ={{"marginLeft":"10px"}}>
                                                        <a
                                                            className="btn btn-sm register modal_btn"
                                                            href="/register"
                                                            data-toggle="modal"
                                                            data-text="/regist"
                                                            data-title="註冊"
                                                        >
                                                            <span
                                                                className="glyphicon glyphicon-pencil"></span>註冊 </a>
                                                    </div>
                                                </div>
                                                {/* <div
                                                    className="row"
                                                    style={{ 'position': 'absolute', 'top': '49px', 'right': '0', 'width': '100%' }}>
                                                    <div className="col-xs-6">
                                                        <div className="output"></div>
                                                    </div>
                                                    <div className="col-xs-3">
                                                        <a
                                                            className="btn btn-link forget modal_btn"
                                                            href="#modal"
                                                            data-toggle="modal"
                                                            data-text="/forgetloginpwd">忘記密碼?</a>
                                                    </div>
                                                </div> */}
                                            </form>



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

export default LoginForm;