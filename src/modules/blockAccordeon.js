'use strict';

const blockAccordeon = () => {

    const accordeon = document.querySelector('.accordeon');
    const acElement = accordeon.querySelectorAll('.element');
    const elementContent = accordeon.querySelectorAll('.element-content');

	const mainAccordeon = () =>{
		acElement.forEach((elem)=>{
			elem.classList.remove('active');
		});
		elementContent.forEach((elem)=>{
			elem.style.display = 'none';
		});
	};
	mainAccordeon();

	const elementToogle = (index) =>{
		for(let i =0; i < elementContent.length; i++){

			if(index === i){
				acElement[i].classList.add('active');
				elementContent[i].style.display = 'block';
			}else{
				acElement[i].classList.remove('active');
				elementContent[i].style.display = 'none';
			}
		}
	};

	accordeon.addEventListener('click', (event) =>{
		let target = event.target;
			target = target.closest('.element');
		
		if(target){
			acElement.forEach((item, i) =>{
				if(item === target){
					elementToogle(i);
				}
			});
		}
	});

};

export default blockAccordeon;
