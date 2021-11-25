const reviews = [
    {
        // id:1,
        name:"Zain Ali",
        job:"UI Design",
        img:"https://wallpaperaccess.com/full/656802.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti dicta",
    },
    {
        // id:2,
        name:"Faisal",
        job:"Develoment",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1YXm4zYdodHAsdoNuZCy1sGrmoZsUZrqvhg&usqp=CAU",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti dicta",
    },
    {
        // id:3,
        name:"Hamza",
        job:"Data science",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9v28uLzDsWHgSQq_kQZyonYkzi83B4Yv_qA&usqp=CAU",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti dicta",
    }
];


const img = document.getElementById("personImg");
const friends = document.getElementById("friends");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")
const randomBtn = document.querySelector(".random")

let currentItem = 0;
// showPerson();
window.addEventListener("DOMContentLoaded", function (){
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem]
    img.src = item.img ;
    friends.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


nextBtn.addEventListener("click", function () {
    currentItem++
    if (currentItem > reviews.length -1 ) {
        currentItem = 0;
    }

    showPerson();
})

prevBtn.addEventListener("click", function () {
    currentItem--
    if (currentItem < 0 ) {
        currentItem = reviews.length -1;
    }

    showPerson();
})

randomBtn.addEventListener("click", function () {
    
  
    currentItem = Math.floor(Math.random() * reviews.length);
    
    showPerson();
  });




