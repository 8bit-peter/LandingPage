document.addEventListener('DOMContentLoaded', () => {
    
    let showFormBtn = document.querySelector(".hero__btn");
    let loginForm = document.querySelector(".loginForm");

    // form show
    showFormBtn.addEventListener("click", () => {
        loginForm.classList.add("active");
    })

    // submit
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let login = document.getElementById("login").value;
        let pswd = document.getElementById("password").value;
        let msg = document.querySelector(".msg");

        let data = {
            "login": login,
            "password": pswd
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
                    showFormBtn.removeEventListener
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
    })


    // menu mobile
    let body = document.getElementsByTagName("body")[0];
    let menuMobile = document.querySelector(".hamburger");
    menuMobile.addEventListener("click", () => {
        body.classList.toggle("menuOn");
    })

});