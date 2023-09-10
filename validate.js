function validate() {
    let name = document.forms["frm"]["name"].value;
    let email = document.forms["frm"]["email"].value;
    let phone = document.forms["frm"]["phone"].value;
    if(!name || !email || !phone){
        window.alert("please fill in all the fields");
        return false;
    }
    else
       return window.alert("Thank You!");
}