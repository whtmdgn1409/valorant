let contents = document.querySelectorAll(".riot_content")
let startImg = document.querySelector('.normalImgs')
let changeImg = document.querySelector(".change_img")


function cardFilter(id) {
  switch (id) {
    case 'riot_card1':
      let card1 = document.getElementById("card1")
      card1.style.display = "block";
      break;
    case 'riot_card2':
      let card2 = document.getElementById("card2")
      card2.style.display = "block";
      break;
    case 'riot_card3':
      let card3 = document.getElementById("card3")
      card3.style.display = "block";
      break;
    case 'riot_card4':
      let card4 = document.getElementById("card4")
      card4.style.display = "block";
      break;
    case 'riot_card5':
      let card5 = document.getElementById("card5")
      card5.style.display = "block";
      break;
    case 'riot_card6':
      let card6 = document.getElementById("card6")
      card6.style.display = "block";
      break;
    case 'riot_card7':
      let card7 = document.getElementById("card7")
      card7.style.display = "block";
      break;
    case 'riot_card8':
      let card8 = document.getElementById("card8")
      card8.style.display = "block";
      break;
    case 'riot_card9':
      let card9 = document.getElementById("card9")
      card9.style.display = "block";
      break;
    case 'riot_card10':
      let card10 = document.getElementById("card10")
      card10.style.display = "block";
      break;
    case 'riot_card11':
      let card11 = document.getElementById("card11")
      card11.style.display = "block";
      break;
    case 'riot_card12':
      let card12 = document.getElementById("card12")
      card12.style.display = "block";
      break;
    case 'riot_card13':
      let card13 = document.getElementById("card13")
      card13.style.display = "block";
      break;
    case 'riot_card14':
      let card14 = document.getElementById("card14")
      card14.style.display = "block";
      break;
    case 'riot_card15':
      let card15 = document.getElementById("card15")
      card15.style.display = "block";
      break;
    case 'riot_card16':
      let card16 = document.getElementById("card16")
      card16.style.display = "block";
      break;
    case 'riot_card17':
      let card17 = document.getElementById("card17")
      card17.style.display = "block";
      break;
    case 'riot_card18':
      let card18 = document.getElementById("card18")
      card18.style.display = "block";
      break;
    case 'riot_card19':
      let card19 = document.getElementById("card19")
      card19.style.display = "block";
      break;
  }
}
function cardDelete(id) {
  switch (id) {
    case 'riot_card1':
      let card1 = document.getElementById("card1")
      card1.style.display = "none";
      break;
    case 'riot_card2':
      let card2 = document.getElementById("card2")
      card2.style.display = "none";
      break;
    case 'riot_card3':
      let card3 = document.getElementById("card3")
      card3.style.display = "none";
      break;
    case 'riot_card4':
      let card4 = document.getElementById("card4")
      card4.style.display = "none";
      break;
    case 'riot_card5':
      let card5 = document.getElementById("card5")
      card5.style.display = "none";
      break;
    case 'riot_card6':
      let card6 = document.getElementById("card6")
      card6.style.display = "none";
      break;
    case 'riot_card7':
      let card7 = document.getElementById("card7")
      card7.style.display = "none";
      break;
    case 'riot_card8':
      let card8 = document.getElementById("card8")
      card8.style.display = "none";
      break;
    case 'riot_card9':
      let card9 = document.getElementById("card9")
      card9.style.display = "none";
      break;
    case 'riot_card10':
      let card10 = document.getElementById("card10")
      card10.style.display = "none";
      break;
    case 'riot_card11':
      let card11 = document.getElementById("card11")
      card11.style.display = "none";
      break;
    case 'riot_card12':
      let card12 = document.getElementById("card12")
      card12.style.display = "none";
      break;
    case 'riot_card13':
      let card13 = document.getElementById("card13")
      card13.style.display = "none";
      break;
    case 'riot_card14':
      let card14 = document.getElementById("card14")
      card14.style.display = "none";
      break;
    case 'riot_card15':
      let card15 = document.getElementById("card15")
      card15.style.display = "none";
      break;
    case 'riot_card16':
      let card16 = document.getElementById("card16")
      card16.style.display = "none";
      break;
    case 'riot_card17':
      let card17 = document.getElementById("card17")
      card17.style.display = "none";
      break;
    case 'riot_card18':
      let card18 = document.getElementById("card18")
      card18.style.display = "none";
      break;
    case 'riot_card19':
      let card19 = document.getElementById("card19")
      card19.style.display = "none";
      break;
  }
}
contents.forEach((content) => {
  let cardName = content.getAttribute('id');
  content.addEventListener("mouseover", function () {
    startImg.style.display = 'none';
    changeImg.style.display = 'block';
    cardFilter(cardName);
  })
  content.addEventListener("mouseout", function () {
    changeImg.style.display = 'none';
    cardDelete(cardName);
    startImg.style.display = 'flex';
  })
})
