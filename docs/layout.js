function is_login_account(service){
	if(service == 'twitter'){
		if($.cookie('twitter_access_token') && $.cookie('twitter_screen_name')){
			return true;
		}
		return false;
	}
	
	if(service == 'facebook'){
		if($.cookie('facebook_access_token') && $.cookie('facebook_screen_name')){
			return true;
		}
		return false;
	}
	
	if(service == 'tumblr'){
		if($.cookie('tumblr_access_token') && $.cookie('tumblr_screen_name')){
			return true;
		}
		return false;
	}
	
	return false;
}

function is_login(){
	if(is_login_account('twitter') || is_login_account('facebook') || is_login_account('tumblr')){
		return true;
	}
	return false;
}

function init_layout(){
	if(is_login_account('twitter')){
    	$('.login-account.login-twitter').css("display","");
       	$('.area-btn.twitter').css("display","none");
       	$('.text-twitter').html("Twitter: @"+$.cookie('twitter_screen_name'));
    }else{
        $('.login-account.login-twitter').css("display","none");
        $('.area-btn.twitter').css("display","");
   	}
        
    if(is_login_account('facebook')){
        $('.login-account.login-facebook').css("display","");
        $('.area-btn.facebook').css("display","none");
        $('.text-facebook').html("Facebook: "+$.cookie('facebook_screen_name'));
    }else{
        $('.login-account.login-facebook').css("display","none");
        $('.area-btn.facebook').css("display","");
    }
        
    if(is_login_account('tumblr')){
        $('.login-account.login-tumblr').css("display","");
        $('.area-btn.tumblr').css("display","none");
        $('.text-tumblr').html("Tumblr: "+$.cookie('tumblr_screen_name'));
    }else{
        $('.login-account.login-tumblr').css("display","none");
        $('.area-btn.tumblr').css("display","");
    }
    
    post_button_text();
}

function post_button_text(){
	var button_text ="";
	
	var messages = {
		'TW'    :'Twitter?',
		'FB'    :'Facebook?',
		'TB'    :'Tumblr?',
		'TWFB'  :'Twitter/Facebook?',
		'TWTB'  :'Twitter/Tumblr?',
		'FBTB'  :'Facebook/Tumblr?',
		'TWFBTB':'Twitter/Facebook/Tumblr?'
	};
	
	if(is_login_account('twitter')){
		button_text += 'TW';
	}
	
	if(is_login_account('facebook')){
		button_text += 'FB';
	}
	
	if(is_login_account('tumblr')){
		button_text += 'TB';
	}
	
	button_text = (button_text.length > 0) ? messages[button_text] : '';
	
	if(button_text.length == 0){
		$('.area-submit').find('.btn-submit').attr("disabled", "disabled");
		$('.area-upload').css("display","none");
		$('.area-submit').css("display","none");
		$('.site-desc').css("display","block");
	}else{
		$('.area-submit').find('.sns-name').append(button_text);
		$('.area-upload').css("display","block");
		$('.area-submit').css("display","block");
		$('.site-desc').css("display","none");
	}
}
function set_share_buttons(){
    var share_url  = encodeURIComponent('https://i.nintendo.net/');
    var share_text = encodeURIComponent(document.title);
    var twitter_button  = '<a href="https://twitter.com/share?url='                 + share_url + '&text=' + share_text + '" class="twitter-share-button" target="_blank"><img src="img/tweet.png"  alt="Tweet"/></a>';
    var facebook_button = '<a href="http://www.facebook.com/plugins/like.php?href=' + share_url + '&send=false&layout=standard&show_faces=false&font&colorscheme=light&action=like&height=35&appId=294416857326059" target="_blank"><img src="img/btn_like.png"  alt="share"/></a>';
    var tumblr_button   = '<a href="http://www.tumblr.com/share/link?url='          + share_url + '&name=' + share_text + '&title=Share on Tumblr" style="display:inline-block; text-indent:-9999px; overflow:hidden; width:100%; height:100%; margin-left:10px; background:url(\'img/tumblr-share.png\') top left no-repeat transparent;">Share on Tumblr</a><script src="js/tumblr-share.js"></script>';
    
    $('.page-footer').find('.share-button').append('<div class="box" id="twitter">'+twitter_button+'</div>');    $('.page-footer').find('.share-button').append('<div class="box" id="facebook">'+facebook_button+'</div>');    }

function check_image_selected(){
	var file_path = $(".upload-file").val();
	if(!file_path){
		var alert_message = $(".messages #file_not_selected").text();
		alert(alert_message);
		return false;
	}else{
        disableSubmit(this);/* サブミットボタンを無効にする(連打対応) */
		return true;
	}
}

var n = new Date();
var a = Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 0, 0, 0);
var b = Date.UTC(2020,9-1,15,0,0,0);
if (Math.abs(a-b) / (1000*60*60*24) > 180){
	location.href='commonError?message_type=11';
}