class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class PaginaWeb {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  mostrarProductos() {
    const productosContainer =  document.getElementById("productos-container");
    /*
    this.productos.forEach((producto) =>{
        let productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");
      productoDiv.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p>Costo: ${producto.precio} pesos </p>
      `;
      productosContainer.appendChild(productoDiv);
    }
        )

  }*/
  let producto = this.productos[this.productos.length -1];
  let productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");
      productoDiv.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p>Costo: ${producto.precio} pesos </p>
      `;
      productosContainer.appendChild(productoDiv);

}
}
const miPagina = new PaginaWeb();
const agregrar = document.querySelector("#add");
llenado();
agregrar.addEventListener("click",() =>{
     let nombre =  document.getElementById("nombrep").value;
     let precio =  document.getElementById("preciop").value;
     let producto = new Producto(nombre,precio);
      miPagina.agregarProducto(producto);
     
      miPagina.mostrarProductos();
     
});


function llenado(){
  miPagina.agregarProducto(new Producto("Aceite",35));
  miPagina.mostrarProductos();
  miPagina.agregarProducto(new Producto("coca",40));
  miPagina.mostrarProductos();
}


