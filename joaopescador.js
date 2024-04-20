function verificarpeso(){
    const p = document.getElementById("pesopeixes").value;

    if (p > 50){
	e = p - 50
	m = e * 4
}
else {
	e = "ZERO"
	m = "ZERO"

}

alert(`Peso: ${p}Kg\nExecesso: ${e}Kg\nMulta por execesso de Kg: R$${m}`)





}
