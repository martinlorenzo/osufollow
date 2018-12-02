var loginInfo = null;
 $(document).ready(function(){
    if (loginInfo != null){
        $("#signin").hide();
        $("#login").hide();

    } else {
        $("#profile").hide();
        $("#logout").hide(); 
    }
});
