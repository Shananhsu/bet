/*
The MIT License (MIT)

 * Copyright (c) 2015 Benjamin Wong benjamin-w@hotmail.com
 * https://github.com/yben56/islider

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function($){
	$.fn.islider = function(options){	
		//Settings
		var settings = $.extend({
			speed: 5000,
			jumper: 'off',
			jumper_y: -15
		}, options);
		
		
		//Variable
		var islider = $(this),
			num 	= $(this).children('.slide').length, 
			n 		= 1,
			interval;
			
		
		//Jumper Switch(Use on slideShow(); Forward+Backward button && Jumper Click)
		var jswitch = function(i, method){
			if(method == "-"){
				$(islider).children('.isliderJumper').children('div').removeClass('jumperOn');
				$(islider).children('.isliderJumper').children('div:nth-child(' +  (i - 1) +')').addClass('jumperOn');
			}else{
				$(islider).children('.isliderJumper').children('div').removeClass('jumperOn');
				$(islider).children('.isliderJumper').children('div:nth-child(' +  i +')').addClass('jumperOn');
			}
		}


		//add buttons
		if ( num > 1 ) {
			//Add L+R button
			$(islider).append("<div class='islider_fb islider_left'><div></div></div><div class='islider_fb islider_right'><div></div></div>");
			
			if ("ontouchstart" in document.documentElement){$('.islider_fb').show();}
			
			//Add Jumper
			if(settings.jumper == 'on'){
				$(islider).append("<div class='isliderJumper'></div>");
				while(n <= num){
					if(n == 1){$(islider).children('.isliderJumper').append('<div class="jumperOn"></div>');}
					else{$(islider).children('.isliderJumper').append('<div></div>');}
					n++;
				}
				n = 1;//reset 'n' for slidShow
			}
		}
		

		//Slide show
		var slideShow = function(){	
			interval = setInterval(function(){
				if(n > num){n = 1;}
				$(islider).children('.slide').fadeOut();
				$(islider).children('.slide:nth-child(' + n + ')').fadeIn();
				//JumperActive
				if(settings.jumper == 'on'){
					jswitch(n, '+');
				}
				n++;
			}, settings.speed);
		}
		
		n++;
		slideShow();
	
	
		//Forward+Backward
		$(islider).children('.islider_fb').click(function(){
			$(islider).children('.slide').fadeOut();
			
			if($(this).hasClass('islider_left')){
				//Backward
				n--;
				if(n == 1){n = num + 1;}
				$(islider).children('.slide:nth-child(' + (n - 1) + ')').fadeIn();
				jswitch(n, '-');
				
				clearInterval(interval);
				slideShow();
			}else{
				//Forward
				if(n > num){n = 1;}
				$(islider).children('.slide:nth-child(' + n + ')').fadeIn();
				jswitch(n, '+');
				
				clearInterval(interval);
				slideShow();
				n++;
			}
		});

	
		//Jumper Click
		if(settings.jumper == 'on'){		
			var ijumper = $(islider).children('.isliderJumper').children('div');	
			ijumper.click(function(){
				var sIndex = ijumper.index(this);
				$(islider).children('.slide').fadeOut();
				$(islider).children('.slide:nth-child(' + (sIndex + 1) + ')').fadeIn();
				n = sIndex + 1;
				
				clearInterval(interval);
				n++;
				slideShow();
				jswitch(sIndex + 1, '+');
			});
		}
		
		
		
		//RWD
		var img = $(this).find('.slide img')[0];
		$(this).append(img);
		
	};
}(jQuery));