const fullName = document.getElementById("name");
const password = document.getElementById("password");


const RegisteredUser = () => {

    if (fullName.value === '' && password.value === '') {
        alert("please enter your detai;")
    } else {
        const getAllUser = JSON.parse(localStorage.getItem('userdetail'));

        if (!getAllUser) {
            localStorage.setItem("userdetail", [
                JSON.stringify([
                    {
                        name: fullName.value,
                        password: password.value,
                        role:'User'
                    }
                ])
            ]
            )
        } else {

            const user = getAllUser.find(u => u.name === fullName.value);

            if (user) {
                alert("This username already exist!")
            } else {
                localStorage.setItem("userdetail", [
                    JSON.stringify([
                        ...getAllUser,
                        {
                            name: fullName.value,
                            password: password.value,
                            role:'User'
                        }
                    ])
                ]
                )
            }

        }




        // console.log(getAllUser);





        // let user =
        // {
        //     name: fullName.value,
        //     password: password.value
        // }


        // console.log(
        //     [
        //         {
        //             name: fullName.value,
        //             password: password.value
        //         }
        //     ]
        // );

    }

}