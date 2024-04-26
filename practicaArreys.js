//Suma de Resistencias en serie

/**
 * Calcula la suma de todas las resistencias conectadas en serie.
Ejemplos:

- `sumResitance([-1,5,6,3])` debería devolver `"15 ohms"`. (|-1| + 5 + 6 + 3 = 15)

- `sumResitance([14,3.5,6])` debería devolver `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)

- La función `sumResitance([8,15,100])` debería devolver `'123 ohmios'`. (8 + 15 + 100 = 123)

Nota: Esta aproximación utiliza el valor absoluto de cada resistencia para asegurar que todos los valores son positivos.
 */

//const sumResitance ([-1,5,6,3])
//const sumResitance ([14,3.5,6])
//const sumResitance ([8,15,100])

//Preparar constantes
//Declarar funcion para aceptar un arrey por parametro
//Loop por el array
//Tomar el valor abs de c/elemento
//Sumar todos lo valores absolutos

const res1= [-1,5,6,3]
const res2= [14,3.5,6]
const res3= [8,15,100]

function sumResitance(arr){
    const arr2=[];
    let res= 0;
   arr.forEach((e) => arr2.push (Math.abs(e)));
   arr2.forEach ((e) =>( res=res+e));
   console.log(`${res} ohms`);
}
function sumResitance2(arr){
    let res= 0;
  for (let i = 0; i< arr.length; i++){
    res += Math.abs (arr[i]);
  }
  return res;
}

sumResitance(res3);
const try2= sumResitance2(res1);
console.log (try2) 
//Aqui se sustitye por res 2 o res 3 dep. la resistencia que queramos sumar`[1,2,3,5,22,6]`

//Número dividido por la mitad

/** Dado un número, devuelve el número dividido en sus mitades en una matriz.
 

Ejemplos:
- `numDiv(4)` debería devolver `[2, 2]`.
- `numDiv(10)` debería devolver `[5, 5]`. 
*/
const n= 8;
const n2=20;
function numDiv(num){
    let res =[];
    const half =num/ 2;
    res.push(half);
    res.push(half);
    return res;
}
console.log (numDiv(n));
console.log(numDiv(n2));

//Sociedad Secreta
/**
 * 
Encuentra el nombre de una sociedad secreta basándote en la primera letra del nombre de cada miembro.
 

Ejemplo:
- `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'`.
- El resultado de `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería ser `'CJMPRR'`.
- NombreSecreto(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'`.
 //Preparar constantes
 //Preparar funciones
 //Obtener la primer letra de cada nombre
 //Ordenar alfabeticamente
 //Imprimir
 */

 const member1= ["Esperanza", "Franco", "Nia"];
 const member2= ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
 const member3= ['Harry', 'Ron', 'Hermione'];

 function secretName (arr){
    let res=[]
    arr.forEach ((e)=>res.push(e.charAt(0)));
    return res.sort().join();
 }
 console.log(secretName(member1));
 console.log(secretName(member2));
 console.log (secretName(member3));
 
//Estado de conexión 
/**
 * Muestra el estado de conexión de una lista de usuarios.
 

Ejemplo:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` debería devolver `'mockIng99, J0eyPunch y 1 más en línea'`.
 */
//Obtener conteo total
//Imprimir usuario users ==!
//Imprimir primeras 2 personas users ==2
//Imprimir primeras 2 personas + conteo users >=2

const users = ['mockIng99', 'J0eyPunch', 'glassedFer'];
function displayUsers (arr) {
    const count= users.length;
    let res;
    if (count ===1){
        
        res =  `${arr[0]}, ${arr[1]} are online`;
    }
    else {
        res= `${arr[0]}, ${arr[1]} are online`
    }
}

//Matriz de multiplos
/**
 * 
Crea una función que tome dos parámetros (número, longitud) y devuelva una matriz de longitud que contenga múltiplos del número.
 

Ejemplos:
- `arrayMultiplos(2, 10)` debería devolver `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` debería devolver `[17, 34, 51, 68, 85, 102]`.
 
 */



//Dominancia positiva en Array
/**Escribe una función para determinar si un array es positivamente dominante.
Un array es positivamente dominante cuando la mayoría de sus elementos son positivos.
 

Ejemplo:
- `positiveDom([-1, -3, -5, 4, 6767])` debe devolver `false`
 */

//Media Antipodal
/**
 * Dada una matriz, devuelve una matriz más corta siguiendo estos pasos:
- Dividir la matriz en dos partes iguales*. Si son desiguales, eliminar el elemento central para obtener dos matrices iguales.
- Sumar cada número de la primera parte con los números inversos de la segunda parte.
- Divide cada número de la matriz resultante por 2.
 

Ejemplo:
- Para la matriz `[1,2,3,5,22,6]`, el resultado debe ser `[3,5, 12, 4]`.

 */
console.log ("Antipodal average");
const ARR = [1, 2, 3, 5, 22, 6], 
const i, res = [];
function acortar (matr) {
    console.log(matr);
    ar1=matr.splice (0, (matr, length/2));
    matr.reverse();
    for (i= 0;i<matr.length, i++) {
        res.push(ar[i]+matr[1]);

    }
    return matr;
}
    console.log(acortar(matr));
    a= MED % 2;
    b=(MED -a)/2;
    ar1= mat.splice (0, b);
    ar2= mat.splice (a,b);
    ar2.reverse();
    for (i=0; i<b; i++){

    }
}