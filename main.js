window.addEventListener("load", function (){

    document.getElementById("main-form").addEventListener('submit', function(event){
        event.preventDefault();
    });
    
    document.getElementById("main-form").addEventListener('submit', function(event){
        event.preventDefault();
    });
    
    //This may help once we have that extra layer
    //document.getElementById("response").innerHTML = "Hello";
    
    document.getElementById("send-button").addEventListener("click", sender);
    
    
    function sender(){
    
        let XHR = new XMLHttpRequest();
        //let reply = XHR.response;
    
        var formElement = document.querySelector("#main-form");
        const formData = new FormData(formElement);
    
        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        var json = JSON.stringify(object);
    
        var request = new XMLHttpRequest();
        
    
        let sectionToDisplay = document.getElementById('response');

        //------
        XHR.addEventListener("load", function(event){
            console.log('loaded');
        });

        XHR.addEventListener("error", function(event){
            alert('Oops! Something went wrong');
        });

        //------
    
        XHR.onreadystatechange = function () {
            if(XHR.readyState == XMLHttpRequest.DONE) {
                console.log('hello');
                let reply = XHR.responseText;
                sectionToDisplay.textContent = reply;
            }
        }
        request.open("POST", "main.php");
        request.send(json);
    
        
        
    
    }
})

