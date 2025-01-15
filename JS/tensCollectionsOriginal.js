console.log("hello there...");

//BEGIN SHOW SEARCH DIV//
const searchBtn = document.querySelector(".searchButton");
const searchDiv = document.querySelector(".showSearch");

searchBtn.addEventListener("click", () => {
    searchDiv.classList.toggle("showSearch");
});
//END SHOW SEARCH DIV//

//BEGIN HIDE SEARCH DIV//
const hideSearchBtn = document.querySelector(".hideSearch");
const hideSearchDiv = document.querySelector(".showSearch");

hideSearchBtn.addEventListener("click", () => {
    hideSearchDiv.classList.toggle("showSearch");
});
//END HIDE SEARCH DIV//

// BEGIN LENS DIV DROP DOWN//
const showLensBtn = document.querySelector(".LensesButton");
const lensDiv = document.querySelector(".showLens");

showLensBtn.addEventListener("click", () => {
    lensDiv.classList.toggle("showLens");
});
// END LENS DIV DROP DOWN//

// BEGIN STORE DROP DOWN//
const storeButton = document.querySelector(".storeButton");
const storeMenu = document.querySelector(".storeDropDown");

storeButton.addEventListener("click", () => {
    storeMenu.classList.toggle("showStore")
})
// END STORE DROP DOWN//



// BEGIN COMMUNITY DROP DOWN//
const communityButton = document.querySelector(".communityButton")
const communityMenu = document.querySelector(".communityDropDown")

communityButton.addEventListener("click", () =>{
    communityMenu.classList.toggle("showCommunity")
})
// END COMMUNITY DROP DOWN//

// BEGIN HIDE ACCOLADE BUTTON//

document.addEventListener('DOMContentLoaded', function() {
  var accoladeButtons = document.querySelectorAll('.accoladeButton');

  accoladeButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      var accoladeItem = event.target.closest('.accoladeItem');
      if (accoladeItem) {
        accoladeItem.classList.toggle('hideAccolade');
        accoladeItem.style.display = accoladeItem.classList.contains('hideAccolade') ? 'none' : '';
      }
    });
  });
});


// END HIDE ACCOLADE BUTTON//



// BEGIN FEATURED PROCUCT HOVER CYCLE IMAGES//
document.addEventListener('DOMContentLoaded', function() {
    const productFrames = document.querySelectorAll('.productPictureFrame');

    function showImage(frame, index) {
        const images = frame.querySelectorAll('img');
        images.forEach((img, i) => {
            if (i === index) {
                img.style.transition = 'opacity 0.5s';
                img.style.opacity = 1;
            } else {
                img.style.transition = 'opacity 0.5s';
                img.style.opacity = 0;
            }
        });
    }

    productFrames.forEach(frame => {
        let interval;

        frame.addEventListener('mouseenter', function() {
            let currentIndex = 0;
            const images = frame.querySelectorAll('img');
            interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(frame, currentIndex);
            }, 1000);
        });

        frame.addEventListener('mouseleave', function() {
            clearInterval(interval);
            showImage(frame, 0);
        });
    });
});
// END FEATURED PROCUCT HOVER CYCLE IMAGES//

//rotating arrow buttons on nav//
    document.addEventListener('DOMContentLoaded', function() {
    // This line sets up an event listener that waits for the DOM content to be fully loaded before running the enclosed code.
    
    var rotateButtons = document.querySelectorAll('.rotate-button');
    // This line selects all elements with the class '.rotate-button' and assigns them to the variable 'rotateButtons'.

    rotateButtons.forEach(function(button) {
        // This loop iterates through each element in 'rotateButtons'.
        
        var svgImage = button.querySelector('.rotate');
        // For each '.rotate-button', it finds the first element with the class '.rotate' inside it and assigns it to the variable 'svgImage'.

        var translateY = false;
        // This variable keeps track of the translation state. It starts as 'false' indicating that the element is initially not translated.

        button.addEventListener('click', function(event) {
            event.preventDefault();
            // This line prevents the default behavior of the click event. In this case, it prevents a page reload if the button is within a form.

            if (!translateY) {
                svgImage.style.transform = 'rotate(180deg) translateY(-5%)';
                // If 'translateY' is false (meaning the element is not translated), it applies a rotation of 180 degrees and translates it vertically by 10%.
                translateY = true; // Toggle translation state to true.
            } else {
                svgImage.style.transform = 'rotate(0deg) translateY(10%)';
                // If 'translateY' is true (meaning the element is already translated), it resets the translation to 0%.
                translateY = false; // Toggle translation state to false.
            }
        });
    });
});

