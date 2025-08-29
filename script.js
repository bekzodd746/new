const cardsData = [
    {id:1, name:'Mars rug', coin:100, image:'1.png', soni: 11},
    {id:2, name:'Keyboard sticker', coin:49, image:'1.png', soni: 11},
    {id:3, name:'Smart watch', coin:899 , image:'1.png', soni: 11},
    {id:4, name:'Wireless keyboard', coin:350, image:'1.png', soni: 11},
    {id:5, name:' Mouse', coin:359, image:'1.png', soni: 11},
    {id:6, name:'AirPods', coin:499, image:'1.png', soni: 11},
    {id:7, name:'Powerbank', coin:899, image:'1.png', soni: 11},
    {id:8, name:'USB flash drive', coin:299, image:'1.png', soni: 11},
    {id:9, name:'Smartphone', coin:2699, image:'1.png', soni: 11},
    {id:10, name:'Playstation 5', coin:7449, image:'1.png', soni: 11},
    {id:11, name:'Yandex Station', coin:1999, image:'1.png', soni: 11},
    {id:12, name:'Planshet Samsung', coin:4999, image:'1.png', soni: 11},
]   

const cardsContainer = document.querySelector('#cards-container')

function renderCards(item) {
    cardsContainer.innerHTML = '';
    item.forEach(element => {
        const card = document.createElement('div')
    });
}