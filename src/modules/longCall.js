const longCall = () => {
    const modalCallback = document.querySelector('.modal-callback'),
		callbackBtn = document.querySelectorAll('.callback-btn'),
		modalOverlay = document.querySelector('.modal-overlay'),
		ourServicesBtn = document.querySelectorAll('.absolute'),
		allImg = document.querySelectorAll('.img-wrapper');

	const displayOn = () =>{
		modalOverlay.style.display = 'block';
		modalCallback.style.display = 'block';
	};

	const displayOff = () =>{
		modalOverlay.style.display = 'none';
		modalCallback.style.display = 'none';
	};

	document.addEventListener('click', (event) =>{
		let target = event.target,
			foo = target.closest('.element');

		callbackBtn.forEach((element) =>{
			if(target === element){
				displayOn();
			}
		});

		ourServicesBtn.forEach((element) =>{
			if(target === element){
				displayOn();
			}
		});

		if(foo){
			allImg.forEach((element) =>{
				if(element === target){
					displayOn();
				}
			});
		}

		if(target.closest('.button-services')){
			displayOn();
		}

		if(target.closest('.modal-close') || target.closest('.modal-overlay')){
			displayOff();
		}
	});

};

export default longCall;