//BEGIN Currency Selector//

document.addEventListener('DOMContentLoaded', function() {
    var selectedCurrency = localStorage.getItem('selectedCurrency') || 'USD';

    showParagraphsByCurrency(selectedCurrency);

    document.getElementById('currencySelect').value = selectedCurrency;

    document.getElementById('currencySelect').addEventListener('change', function() {
    var newCurrency = this.value;

    localStorage.setItem('selectedCurrency', newCurrency);

    showParagraphsByCurrency(newCurrency);
    });

    function showParagraphsByCurrency(currency) {
    var nonHiddenParagraphs = document.querySelectorAll('p:not(.hidden)');
    nonHiddenParagraphs.forEach(function(paragraph) {
        paragraph.style.display = 'block'; 
    });

    var hiddenParagraphs = document.querySelectorAll('p.hidden');
    hiddenParagraphs.forEach(function(paragraph) {
        paragraph.style.display = 'none'; 
    });

    var selectedParagraphs = document.querySelectorAll('p.' + currency);
    selectedParagraphs.forEach(function(paragraph) {
        paragraph.style.display = 'block'; 
    });
    }
});

//END Currency Selector//





// END HEADER AND SEARCH SCRIPTS
// BEGIN original collections page


// BEGIN ImageSlider SCRIPTS

const slider = document.querySelector("#imageComparisonSlider");
const sliderImgWrapper = document.querySelector("#imageComparisonSlider .imageWrapper");
const sliderHandle = document.querySelector("#imageComparisonSlider .handle");

slider.addEventListener("click", sliderMouseClick);

function sliderMouseClick(event) {
  const sliderLeftX = slider.offsetLeft;
  const sliderWidth = slider.clientWidth;
  const sliderHandlWidth = sliderHandle.clientWidth;

  let mouseX = event.clientX - sliderLeftX;
  if(mouseX < 0) mouseX = 0;
  else if(mouseX > sliderWidth) mouseX = sliderWidth;

  sliderImgWrapper.style.width = `${((1 - mouseX/sliderWidth) * 100).toFixed(4)}%`;
  sliderHandle.style.left = `calc(${((mouseX/sliderWidth) * 100).toFixed(4)}% - ${sliderHandlWidth/2}px)`;
}

// END ImageSlider SCRIPTS

// BEGIN LENS EXPERIENCE SELECTION SCRIPTS

// BEGIN LABEL TEXT CHANGE WHEN BUTTON PRESSED SCRIPTS***************

//BEGIN change text to 'Original' when OG button is pressed
document.addEventListener('DOMContentLoaded', function() {
  const originalButton = document.querySelector('.originalButton');
  let labelTextAfter = document.querySelector('.labelTextAfter');

  originalButton.addEventListener('click', function() {
      labelTextAfter.textContent = "Original Lens";
      labelTextAfter.style.color = "white";
  });
});
//END change text to 'original' when OG button is pressed


//BEGIN change text to 'Boulevard' when BLVD button is pressed
document.addEventListener('DOMContentLoaded', function() {
  const boulevardButton = document.querySelector('.boulevardButton');
  const labelTextAfter = document.querySelector('.labelTextAfter');

  boulevardButton.addEventListener('click', function() {
      labelTextAfter.textContent = "Boulevard Lens";
      labelTextAfter.style.color = "white";
  });
});
//END change text to 'Boulevard' when BLVD button is pressed


//BEGIN change text to 'Spectachrome' when SPTCRME button is pressed
document.addEventListener('DOMContentLoaded', function() {
  const spectachromeButton = document.querySelector('.spectachromeButton');
  const labelTextAfter = document.querySelector('.labelTextAfter');

  spectachromeButton.addEventListener('click', function() {
      labelTextAfter.textContent = "Spectachrome Lens";
      labelTextAfter.style.color = "white";
  });
});
//END change text to 'Spectachrome' when SPTCRME button is pressed

//BEGIN change text to 'tropic high' when tropicHigh button is pressed
document.addEventListener('DOMContentLoaded', function() {
  const tropicHighButton = document.querySelector('.tropichighButton');
  const labelTextAfter = document.querySelector('.labelTextAfter');

  tropicHighButton.addEventListener('click', function() {
      labelTextAfter.textContent = "Tropic High Lens";
      labelTextAfter.style.color = "white";
  });
});
//END change text to 'tropic high' when tropicHigh button is pressed


