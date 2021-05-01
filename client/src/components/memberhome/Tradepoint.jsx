import React, { Component } from 'react';
class Tradepoint extends Component {

    // $(function(){
    //     var start = '#sf-membercenter-tradepoint-00002 #start';
    //     var end = '#sf-membercenter-tradepoint-00002 #end';

    //     $(start + ',' + end).datepicker({
    //         dateFormat: "yy-mm-dd",
    //         maxDate: 0,
    //         onSelect: function () {
    //             var s = $(start).datepicker( "getDate" );
    //             var e = $(end).datepicker( "getDate" );
    //             if ( s > e ) { $(end).datepicker( "setDate", s ); }
    //         }
    //     });
    // });

    render() {
        return (
            <div class="col-sm-10 membercontent">



                <div id="sf-membercenter-tradepoint-00002">
                    <form class="tradepointForm form-horizontal" action="/tradepoint" method="get">
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
            </div>
        )
    }
}
export default Tradepoint;