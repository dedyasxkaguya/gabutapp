const main = document.getElementById("main")
const fetchLoad = document.getElementById("fetchLoading")
const githubBtn = document.getElementById("githubBtn")
const errMsg = document.getElementById("errMsg")
const errBtn = document.getElementById("errBtn")
const favChar = JSON.parse(localStorage.getItem("favChar"))
let isLoaded = 0

const getData = async (el) => {
    console.log(`Fetching https://demon-slayer-api.onrender.com/v1/${el}`)
    fetch(`https://demon-slayer-api.onrender.com/v1/${el}`)
        .then(response => response.json())
        .then(data => {
            console.table(data)
            data.forEach((c) => {
                let realImg = c.image.split('.png/')
                let cardId = c.name.split(" ")[0]
                if (isLoaded == 0) {
                    // main.innerHTML = ''
                    fetchLoad.style.display = 'none'
                }
                main.innerHTML +=
                    `
        <div class="result resBtn ${c.gender.toLowerCase()} p-3 rounded-3xl items-center shadow noBetween">
            <div class="imgBox${c.gender.toLowerCase()} p-3 rounded-2xl">
            <img src="${realImg[0]}.png" alt="">
            </div>
            <span class="name mx-4 font-semibold">${c.name}</span>
            <span class="detail p-4 mx-4 font-semibold bg-neutral-50 rounded-full flex justify-center items-center">
            <i id="${cardId}" class="bi bi-search"></i>
            </span>
            </div>
            <div class=" ${cardId}
            detailCard ${c.gender.toLowerCase()} p-3 rounded-3xl items-center shadow noBetween">
                <div class="detailImg m-4">
                <img src="${realImg[0]}.png" alt="">
                </div>
                <div class="relatives flex flex-col">
                <span class="name text-xl4 font-semibold">${c.name}</span>
                <span class="font-semibold capitalize">race: ${c.race}<br>
                <span class="font-semibold capitalize">gender : ${c.gender}<br>
                <span class="font-semibold capitalize">age : ${c.age}<br>
                <span class="font-semibold capitalize">height : ${c.height}<br>
                <span class="font-semibold capitalize">weight : ${c.weight}<br>
                <span class="font-semibold capitalize">birthday : ${c.birthday}<br>
                <span class="font-semibold capitalize">hair color : ${c['hair color']}<br>
                <span class="font-semibold capitalize">eye color  : ${c['eye color ']}<br>
                <span class="font-semibold capitalize">affiliation : ${c.affiliation}<br>
                <span class="font-semibold capitalize">combat style : ${c['combat style']}<br>
                <span class="font-semibold capitalize">partner(s) : ${c['partner(s)']}<br>
                </div>
            </div>
            `
            })
            console.log('Completed Fetching ' + el)
            isLoaded += 1
            let isHeight = false
            document.querySelectorAll(".result").forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    if (e.target.className.includes("bi-search")) {
                        // const realParent = e.target.parentElement.parentElement
                        console.log(e.target.id)
                        if (!isHeight) {
                            document.querySelectorAll(".detailCard").forEach((e)=>{
                                e.style.display='none'
                            })
                            document.querySelector(`.${e.target.id}`).style.display='flex'
                            isHeight = true
                        } else {
                            document.querySelector(`.${e.target.id}`).style.display='none'
                            isHeight = false
                        }
                    }
                })
            })
        }
        )
        .catch(error => console.log(error))
}

if (favChar) {
    let i = 0
    let m = favChar.length
    favChar.forEach((el) => {
        getData(el)
    })
    setInterval(() => {
        if (i <= 10 * m && isLoaded == 0) {
            console.log('pending')
            console.log('detik ke ' + i)
        } else if (i > 10 * m && isLoaded <= m) {
            console.log('error saat fetching')
            errMsg.style.display = 'flex'
            return
        }
        i++
    }, 1000)

} else {
    fetchLoad.style.display = 'none'
    main.innerHTML += `
    <p>THERE IS NOTHING HERE</p>
    
    `
}

const clearlocal = () => {
    localStorage.removeItem("favChar")
}
errBtn.addEventListener("click", () => {
    navigation.reload()
})
githubBtn.addEventListener("click", () => {
    location.href = 'https://github.com/dedyasxkaguya'
})