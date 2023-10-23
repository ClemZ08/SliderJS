"use strict";

class Slider {
  constructor(params) {
    this.imageData = params.images;
    this.area = document.querySelector(params.area);
    this.currentIndex = 0;

    this.sliderWidth = params.width;
    this.sliderHeight = params.height;

    this.createSlider();
  }

  createSlider() {
    this.slider = document.createElement("div");
    this.slider.classList.add("slider-content");

    this.slider.style.width = this.sliderWidth;
    this.slider.style.height = this.sliderHeight;

    this.imgElement = document.createElement("img");
    this.imgElement.src = this.imageData[this.currentIndex].src;
    this.slider.appendChild(this.imgElement);

    const prevButton = document.createElement("button");
    prevButton.classList.add("prev");
    prevButton.innerHTML = '<i class="icon-previous"></i>';
    prevButton.addEventListener("click", () => this.prevImg());
    this.slider.appendChild(prevButton);

    const nextButton = document.createElement("button");
    nextButton.classList.add("next");
    nextButton.innerHTML = '<i class="icon-next"></i>';
    nextButton.addEventListener("click", () => this.nextImg());
    this.slider.appendChild(nextButton);

    const playButton = document.createElement("button");
    playButton.classList.add("play");
    playButton.innerHTML = '<i class="icon-play"></i>';
    playButton.addEventListener("click", () => this.playImgy());
    this.slider.appendChild(playButton);

    const pauseButton = document.createElement("button");
    pauseButton.classList.add("pause");
    pauseButton.innerHTML = '<i class="icon-pause"></i>';
    this.slider.appendChild(pauseButton);

    this.area.appendChild(this.slider);
  }
  
  prevImg() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.imgElement.src = this.imageData[this.currentIndex].src;
    }
  }
  nextImg() {
    if (this.currentIndex < this.imageData.length - 1) {
      this.currentIndex++;
      this.imgElement.src = this.imageData[this.currentIndex].src;
    }
  }
  playImg() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.imgElement.src = this.imageData[this.currentIndex].src;
    }
    setInterval(this.playImg, 1000);
  }
}

export default Slider;
