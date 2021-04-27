import React, { Component } from 'react';
import { useForm } from 'react-hook-form';
import Axios from "axios";

export default function RegisterForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // 獲取帳號密碼
        console.log(data);
        Axios.post('http://localhost:3001/api/register',
            {
                "account": data.account,
                "address": data.address,
                "email": data.email,
                "username": data.lastName + data.firstName,
                "password": data.password,
                "phone": data.phone
                
            }).then(()=>{
                alert('註冊成功')
            });
    }


    return (


        <div id="app">
            <div className="section">
                <div className="container">
                    {/* <div class="media is-pulled-right">
                        <div class="media-content"><span class="has-text-center">Connect With:</span><br />
                            <div class="field is-grouped">
                                <div class="control">
                                    <div class="g-signin2"></div>
                                </div>
                                <div class="control">
                                    <button class="button githubSignin"><span class="github-icon icon"><i class="fab">github</i></span>
                                        <p>Sign In</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="title label" style={{ "fontSize": "32px" }}>註冊會員</div>
                    {/* <div class="subtitle">With Your Email</div> */}
                    <form id="register-form" onSubmit={handleSubmit(onSubmit)} >
                        <div className="field">
                            <label className="label" htmlFor="account" >帳號</label>
                            <div className="control has-icons-left">
                                <input className="input" type="text"
                                    placeholder="Account" name="account"
                                    {...register('account', { required: true })} />
                                <span className="icon is-left"><i className="fa"></i></span>
                            </div>
                            <label className="label" htmlFor="password">密碼</label>
                            <div className="control has-icons-left">
                                <input className="input" type="password"
                                    placeholder="請輸入6位數以上密碼" name="password"
                                    {...register('password', { required: true, minLength: 6 })} />
                                <span className="icon is-left">
                                    <i className="fa"></i></span>
                            </div>
                            <label className="label" htmlFor="passwordComf">確認密碼</label>
                            <div className="control has-icons-left">
                                <input className="input" type="password"
                                    placeholder="請輸入確認密碼" name="passwordComf"
                                    {...register('passwordComf', { required: true, minLength: 6 })} />
                                <span className="icon is-left">
                                    <i className="fa"></i></span>
                            </div>
                            <label className="label" htmlFor="email">Email</label>
                            <div className="control has-icons-left">
                                <input className="input" type="email"
                                    placeholder="Email" name="email"
                                    {...register('email', { required: true })} />
                                <span className="icon is-left">
                                    <i className="fa"></i></span>
                            </div>
                            <div className="columns row-one">
                                <div className="column">
                                    <label className="label" htmlFor="lastName">姓</label>
                                    <div className="control">
                                        <input className="input" type="text"
                                            placeholder="姓" name="lastName"
                                            {...register('lastName', { required: true })} />
                                    </div>
                                </div>
                                <div className="column">
                                    <label className="label" htmlFor="firstName">名</label>
                                    <div className="control">
                                        <input className="input" type="text"
                                            placeholder="名" name="firstName"
                                            {...register('firstName', { required: true })} />
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <label className="label" htmlFor="password">電話</label>
                                    <div className="control has-icons-left">
                                        <input className="input" type="phone"
                                            placeholder="電話" name="phone"
                                            {...register('phone', { required: true })} />
                                        <span className="icon is-left">
                                            <i className="fa"></i></span>
                                    </div>
                                </div>
                                <div className="column">
                                    <label className="label" htmlFor="address">住址</label>
                                    <div className="control has-icons-left">
                                        <input className="input" type="address"
                                            placeholder="Address" name="address"
                                            {...register('address', { required: true })} />
                                        <span className="icon is-left">
                                            <i className="fa"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="field is-grouped">
                                {/* <div class="control">
                                    <button class="button is-medium">Login</button>
                                </div> */}
                                <div className="control">
                                    <button className="button is-primary is-medium" type="submit">Register</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    )

}