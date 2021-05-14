import React, { Component } from 'react';
import './accountSettingCss.css'

const AccountSetting = (props) => {

    return (
        <div id="sf-membercenter-memberinfo-00002" style={{ "display": "none" }}>
            {console.log(props)}
            {/* <div className="container"> */}
            <h3 className="title" style={{ "fontSize": "32px" }}>修改會員資料</h3>

            <form id="AccountSettingForm" action="">
                <div>
                    <p className="SAsubTitle">基本資料</p>
                    <hr className="SAhr" />

                    <div className="SAinputBlock">
                        <label className="SAlabel" htmlFor="firstName">姓名 :  </label>
                        {props.memberData.name}
                        {/* <input className="SAinput" type="text"  name="firstName"   /> */}
                    </div>

                    <div className="SAinputBlock">
                        <label className="SAlabel" htmlFor="phone">電話 :</label>
                        {props.memberData.phone}
                    </div>

                    <div className="SAinputBlock">
                        <label className="SAlabel" htmlFor="address">住址 : </label>
                        {props.memberData.address}
                    </div>

                </div>

                <div>
                    <p className="SAsubTitle">帳戶資料</p>
                    <hr className="SAhr" />

                    <div className="SAinputBlock">
                        <label className="SAlabel" htmlFor="bankName">銀行名稱 : </label>
                            國泰世華  內湖分行
                        {/* <select name="bankName" id="">
                            <option value="未選擇銀行(0000)">未選擇銀行</option>
                            <option value="一號銀行(0001)">一號銀行(0001)</option>
                            <option value="二號銀行(0002)">二號銀行(0002)</option>
                            <option value="三號銀行(0003)">三號銀行(0003)</option>
                            <option value="四號銀行(0004)">四號銀行(0004)</option>
                            <option value="五號銀行(0005)">五號銀行(0005)</option>
                        </select> */}
                        {/* <input className="SAinput" type="text"
                                        placeholder="銀行名稱" name="bankName"
                                    /> */}

                    </div>

                    <div className="SAinputBlock">
                        <label className="SAlabel" htmlFor="subBankName">帳號 : </label>     
                                    2685 6666 9876
                    </div>

                    {/* <div className="SAinputBlock">
                        <label className="SAlabel" htmlFor="bankAccountName">銀行戶名 : </label>

                        <input className="SAinput" type="text"
                            placeholder="銀行戶名" name="bankAccountName"
                        />

                    </div>

                    <div className="SAinputBlock">
                        <label className="SAlabel" htmlFor="bankAccount">銀行帳號 : </label>

                        <input className="SAinput" type="text"
                            placeholder="銀行帳號" name="bankAccount"
                        />

                    </div> */}
                </div>

                {/* <div className="field is-grouped">
                    <div className="control">
                        <button className="submitBtn button" type="submit">修改資料</button>
                    </div>
                </div> */}

            </form>
            <p className="SAsubTitle">注意事項</p>
            <hr className="SAhr" />
            <p className="dialog">
                1.會員首次填寫銀行資料將永久綁定，若日後需要更換請聯繫客服處理 <br />
                        2.當日第一筆提款免手續費，次筆之後接酌收2%手續費(實際到帳金額扣除2%)
                        如有必要原因需更改資料，請洽線上客服人員。<br />
            </p>

            {/* <p className="SAsubTitle">修改帳戶密碼</p>
                    <hr className="SAhr" />
                    <form id="changePwForm" action="">

                        <div className="SAinputBlock">
                            <label className="SAlabel" htmlFor="lastName">就密碼 : </label>
                            <input className="SAinput" type="password"
                                placeholder="舊密碼" name="oldPassword"
                            />
                        </div>
                        <div className="SAinputBlock">
                            <label className="SAlabel" htmlFor="lastName">新密碼 : </label>
                            <input className="SAinput" type="password"
                                placeholder="新密碼" name="newPassword"
                            />
                        </div>


                        <div id="memberDataSetSubmitBtn" className="field is-grouped">
                            <div className="control">
                                <button className="submitBtn button " type="submit">修改密碼</button>
                            </div>
                        </div>


                    </form> */}
                   <br />
               
        </div>
        // </div>
        // </div>



    )

}

export default AccountSetting;