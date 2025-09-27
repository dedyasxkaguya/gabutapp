const res = document.getElementById("resultBox")
const search = document.getElementById("search")
fetch('../data/character.json')
    .then(response => response.json())
    .then(data => {
        data.characters.forEach((c) => {
            res.innerHTML += `
          <div class="result flex ${c.gender} p-3 rounded-full items-center">
                <div class="imgBox${c.gender} p-3 rounded-full">
                    <img src="${c.image}" alt="">
                </div>
                <span class="name mx-4 font-semibold">${c.name}</span>
                <span class="id bg-neutral-800 text-neutral-50 rounded-full flex justify-center items-center p-2">
                ${c.id}</span>
            <span class="arc mx-4 font-light">ARC ${c.arc_id}</span>
        </div>
        `
        })
    })

search.addEventListener("keyup", (e) => {
    let keyValue = e.target.value
    console.log(keyValue)
    document.querySelectorAll(".result").forEach((el) => {
        console.log(el.innerText.trim())
        if (el.textContent.trim().toLowerCase().includes(keyValue)) {
            el.style.display = 'flex'
        } else {
            el.style.display = 'none'
        }
    })
})