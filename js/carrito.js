let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")
let totalContainer = document.getElementById("total-section")
let buttonContainer = document.getElementById("button-section")

function renderCarrito (carItems) {

    let total = 0;

    carItems.forEach (producto => {
        const cart = document.createElement("div")
        cart.innerHTML =` <h3> ${producto.nombre}</h3>
                          <p>${producto.precio}</p>`
        cartContainer.appendChild(cart)
        
        total += producto.precio
    })

    const totalElement = document.createElement("section");
            totalElement.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
            totalContainer.appendChild(totalElement)

    const buyButton = document.createElement("button");
    buyButton.textContent = "Comprar";
    buyButton.addEventListener("click", () => {

        Toastify({
            text: "Compra realizada, Gracias por visitarnos. Te esperamos nuevamente",
            duration: 5000,
            destination: "#",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #fe8801, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

    localStorage.removeItem("cartProducts") // Vaciar el carrito
    cartContainer.innerHTML = ""
    totalContainer.innerHTML = ""
    buttonContainer.innerHTML = ""           
})
        buttonContainer.appendChild(buyButton)


}


if (cartStorage) {
    renderCarrito(cartStorage);
}