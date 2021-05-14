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
            <div id="sf-membercenter-withdraw-00002" style={{ "display": "none" }} >
                <div id="sf-membercenter-trademoney-withdraw-00002">
                    <form id="purchase" class="trademoneyForm form-horizontal" role="form" action="/trademoney/withdraw" method="post">
                        <input type="hidden" name="_token" value="YS0hnN94HgkO13whwOYaBSQOmjjRkUdvfqiyfOkT" />
                        <div class="panel panel-primary">
                            <div class="panel-body">                              

                                <div class="form-group">
                                    <label for="point" class="col-md-2 control-label">提款金額 : </label>
                                    <div class="col-md-10">
                                        <input
                                            type="number" id="point" class="form-control input-SM hasDatepicker"
                                            name="point" placeholder="請輸入金額"
                                        />
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


            </div>
        )
    }
}
export default Withdraw;