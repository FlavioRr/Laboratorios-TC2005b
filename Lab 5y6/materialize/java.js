const costoLimpiador = 7.5;
const costoHasbuya = 200;
const costoMosca = 120;
var costoTotal = 0;

function mostrar_producto1(){
	document.getElementById("imagen1").innerHTML = '<img class="center-align" src="https://assets.stickpng.com/images/580b57fbd9996e24bc43bd44.png" alt="Enano">';
	document.getElementById("Descripcion").innerHTML = '<strong class="center-align">Limpiador profesional nacido y traido directamente de brasil</strong>'
	document.getElementById("Precio").innerHTML = '<strong class="center-align">Precio</strong>'
	document.getElementById("Precio con IVA").innerHTML = '<strong class="center-align">5 peso la hora</strong>'
}
function mostrar_producto1IVA(){
	document.getElementById("test1").innerHTML = '<h5 class="center-align">7.5 peso la hora</h5>'
	costoTotal=costoLimpiador+costoTotal;
}
function mostrar_producto1sinIVA(){
	document.getElementById("Precio con IVA").innerHTML = '<strong class="center-align">5 peso la hora</strong>'
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrar_producto2(){
	document.getElementById("imagen2").innerHTML = '<img class="center-align" src="https://img.menzig.es/a/2000/2261-h2.jpg" alt="Hasbuya">';
	document.getElementById("Descripcion2").innerHTML = '<strong class="center-align">Un hasbuya asesino de enanos traido frescamente de Ucrania</strong>'
	document.getElementById("Precio2").innerHTML = '<strong class="center-align">Precio</strong>'
	document.getElementById("Precio con IVA2").innerHTML = '<strong class="center-align">119 peso la hora</strong>'
}
function mostrar_producto2IVA(){
	document.getElementById("test1").innerHTML = '<h5 class="center-align">200 peso la hora</h5>'
	costoTotal=costoHasbuya+costoTotal;
}
function mostrar_producto2sinIVA(){
	document.getElementById("Precio con IVA2").innerHTML = '<strong class="center-align">119 peso la hora</strong>'
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrar_producto3(){
	document.getElementById("imagen3").innerHTML = '<img class="center-align" src="https://www.disfrazmania.com/6842-thickbox_default/disfraz-de-mosca.jpg" alt="mosca">';
	document.getElementById("Descripcion3").innerHTML = '<strong class="center-align">Un flipante vestido de Mosca para aquellos con problemas mentales</strong>'
	document.getElementById("Precio3").innerHTML = '<strong class="center-align">Precio</strong>'
	document.getElementById("Precio con IVA3").innerHTML = '<strong class="center-align">78 peso</strong>'
}
function mostrar_producto3IVA(){
	document.getElementById("test1").innerHTML = '<h5 class="center-align">120 peso</h5>'
	costoTotal=costoMosca+costoTotal;

}
function mostrar_producto3sinIVA(){
	document.getElementById("Precio con IVA3").innerHTML = '<strong class="center-align">78 peso </strong>'
}
//////////////////////////////////////////////////////////////////////////////////
function compra1(){
	document.getElementById("compra").innerHTML = '<h5 class="center-align">costo total es de '+costoTotal+' </h5>'
}