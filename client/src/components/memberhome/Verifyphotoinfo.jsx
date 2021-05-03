import React, { Component } from 'react';

class Verifyphotoinfo extends Component {
    render() {
        return (
    
                <div id="sf-membercenter-verifyphotoinfo-00002" style={{"display":"none"}}>
                    <div className="panel">
                        <div className="panel-heading">驗證照上傳</div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="form-group">
                                    <label for="" className="col-md-3 control-label">銀行存摺封面照</label>
                                    <div className="col-md-9">
                                        <form className="trademoneyForm form-horizontal" action="/verifyphoto"
                                            method="post" enctype="multipart/form-data">
                                            <input type="hidden" name="_token"
                                                value="WkJ2in66vOezWluMU8zrnQFwcuEJpATrCISsI6hy" />

                                            <input className="input-sm form-control-file" type="file"
                                                name="bankaccphoto" accept="image/jpg,image/jpeg,image/png" />
                                            <button type="submit"
                                                className="submit btn btn-xs btn-primary">送出</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-primary info">
                            <div className="panel-heading">
                                <i className="glyphicon glyphicon-info-sign"></i> 注意事項
                                                </div>
                            <div className="panel-body">
                                <ul>
                                    <li>1.銀行驗證照片:請上傳銀行存摺照片</li>
                                    <li>以上流程僅限第一次出款需要提供，之後出款則不需要</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
         
        )
    }
}
export default Verifyphotoinfo;