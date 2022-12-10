function formvalidate() {
    var user = document.getElementById("FirstName").value;
    var re = /(^[A-Za-z][A-Za-z0-9_]{2,50}$)/;
    if(user == ""){
        document.getElementById("fname").innerHTML=("There is no input");
        document.getElementById("FirstName").style = "border:solid red";
    }
    else{
        if(re.test(user)){
            document.getElementById("fname").innerHTML=("");
            document.getElementById("FirstName").style = "border:solid green";
        }
        else{
            document.getElementById("fname").innerHTML=("The given input is invalid");
            document.getElementById("FirstName").style = "border:solid red";
        
        }
    }
    var user = document.getElementById("LastName").value;
    var re = /(^[A-Za-z][A-Za-z0-9_]{4,50}$)/;
    if(user == ""){
        document.getElementById("lname").innerHTML=("There is no input");
        document.getElementById("LastName").style = "border:solid red";
    }
    else{
        if(re.test(user)){
            document.getElementById("lname").innerHTML=("");
            document.getElementById("LastName").style = "border:solid green";
        }
        else{
            document.getElementById("lname").innerHTML=("The given input is invalid");
            document.getElementById("LastName").style = "border:solid red";
        }
    
    }
    var user = document.getElementById("SA").value;
    var re = /(^[#.0-9a-zA-Z\s,-]+$)/;
    if(user == ""){
        document.getElementById("SAE").innerHTML=("There is no input");
        document.getElementById("SA").style = "border:solid red";
    }
    else{
        if(re.test(user)){
            document.getElementById("SAE").innerHTML=("");
            document.getElementById("SA").style = "border:solid green";
        }
        else{
            document.getElementById("SAE").innerHTML=("The given input is invalid");
            document.getElementById("SA").style = "border:solid red";
        }
    
    }
  
    var user = document.getElementById("Al2").value
    var  re = /(^[#.0-9a-zA-Z\s,-]+$)/;
    if(user == ""){
        document.getElementById("Al2E").innerHTML=("There is no input");
        document.getElementById("Al2").style = "border:solid red";
    }
    else{
        if(re.test(user)){
            document.getElementById("Al2E").innerHTML=("");
            document.getElementById("Al2").style = "border:solid green";
        }
        else{
            document.getElementById("Al2E").innerHTML=("The given input is invalid");
            document.getElementById("Al2").style = "border:solid red";
        }
    
    }
    
    var user = document.getElementById("City").value
    var re =  /(^[A-Za-z][A-Za-z0-9_]{2,50}$)/;
    if(user == ""){
        document.getElementById("CityE").innerHTML=("There is no input");
        document.getElementById("City").style = "border:solid red";
    }
    else{
        if(re.test(user)){
            document.getElementById("CityE").innerHTML=("");
            document.getElementById("City").style = "border:solid green";
        }
        else{
            document.getElementById("CityE").innerHTML=("The given input is invalid");
            document.getElementById("City").style = "border:solid red";
        }
    
    }

    var user = document.getElementById("Zip").value
    var re =  /(^\d{6}$)|(^\d{6}-\d{5}$)/;
    if(user == ""){
        document.getElementById("ZipE").innerHTML=("There is no input");
        document.getElementById("Zip").style = "border:solid red";
    }
    else{
        if(re.test(user)){
            document.getElementById("ZipE").innerHTML=("");
            document.getElementById("Zip").style = "border:solid green";
        }
        else{
            document.getElementById("ZipE").innerHTML=("The given input is invalid");
            document.getElementById("Zip").style = "border:solid red";
        }
    
    }

    var user = document.getElementById("PN").value
    var re = /^[7-9][0-9]{9}$/;
    if(user == ""){
        document.getElementById("PNE").innerHTML=("There is no input");
        document.getElementById("PN").style = "border:solid red";
    }
    else{
        if(re.test(user)){
            document.getElementById("PNE").innerHTML=("");
            document.getElementById("PN").style = "border:solid green";
        }
        else{
            document.getElementById("PNE").innerHTML=("The given input is invalid");
            document.getElementById("PN").style = "border:solid red";
        }
    
    }
    
    var user = document.getElementById("EA").value
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(user == ""){
        document.getElementById("EAE").innerHTML=("There is no input");
        document.getElementById("EA").style = "border:solid red";
    }
    else{
        if(re.test(user)){
            document.getElementById("EAE").innerHTML=("");
            document.getElementById("EA").style = "border:solid green";
        }
        else{
            document.getElementById("EAE").innerHTML=("The given input is invalid");
            document.getElementById("EA").style = "border:solid red";
        }
    
    }

    if(document.getElementById("g1").checked){
        document.getElementById("gender").innerHTML = ("Happy to meet you !!");
        document.getElementById("gender").style="color:green"
    }
    else if(document.getElementById("g2").checked){
        document.getElementById("gender").innerHTML = ("Happy to meet you !!");
        document.getElementById("gender").style="color:green"
    }
    else if(document.getElementById("g3").checked){
        document.getElementById("gender").innerHTML = ("Happy to meet you !!");
        document.getElementById("gender").style="color:green"
    }
    else if(document.getElementById("g4").checked){
        document.getElementById("gender").innerHTML = ("Happy to meet you !!");
        document.getElementById("gender").style="color:green"
    }
    else{
        document.getElementById("gender").innerHTML = ("Please select a input");
    }

    var user = document.getElementById("AGE").value
    var re = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
    if(user == ""){
        document.getElementById("Age").innerHTML=("There is no input");
        document.getElementById("AGE").style = "border:solid red";
    }
    else{
        if(re.test(user)){
            document.getElementById("Age").innerHTML=("");
            document.getElementById("AGE").style = "border:solid green";
        }
        else{
            document.getElementById("Age").innerHTML=("The given input is invalid");
            document.getElementById("AGE").style = "border:solid red";
        }
    
    }
    if(document.getElementById("MS1").checked){
        document.getElementById("MS").innerHTML = ("Happy to meet you !!");
        document.getElementById("MS").style="color:green"
    }
    else if(document.getElementById("MS2").checked){
        document.getElementById("MS").innerHTML = ("Happy to meet you !!");
        document.getElementById("MS").style="color:green"
    }
    else if(document.getElementById("MS3").checked){
        document.getElementById("MS").innerHTML = ("Happy to meet you !!");
        document.getElementById("MS").style="color:green"
    }
    else if(document.getElementById("MS4").checked){
        document.getElementById("MS").innerHTML = ("Happy to meet you !!");
        document.getElementById("MS").style="color:green"
    }
    else{
        document.getElementById("MS").innerHTML = ("Please select a input");
    }
    var user = document.getElementById("ECN").value
    var re =  /(^[A-Za-z][A-Za-z0-9_]{2,50}$)/;
    if(user == ""){
        document.getElementById("ECNE").innerHTML=("There is no input");
        document.getElementById("ECN").style = "border:solid red";
    }
    else{
        if(re.test(user)){
            document.getElementById("ECNE").innerHTML=("");
            document.getElementById("ECN").style = "border:solid green";
        }
        else{
            document.getElementById("ECNE").innerHTML=("The given input is invalid");
            document.getElementById("ECN").style = "border:solid red";
        }
    
    }

    var user = document.getElementById("ECR").value
    var re =  /(^[A-Za-z][A-Za-z0-9_]{2,50}$)/;
    if(user == ""){
        document.getElementById("ECRE").innerHTML=("There is no input");
        document.getElementById("ECR").style = "border:solid red";
    }
    else{
        if(re.test(user)){
            document.getElementById("ECRE").innerHTML=("");
            document.getElementById("ECR").style = "border:solid green";
        }
        else{
            document.getElementById("ECRE").innerHTML=("The given input is invalid");
            document.getElementById("ECR").style = "border:solid red";
        }
    
    }
    
}
