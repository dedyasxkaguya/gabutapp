window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".skeleton").forEach((el) => {
        el.classList.remove("skeleton")
    })
})
const closeBtn = document.querySelectorAll(".closeBtn")
const charBox = document.getElementById("charBox")
const res = document.getElementById("resultBox")
const search = document.getElementById("search")
let arrName = []
const getDataChar = async (name) => {
    charBox.innerHTML = `
    <div>
    Wait A Second....
    </div>
    `
    try {
        fetch(`https://www.demonslayer-api.com/api/v1/characters?name=${name}`)
            .then(response => response.json())
            .then(data => {
                console.table(data.content)
                data.content.forEach((char) => {
                    // swal.fire({
                    //     icon: "success",
                    //     title: `${char.name}`
                    // })
                    arrName = char.name.split(" ")
                    let trimName
                    trimName = ''
                    arrName.forEach((name) => {
                        trimName += `${name} <br>`
                    })
                    charBox.innerHTML = `
      <div class="charBox rounded-4xl">
            <div class="rounded-3xl">
                <div class="male flex shadow rounded-4xl top ">
                    <div class="p-4 flex items-center justify-center left">
                        <img class="p-4 rounded-3xl"
                            src="${char.img}" alt="">
                    </div>
                    <div class=" flex justify-center items-center right">
                        <div class="m-4 p-4 pe-8 flex flex-col gap-4 rounded-3xl shadow rightBox">
                            <span class="top charName font-bold">
                            ${trimName}
                            </span>
                            <span class="mid foot-semibold">
                                ${char.race} ${char.gender} ${char.age}
                            </span>
                            <div class="bot">
                                <span>
                                ${char.description}<br>
                                </span>
                                <i class="mt-4 quote text-light">"${char.quote}"</i>

                                </div>
                            <div class="actionBtn flex justify-start gap-4 mt-auto">
                                <button type="button" class="btnmale p-3 rounded-full shadow-sm">
                                    <i class="bi bi-heart"></i>
                                    <span>
                                        Favorite
                                    </span>
                                </button>
                                <button type="button" class="btn shareBtn shareBtnmale p-3 rounded-full shadow-sm">
                                    <i class="bi bi-share"></i>
                                </button>
                                <button type="button" class="btn closeBtn p-3 rounded-full shadow-sm">
                                    <i class="bi bi-x"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    `
                })
                charBox.querySelector(".charBox").style.opacity = "1"
                charBox.querySelector(".charBox").style.top = "50%"
            })
            .catch((error) => {
                swal.fire({
                    icon: "error",
                    title: `Oops`,
                    text: "Something went wrong" + error
                })
            })
    } catch (error) {
        swal.fire({
            icon: "error",
            title: `Oops`,
            text: "Something went wrong"
        })
    }
}
const getData = async () => {

    fetch('./data/character.json')
        .then(response => response.json())
        .then(data => {
            data.characters.forEach((c) => {
                res.innerHTML += `
            <div id=${c.id} class="result resBtn ${c.gender} p-3 rounded-full items-center shadow" onclick="getDataChar('${c.name}')">
            <div class="imgBox${c.gender} p-3 rounded-full skeleton">
                <img src="${c.image}" alt="">
            </div>
            <span class="name mx-4 font-semibold skeleton">${c.name}</span>
            <span class="id bg-neutral-800 text-neutral-50 rounded-full flex justify-center items-center p-2 skeleton">
            ${c.id}</span>
            <span class="arc mx-4 font-light arc skeleton">ARC ${c.arc_id}</span>
            </div>
            `
            })
            document.querySelectorAll(".skeleton").forEach((el) => {
                el.classList.remove("skeleton")
            })
        })
}
getData()
search.addEventListener("keyup", (e) => {
    let keyValue = e.target.value
    console.log(keyValue)
    document.querySelectorAll(".result").forEach((el) => {
        if (el.textContent.trim().toLowerCase().includes(keyValue)) {
            el.style.display = 'flex'
        } else {
            el.style.display = 'none'
        }
    })
})
closeBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let realParent = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
        realParent.remove()
    })
})
charBox.addEventListener("click", (e) => {
    if (e.target.className.includes('bi-x')) {
        let realParent = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
        realParent.remove()
    }
})