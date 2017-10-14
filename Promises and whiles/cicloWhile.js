var contador = 0;

//Se sigue ejecutando mientras la condicion sea verdader, se quiebra o cierra cuando devuelva un valor falso
while (contador < 10) {
    contador++;
    if (contador % 2 !== 0) {
        continue;
    }
    else{
        console.log(contador);
    }

    do {
        
    } while (condition);
}

//Palabras reservadas de los while
// break
// continue