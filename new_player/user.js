function checkUserData(data) {
//    console.log(data);
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username, password)
    let user = data.find((el) => el.email === username);
    let pwd = data.find((el) => el.password === password);
    let invalidText = document.getElementById('invalidText')
    console.log(user, "+", pwd)
    if(user && pwd)
    {
        invalidText.style.color = "green";
        invalidText.innerText = "Credentials matched";
        window.location.href = "./index.html";
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        // console.log("User credentials successful");
    }

    else if (!user){
//        if (user != username){
            alert("Invalid Username");
        }
    else if(user && !pwd){
        alert("Invalid Password");
    }
//         console.log("Invalid credentials");
//        invalidText.innerText = "*Invalid credentials";
    }
      

let userData = () => {
    fetch("user.json")
    .then((res) => 
        {
            // console.log(res.json());
            return res.json();
        })

    .then((data) => 
        {
            // let allData = localStorage.getItem("allUsers")
            localStorage.setItem("allUsers", JSON.stringify(data));
            // console.log(data);
            let loginBtn = document.getElementById("lg_btn");
            loginBtn.onclick = function () 
            {
                checkUserData(data);
//                console.log(data)
            };
            // checkUser(data)
        });
    console.log("Hello");
};

userData();