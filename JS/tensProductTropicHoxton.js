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
//end rotating arrow buttons on nav//







// BEGIN LEFT PICTURE SELECTIONS//

document.addEventListener('DOMContentLoaded', function() {
    // Iterate over each leftPic element and add click event listener
    for (let i = 1; i <= 5; i++) {
        const leftPic = document.querySelector(`.leftPic${i}`);
        const carouselPic = document.querySelector(`.carouselPic${i}`);

        leftPic.addEventListener('click', function() {
            // Scroll to the corresponding carouselPic element
            scrollToCarouselItem(carouselPic);
        });
    }

    // Function to scroll to the given carouselPic element
    function scrollToCarouselItem(carouselPic) {
        const productCarouselMain = document.querySelector('.productCarouselMain');
        productCarouselMain.scrollTo({
            left: carouselPic.offsetLeft,
            behavior: 'smooth'
        });
    }
});


// END LEFT PICTURE SELECTIONS



// BEGIN LEFT VIDEO SELECTIONS
//vid1//
document.addEventListener('DOMContentLoaded', function() {
    const leftVid1 = document.querySelector('.leftVid1');
    const productCarouselMain = document.querySelector('.productCarouselMain');
    const carouselVid1 = document.querySelector('.carouselVid1');

    leftVid1.addEventListener('click', function() {
        // Scroll to the carousel item corresponding to carouselVid1
        productCarouselMain.scrollTo({
            left: carouselVid1.offsetLeft,
            behavior: 'smooth'
        });
    });
});
//vid1//


//vid2//
document.addEventListener('DOMContentLoaded', function() {
    const leftVid2 = document.querySelector('.leftVid2');
    const productCarouselMain = document.querySelector('.productCarouselMain');
    const carouselVid2 = document.querySelector('.carouselVid2');

    leftVid2.addEventListener('click', function() {
        // Scroll to the carousel item corresponding to carouselVid2
        productCarouselMain.scrollTo({
            left: carouselVid2.offsetLeft,
            behavior: 'smooth'
        });
    });
});
//vid2//
// END LEFT VIDEO SELECTIONS

//begin carousel//
document.addEventListener("DOMContentLoaded", function() {
    const productCarouselMain = document.querySelector(".productCarouselMain");
    const nextButton = document.querySelector(".nextButton");
    const previousButton = document.querySelector(".previousButton");
    const itemWidth = productCarouselMain.offsetWidth;

    function nextSlide() {
        const scrollLeft = productCarouselMain.scrollLeft;
        const nextItemIndex = Math.floor((scrollLeft + itemWidth / 2) / itemWidth) + 1;
        productCarouselMain.scrollTo({
            left: nextItemIndex * itemWidth,
            behavior: "smooth"
        });
    }

    function previousSlide() {
        const scrollLeft = productCarouselMain.scrollLeft;
        const prevItemIndex = Math.ceil((scrollLeft - itemWidth / 2) / itemWidth) - 1;
        productCarouselMain.scrollTo({
            left: prevItemIndex * itemWidth,
            behavior: "smooth"
        });
    }

    nextButton.addEventListener("click", nextSlide);
    previousButton.addEventListener("click", previousSlide);
});
//end carousel//


//if displaying .carouselVid2, clicking nextButton goes back to .carouselPic1//
document.addEventListener("DOMContentLoaded", function() {
    const productCarouselMain = document.querySelector(".productCarouselMain");
    const nextButton = document.querySelector(".nextButton");

    nextButton.addEventListener("click", function() {
        const currentDisplayed = getCurrentDisplayed();
        const nextItem = getNextItem(currentDisplayed);
        
        if (nextItem) {
            productCarouselMain.scrollTo({
                left: nextItem.offsetLeft,
                behavior: "smooth"
            });
        }
    });

    function getCurrentDisplayed() {
        // Get the index of the currently displayed item
        const scrollLeft = productCarouselMain.scrollLeft;
        const itemWidth = productCarouselMain.offsetWidth;
        const currentIndex = Math.round(scrollLeft / itemWidth);

        // Find the currently displayed item based on the index
        return productCarouselMain.querySelector(`.carouselItem:nth-child(${currentIndex + 1})`);
    }

    function getNextItem(currentItem) {
        // If the current item is carouselVid2, return the next item carouselPic1
        if (currentItem && currentItem.classList.contains("carouselVid2")) {
            return productCarouselMain.querySelector(".carouselPic1");
        }
        // Add conditions for other cases if needed
        // else if (...) {}

        // If no specific condition matches, return null
        return null;
    }
});
//if displaying .carouselVid2, clicking nextButton goes back to .carouselPic1//



