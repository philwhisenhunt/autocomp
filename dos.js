window.addEventListener("load", function(){
    var name_input = this.document.getElementById('name_input');
    this.window.hinterXHR = new XMLHttpRequest();
});

function hinter(event){
    var input = event.target;
    var huge_list = document.getElementById('huge_list');
    var min_characters = 0;
    if (input.value.length < min_characters ) {
        return
    }
    else {
        window.hinterXHR.abort();
        window.hinterXHR.abort();
        window.hinterXHR.onreadystatechange = function() {
            if (this.readyState == 4 && this.status ==200) {
                var response = JSON.parse( this.responseText );
            }
        }
    }
}