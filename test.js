const test = document.getElementById("test")
const test1 = document.getElementById("test1")
const search = document.getElementById("search")

let isLoaded = false
let max = 9
let pendingMsg = `Wait A Second`
let apiUrl

fetch("./data/character.json")
.then(response=>response.json())
.then(data=>{
    console.table(data.characters)
    data.characters.forEach((c)=>{
        test.innerHTML+=`
        <div>${(c.id)+1} ${c.name}</div>
        `
    })
})

search.addEventListener("keyup", (e) => {
    let keyValue = e.target.value
    console.log(keyValue)
    test.querySelectorAll("div").forEach((el) => {
        console.log(el.innerText.trim())
        if (el.textContent.trim().toLowerCase().includes(keyValue)) {
            el.style.display = 'flex'
        } else {
            el.style.display = 'none'
        }
    })
})