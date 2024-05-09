// fct et 
function changeLampeAnd1() {
    var Image_Id = document.getElementById('getImageAnd');
    if (Image_Id.src.match("img/and/00.png")) {
        Image_Id.src = "img/and/10.png";
    }
    else if (Image_Id.src.match("img/and/11.png")) {
        Image_Id.src = "img/and/01.png";
    }
    else if (Image_Id.src.match("img/and/10.png")) {
        Image_Id.src = "img/and/00.png";
    }
    else if (Image_Id.src.match("img/and/01.png")) {
        Image_Id.src = "img/and/11.png";
    }
} 


function changeLampeAnd2() {
    var Image_Id = document.getElementById('getImageAnd');
    if (Image_Id.src.match("img/and/00.png")) {
        Image_Id.src = "img/and/01.png";
    }
    else if (Image_Id.src.match("img/and/01.png")) {
        Image_Id.src = "img/and/00.png";
    }
    else if (Image_Id.src.match("img/and/10.png")) {
        Image_Id.src = "img/and/11.png";
    }
    else if (Image_Id.src.match("img/and/11.png")) {
        Image_Id.src = "img/and/10.png";
    }
} 


// fct ou
function changeLampeOr1() {
    var Image_Id = document.getElementById('getImageOr');
    if (Image_Id.src.match("img/or/00.png")) {
        Image_Id.src = "img/or/10.png";
    }
    else if (Image_Id.src.match("img/or/11.png")) {
        Image_Id.src = "img/or/01.png";
    }
    else if (Image_Id.src.match("img/or/10.png")) {
        Image_Id.src = "img/or/00.png";
    }
    else if (Image_Id.src.match("img/or/01.png")) {
        Image_Id.src = "img/or/11.png";
    }
}

function changeLampeOr2() {
    var Image_Id = document.getElementById('getImageOr');
    if (Image_Id.src.match("img/or/00.png")) {
        Image_Id.src = "img/or/01.png";
    }
    else if (Image_Id.src.match("img/or/01.png")) {
        Image_Id.src = "img/or/00.png";
    }
    else if (Image_Id.src.match("img/or/10.png")) {
        Image_Id.src = "img/or/11.png";
    }
    else if (Image_Id.src.match("img/or/11.png")) {
        Image_Id.src = "img/or/10.png";
    }
} 


// fct xor
function changeLampeXor1() {
    var Image_Id = document.getElementById('getImageXor');
    if (Image_Id.src.match("img/xor/00.png")) {
        Image_Id.src = "img/xor/10.png";
    }
    else if (Image_Id.src.match("img/xor/11.png")) {
        Image_Id.src = "img/xor/01.png";
    }
    else if (Image_Id.src.match("img/xor/10.png")) {
        Image_Id.src = "img/xor/00.png";
    }
    else if (Image_Id.src.match("img/xor/01.png")) {
        Image_Id.src = "img/xor/11.png";
    }
}

function changeLampeXor2() {
    var Image_Id = document.getElementById('getImageXor');
    if (Image_Id.src.match("img/xor/00.png")) {
        Image_Id.src = "img/xor/01.png";
    }
    else if (Image_Id.src.match("img/xor/01.png")) {
        Image_Id.src = "img/xor/00.png";
    }
    else if (Image_Id.src.match("img/xor/10.png")) {
        Image_Id.src = "img/xor/11.png";
    }
    else if (Image_Id.src.match("img/xor/11.png")) {
        Image_Id.src = "img/xor/10.png";
    }
} 


// fct yes 
function changeLampeYes() {
    var Image_Id = document.getElementById('getImageYes');
    if (Image_Id.src.match("img/yes/0.png")) {
        Image_Id.src = "img/yes/1.png";
    }
    else {
        Image_Id.src = "img/yes/0.png";}
    }


// fct not 
function changeLampeNot() {
    var Image_Id = document.getElementById('getImageNot');
    if (Image_Id.src.match("img/not/0.png")) {
        Image_Id.src = "img/not/1.png";
    }
    else {
        Image_Id.src = "img/not/0.png";}
    }

    
