import React, { useEffect, useRef } from "react";

const CustomSlider = ({ children, slidesToShow, slidesToScroll }) => {
  const sliderRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const sliderContainer = sliderRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cards = cardsContainer.children;

    let currentSlide = 0;
    const cardWidth = cardsContainer.children[0].offsetWidth;
    const containerWidth = sliderContainer.offsetWidth;

    const handlePrev = () => {
      if (currentSlide > 0) {
        currentSlide--;
        cardsContainer.style.transform = `translateX(-${
          currentSlide * cardWidth
        }px)`;
      }
    };

    const handleNext = () => {
      if (currentSlide < cards.length - slidesToShow) {
        currentSlide++;
        cardsContainer.style.transform = `translateX(-${
          currentSlide * cardWidth
        }px)`;
      }
    };

    sliderContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("prev")) {
        handlePrev();
      } else if (event.target.classList.contains("next")) {
        handleNext();
      }
    });

    // Set the width of the cards container
    cardsContainer.style.width = `${cards.length * cardWidth}px`;

    // Adjust the slider width based on the number of cards to show
    sliderContainer.style.width = `${containerWidth}px`;
  }, [slidesToShow, slidesToScroll]);

  return (
    <div className="custom-slider" ref={sliderRef}>
      <button className="prev">Prev</button>
      <div className="cards-container" ref={cardsContainerRef}>
        {children}
      </div>
      <button className="next">Next</button>
    </div>
  );
};

export default CustomSlider;
