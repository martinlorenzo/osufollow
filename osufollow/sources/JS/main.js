var loginInfo = null;
 
function checkLoginInfo(){
$(document).ready(function(){
    if (loginInfo != null){
        $("#signin").hide();
        $("#login").hide();

    } else {
        $("#profile").hide();
        $("#logout").hide(); 
    }
});
}

function signUp(){

    

}
