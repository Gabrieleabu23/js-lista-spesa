const listaSpesa=["Latte","Formaggio","Burro","Farina"];
const stampaLista= document.getElementById("lista_spesa");
// stampaLista.append(elementoSpesa);
let i=0;
while(i< listaSpesa.length){
    const elementoSpesa= document.createElement("li");
    elementoSpesa.append(listaSpesa[i]);
    stampaLista.append(elementoSpesa);
    i++;
}