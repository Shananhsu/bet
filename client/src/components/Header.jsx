import React, { Component, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from "react-router-dom";
import Logo from './Logo';
import Mainnav from './Mainnav';
import Axios from "axios";
// import LoginLayOut from "../LoginLayOut"
import LoginForm from "./LoginForm"
import MemberState from "./MemberState"


// 可以直接用函數返回
// NAVBAR
// class Header extends Component {
//     render() {
const Header = props => {
    // const { register, handleSubmit, formState: { errors } } = useForm();

    const [account, setAccount,] = useState("");
    const [balance, setBalance,] = useState("");
    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            console.log(response.data.user)
            if (response.data.loggedIn == true) {
                setAccount(response.data.user[0].account);
                setBalance(response.data.user[0].balance);
            }
        });
    }, []);

    return (
        <React.Fragment>
            <div className="header">
                <div className="wraper">
                    <Logo />
                    <Mainnav />
                </div>


                {account ? (<MemberState account={account} balance={balance} props={props} />)
                    : (< LoginForm />)}
                {/* <MemberState account={"1234"} balance={9999999} props={props} /> */}


            </div>
        </React.Fragment >

    )
}
// }

export default withRouter(Header);