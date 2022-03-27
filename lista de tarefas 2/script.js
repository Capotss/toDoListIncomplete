var list = document.getElementById("list")
var inp = document.getElementById("inp")
var array = []
var litemCounter = 0

onload =function(){

}


function create(){
    if(inp.value === ""){
        alert('Por favor adicione um nome a sua tarefa')
    } else{
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(inp.value))
    li.setAttribute('class', 'litem')
    li.id = "'litem" + litemCounter++
    array.push(li.innerHTML)
    let listaR = JSON.stringify(array)
    localStorage.setItem("cache", listaR)
    let delbtn = document.createElement("button")
    delbtn.textContent = "Remover"
    delbtn.onclick = function(){
        delbtn.parentElement.remove()
        let i = array.map(itemID => itemID.id).indexOf(li.id) 
        array.splice(i, 1)
        let listaR = JSON.stringify(array)
        localStorage.setItem("cache", listaR)
        }       

    delbtn.setAttribute('class', 'delbtn')
    li.appendChild(delbtn)
    list.appendChild(li)
    
    }
}



