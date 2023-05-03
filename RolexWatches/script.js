
const burger = document.querySelector("#burger")
const menu = document.querySelector("#menu")

burger.addEventListener("click", ()=>{
	menu.classList.toggle("disp")
})


function fun(){
	let btn = document.querySelector(".header_btn")
	let myText = document.querySelectorAll(".nav_item")
const header = document.querySelector(".header")
window.onscroll = () =>{
	if(window.pageYOffset > 20){
		header.classList.add("header_active")
		  myText.forEach(item => {
        item.style.color = "white";
      });
		   btn.style.color = "white";
		    btn.style.borderColor = "white";
	}else{
		header.classList.remove("header_active")
          myText.forEach(item => {
        item.style.color = "black";
      });
           btn.style.color = "black";
             btn.style.borderColor = "";
	}
  }
}

fun()



const scrollUpButton = document.getElementById('btn_scroll');

scrollUpButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});