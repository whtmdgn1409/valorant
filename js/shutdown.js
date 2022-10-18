const logo = document.querySelector('.wrap_riot_logo')
const cancelbtn = document.querySelector('.wrap_cancel_btn')
const dropDownMenu = document.querySelector('.wrap_section')
const openbtn = document.querySelector('header .logo1')
const body = document.body;

function shutdown() {
  dropDownMenu.style.display = 'none';
  body.style.overflowY = 'scroll';
}
function openUp() {
  dropDownMenu.style.display = 'block';
  body.style.overflowY = 'hidden';
}
logo.addEventListener("click", function(){
  shutdown();
})
cancelbtn.addEventListener("click", function(){
  shutdown();
})
openbtn.addEventListener("click", function() {
  openUp();
})