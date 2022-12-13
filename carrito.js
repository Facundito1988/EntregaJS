const productosElec = [{
    id: 1,
    producto: "Alicate oblicuo",
    marca: "Knipex",
    precio: 6500,
    descripción: "Alicate oblicuo 18mm",
    oferta: false, 
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_896726-MLA51208638482_082022-F.webp"

},
{
    id: 2,
    producto: "Pinza Universal",
    marca: "Knipex",
    precio: 7500,
    descripción: "Pinza Universal 18mm",
    oferta: false, 
    imagen: "https://bluetoolssrl.com.ar/wp-content/uploads/2021/05/833146-MLA32169839940_092019-O.jpg"

},
{
    id: 3,
    producto: "Pinza de punta",
    marca: "Knipex",
    precio: 9500,
    descripción: "Pinza de punta 18mm",
    oferta: true, 
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_617398-MLA31037155894_062019-F.webp"

},
{
    id: 4,
    producto: "Pelacables automatico",
    marca: "Stanley",
    precio: 16500,
    descripción: "Pelacables automatico con crimpeadora terminales aislados",
    oferta: false, 
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_650992-MLA31085779875_062019-F.webp"

},
{
    id: 5,
    producto: "Tijera Electricista",
    marca: "Wolf",
    precio: 4500,
    descripción: "Tijera Electricista",
    oferta: true, 
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_703890-MLA28827623086_112018-F.webp"
},
{
    id: 6,
    producto: " Set Destornillador Aislado ",
    marca: "Knipex",
    precio: 25500,
    descripción: "Set 6 destornillores aislados 3 medidas",
    oferta: true, 

},
{
    id: 7,
    producto: "Destornillador Pz2 ",
    marca: "Felo",
    precio: 11000,
    descripción: "Destornillador Pz2 p/termomagneticas",
    oferta: false, 

},
{
    id: 8,
    producto: "Cinta Pasacable",
    marca: "Viyilant",
    precio: 1500,
    descripción: "Cinta pasacable 15m alma de acero",
    oferta: false, 

},
{
    id: 9,
    producto: "Pinza Crimpeadora",
    marca: "Proskit",
    precio: 15700,
    descripción: "Pinza Crimpeadora mordazas intercambiables",
    oferta: false, 

},
{
    id: 10,
    producto: "Set Mordazas Crimpeadoras",
    marca: "Proskit",
    precio: 17000,
    descripción: "Mordazas Crimpeadoras para Piza Proskit (x4)",
    oferta: true, 

},
{
    id: 11,
    producto: "Pinza Amperimetrica",
    marca: "Uni-t",
    precio: 11200,
    descripción: "Pinza Amperimetrica UT-205",
    oferta: false, 

},
{
    id: 12,
    producto: "Detector de Voltaje Inductivo",
    marca: "Uni-t",
    precio: 4000,
    descripción: "Detector de Voltaje Inductivo CV-098",
    oferta: true, 

},
{
    id: 13,
    producto: "Multimetro",
    marca: "Uni-t",
    precio: 6900,
    descripción: "Multimetro UT-33",
    oferta: false, 

},
{
    id: 14,
    producto: "Ficha de testeo",
    marca: "Cambre",
    precio: 3200,
    descripción: "Ficha de testeo - Prueba de interruptor diferencial",
    oferta: false, 

},
{
    id: 15,
    producto: "Probador de diferenciales",
    marca: "Uni-t",
    precio: 69000,
    descripción: "Probador de diferenciales UT-887m",
    oferta: true, 

}];


function descuento() {
    productosElec.forEach(elemento => {
        if (elemento.oferta) {
            let resta = elemento.precio * 0.15
            let final = elemento.precio -= resta
          console.log(final)
         }
     })  
 }

 descuento()

 copyProcturosElec = [].concat(productosElec)

 console.log(copyProcturosElec)

 copyProcturosElec.sort((a, b) => b.id - a.id)
 console.log(copyProcturosElec)


 function oferton(){
     var acepto = confirm("¿Quieres ver las ofertas?")
     if(acepto == true) {
       
     }
 }
