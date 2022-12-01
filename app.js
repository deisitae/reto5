const boton = document.querySelector(".boton");
const parrafo = document.querySelector("#p");
const lista = document.querySelector("#lista");
const icono = document.querySelector("#icono");



/* Captar atributo valor e imprimirlo en pantalla
total=0;
boton.addEventListener("click",()=>{
    total+=parseInt(document.querySelector(".precio1").getAttribute("value"));
    console.log(total);
})
*/

/* Captar atributo valor y multiplicarlo por cantidad
total=0;
boton.addEventListener("click",()=>{
    cantidad=document.querySelector(".cantidad").value;
    cantidad=parseInt(cantidad);
    total+=parseInt(document.querySelector(".precio1").getAttribute("value"))*cantidad;
    console.log(total);
})
*/

/* Imprimir total en un párrafo determinado
boton.addEventListener("click",()=>{
    total=0;
    cantidad=document.querySelector(".cantidad").value;
    cantidad=parseInt(cantidad);
    total+=parseInt(document.querySelector(".precio1").getAttribute("value"))*cantidad;
    parrafo.textContent += total;
})
*/

/*  Imprimir total en un párrafo al final del body
boton.addEventListener("click",()=>{
    total=0;
    cantidad=document.querySelector(".cantidad").value;
    cantidad=parseInt(cantidad);
    total+=parseInt(document.querySelector(".precio1").getAttribute("value"))*cantidad;
    const paragraph = document.body.appendChild(document.createElement('p'));
    paragraph.textContent += total;
})
*/

//Imprimir en menú anidado en navbar
let montoFinal=0;
const monto = lista.appendChild(document.createElement('p'));
monto.textContent += "total:$" + montoFinal;

boton.addEventListener("click",()=>{
    total=0;
    cantidad=document.querySelector(".cantidad").value;
    cantidad=parseInt(cantidad);
    total+=parseInt(document.querySelector(".precio1").getAttribute("value"))*cantidad;
     const paragraph = lista.appendChild(document.createElement('p'));
   /* paragraph.textContent += cantidad + " unidades --" + document.querySelector(".item1").className + "--"+ total;*/
   paragraph.textContent += `${cantidad} unidades ${document.querySelector(".item1").className} ${total} -- Toque elemento para eliminarlo`;
   lista.value=total;
   montoFinal+=total;
    monto.innerHTML = "total a pagar: $" + montoFinal;
    //se implementa un método al interior de otro método
    //de este modo, cada objeto creado ya contendrá el método addEventListener("click")
    paragraph.addEventListener("click",()=>{
        paragraph.remove()
    });

});



/* Cambiar style sin clases
icono.addEventListener("click",()=>{
    lista.style.display="initial";
})

*/

//Cambiar style con clases
icono.addEventListener("click",()=>{
    lista.classList.toggle("oculto");
});
