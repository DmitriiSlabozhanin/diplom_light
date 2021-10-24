const scrollUp = () => {

    const menu = document.querySelector('.top-menu'),
        btnUp = document.querySelector('.up');
	    btnUp.style.visibility = 'hidden';

	document.addEventListener('scroll', ()=>{
		let scrollValue = window.scrollY;
		
		if(scrollValue > 600){
			btnUp.style.visibility = 'visible';
		}else{
			btnUp.style.visibility = 'hidden';
		}
	
	});

	const scrolTo = (element) => {
		window.scroll({
			left: 0,
			top: element.offsetTop,
			behavior: 'smooth'
		});
	};

	document.addEventListener('click', (event) =>{
		let target = event.target;

		if(btnUp === target){
			scrolTo(menu);
		}
	});

};

export default scrollUp;