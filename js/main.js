const productos= [
    {
        id: 1,
        nombre: "Banana Ecuador",
        precio: 89

    },
    {
        id: 2,
        nombre: "Cebolla Blanca",
        precio: 89
    },
    {
        id: 3,
        nombre: "Lechuga Comun",
        precio: 109
    },
    {
        id: 4,
        nombre: "Papa Blanca",
        precio: 89
    },
    {
        id: 5,
        nombre: "Naranja",
        precio: 100
    }
]


let CartProducts = []
let CartPrdoctsLS =localStorage.getItem("cartProducts")
if (CartPrdoctsLS) {
    CartProducts =JSON.parse(CartPrdoctsLS)
} else {
    CartProducts = []
}

let productsContainer = document.getElementById("products-container")

fetch("./db/data.json")
.then(respuesta=>respuesta.json())
.then(data=> {
    data.forEach ( product => {
        const card = document.createElement("div")
        card.innerHTML =` <h3 class="claseCreateE"> ${product.nombre}</h3>
                          <img class="img-div" src= ${product.img}  alt= ${product.img}>
                          <p class="claseCreateE">$${product.precio}</p>
                          <button class="productoAgregar" id="${product.id}">Agregar</button>`

         productsContainer.appendChild(card)                 
    })

    addToCartButton()
})

.catch((error) => console.log(error))

function addToCartButton () {
    let addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(product => product.id == productId)
            CartProducts.push(selectedProduct)
            console.log(CartProducts)

            localStorage.setItem("cartProducts", JSON.stringify(CartProducts))

            Toastify({
                text: "Fruta agregada",
                duration: 1000,
                destination: "#",
                newWindow: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #fe8801, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
        }
    })
}


