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





// BEGIN sunglassesItem HOVER CYCLE IMAGES//
document.addEventListener('DOMContentLoaded', function() {
    const sunglassesItems = document.querySelectorAll('.sunglassesItem');

    sunglassesItems.forEach(item => {
        const links = item.querySelectorAll('.sunglassesItemLink');
        links.forEach(link => {
            const images = link.querySelectorAll('img');
            let currentIndex = 0;
            let isHovered = false;

            // Function to show only one image and hide others
            function showImage(indexToShow) {
                images.forEach((img, index) => {
                    if (index === indexToShow) {
                        img.style.display = 'block';
                        img.style.opacity = 1;
                    } else {
                        img.style.display = 'none';
                        img.style.opacity = 0;
                    }
                });
            }

            // Function to animate images
            function animateImages() {
                if (isHovered) {
                    currentIndex = (currentIndex + 1) % images.length;
                    showImage(currentIndex);
                    setTimeout(animateImages, 1000); // Recursive call for next image after 3 seconds
                }
            }

            // Start animation loop when mouse enters
            link.addEventListener('mouseenter', function() {
                isHovered = true;
                currentIndex = 0; // Reset currentIndex when mouse enters
                animateImages();
            });

            // Stop animation loop when mouse leaves
            link.addEventListener('mouseleave', function() {
                isHovered = false;
                currentIndex = 0; // Reset currentIndex when mouse leaves
                showImage(0); // Show only the first image
            });

            // Initialize to show only the first image
            showImage(0);
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

//BEGIN STOREFRONT SCRIPTS//

//begin OG filter SCRIPTS//

//checkmark//
document.addEventListener("DOMContentLoaded", function() {
    const originalFilterButton = document.querySelector('.originalFilterButton');
    const ogShowCheck = document.querySelector('.OGshowCheck');
  
    originalFilterButton.addEventListener('click', function() {
      ogShowCheck.classList.toggle('OGshowCheck');
    });
  });
  



//filter og results
document.addEventListener("DOMContentLoaded", function() {
    const originalFilterButton = document.querySelector('.originalFilterButton');
    const sunglassesItems = document.querySelectorAll('.sunglassesItem');

    originalFilterButton.addEventListener('click', function() {
        sunglassesItems.forEach(item => {
            if (!item.classList.contains('originalGlasses')) {
                item.style.display = 'none';
            }
        });
    });
});



//return all results from og filter 
document.addEventListener("DOMContentLoaded", function() {
    const originalFilterButton = document.querySelector('.originalFilterButton');
    const sunglassesItems = document.querySelectorAll('.sunglassesItem');

    let filterActive = false;

    originalFilterButton.addEventListener('click', function() {
        filterActive = !filterActive;

        sunglassesItems.forEach(item => {
            if (!filterActive || item.classList.contains('originalGlasses')) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


//end og scripts

// begin boulevard scripts


// toggle checkmark
document.addEventListener('DOMContentLoaded', function() {
    const boulevardFilterButton = document.querySelector('.boulevardFilterButton');
    const BLVDshowCheck = document.querySelector('.BLVDshowCheck');

    boulevardFilterButton.addEventListener('click', function() {
        BLVDshowCheck.classList.toggle('BLVDshowCheck');
    });
});

//filter results to boulevard
document.addEventListener('DOMContentLoaded', function() {
    const boulevardFilterButton = document.querySelector('.boulevardFilterButton');
    const sunglassesItems = document.querySelectorAll('.sunglassesItem');

    boulevardFilterButton.addEventListener('click', function() {
        sunglassesItems.forEach(item => {
            if (!item.classList.contains('boulevardGlasses')) {
                item.style.display = 'none';
            }
        });
    });
});


// return results to normal from boulevard
document.addEventListener('DOMContentLoaded', function() {
    const boulevardFilterButton = document.querySelector('.boulevardFilterButton');
    const sunglassesItems = document.querySelectorAll('.sunglassesItem');
    let isVisible = false;

    boulevardFilterButton.addEventListener('click', function() {
        isVisible = !isVisible;

        sunglassesItems.forEach(item => {
            if (!item.classList.contains('boulevardGlasses')) {
                item.style.display = isVisible ? 'none' : '';
            }
        });
    });
});

// end boulevard scripts

// begin spectachrome scripts//

//toggle checkmark on menu
document.addEventListener('DOMContentLoaded', function() {
    const spectachromeFilterButton = document.querySelector('.spectachromeFilterButton');
    const specShowCheck = document.querySelector('.SPECshowCheck');

    spectachromeFilterButton.addEventListener('click', function() {
        specShowCheck.classList.toggle('SPECshowCheck');
    });
});

//filter results to spectachrome
document.addEventListener('DOMContentLoaded', function() {
    const boulevardFilterButton = document.querySelector('.spectachromeFilterButton');
    const sunglassesItems = document.querySelectorAll('.sunglassesItem');

    boulevardFilterButton.addEventListener('click', function() {
        sunglassesItems.forEach(item => {
            if (!item.classList.contains('spectachromGlasses')) {
                item.style.display = 'none';
            }
        });
    });
});


// return results to normal from spectachrome
document.addEventListener('DOMContentLoaded', function() {
    const boulevardFilterButton = document.querySelector('.spectachromeFilterButton');
    const sunglassesItems = document.querySelectorAll('.sunglassesItem');
    let isVisible = false;

    boulevardFilterButton.addEventListener('click', function() {
        isVisible = !isVisible;

        sunglassesItems.forEach(item => {
            if (!item.classList.contains('spectachromGlasses')) {
                item.style.display = isVisible ? 'none' : '';
            }
        });
    });
});

//end spectachrome scripts

//begin tropic high scripts

//tropic high checkmark toggle
document.addEventListener('DOMContentLoaded', function() {
    const tropichighFilterButton = document.querySelector('.tropichighFilterButton');
    const tropicShowCheck = document.querySelector('.TROPICshowCheck');

    tropichighFilterButton.addEventListener('click', function() {
        tropicShowCheck.classList.toggle('TROPICshowCheck');
    });
});



//tropic high filter results
document.addEventListener('DOMContentLoaded', function() {
    const tropichighFilterButton = document.querySelector('.tropichighFilterButton');
    const sunglassesItems = document.querySelectorAll('.sunglassesItem');

    tropichighFilterButton.addEventListener('click', function() {
        sunglassesItems.forEach(item => {
            if (!item.classList.contains('tropichighGlasses')) {
                item.style.display = 'none';
            } else {
                item.style.display = ''; // Reset display property to default
            }
        });
    });
});



//tropic high return to normal filter results

document.addEventListener('DOMContentLoaded', function() {
    const tropichighFilterButton = document.querySelector('.tropichighFilterButton');
    const sunglassesItems = document.querySelectorAll('.sunglassesItem');
    let isFiltered = false;

    tropichighFilterButton.addEventListener('click', function() {
        isFiltered = !isFiltered; // Toggle the filter state

        sunglassesItems.forEach(item => {
            if (isFiltered && !item.classList.contains('tropichighGlasses')) {
                item.style.display = 'none';
            } else {
                item.style.display = ''; // Reset display property to default
            }
        });
    });
});

// end tropic high scripts


//begin evergreen scripts


//checkmark show on menu
document.addEventListener('DOMContentLoaded', function() {
    const evergreenFilterButton = document.querySelector('.evergreenFilterButton');
    const evergreenShowCheck = document.querySelector('.EVERGREENshowCheck');

    evergreenFilterButton.addEventListener('click', function() {
        evergreenShowCheck.classList.toggle('EVERGREENshowCheck');
    });
});

///filter results
document.addEventListener('DOMContentLoaded', function() {
    const evergreenFilterButton = document.querySelector('.evergreenFilterButton');
    const sunglassesItems = document.querySelectorAll('.sunglassesItem');

    evergreenFilterButton.addEventListener('click', function() {
        sunglassesItems.forEach(function(item) {
            if (!item.classList.contains('evergreenGlasses')) {
                item.style.display = 'none';
            }
        });
    });
});

//unfilter and show all.
document.addEventListener('DOMContentLoaded', function() {
    const evergreenFilterButton = document.querySelector('.evergreenFilterButton');
    const sunglassesItems = document.querySelectorAll('.sunglassesItem');

    let isFiltered = false;

    evergreenFilterButton.addEventListener('click', function() {
        sunglassesItems.forEach(function(item) {
            if (!isFiltered) {
                if (!item.classList.contains('evergreenGlasses')) {
                    item.style.display = 'none';
                }
            } else {
                item.style.display = ''; // Reset to default display style
            }
        });
        isFiltered = !isFiltered; // Toggle the filter status
    });
});
//end evergreen scripts



//begin frame filter menu checkmarks 
document.addEventListener('DOMContentLoaded', function() {
    const roundFrameButton = document.querySelector('.filterButtonRoundFrame');
    const roundFrameCheck = document.querySelector('.roundFrameCheck');

    roundFrameButton.addEventListener('click', function() {
        roundFrameCheck.classList.toggle('roundFrameCheck');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const squareFrameButton = document.querySelector('.filterButtonSquareFrame');
    const squareFrameCheck = document.querySelector('.squareFrameCheck');

    squareFrameButton.addEventListener('click', function() {
        squareFrameCheck.classList.toggle('squareFrameCheck');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const catEyeFrameButton = document.querySelector('.filterButtonCatEyeFrame');
    const catEyeFrameCheck = document.querySelector('.catEyeFrameCheck');

    catEyeFrameButton.addEventListener('click', function() {
        catEyeFrameCheck.classList.toggle('catEyeFrameCheck');
    });
});
// end frame filter menu checkmarks 





//BEGIN FRAME FILTER RESULTS 

// BEGIN ROUND FRAME FILTER RESULTS
document.addEventListener('DOMContentLoaded', function() {
    const roundFrameButton = document.querySelector('.filterButtonRoundFrame');

    roundFrameButton.addEventListener('click', function() {
        const sunglassesItems = document.querySelectorAll('.sunglassesItem');
        sunglassesItems.forEach(function(item) {
            if (!item.classList.contains('hasRoundFrame')) {
                item.style.display = 'none';
            } else {
                item.style.display = ''; // Revert to default display
            }
        });
    });
});


//unfilter and show all.
document.addEventListener('DOMContentLoaded', function() {
    const roundFrameButton = document.querySelector('.filterButtonRoundFrame');
    const sunglassesItems = document.querySelectorAll('.sunglassesItem');

    let isFiltered = false;

    roundFrameButton.addEventListener('click', function() {
        sunglassesItems.forEach(function(item) {
            if (!isFiltered) {
                if (!item.classList.contains('sunglassesItem')) {
                    item.style.display = 'none';
                }
            } else {
                item.style.display = ''; 
            }
        });
        isFiltered = !isFiltered; 
    });
});
// END ROUND FRAME FILTER RESULTS



// begin square frame filter results//

document.addEventListener("DOMContentLoaded", function() {
    const squareFrameButton = document.querySelector(".filterButtonSquareFrame");

    squareFrameButton.addEventListener("click", function() {
        const sunglassesItems = document.querySelectorAll(".sunglassesItem");

        sunglassesItems.forEach(item => {
            if (!item.classList.contains("hasSquareFrame")) {
                item.style.display = "none";
            } else {
                item.style.display = ""; // Reset to default display
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const squareFrameButton = document.querySelector(".filterButtonSquareFrame");
    let isSquareFrameActive = false;

    squareFrameButton.addEventListener("click", function() {
        const sunglassesItems = document.querySelectorAll(".sunglassesItem");

        if (!isSquareFrameActive) {
            sunglassesItems.forEach(item => {
                if (!item.classList.contains("hasSquareFrame")) {
                    item.style.display = "none";
                }
            });
            isSquareFrameActive = true;
        } else {
            sunglassesItems.forEach(item => {
                item.style.display = ""; // Reset to default display
            });
            isSquareFrameActive = false;
        }
    });
});
// end square frame filter results//

//begin cat eye frame filter results 
document.addEventListener("DOMContentLoaded", function() {
    const catEyeFrameButton = document.querySelector(".filterButtonCatEyeFrame");
    let isCatEyeFrameActive = false;

    catEyeFrameButton.addEventListener("click", function() {
        const sunglassesItems = document.querySelectorAll(".sunglassesItem");

        if (!isCatEyeFrameActive) {
            sunglassesItems.forEach(item => {
                if (!item.classList.contains("hasCatEyeFrame")) {
                    item.style.display = "none";
                }
            });
            isCatEyeFrameActive = true;
        } else {
            sunglassesItems.forEach(item => {
                item.style.display = ""; // Reset to default display
            });
            isCatEyeFrameActive = false;
        }
    });
});
//end cat eye frame filter results 

//END FRAME FILTER RESULTS 



//BEGIN MATERIAL FILTER RESULTS CHECKMARKS IN MENU

//acetate material filter checkmark
document.addEventListener('DOMContentLoaded', function() {
    const filterButtonAcetate = document.querySelector('.filterButtonAcetate');
    const acetateMaterialImage = document.querySelector('.acetateMaterialCheck');

    filterButtonAcetate.addEventListener('click', function() {
        acetateMaterialImage.classList.toggle('acetateMaterialCheck');
    });
});
//acetate  material filter checkmark


//metal material filter checkmark
document.addEventListener('DOMContentLoaded', function() {
    const filterButtonMetal = document.querySelector('.filterButtonMetal');
    const metalMaterilImage = document.querySelector('.metalMaterialCheck');

    filterButtonMetal.addEventListener('click', function() {
        metalMaterilImage.classList.toggle('metalMaterialCheck');
    });
});
//metal material filter checkmark


//combo material filter checkmark
document.addEventListener('DOMContentLoaded', function() {
    const filterButtonCombo = document.querySelector('.filterButtonCombo');
    const comboMaterilImage = document.querySelector('.comboMaterialCheck');

    filterButtonCombo.addEventListener('click', function() {
        comboMaterilImage.classList.toggle('comboMaterialCheck');
    });
});
//combo material filter checkmark


//END MATERIAL FILTER RESULTS CHECKMARKS IN MENU



//BEGIN SUNGLASSESITEM FILTERING SCRIPTS ON STORE PAGE


//BEGIN ACETATE FILTER RESULTS//
//filter acetate only items
document.addEventListener('DOMContentLoaded', function() {
    const filterButtonAcetate = document.querySelector('.filterButtonAcetate');

    filterButtonAcetate.addEventListener('click', function() {
        const sunglassesItems = document.querySelectorAll('.sunglassesItem');
        
        sunglassesItems.forEach(item => {
            if (!item.classList.contains('hasAcetateMaterial')) {
                item.style.display = 'none';
            }
        });
    });
});
//filter acetate only items

//reset to show all from acetate only
document.addEventListener('DOMContentLoaded', function() {
    const filterButtonAcetate = document.querySelector('.filterButtonAcetate');

    let isFiltered = false; // Track if the filter is active

    filterButtonAcetate.addEventListener('click', function() {
        const sunglassesItems = document.querySelectorAll('.sunglassesItem');
        
        sunglassesItems.forEach(item => {
            if (!isFiltered) {
                if (!item.classList.contains('hasAcetateMaterial')) {
                    item.style.display = 'none';
                }
            } else {
                item.style.display = ''; // Reset to default display style
            }
        });

        isFiltered = !isFiltered; // Toggle the filter status
    });
});
//reset to show all from acetate only
//END ACETATE FILTER RESULTS//


//BEGIN METAL FILTER RESULTS//
document.addEventListener("DOMContentLoaded", function() {
    const metalButton = document.querySelector(".filterButtonMetal");

    metalButton.addEventListener("click", function() {
        const sunglassesItems = document.querySelectorAll(".sunglassesItem");

        sunglassesItems.forEach(item => {
            if (!item.classList.contains("hasMetalMaterial")) {
                item.style.display = "none";
            } else {
                item.style.display = ""; // Revert to default display
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const metalButton = document.querySelector(".filterButtonMetal");
    let isMetalToggled = false;

    metalButton.addEventListener("click", function() {
        const sunglassesItems = document.querySelectorAll(".sunglassesItem");

        sunglassesItems.forEach(item => {
            if (!item.classList.contains("hasMetalMaterial")) {
                item.style.display = isMetalToggled ? "" : "none";
            }
        });

        isMetalToggled = !isMetalToggled;
    });
});
//END METAL FILTER RESULTS//


//begin combo material filter results
document.addEventListener("DOMContentLoaded", function() {
    const comboButton = document.querySelector(".filterButtonCombo");
    let isComboToggled = false;

    comboButton.addEventListener("click", function() {
        const sunglassesItems = document.querySelectorAll(".sunglassesItem");

        sunglassesItems.forEach(item => {
            if (!item.classList.contains("hasComboMaterial")) {
                item.style.display = isComboToggled ? "" : "none";
            }
        });

        isComboToggled = !isComboToggled;
    });
});

//end combo material filter results

//END SUNGLASSESITEM FILTERING SCRIPTS ON STORE PAGE