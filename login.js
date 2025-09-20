const fullName = document.getElementById("name");
const password = document.getElementById("password");


const LoginUser = () => {

    if (fullName.value === '' && password.value === '') {
        alert("please enter your detai;")
    } else {
        const getAllUser = JSON.parse(localStorage.getItem('userdetail'));

        console.log(getAllUser);

    }

}