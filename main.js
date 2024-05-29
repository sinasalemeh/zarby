function btn(){
    //تعریف inputs
    var my_inp = document.getElementById("my_inp").value;
    var my_inp2 = document.getElementById("my_inp2").value;
    
    //ضرب inputs
    document.getElementById("mo").innerHTML = my_inp * my_inp2;
    
    //خالی بودن inputs
    if (my_inp == "" || my_inp2 == ""){
        document.getElementById("mo").innerHTML = "فرم ها رو پر کنننن"
    }
}