//BEGIN change text to 'evergreen' when evergreen button is pressed
document.addEventListener('DOMContentLoaded', function() {
  const evergreenButton = document.querySelector('.evergreenButton');
  const labelTextAfter = document.querySelector('.labelTextAfter');

  evergreenButton.addEventListener('click', function() {
      labelTextAfter.textContent = "Evergreen Lens";
      labelTextAfter.style.color = "white";
  });
});
//END change text to 'evergreen' when evergreen button is pressed
// END ALL LENS EXPERIENCE 'AFTER LABEL' TEXT CHANGES//

//BEGIN ALL AFTER LABEL BACKGROUND IMAGE CHANGES//********************

//BEGIN ORIGINAL AFTER LABEL CHANGE//
document.addEventListener('DOMContentLoaded', function() {
  const originalButton = document.querySelector('.originalButton');
  const labelAfterPicture = document.querySelector('.labelAfterPicture');

  originalButton.addEventListener('click', function() {
      labelAfterPicture.style.backgroundImage = "url(/images/OriginalPage/originalON.png)";
  });
});
//END ORIGINAL AFTER LABEL CHANGE//



//BEGIN BOULEVARD AFTER LABEL CHANGE//
document.addEventListener('DOMContentLoaded', function() {
  const boulevardButton = document.querySelector('.boulevardButton');
  const labelAfterPicture = document.querySelector('.labelAfterPicture');

  boulevardButton.addEventListener('click', function() {
      labelAfterPicture.style.backgroundImage = "url(/images/BouleVardPage/boulevardON.png)";
  });
});
//END BOULEVARD AFTER LABEL CHANGE//



//BEGIN SPECTACHROME AFTER LABEL CHANGE//
document.addEventListener('DOMContentLoaded', function() {
  const spectachromeButton = document.querySelector('.spectachromeButton');
  const labelAfterPicture = document.querySelector('.labelAfterPicture');

  spectachromeButton.addEventListener('click', function() {
      labelAfterPicture.style.backgroundImage = "url(/images/SpectachromePage/specON.png)";
  });
});
//END SPECTACHROME AFTER LABEL CHANGE//

//BEGIN TROPIC HIGH AFTER LABEL CHANGE//
document.addEventListener('DOMContentLoaded', function() {
  const tropichighButton = document.querySelector('.tropichighButton');
  const labelAfterPicture = document.querySelector('.labelAfterPicture');

  tropichighButton.addEventListener('click', function() {
      labelAfterPicture.style.backgroundImage = "url(/images/TropicHighPage/tropicON.png)";
  });
});
//END TROPIC HIGH AFTER LABEL CHANGE//


//BEGIN EVERGREEN AFTER LABEL CHANGE//
document.addEventListener('DOMContentLoaded', function() {
  const evergreenButton = document.querySelector('.evergreenButton');
  const labelAfterPicture = document.querySelector('.labelAfterPicture');

  evergreenButton.addEventListener('click', function() {
      labelAfterPicture.style.backgroundImage = "url(/images/EvergreenPage/evergreenON.png)";
  });
});
//END EVERGREEN AFTER LABEL CHANGE//
// END ***ALL*** AFTER LABEL CHANGES//



// BEGIN ***ALL*** REGULAR LABEL PHOTO CHANGES//



// BEGIN original REGULAR LABEL PHOTO CHANGES//
document.addEventListener("DOMContentLoaded", function() {
  var originalButton = document.querySelector('.originalButton');

  originalButton.addEventListener('click', function() {
      var labelBeforePicture = document.querySelector('.labelBeforePicture');
      
      labelBeforePicture.style.backgroundImage = "url(/images/OriginalPage/originalOFF.png)";
  });
});
// END original REGULAR LABEL PHOTO CHANGES//



// BEGIN boulevard REGULAR LABEL PHOTO CHANGES//
document.addEventListener("DOMContentLoaded", function() {
  var boulevardButton = document.querySelector('.boulevardButton');

  boulevardButton.addEventListener('click', function() {
      var labelBeforePicture = document.querySelector('.labelBeforePicture');
      
      labelBeforePicture.style.backgroundImage = "url(/images/BouleVardPage/boulevardOFF.png)";
  });
});
// END boulevard REGULAR LABEL PHOTO CHANGES//


// BEGIN spectachrome REGULAR LABEL PHOTO CHANGES//
document.addEventListener("DOMContentLoaded", function() {
  var spectachromeButton = document.querySelector('.spectachromeButton');

  spectachromeButton.addEventListener('click', function() {
      var labelBeforePicture = document.querySelector('.labelBeforePicture');
      
      labelBeforePicture.style.backgroundImage = "url(/images/SpectachromePage/specOFF.png)";
  });
});
// END spectachrome REGULAR LABEL PHOTO CHANGES//

