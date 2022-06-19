// Casos muy específicos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 11) {
        continue;
    }
    let j = 10;
    const k = 10;
    console.log(lista[i]);
    console.log(j);
    console.log(k);

    if (lista[i] > 10) {
        break;
    }
console.log(k);
console.log(i);
console.log(j);
}


// Cuál es el ámbito de un bucle
