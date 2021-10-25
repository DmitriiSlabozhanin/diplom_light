'use strict';

import longCall from './modules/longCall';
import scrollUp from './modules/scrollUp';
import mainSlider from './modules/mainSlider';
import caruselArrows from './modules/caruselArrows';
import blockAccordeon from './modules/blockAccordeon';


//заказать обратный звонок
longCall();

//Плавный скролл при нажатии кнопки вверх внизу страницы
scrollUp();

//Слайдер на главной странице
mainSlider();

//Карусель в блоке Наши услуги
caruselArrows();

//ЧАВО в виде блока аккордеона
blockAccordeon();
