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
    
    // const [account, setAccount,] = useState("");
    // const [balance, setBalance,] = useState("");
    const [memberData , setMemberData]= useState({
        memberid : "",
        account : "",
        password : "",
        name : "",
        address : "",
        phone : "",
        email : "",
        risk_level : "",
        register_time : "",
        identifyID : "",
        bonus : "",
        balance : ""
    })
    Axios.defaults.withCredentials = true;
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            // console.log("header get :")
            // console.log(response.data.user)
            // console.log("///////////////")
            if (response.data.loggedIn == true) {
                    // setAccount(response.data.user[0].account);
                    // setBalance(response.data.user[0].balance);
                    // setUserData = response.data.user[0]
                    setMemberData((prevState => ({...prevState,
                        memberid : response.data.user[0].memberid,
                        account : response.data.user[0].account,
                        password : response.data.user[0].password,
                        name : response.data.user[0].name,
                        address : response.data.user[0].address,
                        phone : response.data.user[0].phone,
                        email : response.data.user[0].email,
                        risk_level : response.data.user[0].risk_level,
                        register_time : response.data.user[0].register_time,
                        identifyID : response.data.user[0].identifyID,
                        bonus : response.data.user[0].bonus,
                        balance : response.data.user[0].balance
                    })))
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
                {/* {console.log("////headerdata/////")}
                {console.log(memberData)} */}
                {memberData.memberid ? (<MemberState memberData = {memberData} />)
                    : (< LoginForm />)}
                {/* <MemberState account={"1234"} balance={9999999} props={props} /> */}


            </div>
        </React.Fragment >

    )
}
// }

export default withRouter(Header);