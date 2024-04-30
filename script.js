const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const slideScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = slideScrollbar.querySelector(".scrollbar-thumb");

    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    // update thumb position on mouse move
    
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = slideScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;

        }

         // remove event listener on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    })

// slides images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"})
        })
    });
    const handleSlideButtons = () => {
        console.log(imageList.scrollLeft);
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";  
    }

    //update scroolbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        console.log(scrollPosition);
        const thumbPosition = (scrollPosition / maxScrollLeft) * (slideScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        console.log(thumbPosition);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }
     imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
     })
}

window.addEventListener("load", initSlider);