//if displaying .carouselPic1, clicking previousButton goes back to .carouselVid2//
document.addEventListener("DOMContentLoaded", function() {
    const productCarouselMain = document.querySelector(".productCarouselMain");
    const previousButton = document.querySelector(".previousButton");
    const itemWidth = productCarouselMain.offsetWidth;

    function previousSlide() {
        const scrollLeft = productCarouselMain.scrollLeft;
        const prevItemIndex = Math.ceil(scrollLeft / itemWidth) - 1;
        if (prevItemIndex < 0) {
            productCarouselMain.scrollTo({
                left: document.querySelector(".carouselVid2").offsetLeft,
                behavior: "smooth"
            });
        } else {
            productCarouselMain.scrollTo({
                left: prevItemIndex * itemWidth,
                behavior: "smooth"
            });
        }
    }

    previousButton.addEventListener("click", previousSlide);
});
//if displaying .carouselPic1, clicking previousButton goes back to .carouselVid2//













document.addEventListener('DOMContentLoaded', function() {
    const productCarouselMain = document.querySelector('.productCarouselMain');
    const leftPictures = document.querySelectorAll('.productLeftPictures img');

    // Function to highlight the corresponding left picture based on the currently displayed carousel item
    function highlightLeftPicture() {
        const scrollLeft = productCarouselMain.scrollLeft;
        const itemWidth = productCarouselMain.offsetWidth;
        const currentIndex = Math.round(scrollLeft / itemWidth);

        // Remove border from all left pictures
        leftPictures.forEach(picture => {
            picture.style.border = 'none';
        });

        // Add border to the corresponding left picture
        if (leftPictures[currentIndex]) {
            leftPictures[currentIndex].style.border = '3px solid #e78140';
        }
    }

    // Highlight the corresponding left picture on initial load
    highlightLeftPicture();

    // Highlight the corresponding left picture on scroll
    productCarouselMain.addEventListener('scroll', highlightLeftPicture);
});






















































document.addEventListener('DOMContentLoaded', function() {
    const moreInfoItemButtonsTop = document.querySelectorAll('.moreInfoItemButtonTOP');

    moreInfoItemButtonsTop.forEach(function(button) {
        button.addEventListener('click', function() {
            // Find the closest sibling element with class .moreInfoItemButtonBottom
            const bottomButton = button.closest('.moreInfoItem').querySelector('.moreInfoItemButtonBottom');

            // Toggle the class .hideShowMoreInfo on the bottom button
            bottomButton.classList.toggle('hideShowMoreInfo');

            // Calculate the height to animate
            const heightToAnimate = bottomButton.scrollHeight;

            // Set the height explicitly to enable CSS transition
            if (bottomButton.classList.contains('hideShowMoreInfo')) {
                bottomButton.style.height = '0px';
            } else {
                bottomButton.style.height = heightToAnimate + 'px';
            }

            // Trigger reflow to apply styles before transitioning
            bottomButton.offsetHeight;

            // Update the height to animate with transition
            bottomButton.style.height = bottomButton.classList.contains('hideShowMoreInfo') ? heightToAnimate + 'px' : '0px';
        });
    });

    // Ensure the .moreInfoItemButtonBottom class is initially active
    const bottomButtons = document.querySelectorAll('.moreInfoItemButtonBottom');
    bottomButtons.forEach(function(button) {
        button.classList.remove('hideShowMoreInfo');
    });
});














document.addEventListener('DOMContentLoaded', function() {
    const moreInfoItemButtonsTop = document.querySelectorAll('.moreInfoItemButtonTOP');

    moreInfoItemButtonsTop.forEach(function(button) {
        let rotated = false;

        button.addEventListener('click', function() {
            // Find the image element within the .moreInfoItemButtonTOP div
            const img = button.querySelector('img');

            // Toggle the rotation class on the image
            if (rotated) {
                img.style.transition = 'transform 0.5s'; // Apply transition to rotation
                img.style.transform = 'rotate(0deg)'; // Rotate back to original position
                rotated = false;
            } else {
                img.style.transition = 'transform 0.5s'; // Apply transition to rotation
                img.style.transform = 'rotate(45deg)'; // Apply 45-degree rotation
                rotated = true;
            }
        });
    });
});





























document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('select option.outOfStock');

    options.forEach(function(option) {
        option.disabled = true;
    });
});










document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('.add');
    const subtractButton = document.querySelector('.subtract');
    const qtyInput = document.querySelector('.qtyInput');

    addButton.addEventListener('click', function() {
        // Increment the value in the qtyInput input tag
        let value = parseInt(qtyInput.value);
        qtyInput.value = value + 1;
    });

    subtractButton.addEventListener('click', function() {
        // Decrement the value in the qtyInput input tag, but not below 1
        let value = parseInt(qtyInput.value);
        if (value > 1) {
            qtyInput.value = value - 1;
        }
    });
});






























































