// exercice 1 
function changeLampeEx11() {
    const images = {
      '0000.png': '1000.png',
      '1000.png': '0000.png',
      '0001.png': '1001.png',
      '1001.png': '0001.png',
      '0010.png': '1010.png',
      '1010.png': '0010.png',
      '0011.png': '1011.png',
      '1011.png': '0011.png',
      '0100.png': '1100.png',
      '1100.png': '0100.png',
      '0101.png': '1101.png',
      '1101.png': '0101.png',
      '0110.png': '1110.png',
      '1110.png': '0110.png',
      '0111.png': '1111.png',
      '1111.png': '0111.png',
    };
    const imageEl = document.getElementById('getImageEx1');
    const currentSrc = imageEl.src.split('/').pop();
    const oppositeSrc = images[currentSrc]; 
    if (oppositeSrc) { 
      imageEl.src = imageEl.src.replace(currentSrc, oppositeSrc); 
    }
  }
  
  function changeLampeEx11() {
    const images = {
      '0000.png': '1000.png',
      '1000.png': '0000.png',
      '0001.png': '1001.png',
      '1001.png': '0001.png',
      '0010.png': '1010.png',
      '1010.png': '0010.png',
      '0011.png': '1011.png',
      '1011.png': '0011.png',
      '0100.png': '1100.png',
      '1100.png': '0100.png',
      '0101.png': '1101.png',
      '1101.png': '0101.png',
      '0110.png': '1110.png',
      '1110.png': '0110.png',
      '0111.png': '1111.png',
      '1111.png': '0111.png',
    };
    const imageEl = document.getElementById('getImageEx1');
    const currentSrc = imageEl.src.split('/').pop();
    const oppositeSrc = images[currentSrc]; 
    if (oppositeSrc) { 
      imageEl.src = imageEl.src.replace(currentSrc, oppositeSrc); 
    }
  }
  


  
  function changeLampeEx12() {
    const images = {
        '0000.png': '0100.png',
        '0100.png': '0000.png',
        '0001.png': '0101.png',
        '0101.png': '0001.png',
        '0010.png': '0110.png',
        '0110.png': '0010.png',
        '0011.png': '0111.png',
        '0111.png': '0011.png',
        '1000.png': '1100.png',
        '1100.png': '1000.png',
        '1001.png': '1101.png',
        '1101.png': '1001.png',
        '1010.png': '1110.png',
        '1110.png': '1010.png',
        '1011.png': '1111.png',
        '1111.png': '1011.png',
      };
    const imageEl = document.getElementById('getImageEx1');
    const currentSrc = imageEl.src.split('/').pop();
    const oppositeSrc = images[currentSrc]; 
    if (oppositeSrc) { 
      imageEl.src = imageEl.src.replace(currentSrc, oppositeSrc); 
    }
  }



  
  function changeLampeEx13() {
    const images = {
        '0000.png': '0010.png',
        '0010.png': '0000.png',
        '0001.png': '0011.png',
        '0011.png': '0001.png',
        '0100.png': '0110.png',
        '0110.png': '0100.png',
        '0101.png': '0111.png',
        '0111.png': '0101.png',
        '1000.png': '1010.png',
        '1010.png': '1000.png',
        '1001.png': '1011.png',
        '1011.png': '1001.png',
        '1100.png': '1110.png',
        '1110.png': '1100.png',
        '1101.png': '1111.png',
        '1111.png': '1101.png',
      };
    const imageEl = document.getElementById('getImageEx1');
    const currentSrc = imageEl.src.split('/').pop();
    const oppositeSrc = images[currentSrc]; 
    if (oppositeSrc) { 
      imageEl.src = imageEl.src.replace(currentSrc, oppositeSrc); 
    }
  }

  function changeLampeEx14() {
    const images = {
        '0000.png': '0001.png',
        '0001.png': '0000.png',
        '0010.png': '0011.png',
        '0011.png': '0010.png',
        '0100.png': '0101.png',
        '0101.png': '0100.png',
        '0110.png': '0111.png',
        '0111.png': '0110.png',
        '1000.png': '1001.png',
        '1001.png': '1000.png',
        '1010.png': '1011.png',
        '1011.png': '1010.png',
        '1100.png': '1101.png',
        '1101.png': '1100.png',
        '1110.png': '1111.png',
        '1111.png': '1110.png',
      };
    const imageEl = document.getElementById('getImageEx1');
    const currentSrc = imageEl.src.split('/').pop();
    const oppositeSrc = images[currentSrc]; 
    if (oppositeSrc) { 
      imageEl.src = imageEl.src.replace(currentSrc, oppositeSrc); 
    }
  }


function changeLampeEx21() {
  const images = {
    '000': '100',
    '100': '000',
    '001': '101',
    '101': '001',
    '010': '110',
    '110': '010',
    '011': '111',
    '111': '011',
  };
  const imageEl = document.getElementById('getImageEx2');
  const currentSrc = imageEl.src.split('/').pop().slice(0, 3); 
  const oppositeSrc = images[currentSrc];
  if (oppositeSrc) {
    imageEl.src = imageEl.src.replace(currentSrc, oppositeSrc);
  }
}

