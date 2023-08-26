async function getMenu() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
    const data = await response.json();
    data.forEach(element => {
      const menucard=document.querySelector(".menucard");
      const card=document.createElement('div');
      card.classList='card';
      const cardcode=`
      <div class="topcard">
            <img src=${element.imgSrc} alt="food">
          </div>
          <div class="bottomcard">
            <div class="bottomcardleft">
              <p class="cardp1">${element.name}</p>
              <p class="cardp2">${element.price}</p>
            </div>
            <div class="bottomcardright">
              <img src="./images/plus (1) 1.png" alt="plus">
            </div>
          </div>
      
      
      
      `;
      card.innerHTML+=cardcode;
      menucard.appendChild(card);
    
    });
  
  } 
  catch (error) {
    console.error('Error fetching menu:', error);
    throw error;
  }
}


getMenu();


 document.querySelector(".yourorders").addEventListener("click", () => {
  document.querySelector(".rightmain").innerHTML("");
});
