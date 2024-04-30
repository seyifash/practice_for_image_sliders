const createSlides = () => {
    const imageList = document.querySelector('.wrapper .image-list');
    const slideBtn = document.querySelectorAll('.wrapper .slide-button');
    const slideBar = document.querySelector('.container .slide-bar');
    const slideThumb = slideBar.querySelector('.slide-thumb');

    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // handles scrolling with the slidethumb below

    slideThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = slideThumb.offsetLeft;

        // proper handling of mouse movin begins
        const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const maxThumbPosition = slideBar.getBoundingClientRect().width - slideThumb.offsetWidth;
        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
        slideThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;

        }

        const handleMouseRemove = () => {
            document.removeEventListener("mousemove", handleMouseMove); 
            document.removeEventListener("mouseup", handleMouseRemove); 

        }


        document.addEventListener("mousemove", handleMouseMove); 
        document.addEventListener("mouseup", handleMouseRemove); 
    });

    // slide the images according to button slide
    slideBtn.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
        })
    });

    // update slide thumb based on the image scroll 
    const updateSlideThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (imageList.clientWidth - slideThumb.offsetWidth);
        console.log(thumbPosition);
        slideThumb.style.left = `${thumbPosition}px`;

    }
 /* display first slide button when the second slide btn is clicked 
 and when there is no pictures to show again hide the second display button*/

    const handleBtnDisplay = () => {
    slideBtn[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideBtn[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
   }
    imageList.addEventListener('scroll', () => {
        handleBtnDisplay();
        updateSlideThumbPosition();
    });

}

window.addEventListener('load', createSlides);