//BEGIN TROPIC HIGH REGULAR LABEL PHOTO CHANGES//
document.addEventListener("DOMContentLoaded", function() {
  var tropichighButton = document.querySelector('.tropichighButton');

  tropichighButton.addEventListener('click', function() {
      var labelBeforePicture = document.querySelector('.labelBeforePicture');
      
      labelBeforePicture.style.backgroundImage = "url(/images/TropicHighPage/tropicOFF.png)";
  });
});
//END TROPIC HIGH REGULAR LABEL PHOTO CHANGES//


//BEGIN EVERGREEN REGULAR LABEL PHOTO CHANGES//
document.addEventListener("DOMContentLoaded", function() {
  var evergreenButton = document.querySelector('.evergreenButton');

  evergreenButton.addEventListener('click', function() {
      var labelBeforePicture = document.querySelector('.labelBeforePicture');
      
      labelBeforePicture.style.backgroundImage = "url(/images/EvergreenPage/evergreenOFF.png)";
  });
});
//END EVERGREEN REGULAR LABEL PHOTO CHANGES//
//END ***ALL*** REGULAR LABEL PHOTO CHANGES//



//BEGIN ***ALL*** BEFORE and AFTER PHOTO CHANGES//

//BEGIN original BEFORE PHOTO// 
document.addEventListener("DOMContentLoaded", function() {
  var originalButton = document.querySelector('.originalButton');

  originalButton.addEventListener('click', function() {
      var beforePhoto = document.querySelector('.beforePhoto');
      
      beforePhoto.src = "/images/OriginalPage/originalOFF.png";
  });
});
//END original BEFORE PHOTO//

//BEGIN original AFTER photo//
document.addEventListener("DOMContentLoaded", function() {
  var originalButton = document.querySelector('.originalButton');

  originalButton.addEventListener('click', function() {
      var afterPhoto = document.querySelector('.afterPhoto');
      
      afterPhoto.src = "/images/OriginalPage/originalON.png";
  });
});
//END original AFTER photo//



//BEGIN BOULEVARD BEFORE PHOTO//
document.addEventListener("DOMContentLoaded", function() {
  var boulevardButton = document.querySelector('.boulevardButton');

  boulevardButton.addEventListener('click', function() {
      var beforePhoto = document.querySelector('.beforePhoto');
      
      beforePhoto.src = "/images/BouleVardPage/boulevardOFF.png";
  });
});
//BEGIN BOULEVARD BEFORE PHOTO//



//BEGIN Boulevard AFTER photo//
document.addEventListener("DOMContentLoaded", function() {
  var boulevardButton = document.querySelector('.boulevardButton');

  boulevardButton.addEventListener('click', function() {
      var afterPhoto = document.querySelector('.afterPhoto');
      
      afterPhoto.src = "/images/BouleVardPage/boulevardON.png";
  });
});
//END Boulevard AFTER photo//



//begin spctachrome BEFORE photo//
document.addEventListener("DOMContentLoaded", function() {
  var spectachromeButton = document.querySelector('.spectachromeButton');

  spectachromeButton.addEventListener('click', function() {
      var beforePhoto = document.querySelector('.beforePhoto');
      
      beforePhoto.src = "/images/SpectachromePage/specOFF.png";
  });
});
//END spctachrome BEFORE photo//



//begin spctachrome AFTER photo//
document.addEventListener("DOMContentLoaded", function() {
  var spectachromeButton = document.querySelector('.spectachromeButton');

  spectachromeButton.addEventListener('click', function() {
      var afterPhoto = document.querySelector('.afterPhoto');
      
      afterPhoto.src = "/images/SpectachromePage/specON.png";
  });
});
//END spctachrome AFTER photo//



//begin tropic high BEFORE photo//
document.addEventListener("DOMContentLoaded", function() {
  var tropichighButton = document.querySelector('.tropichighButton');

  tropichighButton.addEventListener('click', function() {
      var beforePhoto = document.querySelector('.beforePhoto');
      
      beforePhoto.src = "/images/TropicHighPage/tropicOFF.png";
  });
});
//END tropic high BEFORE photo//



