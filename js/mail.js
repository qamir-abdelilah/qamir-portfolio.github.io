function sendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    if(params.from_name != "" && params.email_id != "" && params.message != "") 
        emailjs.send("service_ar0u6y4","template_cdojflv", params).then(function(res){
            alert("Success!" + res.status);
        });
    else {
        alert("Fill all the fields !");
    }
}