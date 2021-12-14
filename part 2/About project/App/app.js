// const about = document.getElementById("contant-box");
const about = document.querySelector(".contant-box")
const btn = document.querySelectorAll(".tab-btn");
const contants = document.querySelectorAll(".contant");

about.addEventListener("click", function (e){
    // console.log(e.target)
   const id = e.target.dataset.id;
   if (id) {
       btn.forEach(function (btn){
        btn.classList.remove("active")
        e.target.classList.add("active")
       });
       contants.forEach(function (contants){
           contants.classList.remove("active")
       });
       const element = document.getElementById(id);
       element.classList.add("active")
   }
});
