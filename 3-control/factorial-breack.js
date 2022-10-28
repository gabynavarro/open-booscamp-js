//factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let contador=10;
let i=1;
console.log(contador);
while(true){
    contador=contador*i
    i++; 
    if (i==10) {
        break
    }
}
console.log(contador);