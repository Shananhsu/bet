import React, { Component } from 'react';
import './accountSettingCss.css'

 const AccountSetting = (props) => {

    return (
        <div id="sf-membercenter-memberinfo-00002" style ={{"display":"none"}}>
            {/* <div className="section"> */}
                {/* <div className="container"> */}
                    <h3 className="title" style={{ "fontSize": "32px" }}>修改會員資料</h3>

                    <form id="AccountSettingForm" action="">
                        <div>
                            <p className="SAsubTitle">基本資料</p>
                            <hr className="SAhr" />

                            <div className="SAinputBlock">
                                <label className="SAlabel" htmlFor="lastName">您的姓氏 : </label>

                                <input className="SAinput" type="text"
                                    placeholder="您的姓氏" name="lastName"
                                // {...register('lastName', { required: true })}
                                />

                            </div>
                            <div className="SAinputBlock">
                                <label className="SAlabel" htmlFor="firstName">您的名字 : </label>

                                <input className="SAinput" type="text"
                                    placeholder="您的名字" name="firstName"
                                // {...register('firstName', { required: true })}
                                />
                            </div>

                            <div className="SAinputBlock">
                                <label className="SAlabel" htmlFor="phone">電話 : </label>

                                <input className="SAinput" type="phone"
                                    placeholder="您的聯絡電話" name="phone"
                                // {...register('phone', { required: true })} 
                                />
                            </div>

                            <div className="SAinputBlock">
                                <label className="SAlabel" htmlFor="address">住址 : </label>

                                <input className="SAinput" type="address"
                                    placeholder="您的聯絡地址" name="address"
                                // {...register('address', { required: true })}
                                />
                            </div>

                        </div>

                        <div>
                            <p className="SAsubTitle">帳戶資料</p>
                            <hr className="SAhr" />

                            <div className="SAinputBlock">
                                <label className="SAlabel" htmlFor="bankName">銀行名稱 : </label>

                                <select name="bankName" id="">
                                    <option value="未選擇銀行(0000)">未選擇銀行</option>
                                    <option value="一號銀行(0001)">一號銀行(0001)</option>
                                    <option value="二號銀行(0002)">二號銀行(0002)</option>
                                    <option value="三號銀行(0003)">三號銀行(0003)</option>
                                    <option value="四號銀行(0004)">四號銀行(0004)</option>
                                    <option value="五號銀行(0005)">五號銀行(0005)</option>
                                </select>
                                {/* <input className="SAinput" type="text"
                                        placeholder="銀行名稱" name="bankName"
                                    /> */}

                            </div>

                            <div className="SAinputBlock">
                                <label className="SAlabel" htmlFor="subBankName">銀行分行 : </label>

                                <input className="SAinput" type="text"
                                    placeholder="銀行分行" name="subBankName"
                                />

                            </div>

                            <div className="SAinputBlock">
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

                            </div>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="submitBtn button" type="submit">修改資料</button>
                            </div>
                        </div>

                    </form>
                    {/* <p className="SAsubTitle">新增帳戶注意事項</p>
                    <hr className="SAhr" />
                    <p className="dialog">
                        1.會員首次填寫銀行資料將永久綁定，若日後需要更換請聯繫客服處理 <br />
                        2.當日第一筆提款免手續費，次筆之後接酌收2%手續費(實際到帳金額扣除2%)
                        如有必要原因需更改資料，請洽線上客服人員。<br />
                        3. 如利用本平台進行任何洗錢詐騙行為，本公司有權利審核會員帳戶或永久終止會員服務，不另行通知。<br />
                        4.如利用本平台進行任何洗錢詐騙行為，本公司有權利審核會員帳戶或永久終止會員服務，不另行通知。本公司風險控管部門皆會審核，請勿違反規定</p> */}

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

                </div>
            // </div>
        // </div>



    )

}

export default  AccountSetting;