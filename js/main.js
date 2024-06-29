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
        card.innerHTML =` <h3>${product.nombre}</h3>
                          <img class="img-div" src= ${product.img}  alt= ${product.img}>
                          <p>$${product.precio}</p>
                          <button class="productoAgregar" id="${product.id}">Agregar</button>`

         productsContainer.appendChild(card)                 
    })

    addToCartButton()

    function addToCartButton () {
        let addButton = document.querySelectorAll(".productoAgregar")
        addButton.forEach(button => {
            button.onclick = (e) => {
                const productId = e.currentTarget.id
                const selectedProduct = data.find(product => product.id == productId)
                CartProducts.push(selectedProduct)
                console.log(CartProducts)
    
                localStorage.setItem("cartProducts", JSON.stringify(CartProducts))
    
                Toastify({
                    text: "Fruta agregada",
                    duration: 1000,
                    destination: "#",
                    newWindow: true,
                    gravity: "top", 
                    position: "center", 
                    stopOnFocus: true, 
                    style: {
                      background: "linear-gradient(to right, #fe8801, #96c93d)",
                    },
                    onClick: function(){} 
                  }).showToast();
            }
        })
    }
})

.catch((error) => console.log(error))