//begin tropic high AFTER photo//
document.addEventListener("DOMContentLoaded", function() {
  var tropichighButton = document.querySelector('.tropichighButton');

  tropichighButton.addEventListener('click', function() {
      var afterPhoto = document.querySelector('.afterPhoto');
      
      afterPhoto.src = "/images/TropicHighPage/tropicON.png";
  });
});
//END tropic high AFTER photo//


//begin EVERGEEN  BEFORE photo//
document.addEventListener("DOMContentLoaded", function() {
  var evergreenButton = document.querySelector('.evergreenButton');

  evergreenButton.addEventListener('click', function() {
      var beforePhoto = document.querySelector('.beforePhoto');
      
      beforePhoto.src = "/images/EvergreenPage/evergreenOFF.png";
  });
});
//END EVERGREEN BEFORE photo//



//begin EVERGEEN  AFTER photo//
document.addEventListener("DOMContentLoaded", function() {
  var evergreenButton = document.querySelector('.evergreenButton');

  evergreenButton.addEventListener('click', function() {
      var afterPhoto = document.querySelector('.afterPhoto');
      
      afterPhoto.src = "/images/EvergreenPage/evergreenON.png";
  });
});
//END EVERGREEN AFTER photo//

// END LENS EXPERIENCE SELECTION SCRIPTS

// BEGIN HERO BUTTON HOVER EFFECTS

// document.addEventListener('DOMContentLoaded', function() {
//   const circleElement = document.querySelector('.circle');
//   const ovalElement = document.querySelector('.oval');

//   // Add event listener for hover on circle element
//   circleElement.addEventListener('mouseenter', function() {
//       // On hover, set opacity of oval element to 1 with transition
//       ovalElement.style.transition = 'opacity 0.5s';
//       ovalElement.style.opacity = 1;
//   });

//   // Add event listener for mouse leaving circle element
//   circleElement.addEventListener('mouseleave', function() {
//       // On mouse leave, set opacity of oval element back to 0 with transition
//       ovalElement.style.transition = 'opacity 0.5s';
//       ovalElement.style.opacity = 0;
//   });
// });






// BEGIN PREVIOUS LENS BUTTON SCRIPTS
document.addEventListener('DOMContentLoaded', function() {
  const heroButtonBreakdown = document.querySelector('.heroButtonBreakdown');
  const oval = document.querySelector('.oval');

  // Add event listener for mouseenter on the heroButtonBreakdown element
  heroButtonBreakdown.addEventListener('mouseenter', function() {
      // Set opacity of oval to 1 with transition
      oval.style.transition = 'opacity 0.5s';
      oval.style.opacity = 1;
  });

  // Add event listener for mouseleave on the heroButtonBreakdown element
  heroButtonBreakdown.addEventListener('mouseleave', function() {
      // Set opacity of oval back to 0 with transition
      oval.style.transition = 'opacity 0.5s';
      oval.style.opacity = 0;
  });
});
// END PREVIOUS LENS BUTTON SCRIPTS




// BEGIN NEXT LENS BUTTON SCRIPTS
document.addEventListener('DOMContentLoaded', function() {
  const heroButtonBreakdownNext = document.querySelector('.heroButtonBreakdownNext');
  const nextOval = document.querySelector('.nextOval');

  // Add event listener for mouseenter on the heroButtonBreakdownNext element
  heroButtonBreakdownNext.addEventListener('mouseenter', function() {
      // Set opacity of nextOval to 1 with transition
      nextOval.style.transition = 'opacity 0.5s';
      nextOval.style.opacity = 1;
  });

  // Add event listener for mouseleave on the heroButtonBreakdownNext element
  heroButtonBreakdownNext.addEventListener('mouseleave', function() {
      // Set opacity of nextOval back to 0 with transition
      nextOval.style.transition = 'opacity 0.5s';
      nextOval.style.opacity = 0;
  });
});
// END NEXT LENS BUTTON SCRIPTS



































document.addEventListener('DOMContentLoaded', function() {
  const heroButtonMiddle = document.querySelector('.heroButtonMiddle');
  const selectorSection = document.querySelector('.sliderMasterBodyDiv');

  // Add event listener for click on the heroButtonMiddle element
  heroButtonMiddle.addEventListener('click', function() {
      // Get the absolute Y-coordinate of the top of the .sliderMasterBodyDiv section
      const selectionTop = selectorSection.offsetTop;

      // Calculate 5% of the viewport height
      const offset = window.innerHeight * 0.05;

      // Scroll to the Y-coordinate of the top of the .sliderMasterBodyDiv section minus 5%
      window.scrollTo({
          top: selectionTop - offset,
          behavior: 'smooth'
      });
  });
});
