const test = document.getElementById("test")
const test1 = document.getElementById("test1")
const search = document.getElementById("search")

let isLoaded = false
let max = 9
let pendingMsg = `Wait A Second`
let nime = []
let nime0 = []
let nime1 = []
let apiUrl


const takeData = (array) => {
    if (array == '') {
        console.log('pending')
    } else {

        let srtArray = array.sort((a, b) => {
            // b.score - a.score ensures descending numeric order
            return a.id - b.id;
        });
        srtArray.forEach((c) => {
            // console.table(c)
            test.innerHTML += `
        <div id="${c.id}" class="flex">
        ${c.id} ${c.name}
        </div>
        `
        })
    }

}

const getData = (link) => {
    fetch(link)
        .then(response => response.json())
        .then(data => {
            data.content.forEach((c) => {
                nime0.push({
                    id: c.id,
                    name: c.name,
                    age: c.age,
                    gender: c.gender,
                    race: c.race,
                    aff_id: c.affiliation_id,
                    arc_id: c.arc_id
                })
                nime1.push({
                    description: c.description,
                    image: c.img,
                    quote: c.quote
                })
                nime.push(c)
            })
        })
}
for (let i = 1; i <= max; i++) {
    if (i == 1) {
        getData(`https://www.demonslayer-api.com/api/v1/characters?`)
    } else {
        getData(`https://www.demonslayer-api.com/api/v1/characters?page=${i}`)
    }
}
setInterval(() => {
    while (test.innerHTML == '') {
        takeData(nime)
    }
}, 1000)
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