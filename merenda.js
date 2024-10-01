function sommaInteri(N) {
    // Dichiarazione variabili
    let somma = 0;
    let count = 0;

    // Controllo per verificare se il numero è maggiore di 0
    if (typeof N !== 'number' || N < 0) {
        return 'Invalid input'
    }

    for (let i = 1; i <= N; i++) {
        if (somma + i > N) {
            return count;
        }
        somma += i;
        console.log(somma)
        count++;
        console.log(count)
    }
    return count;
}