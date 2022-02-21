

function pregunta1(){
	const numero= prompt ("Escoge un numero");
	document.open();
	for (let i=0; i <= numero;i++) {
		console.log(i);
	    document.write("<tr> <th> Pregunta 1: "+i+"</th></tr>");
	    
	}

	document.close();
}

function pregunta2{
	var aleatorio1=Math.floor(Math.random()*100);
	var aleatorio2=Math.floor(Math.random()*100);
	let suma = aleatorio2+aleatorio1;
	let inicio = new Date();
    let resultado = prompt(nu1 + " + " + nu2);
    let final = new Date();
    let tiempo = (final - inicio)/1000;
    if(resultado==suma){
        document.writeln("Correcto<br/><br/>");
        document.writeln("Su tiempo fue: " + tiempo);
    }else{
        document.writeln("Incorrecto<br/><br/>");
        document.writeln("Su tiempo fue: " + tiempo);
    }
}

function pregunta3(a){
	let b=0,c=0,d=0
	for(const i of a){
        if(i < 0){
            d++;
        }else if(i == 0){
            c++;
        }else{
            b++;
        }
    }
    return [b, c, d];
}
function pruebap3(){
    let array = [];
    while(true){
        num = prompt("ingresa numeros, teclea 'hola' para terminar ciclo");
        if(num ==='hola'){
            break;
        }else{
            arreglo.push(num); 
        }
    }
    let resultado = contador(array);
    document.write("Positivos = " + resultado[0] + " Negativos = " + resultado[2] + " Ceros = " + resultado[1]);
}

function pregunta4(array){
    let resultado = [];
    for(let i = 0; i < array.length; i++){
        let suma = 0;
        for(const j of array[i]){
            suma = suma + j;
        }
        let prom = suma/(array[i].length)
        resultado.push(prom);
    }
    return resultado;
}

function pruebap4(){
    let prueba = [[2, 2 , 2], [4, 8, 3], [6, 6, 12, 12]];
    let proms = promedios(prueba);
    for(const val of proms){
        document.write("Promedio = " + val + " ");
    }
}

function pregunta5(){
    let num = prompt("Ingrese un numero entero");
    num = num.toString();
    num = num.split('');
    num = num.reverse();
    num = num.join('');
    num = parseFloat(num);
    document.write("Tu numero al reves es: " + num);
}


function pregunta6(){
	
}