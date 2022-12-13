
function cardAHtml ( productos ) {
    const container = document.querySelector(".contenedor")

    productos.forEach ( (productosElec ) => {
        
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
                <div class = "contenedor-img">
                     <img src=${productosElec.imagen} alt="${productosElec.nombre} >
                </div>
                <h2>
                ${productosElec.nombre}
                </h2>
                 `
            
            

            console.log(card)
        container.appendChild(card)
    
    })
}
cardAHtml(productosElec)
