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
    // Get the selected currency from localStorage, or default to 'USD'
    var selectedCurrency = localStorage.getItem('selectedCurrency') || 'USD';

    // Display paragraphs with the selected currency
    showParagraphsByCurrency(selectedCurrency);

    // Set the initial value of the select element
    document.getElementById('currencySelect').value = selectedCurrency;

    // Add event listener for the select element change
    document.getElementById('currencySelect').addEventListener('change', function() {
      // Get the selected currency value
    var newCurrency = this.value;

      // Save the selected currency to localStorage
    localStorage.setItem('selectedCurrency', newCurrency);

      // Display paragraphs based on the selected currency
    showParagraphsByCurrency(newCurrency);
    });

    function showParagraphsByCurrency(currency) {
      // Show paragraphs without the 'hidden' class
    var nonHiddenParagraphs = document.querySelectorAll('p:not(.hidden)');
    nonHiddenParagraphs.forEach(function(paragraph) {
        paragraph.style.display = 'block'; // or use your preferred display property
    });

      // Hide paragraphs with the 'hidden' class
    var hiddenParagraphs = document.querySelectorAll('p.hidden');
    hiddenParagraphs.forEach(function(paragraph) {
        paragraph.style.display = 'none'; // or use your preferred display property
    });

      // Show paragraphs with the selected currency class
    var selectedParagraphs = document.querySelectorAll('p.' + currency);
    selectedParagraphs.forEach(function(paragraph) {
        paragraph.style.display = 'block'; // or use your preferred display property
    });
    }
});

//END Currency Selector//





document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0;
    var totalReviews = document.querySelectorAll('.reviews').length;
  
    var reviewSlides = document.querySelector('.reviewSlides');
    var reviews = document.querySelectorAll('.reviews');
    var prevBtn = document.querySelector('.prev');
    var nextBtn = document.querySelector('.next');
  
    // Set the active class to the first review initially
    reviews[0].classList.add('active');
  
    // Event listener for the previous button
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
      updateSlidePosition();
    });
  
    // Event listener for the next button
    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % totalReviews;
      updateSlidePosition();
    });
  
    // Function to update the slide position
    function updateSlidePosition() {
      reviews.forEach(function(review, index) {
        if (index === currentIndex) {
          review.classList.add('active');
        } else {
          review.classList.remove('active');
        }
      });
  
      var newTranslateValue = -currentIndex * 100 + '%';
      reviewSlides.style.transform = 'translateX(' + newTranslateValue + ')';
    }
  });
  





