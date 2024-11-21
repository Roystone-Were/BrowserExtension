
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getDatabase,
         ref,
         push,
         onValue ,
         remove} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"

const firebaseConfig ={
    databaseURL: "https://link-saver-595b8-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

const list = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const saveInputButton = document.getElementById("input-btn")
const deleteButton = document.getElementById("delete-btn")

//click event function
function render(leads){
    list.innerHTML = ""

    for (let i = 0; i < leads.length; i++) {
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.href = leads[i]
        a.textContent = leads[i]
        a.target = "_blank"

        // Append the <a> to the <li>
        li.appendChild(a)

        // Append the <li> to the <ul> list
        list.appendChild(li)
    }
    // Clear the input field after saving
    inputEl.value = ""
}


onValue(referenceInDB,function (snapshot) {
    const snapshotExist = snapshot.exists()
    if (snapshotExist) {
        const snapshotValue = snapshot.val()
        const leads = Object.values(snapshotValue)
        render(leads)
    }

})
//save button
saveInputButton.addEventListener("click",function (){
    push(referenceInDB, inputEl.value)
    inputEl.value = ""
})

//delete button
deleteButton.addEventListener("dblclick",function (){
    remove(referenceInDB)
    list.innerHTML=''

})