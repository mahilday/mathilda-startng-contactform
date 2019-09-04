function nameTwo(){
                let fname = document.querySelector("#fname").value;
                let fpattern =     /^([a-zA-Z]{2,}) ([a-zA-Z]{2,})$/;

                    if(fpattern.test(String(fname).toUpperCase())  == true && !fname.length < 4   ){
                        ftext = "Valid input";
                    } else {
                        ftext = "Input not valid";
                    }
                
                   document.getElementById("valid").innerHTML = ftext;

            }
            function emailPart(){
                let name = document.querySelector("#mat").value;
                let valid = document.querySelector("#valid1");
                let pattern =/\S+@\S+/;

                    if(pattern.test(String(name).toLowerCase()) == true){
                        text = "Valid input";
                    } else {
                        text = "Input not valid";
                    }
                
                   document.getElementById("valid1").innerHTML = text;
                }
                function titleOne(){
                let tname = document.querySelector("#title").value;
                let tpattern =     /^([a-zA-Z]{2,})$/;

                    if(tpattern.test(String(tname).toUpperCase())  == true  ){
                        ttext = "Valid input";
                    } else {
                        ttext = "Input not valid";
                    }
                
                   document.getElementById("valid2").innerHTML = ttext;

            }
            function textArea(){
                let tAname = document.querySelector("#textarea").value;
                    if(tAname.length < 20){
                        tAtext = "Please fill this box with at least 20 characters" ;
                    } else {
                        tAtext = "Input valid";
                    }
                
                   document.getElementById("valid3").innerHTML = tAtext;

            }
