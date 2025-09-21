const fullName = document.getElementById("name");
const password = document.getElementById("password");


const LoginUser = () => {

    if (fullName.value === '' && password.value === '') {
        alert("please enter your detai;")
    } else {
        const getAllUser = JSON.parse(localStorage.getItem('userdetail'));

        const user = getAllUser.find(u => u.name === fullName.value && u.password === password.value);

        console.log(user);

        if (user) {
            console.log(user.role);
            localStorage.setItem('currentUser', JSON.stringify(user));
            if (user.role === "admin") {
                window.location.href = 'admin.html';
            } else if (user.role === "User" ){
                window.location.href = 'index.html'
            }

            
        } else {
            alert('Invalid username or password');
        }
    }

}