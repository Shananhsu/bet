import React from 'react';
import { useForm } from 'react-hook-form';
import Axios from "axios";
// import $ from 'jquery';

const Tradepoint = (props) => {
    Axios.defaults.withCredentials = true;
    const onSubmit = async data => {
        console.log(props)
        await Axios.post('http://localhost:3001/api/deposit',
            {
                "account" : props.account,
                "depositway": data.chooseway,
                "point": data.point,
                "deposittime": new Date
            }).then((res) => {
                alert('申請存款成功')
            })
    };
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div id="sf-membercenter-depositpoint-00002" style={{ "display": "none" }}>
            <form class="tradepointForm form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                <div class="panel panel-primary">
                    <div class="panel-heading">儲值點數</div>
                    <div class="panel-body">
                        <div class="form-group">
                            <label for="chooseway" class="col-md-2 control-label">選擇付款方式</label>
                            <div class="col-md-3" >
                                <input type="checkbox"
                                    class="hasDatepicker"
                                    {...register('chooseway', { required: true })}
                                    name="chooseway" value="atm" />
                                <img src="./images/memberinf/depositchoose/atm.png" alt="atm_no_show" style={{ "width": "80px" }} />
                            </div>
                        </div>
                        {errors.chooseway && <p className="helper has-text-danger" style={{ "textAlign": "center" }}>需選擇存款方式</p>}

                        <div class="form-group">
                            <label for="point" class="col-md-2 control-label">存款金額</label>
                            <div class="col-md-10">
                                <input
                                    type="number" id="point" class="form-control input-lg hasDatepicker"
                                    name="point" placeholder = "請輸入金額"
                                    {...register('point', { required: true })} />
                            </div>
                        </div>
                        {errors.point && <p className="helper has-text-danger"
                            style={{ "textAlign": "center" }}>
                            需輸入存款金額</p>}
                        <div class="form-group">
                            <div class="output col-md-9"></div>
                            <div class="col-md-3"><button type="submit" class="submit btn btn-danger">送出</button></div>
                        </div>
                    </div>
                </div>
            </form>
            

        </div>

    )

}
export default Tradepoint;