function changeLampeEx22() {
    const images = {
      '000': '010',
      '010': '000',
      '001': '011',
      '011': '001',
      '100': '110',
      '110': '100',
      '101': '111',
      '111': '101',
    };
    const imageEl = document.getElementById('getImageEx2');
    const currentSrc = imageEl.src.split('/').pop().slice(0, 3); 
    const oppositeSrc = images[currentSrc];
    if (oppositeSrc) {
      imageEl.src = imageEl.src.replace(currentSrc, oppositeSrc);
    }
  }

  function changeLampeEx23() {
    const images = {
        '000': '001',
        '001': '000',
        '010': '011',
        '011': '010',
        '100': '101',
        '101': '100',
        '110': '111',
        '111': '110',
      };      
    const imageEl = document.getElementById('getImageEx2');
    const currentSrc = imageEl.src.split('/').pop().slice(0, 3); 
    const oppositeSrc = images[currentSrc];
    if (oppositeSrc) {
      imageEl.src = imageEl.src.replace(currentSrc, oppositeSrc);
    }
  }
    

function changeLampeEx31() {
  const images = {
    '000': '100',
    '100': '000',
    '001': '101',
    '101': '001',
    '010': '110',
    '110': '010',
    '011': '111',
    '111': '011',
  };
  const imageEl = document.getElementById('getImageEx3');
  const currentSrc = imageEl.src.split('/').pop().slice(0, 3); 
  const oppositeSrc = images[currentSrc];
  if (oppositeSrc) {
    imageEl.src = imageEl.src.replace(currentSrc, oppositeSrc);
  }
}

function changeLampeEx32() {
    const images = {
      '000': '010',
      '010': '000',
      '001': '011',
      '011': '001',
      '100': '110',
      '110': '100',
      '101': '111',
      '111': '101',
    };
    const imageEl = document.getElementById('getImageEx3');
    const currentSrc = imageEl.src.split('/').pop().slice(0, 3); 
    const oppositeSrc = images[currentSrc];
    if (oppositeSrc) {
      imageEl.src = imageEl.src.replace(currentSrc, oppositeSrc);
    }
  }

  function changeLampeEx33() {
    const images = {
        '000': '001',
        '001': '000',
        '010': '011',
        '011': '010',
        '100': '101',
        '101': '100',
        '110': '111',
        '111': '110',
      };      
    const imageEl = document.getElementById('getImageEx3');
    const currentSrc = imageEl.src.split('/').pop().slice(0, 3); 
    const oppositeSrc = images[currentSrc];
    if (oppositeSrc) {
      imageEl.src = imageEl.src.replace(currentSrc, oppositeSrc);
    }
  }
   

// ##################################################
function changeLampeEx41() {
    var Image_Id = document.getElementById('getImageEx4');
    if (Image_Id.src.match("img/Exercice4/00.png")) {
        Image_Id.src = "img/Exercice4/10.png";
    }
    else if (Image_Id.src.match("img/Exercice4/11.png")) {
        Image_Id.src = "img/Exercice4/01.png";
    }
    else if (Image_Id.src.match("img/Exercice4/10.png")) {
        Image_Id.src = "img/Exercice4/00.png";
    }
    else if (Image_Id.src.match("img/Exercice4/01.png")) {
        Image_Id.src = "img/Exercice4/11.png";
    }
}

function changeLampeEx42() {
    var Image_Id = document.getElementById('getImageEx4');
    if (Image_Id.src.match("img/Exercice4/00.png")) {
        Image_Id.src = "img/Exercice4/01.png";
    }
    else if (Image_Id.src.match("img/Exercice4/01.png")) {
        Image_Id.src = "img/Exercice4/00.png";
    }
    else if (Image_Id.src.match("img/Exercice4/10.png")) {
        Image_Id.src = "img/Exercice4/11.png";
    }
    else if (Image_Id.src.match("img/Exercice4/11.png")) {
        Image_Id.src = "img/Exercice4/10.png";
    }
} 



// ####################################
function IMG_NOT () {
  var Image_Id = document.getElementById('getImageNot'); 
  Image_Id.src = "img/not/0.png";   
}

function IMG_AND () {
  var Image_Id = document.getElementById('getImageAnd'); 
  Image_Id.src = "img/and/00.png";   
}

function IMG_OR () {
  var Image_Id = document.getElementById('getImageOr'); 
  Image_Id.src = "img/or/00.png";   
}

function IMG_XOR () {
  var Image_Id = document.getElementById('getImageXor'); 
  Image_Id.src = "img/xor/00.png";   
}

function IMG_EX() {
  var Image_Id = document.getElementById('getImageEx1'); 
  Image_Id.src = "img/Exercice1/0000.png";
  var Image_Id = document.getElementById('getImageEx2'); 
  Image_Id.src = "img/Exercice2/000.png";
  var Image_Id = document.getElementById('getImageEx3'); 
  Image_Id.src = "img/Exercice3/000.png";
  var Image_Id = document.getElementById('getImageEx4'); 
  Image_Id.src = "img/Exercice4/00.png";
  
}


// ##########################################"

