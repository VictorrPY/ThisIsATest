function auto_scroll(scroll_width){
    var ua = navigator.userAgent;
    ua = navigator.userAgent;
    if (ua.indexOf("3DS", 0) >= 0) {
        window.scroll(0, scroll_width);
    }
}

/* サブミットボタンを無効にする(連打対応) */
function disableSubmit(window) {
    var forms = window.document.forms;
    for (var formIdx = 0; formIdx < forms.length; formIdx++) {
        var elements = forms[formIdx].elements;
        for (var i = 0; i < elements.length; i++) {
         elements[i].blur();
         if (elements[i].type == 'submit' || elements[i].type == 'button') {
              elements[i].disabled = true;
         } else if (elements[i].type == 'text') {
              //elements[i].readOnly = true;
              elements[i].disabled = true;

              // コメント内容を同名のhidden要素を作ってPOST
              var sub   = window.document.createElement('input');
              sub.type  = 'hidden';
              sub.name  = elements[i].name;
              sub.value = elements[i].value;

              var ex_form = window.document.getElementsByClassName('input-area');
              ex_form[0].appendChild(sub);

         }
         
        }
    }
}
