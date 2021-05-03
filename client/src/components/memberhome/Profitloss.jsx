import React, { Component } from 'react';
class Profitloss extends Component {

    // $(function(){
    //     var start = '#sf-membercenter-profitloss-00002 #start';
    //     var end = '#sf-membercenter-profitloss-00002 #end';

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

    // $(document).ready(function(e) {
    //     /*submit btn disable when post*/
    //     $('#sf-membercenter-profitloss-00002 form').submit(function(e){
    //         $(this).find("button[type='submit']").attr('disabled', 'disabled').append('&nbsp;&nbsp<img src="/images/ajax-loader.gif" />');
    //     });
    // });

    render() {
        return (
           
                <div id="sf-membercenter-profitloss-00002" style={{"display":"none"}}>
                    <form id="gameprofitlossForm" class="form-horizontal" action="/profitloss" method="get">
                        <div class="panel panel-primary">
                            <div class="panel-heading">遊戲盈虧</div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <label for="reporttype" class="col-md-2 control-label">報表:</label>
                                    <div class="col-md-10">
                                        <select id="reporttype" class="form-control input-sm" name="reporttype" required="">
                                            <option selected="selected" disabled="disabled">報表</option>
                                            <option value="member">會員</option>
                                            <option value="game">遊戲</option>
                                            <option value="category">分類</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="category" class="col-md-2 control-label">遊戲:</label>
                                    <div class="col-md-10">
                                        <select id="category" class="form-control input-sm" name="category" required="">
                                            <option selected="selected" disabled="disabled">遊戲</option>
                                            <option value="all">全部</option>
                                            <option value="sport">運動</option>
                                            <option value="elect">電子</option>
                                            <option value="live">視訊</option>
                                            <option value="lottery">彩票</option>
                                            <option value="av">AV類型</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="start" class="col-md-2 control-label">開始:</label>
                                    <div class="col-md-10"><input type="text" id="start" class="form-control input-sm hasDatepicker" name="startdate" value="" autocomplete="off" /></div>
                                </div>

                                <div class="form-group">
                                    <label for="start" class="col-md-2 control-label">結束:</label>
                                    <div class="col-md-10"><input type="text" id="end" class="form-control input-sm hasDatepicker" name="enddate" value="" autocomplete="off" /></div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-12"><button type="submit" class="submit btn btn-danger">送出</button></div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
      
        )
    }
}
export default Profitloss;