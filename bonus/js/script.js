const listaSpesa=[];

listaSpesa.length= prompt("Quanti prodotti vuoi mettere all'interno della lista?");
console.log(listaSpesa.length)
const stampaLista= document.getElementById("lista_spesa");
// stampaLista.append(elementoSpesa);
let i=0;
while(i< listaSpesa.length){
    listaSpesa[i]=prompt("Inserisci prodotti da mettere nella lista, max 4");
    console.log(listaSpesa[i])
    const elementoSpesa= document.createElement("li");
    elementoSpesa.append(listaSpesa[i]);
    stampaLista.append(elementoSpesa);
    i++;
}