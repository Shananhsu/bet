import React, { Component } from 'react';
import $ from 'jquery';
class Querybetlog extends Component {

   handleDate(){
    $(function(){
    	var start = '#sf-membercenter-querybetlog-00002 #start';
    	var end = '#sf-membercenter-querybetlog-00002 #end';

    	$(start + ',' + end).datepicker({
            dateFormat: "yy-mm-dd",
    		maxDate: 0,
    		onSelect: function () {
    			var s = $(start).datepicker( "getDate" );
    			var e = $(end).datepicker( "getDate" );
    			if ( s > e ) { $(end).datepicker( "setDate", s ); }
    		}
        });

    	//bbin
    	if ( $('#gamenumber').find("option:selected").text() == 'BBIN' ) {
    		$('#category').prop('disabled', false);
    	}

    	$('#gamenumber').change(function(){
    		var val = $(this).find("option:selected").text();

    		$('#category').prop('selectedIndex',0);

    		if ( val == 'BBIN' ) {
    			$('#category').prop('disabled', false);
    			$('#category').attr("required", true);
    		} else {
    			$('#category').prop('disabled', true);
    			$('#category').attr("required", false);
    		}
    	});
    });

    $(document).ready(function(e) {
    	/*some log has sub content, user can click to show (css:resultAndBetdetailShow & resultAndBetdetail)*/
    	$('#sf-membercenter-querybetlog-00002 .resultAndBetdetailShow').click(function(){
    		$(this).hide();
    		$(this).next('#sf-membercenter-querybetlog-00002 .resultAndBetdetail').show();
    	});

        /*submit btn disable when post*/
    	$('#sf-membercenter-querybetlog-00002 form').submit(function(e){
    		$(this).find("button[type='submit']").attr('disabled', 'disabled').append('&nbsp;&nbsp<img src="/images/ajax-loader.gif" />');
    	});
    });
   }


    render() {
        return (
     
                <div id="sf-membercenter-querybetlog-00002" style={{"display":"none"}}>
                    <form id="querybetlogForm" class="form-horizontal" action="/querybetlog" method="get">
                        <input type="hidden" name="_token" value="EY7AxzrP97e9xaYDiy0ssw59WhrIi8kS6UvIlxxv" />
                        <div class="panel panel-primary">
                            <div class="panel-heading">投注資料</div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <label htmlFor="game" class="col-md-2 control-label">遊戲</label>
                                    <div class="col-md-10">
                                        <select id="gamenumber" class="form-control input-sm" name="gamenumber" required="">
                                            <option selected="" disabled="" value="">遊戲</option>
                                            <option value="14638">Super</option>
                                            <option value="">歐博</option>
                                            <option value="">沙龍</option>
                                            <option value="">AMEBA</option>
                                            <option value="">DG</option>
                                            <option value="">36588六合彩</option>
                                            <option value="">OG</option>
                                            <option value="">WM</option>
                                            <option value="">LJ Lottery</option>
                                            <option value="">QT</option>
                                            <option value="">VG</option>
                                            <option value="">體球王</option>
                                            <option value="">必贏</option>
                                            <option value="15605">AFB</option>
                                            <option value="">RTG</option>
                                            <option value="">GsAviaEsport</option>
                                            <option value="">S128越南鬥雞</option>
                                            <option value="">GsYeeBet</option>
                                            <option value="">Gsmilelect</option>
                                            <option value="">GsDg</option>
                                            <option value="">GsBetSoft</option>
                                            <option value="">Vsl越南彩票</option>
                                            <option value="15606">GsMgChess</option>
                                            <option value="">GsOg</option>
                                            <option value="">非同凡響</option>
                                            <option value="">GsAllBet</option>
                                            <option value="">AiGaming</option>
                                            <option value="">GsQt</option>
                                            <option value="">OBG Live</option>
                                            <option value="">OBG 電子</option>
                                            <option value="">億博</option>
                                            <option value="">OG+</option>
                                            <option value="">OBG 彩票</option>
                                            <option value="">OBG 捕魚</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="game" class="col-md-2 control-label">類型:</label>
                                    <div class="col-md-10">
                                        <select id="category" class="form-control input-sm" name="category" required="" disabled="disabled">
                                            <option selected="" disabled="" value="">類型</option>
                                            <option value="sport">運動</option>
                                            <option value="live">視訊</option>
                                            <option value="elect">電子/3D/捕魚</option>
                                            <option value="lottery">彩票</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="start" class="col-md-2 control-label">開始</label>
                                    <div class="col-md-10">
                                        <input  type="date" id="start" class="form-control input-sm" name="startdate"  required="" autocomplete="off" />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="end" class="col-md-2 control-label">結束</label>
                                    <div class="col-md-10">
                                        <input type="date" id="end" class="form-control input-sm" name="enddate" value="" required="" autocomplete="off" />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-3 col-md-offset-9"><button type="submit" class="submit btn btn-danger">送出</button></div>
                                </div>
                            </div>
                        </div>

                        <input type="hidden" name="page" value="1" />
                    </form>

                </div>
       
        )
    }
}
export default Querybetlog;