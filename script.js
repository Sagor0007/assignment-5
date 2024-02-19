function busTicket(){

  const btn = document.getElementsByClassName('add-btn');
    let count = 0;
  for(const bttn of btn){
    bttn.addEventListener('click', function(e){
      count = count - 1;
      document.getElementById('bus-co').innerText = count;
  const btnName = (e.target.childNodes[1].innerText);

 const economys = document.getElementById('economy');
const li = document.createElement('li')
 const p = document.createElement('p');
 p.innerText = btnName;
 const p2 = document.createElement('p');
 p2.innerText = '';
 li.appendChild(p);
 li.appendChild(p2);

 economys.appendChild(li);


      addElement(e.target.classList.add('bg-green-400'));


    })
  }
 
  
    hideElement('first-section');
    hideElement('first-scound-section');
    removeElement('middle-section');
    removeElement('footer-section');
    removeElement('navbar-section');
    removeElement('hr-section');

    ;
    
    
}

  function addBtn(){
    removeElement('verify-section');
    hideElement('middle-section');
    hideElement('footer-section');
    hideElement('navbar-section');
    hideElement('first-section');
    hideElement('first-scound-section');
    hideElement('hr-section');
   
    
  }



function removeElement(elmentid){
  const bgs = document.getElementById(elmentid);
  bgs.classList.remove('hidden')
}

function hideElement(elmentid){
    const bg = document.getElementById(elmentid);
    bg.classList.add('hidden');
}

function addElement(elmentid){
  const add = document.getElementsByClassName(elmentid);
  
}

//count strat
const allBtn = document.getElementsByClassName("add-btn");
console.log(allBtn)

let count = 40;

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count -= 1;
    document.getElementById('bus-count')
    .innerText = count;
  })
}

//count end















