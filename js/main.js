function cadastrar() {
    let alt = document.getElementById('altura');
    let a = Number(alt.value);
    let mass = document.getElementById('massa');
    let kg = Number(mass.value);
    let imc = IMC (kg,a);
    if (imc){
        let resultado = adc(a,kg,imc);
        let tab = document.getElementById('tabela').firstElementChild;
        tab.appendChild(resultado);
        alt.value = '';
        mass.value = '';
    }
}

function IMC(kg,a){

    let imc = kg/(a*a);
    return imc;
}   

function adc(a,kg,imc){
    let  tr = document.createElement("tr");
    let td1 = document.createElement("td"); 
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td1.textContent = a;
    td2.textContent = kg;
    td3.textContent = imc;
    td1.classList.add("table-primary");
    td2.classList.add("table-secondary");
    td3.classList.add("table-success");
    td1.setAttribute("align","center");
    td2.setAttribute("align","center");
    td3.setAttribute("align","center");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    
 return tr;    

}
   