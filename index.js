let myLeads = []
const list = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const saveInputButton = document.getElementById("input-btn")
const deleteButton = document.getElementById("delete-btn")
const saveTabButton = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

//prevents data lose after refresh
if(leadsFromLocalStorage){
    myLeads =leadsFromLocalStorage
    render()
}

const tabs= window.location.href
//save button
saveInputButton.addEventListener("click",render)

//save tab button
saveTabButton.addEventListener("click", function(){
    myLeads.push(tabs)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render()
})

//delete button
deleteButton.addEventListener("dblclick",function (){
    localStorage.clear()
    myLeads = []
    render()
})

//click event listener function
function render(){
    myLeads.push(inputEl.value)

    list.innerHTML= "" //prevents data duplicate after every render

    //save to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // console.log(localStorage.getItem("myLeads"))

    for (let i = 0; i < myLeads.length; i++) {
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.href = myLeads[i]
        a.textContent = myLeads[i]
        a.target = "_blank"

        // Append the <a> to the <li>
        li.appendChild(a)

        // Append the <li> to the <ul> list
        list.appendChild(li)
    }
    // Clear the input field after saving
    inputEl.value = ""
}
