$(document).ready(function(){
    let i = 0;
    $('#sub_nav_btn').click(function(){
        i++;
        if(i%2 == 1){
            $('#sub_nav_bg').css({"display":"block"});
            $('#sub_nav').css({"display":"block"});
        }else if(i%2 == 0){
            $('#sub_nav_bg').css({"display":"none"});
            $('#sub_nav').css({"display":"none"});
        }
    })
})