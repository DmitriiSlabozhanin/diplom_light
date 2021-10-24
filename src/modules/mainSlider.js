const mainSlider = () => {
    const mainItem = document.querySelectorAll('.item'),
		mainText = document.querySelectorAll('.table');


	let currentSlide = 0,
		interval;

        mainText.forEach((element) =>{
            element.style = `
            opacity: 0.8;
            color: #E3E3C4;
            visibility: visible;`;
        });

	const prev = (element, index) =>{element[index].style.display = 'none';};

	const next = (element, index) =>{element[index].style.display = 'block';};

	const autoPlay = () =>{
		prev(mainItem, currentSlide);
		currentSlide++;
		if(currentSlide >= mainItem.length){
			currentSlide = 0;
		}
		next(mainItem, currentSlide);
	};

	const startSlide = (time = 3000) =>{
		interval = setInterval(autoPlay, time);
	};

	startSlide();
};

export default mainSlider;