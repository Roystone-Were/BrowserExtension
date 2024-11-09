let myLeads = []
const list = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const saveInputButton = document.getElementById("input-btn");

saveInputButton.addEventListener("click",renderLeads)

function renderLeads(){
    myLeads.push(inputEl.value)

    list.innerHTML= ""

    for (let i = 0; i < myLeads.length; i++) {
        let li = document.createElement("li")
        // li.innerText += myLeads[i]
        // document.getElementById("ul-el").appendChild(li)
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