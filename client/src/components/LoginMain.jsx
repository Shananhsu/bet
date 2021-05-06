import React, { Component, useEffect, useState } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Axios from "axios";
// npm install --save sweetalert2 sweetalert2-react-content
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';




// Hook
export default function LoginMain(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginStatus, setLoginStatus] = useState("");
    Axios.defaults.withCredentials = true;


    const MySwal = withReactContent(Swal)

    const history = useHistory();

    function handleLoginPass() {
        
        history.push("/");
    }

    const onSubmit = async (data) => {
        // 獲取帳號密碼
        console.log(data);
        await Axios.post('http://localhost:3001/api/login',
            {
                "account": data.account,
                "password": data.password,
            }).then((res) => {
                if (res.data.message === undefined) {
                    // console.log("前台 RES :")
                    // console.log(res)
                    // console.log("///////")
                    // console.log("res.data :"+res.data)
                    // 讀取token並且存起來
                    // const jwToken = res.data;
                    // console.log(`---jwToken : ${jwToken}`)
                    // global.auth.setToken(jwToken)
                    // .....
                    alert("登入成功")
                    handleLoginPass()
                }
                else {
                    // alert(res.data.message)
                    MySwal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: res.data.message,
                        footer: '<a href>forgot password?</a>'
                    })

                }
            })
    }
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            // console.log(response)
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].username);
            }
        });
    }, []);



    return (
       
        // <section className="hero is-success is-fullheight">
        <section className=" is-success is-fullheight" style = {{"backgroundColor":"honeydew"}}>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-4 is-offset-4">
                        <h3 className="title has-text-black">登入會員</h3>
                        <hr className="login-hr" />
                        <p className="subtitle has-text-black">請輸入登入資訊</p>
                        <div className="box">
                            <figure className="avatar">
                                <img src="images/logo/logo.png" />
                            </figure>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="field">
                                    <div class="control">
                                        <input className="input is-large" type="Account"
                                            placeholder="Your Account" autoFocus=""
                                            // ref={register} />
                                            name="account"
                                            {...register('account', { required: true })} />
                                        {
                                            errors.account && <p className="helper has-text-danger">
                                                account is require
                                                </p>

                                        }
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                        <input className="input is-large" type="password"
                                            placeholder="Your Password"
                                            // ref={register} />
                                            name="password"
                                            {...register('password', { required: true, minLength: 6 })} />
                                        {
                                            errors.password && <p className="helper has-text-danger">
                                                password is require 6 words at least
                                                </p>

                                        }
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="checkbox">
                                        <input type="checkbox" />
                                                Remember me
                                </label>
                                </div>
                                <button className="button is-block is-info is-large is-fullwidth">
                                    Login <i className="fa fa-sign-in" aria-hidden="true">
                                    </i>
                                </button>
                            </form>
                        </div>
                        <p className="has-text-grey">
                            <a href="../">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;&nbsp;
            {/* <a href="../">Need Help?</a> */}
                        </p>
                    </div>
                </div>
            </div>
         </section>
     
    )

}


    // class LoginMain extends Component {
    //     state = {
    //         "account": '',
    //         "password": ''
    //     }
    //     memrDataInput = e => {
    //         // console.log(e.target.value)
    //         this.setState({
    //             [e.target.name]: e.target.value
    //         })

    //     }
    //     // 監聽帳號密碼輸入
    //     // accountRef = React.createRef();
    //     // passwordRef = React.createRef();

    //     loginClick = (e) => {

    //         // form會有默認提交行為,不阻止會重整頁面
    //         e.preventDefault();

    //         // 獲取帳號密碼
    //         // 法1
    //         // let memberFormData = {
    //         //     "account" : this.accountRef.current.value,
    //         //     "password" : this.passwordRef.current.value
    //         // }
    //         // console.log(memberFormData)
    //         console.log(this.state)

    //         // 點擊登入後跳到首頁 , 會找不到history要用withRouter
    //         // console.log(this.props.history);
    //         // this.props.history.push('/')
    //     }

    //     render() {
    //         return (
    //             <React.Fragment>
    //                 <section className="hero is-success is-fullheight">
    //                     <div className="hero-body">
    //                         <div className="container has-text-centered">
    //                             <div className="column is-4 is-offset-4">
    //                                 <h3 className="title has-text-black">Login</h3>
    //                                 <hr className="login-hr" />
    //                                 <p className="subtitle has-text-black">Please login to proceed.</p>
    //                                 <div className="box">
    //                                     <figure className="avatar">
    //                                         <img src="images/logo/logo.png" />
    //                                     </figure>
    //                                     <form onSubmit={this.loginClick}>
    //                                         <div className="field">
    //                                             <div class="control">
    //                                                 <input className="input is-large" type="Account"
    //                                                     placeholder="Your Account" autoFocus=""
    //                                                     // 法1
    //                                                     // ref = {this.accountRef} />
    //                                                     name="account"
    //                                                     value={this.state.account}
    //                                                     onChange={this.memrDataInput} />
    //                                             </div>
    //                                         </div>

    //                                         <div className="field">
    //                                             <div className="control">
    //                                                 <input className="input is-large" type="password"
    //                                                     placeholder="Your Password"
    //                                                     // 法1
    //                                                     // ref = {this.passwordRef}/>
    //                                                     name="password"
    //                                                     value={this.state.password}
    //                                                     onChange={this.memrDataInput} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="field">
    //                                             <label className="checkbox">
    //                                                 <input type="checkbox" />
    //                                                         Remember me
    //                                         </label>
    //                                         </div>
    //                                         <button className="button is-block is-info is-large is-fullwidth">
    //                                             Login <i className="fa fa-sign-in" aria-hidden="true">
    //                                             </i>
    //                                         </button>
    //                                     </form>
    //                                 </div>
    //                                 <p className="has-text-grey">
    //                                     <a href="../">Sign Up</a> &nbsp;·&nbsp;
    //                     <a href="../">Forgot Password</a> &nbsp;·&nbsp;
    //                     <a href="../">Need Help?</a>
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </section>

    //             </React.Fragment >
    //         );
    //     }
    // }

    // export default withRouter(LoginMain);