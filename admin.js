const currentUser = JSON.parse(localStorage.getItem("currentUser"));

console.log(currentUser);

if (currentUser.role !== "admin") {
    alert('Access denied. Admins only.');
    window.location.href = 'index.html'
}


const title = document.getElementById("title")
const description = document.getElementById("description")
const price = document.getElementById("price")
const image = document.getElementById("image")
const stock = document.getElementById("stock")



const addProduct = () => {

    if (title.value === '' && description.value === '' && price.value === '' && stock.value === '') {
        alert("please enter your detai;")
    } else {
        const getAllProduct = JSON.parse(localStorage.getItem('AllProductDetail'));

        if (getAllProduct === false) {
            localStorage.setItem("AllProductDetail", [
                JSON.stringify([
                    {
                        title: title.value,
                        description: description.value,
                        price: price.value,
                        stock: stock.value
                    }
                ])
            ]
            )
        } else {
            localStorage.setItem("AllProductDetail", [
                JSON.stringify([
                    ...getAllProduct,
                    {
                        title: title.value,
                        description: description.value,
                        price: price.value,
                        stock: stock.value
                    }
                ])
            ]
            )
        }
    }

}
