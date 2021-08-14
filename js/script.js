// bg color red

function bgred(){
    document.body.style.backgroundColor = 'Red';
};

// bg color Green
let bg_green = document.getElementById('bg_Green');

bg_green.onclick = bg_color_green;
 


function bg_color_green(){

    document.body.style.backgroundColor = 'Green';
};



// bg color bg_blue
let bgBlue = document.getElementById('bg_blue')

bgBlue.onclick = function(){
     document.body.style.backgroundColor = 'Blue';
};

// bg color Golden_Rod

let GoldenRod = document.getElementById('Golden_Rod');

GoldenRod.addEventListener('click', getGoldenRod )
 function getGoldenRod(){
     document.body.style.backgroundColor = 'GoldenRod';
 };

 // bg color Maroon

 let maroon = document.getElementById('bg_Maroon');

 maroon.addEventListener('click', function(){
    document.body.style.backgroundColor = 'Maroon';
 });


  // bg color Wheat

  document.getElementById('bg_Wheat').addEventListener('click', function(){
    document.body.style.backgroundColor = 'Wheat';
  })

  
//dg klfklgklfg kf dkg
  document.getElementById('Clicked').addEventListener('click', function(){

    const textArea = document.getElementById('text_main');
    
    const addtext = document.createElement('p');
     addtext.innerText = textArea.value;
     
    const commentCont = document.getElementById('countener');

    commentCont.appendChild(addtext);

    textArea.value = '';


});



////evant 


document.getElementById('delat_btn').addEventListener('click', function(){
  document.getElementById('out_text').style.display = 'none';
});

document.getElementById('detat_confrom').addEventListener('focus',function(){
  document.body.style.backgroundColor = 'Red';
});

document.getElementById('detat_confrom').addEventListener('blur', function(){
  document.body.style.backgroundColor = 'White';
});

document.getElementById('detat_confrom').addEventListener('keyup', function(evants){

  const delatBtn = document.getElementById('delat_btn');
  
  if(evants.target.value == 'delat'){
      delatBtn.removeAttribute('disabled');
  }else{
      delatBtn.setAttribute('disabled', true);
  }
      
  
});

///cxvfc f fhf h fgh gf 


document.getElementById('clicked_it').addEventListener('click', function(){
      
  const userName = document.getElementById('user_name');
  const sureName = document.getElementById('sure_name');
 
  const fullName = userName.value + sureName.value;

 console.log(fullName);



});

