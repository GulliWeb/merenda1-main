function sommaInteri(N) { 
    // dichiarazione variabili
    let somma = 0 
    let count = 0   

   for (let i = 1; i <= N; i++) {
    somma += i
    // Condizione per verificare se somma è > N
    if (somma >= N) {
        console.log(count)
        return 
    } else {
        count++
        console.log(count)
    }
   }
}
