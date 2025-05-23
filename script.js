var todos = [
  
]
function afficher(){
    document.getElementById("ul").innerHTML = ""
     
    
    todos.forEach(element => {
        var li = document.createElement("li")
        li.classList = "task "
 
        li.innerHTML = `
        <button class="ok ${(element.check == true)?'bg-green-500':""}" onclick="check(${element.time})" ></button>
                <div class="card  ">
                    <span class="write ${(element.check == true)?'hi':""}">${element.text}</span>
                    <div class="flex-btn ">
                        <button class="update" onclick="uppdate(${element.time})" >Update</button>
                        <button class="delite " onclick="delite(${element.time}) ">Delite</button>
                    </div>
                </div>`
        
         
         document.getElementById('ul').appendChild(li)
        
     
    });

}
afficher()
function cree(){
     let task = document.getElementById("value")
     let value = task.value.toUpperCase()
    if(value.trim("")==""){
        return
    }
    let object = {
        text : value,
        check:false,
        time: Date.now()
    }
    todos.push(object)
    task.value = ""
    

    afficher()
 }
function delite(time){
    let confirmation = confirm("Delite !!!")
    if(confirmation){
    todos = todos.filter(f => f.time != time)
    afficher()}
}
function check(time){
    let index = todos.findIndex(f => f.time == time)
    if (index !== -1) {
        todos[index].check = !todos[index].check
        afficher()
    }
}

function uppdate(time){
    let confirmation = confirm("can you confirm !!!")
     if(confirmation){
    let index = todos.findIndex(f => f.time == time)

    let value = todos[index].text

    document.getElementById("value").value = value

    todos.splice(index, 1)}
    else{
        document.getElementById("value").value = ""}


      
 
  }