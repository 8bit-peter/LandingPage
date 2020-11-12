document.addEventListener('DOMContentLoaded', () => {
    
    let showFormBtn = document.querySelector(".hero__btn");
    let loginForm = document.querySelector(".loginForm");
    let body = document.getElementsByTagName("body")[0];

    // form show
    showFormBtn.addEventListener("click", () => {
        loginForm.classList.add("active");
        body.classList.add("formOn");
    })

    // submit
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const login = document.getElementById("login").value;
        const pswd = document.getElementById("password").value;
        const msg = document.querySelector(".msg");

        if (!login || !pswd) {
            msg.innerText = "Please fill blank inputs";
            msg.classList.add("active");

            setTimeout(function(){ 
                msg.classList.remove("active"); 
            }, 3000);

        } else {

        const data = {
            login: login,
            password: pswd
        };
          
        fetch('https://recruitment-api.pyt1.stg.jmr.pl/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            msg.innerText = data.message;
            msg.classList.add("active");
            
            setTimeout(function(){ 
                msg.classList.remove("active"); 

                if(data.status === "ok"){
                    loginForm.classList.remove("active");
                    showFormBtn.innerText = "Welcome back Knight";
                    body.classList.remove("formOn");
                }

            }, 3000);
        
        })
        .catch((error) => {
            msg.innerText = data.message;
            msg.classList.add("active");

            setTimeout(function(){ 
                msg.classList.remove("active"); 
            }, 3000);
        });

        }
    })


    // menu mobile
    const menuMobile = document.querySelector(".hamburger");
    menuMobile.addEventListener("click", () => {
        body.classList.toggle("menuOn");
    })

});