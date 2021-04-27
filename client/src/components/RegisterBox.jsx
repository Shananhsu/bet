import React, { Component } from 'react';



class RegisterBox extends Component {
    // state = {}

    render() {
        return (
            // 註冊視窗
            <React.Fragment>

                <div id="modal" className="modal fade" role="dialog"
                    data-easein="flipBounceYIn" tabindex="-1"
                    aria-labelledby="myModalLabel" aria-hidden="true"
                    style={{ "display": "block" }}>
                    <div id="modal" className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h4 className="modal-title"></h4>
                            </div>
                            <div className="modal-body">

                                {/* <script type="text/javascript">
$(document).ready(function(e) {
    $('#email').removeAttr('required');
    $('#qq').attr('required',"required");
    $('#registForm fieldset:nth-child(3) .form-group:nth-child(5) label').text('E-mail');
    $('#registForm fieldset:nth-child(3) .form-group:nth-child(6) label').text('*Line');
});
</script>


        <script type="text/javascript" src="/js/Auth/zh_tw/regist.js"></script>
 */}


                                <div id="sf-regist-00001" className="container" style={{ "max-width": "580px" }}>
                                    <form id="registForm" className="form-horizontal bv-form"
                                        role="form" action="/regist" novalidate="novalidate">
                                        <button type="submit" className="bv-hidden-submit"
                                            style={{ "display": "none", "width": "0px", "height": "0px" }}></button>
                                        <input type="hidden" name="_token"
                                            value="ce0bjXeIX5w0TODveAXo5MJ6nYESrZvh8BQELrA8" />
                                        <fieldset>
                                            <legend>帳戶資訊</legend>
                                            <div className="form-group has-feedback">
                                                <label for="account" className="col-md-4 control-label">*帳號</label>

                                                <div className="col-md-8">
                                                    <input id="account" type="text"
                                                        className="form-control" name="account" required=""
                                                        maxlength="8" data-bv-field="account" />
                                                    <i className="form-control-feedback" data-bv-icon-for="account"
                                                        style={{ "display": "none" }}></i>
                                                    <small className="help-block" data-bv-validator="stringLength"
                                                        data-bv-for="account" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請輸入符合長度限制的值</small>
                                                    <small className="help-block" data-bv-validator="regexp"
                                                        data-bv-for="account" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請輸入英數(半形字母)</small>
                                                    <small className="help-block" data-bv-validator="notEmpty"
                                                        data-bv-for="account" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請填寫必填欄位</small>
                                                </div>
                                            </div>

                                            <div className="form-group has-feedback">
                                                <label for="password" className="col-md-4 control-label">*密碼</label>

                                                <div className="col-md-8">
                                                    <input id="password" type="password" className="form-control"
                                                        name="loginpwd" required="" maxlength="12"
                                                        autocomplete="off" data-bv-field="loginpwd" />
                                                    <i className="form-control-feedback" data-bv-icon-for="loginpwd"
                                                        style={{ "display": "none" }}></i>
                                                    <small className="help-block" data-bv-validator="stringLength"
                                                        data-bv-for="loginpwd" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請輸入符合長度限制的值</small>
                                                    <small className="help-block" data-bv-validator="regexp"
                                                        data-bv-for="loginpwd" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請輸入英數(半形字母)</small>
                                                    <small className="help-block" data-bv-validator="notEmpty"
                                                        data-bv-for="loginpwd" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請填寫必填欄位</small>
                                                </div>
                                            </div>

                                            <div className="form-group has-feedback">
                                                <label for="password-confirm"
                                                    className="col-md-4 control-label">*確認密碼</label>
                                                <div className="col-md-8">
                                                    <input id="password-confirm" type="password"
                                                        className="form-control" name="password_confirmation"
                                                        required="" maxlength="24" autocomplete="off"
                                                        data-bv-field="password_confirmation" />
                                                    <i className="form-control-feedback" data-bv-icon-for="password_confirmation"
                                                        style={{ "display": "none" }}></i>
                                                    <small className="help-block" data-bv-validator="identical"
                                                        data-bv-for="password_confirmation" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請輸入相同的值</small>
                                                    <small className="help-block" data-bv-validator="notEmpty"
                                                        data-bv-for="password_confirmation" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請填寫必填欄位</small>
                                                    <small className="help-block" data-bv-validator="stringLength"
                                                        data-bv-for="password_confirmation" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請輸入符合長度限制的值</small></div>
                                            </div>
                                        </fieldset>

                                        <fieldset>
                                            <legend>聯絡資訊</legend>
                                            <div className="form-group has-feedback">
                                                <label for="name" className="col-md-4 control-label">*姓名</label>

                                                <div className="col-md-8">
                                                    <input id="name" type="text" className="form-control"
                                                        name="name" required="" maxlength="24"
                                                        data-bv-field="name" />
                                                    <i className="form-control-feedback" data-bv-icon-for="name"
                                                        style={{ "display": "none" }}></i>
                                                    <small className="help-block" data-bv-validator="stringLength"
                                                        data-bv-for="name" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請輸入符合長度限制的值</small>
                                                    <small className="help-block" data-bv-validator="notEmpty"
                                                        data-bv-for="name" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請填寫必填欄位</small>
                                                </div>
                                            </div>

                                            <div className="form-group has-feedback">
                                                <label for="nickname" className="col-md-4 control-label">*暱稱</label>

                                                <div className="col-md-8">
                                                    <input id="nickname" type="text" className="form-control"
                                                        name="nickname" required="" maxlength="24"
                                                        data-bv-field="nickname" />
                                                    <i className="form-control-feedback" data-bv-icon-for="nickname"
                                                        style={{ "display": "none" }}></i>
                                                    <small className="help-block" data-bv-validator="stringLength"
                                                        data-bv-for="nickname" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請輸入符合長度限制的值</small>
                                                    <small className="help-block" data-bv-validator="notEmpty"
                                                        data-bv-for="nickname" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請填寫必填欄位</small>
                                                </div>
                                            </div>


                                            <div className="form-group has-feedback">
                                                <label for="telephone" className="col-md-4 control-label">*手機號碼</label>

                                                <div className="col-md-8">
                                                    <input id="telephone" type="tel"
                                                        className="form-control" name="phone" required=""
                                                        maxlength="20" data-bv-field="phone" />
                                                    <i className="form-control-feedback" data-bv-icon-for="phone"
                                                        style={{ "display": "none" }}></i>
                                                    <small className="help-block" data-bv-validator="stringLength"
                                                        data-bv-for="phone" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請輸入符合長度限制的值</small>
                                                    <small className="help-block" data-bv-validator="regexp"
                                                        data-bv-for="phone" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請輸入符合正規表示式所限制的值</small>
                                                    <small className="help-block" data-bv-validator="notEmpty"
                                                        data-bv-for="phone" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請填寫必填欄位</small></div>
                                            </div>

                                            <div className="form-group has-feedback">
                                                <label for="email" className="col-md-4 control-label">E-mail</label>

                                                <div className="col-md-8">
                                                    <input id="email" type="text" className="form-control"
                                                        name="email" placeholder="忘記密碼需要"
                                                        maxlength="100" data-bv-field="email" />
                                                    <i className="form-control-feedback" data-bv-icon-for="email"
                                                        style={{ "display": "none" }}></i>
                                                    <small className="help-block" data-bv-validator="regexp"
                                                        data-bv-for="email" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>请输入有效的邮件地址</small>
                                                    <small className="help-block" data-bv-validator="stringLength"
                                                        data-bv-for="email" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請輸入符合長度限制的值</small >
                                                </div>
                                            </div>

                                            <div className="form-group has-feedback">
                                                <label for="qq" className="col-md-4 control-label">*Line</label>

                                                <div className="col-md-8">
                                                    <input id="qq" type="text" className="form-control"
                                                        name="qq" maxlength="100" required="required"
                                                        data-bv-field="qq" />
                                                    <i className="form-control-feedback"
                                                        data-bv-icon-for="qq" style={{ "display": "none" }}></i>
                                                    <small className="help-block" data-bv-validator="notEmpty"
                                                        data-bv-for="qq" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請填寫必填欄位</small>
                                                    <small className="help-block" data-bv-validator="stringLength"
                                                        data-bv-for="qq" data-bv-result="NOT_VALIDATED"
                                                        style={{ "display": "none" }}>請輸入符合長度限制的值</small>
                                                </div>
                                            </div>
                                        </fieldset>


                                        <fieldset>
                                        </fieldset>

                                        <div className="form-group">
                                            <div id="bottomGroup" className="col-md-8 col-md-offset-4">
                                                <div className="output"></div>
                                                <button type="submit" className="btn btn-primary">註冊</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default RegisterBox;