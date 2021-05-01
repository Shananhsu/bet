import React, { Component } from 'react';
class Withdraw extends Component {

    // $(function(){
    // 	var start = '#sf-membercenter-trademoney-record-00002 #start';
    // 	var end = '#sf-membercenter-trademoney-record-00002 #end';

    // 	$(start + ',' + end).datepicker({
    //         dateFormat: "yy-mm-dd",
    // 		maxDate: 0,
    // 		onSelect: function () {
    // 			var s = $(start).datepicker( "getDate" );
    // 			var e = $(end).datepicker( "getDate" );
    // 			if ( s > e ) { $(end).datepicker( "setDate", s ); }
    // 		}
    //     });
    // });

    // $(document).ready(function(e) {
    //     $('#sf-membercenter-trademoney-withdraw-00002 form').submit(function(e){
    // 		$(this).find("button[type='submit']").attr('disabled', 'disabled').append('&nbsp;&nbsp<img src="/images/ajax-loader.gif" />');
    // 	});
    // });

    render() {
        return (
            <div class="col-sm-10 membercontent" >
                <div id="sf-membercenter-trademoney-withdraw-00002">
                    <form id="purchase" class="trademoneyForm form-horizontal" role="form" action="/trademoney/withdraw" method="post">
                        <input type="hidden" name="_token" value="YS0hnN94HgkO13whwOYaBSQOmjjRkUdvfqiyfOkT" />
                        <div class="panel panel-primary">
                            <div class="panel-heading">線上取款</div>
                            <div class="panel-body">
                                <div class="bank">
                                    <div class="col-md-12">
                                        <p class="missing-data-info">你必須先輸入銀行帳號</p>
                                        <a class="btn-link" href="/memberinfo">編輯銀行帳號</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div id="sf-membercenter-trademoney-record-00002">
                    <form class="trademoneyForm form-horizontal" role="form" action="/trademoney/withdraw" method="get">
                        <div class="panel panel-primary">
                            <div class="panel-heading">記錄查詢</div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <label for="start" class="col-md-2 control-label">開始:</label>
                                    <div class="col-md-10">
                                        <input type="text" id="start" class="form-control input-sm hasDatepicker" name="starttime" value="" autocomplete="off" />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="start" class="col-md-2 control-label">結束:</label>
                                    <div class="col-md-10">
                                        <input type="text" id="end" class="form-control input-sm hasDatepicker" name="endtime" value="" autocomplete="off" />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="output col-md-9"></div>
                                    <div class="col-md-3"><button type="submit" class="submit btn btn-danger">送出</button></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="panel panel-primary info">
                    <div class="panel-heading"><i class="glyphicon glyphicon-info-sign"></i> 注意事項</div>
                    <div class="panel-body">
                        <ul>

                            <li>1.會員首次填寫銀行資料將永久綁定，若日後需要更換請聯繫客服處理</li>
                            <li>2.當日第一筆提款免手續費，次筆之後接酌收2%手續費(實際到帳金額扣除2%)</li>
                            <li>如有必要原因需更改資料，請洽線上客服人員。</li>
                            <li>3. 如利用本平台進行任何洗錢詐騙行為，本公司有權利審核會員帳戶或永久終止會員服務，不另行通知。</li>
                            <li>4.如利用本平台進行任何洗錢詐騙行為，本公司有權利審核會員帳戶或永久終止會員服務，不另行通知。本公司風險控管部門皆會審核，請勿違反規定</li>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Withdraw;