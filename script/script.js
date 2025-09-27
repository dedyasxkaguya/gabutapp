fetch('https://www.demonslayer-api.com/api/v1/characters?id=30')
.then(response=>response.json())
.then(data=>console.table(data.content))