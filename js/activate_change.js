var btnContainer = document.getElementById("list");
var btns = btnContainer.getElementsByClassName("btn");     
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active to-top", " to-center");
        }
        this.className = this.className.replace(" to-center", " active to-top")
    });
}