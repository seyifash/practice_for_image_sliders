let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });

    if (!this.classList.contains("mode")) {
        this.classList.add("hovered");
    }
    
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

const body = document.querySelector("body");
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"
        } else {
            modeText.innerText = "Dark Mode"
        }
    });

    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");

    toggle.onclick = function() {
        navigation.classList.toggle('active');
        main.classList.toggle('active');
    }