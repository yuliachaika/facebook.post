;(function() {
	'use strict'; 

let appElement = document.getElementById('app');
appElement.classList.add('post'); //дали класс post

let postWrap = document.createElement('div');
postWrap.classList.add('post__clearfix');

//logo
let logoImg = document.createElement('img');
logoImg.classList.add('post__logo-img');
logoImg.setAttribute('src', 'https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-1/p200x200/18881915_294785030967317_8120908652541194416_n.png?oh=8747665b15d2f9ae90918c861b1bdff6&oe=5A522CFB');

//===== .post__clearfix

//name
let link = document.createElement('a');
link.setAttribute('href', 'https://www.facebook.com/beetroot.se');
link.classList.add('post__link', 'post__link--name');
let linkContent = document.createTextNode("Beetroot Academy - Odessa"); 
link.appendChild(linkContent); 

//dots
let iconRight = document.createElement('a');
iconRight.setAttribute('href', '#');
iconRight.classList.add('post__button');


//time
let time = document.createElement('span');
time.classList.add('post__time');
let timeContent = document.createTextNode('25 сентября в 11:59'); 
time.appendChild(timeContent); 

//dot
let dot = document.createElement('span');
dot.classList.add('post__time');
let dotContent = document.createTextNode(' · '); 
dot.appendChild(dotContent); 

//icon
let icon = document.createElement('div');
icon.classList.add('post__icon');

//=======

let paraFirst = document.createElement('p');
paraFirst.classList.add('post__text');
let paraFirstContent = document.createTextNode('Выиграй стипендию на бесплатное обучение от Beetroot Academy!'); 
paraFirst.appendChild(paraFirstContent); 

let paraSecond = document.createElement('p');
paraSecond.classList.add('post__text', 'post__text--last');
let paraSecondContent = document.createTextNode('Ответь на наш короткий опросник, чтобы принять участие в розыгрыше приза:)'); 
paraSecond.appendChild(paraSecondContent); 

let linkShow = document.createElement('a');
linkShow.setAttribute('href', 'https://docs.google.com/forms/d/e/1FAIpQLSe6ntpTYt3C2ERH6zdF6p4xG3ELB2LqALuAsUu5z2h01wf0xg/viewform');
linkShow.classList.add('post__link', 'post__link--btn');
let linkShowContent = document.createTextNode("https://docs.google.com/…/1FAIpQLSe6ntpTYt3C2ERH6z…/viewform"); 
linkShow.appendChild(linkShowContent); 

//======= .post__info-wrap

let infoWrap = document.createElement('div');
infoWrap.classList.add('post__info-wrap');


let postImg = document.createElement('img');
postImg.classList.add('post__img');
postImg.setAttribute('src', 'https://external.fiev1-1.fna.fbcdn.net/safe_image.php?d=AQB5FMD_SBdCKrKx&w=476&h=249&url=https%3A%2F%2Flh6.googleusercontent.com%2Fq-TOaf-GMDX5J7cm1NnZ3SVcn3uUm_rgGLWJvnMeYS52a8DQ3VtfbQXLTvekgtnw1UU%3Dw1200-h630-p&cfs=1&upscale=1&_nc_hash=AQC-6yEaB1hN5yRr');

let postInfo = document.createElement('div');
postInfo.classList.add('post__info', 'post__info--wrap');

let h = document.createElement('h1');
h.classList.add('post__info', 'post__info--title');
let hContent = document.createTextNode('Опрос от Beetroot Academy'); 
h.appendChild(hContent); 

let para = document.createElement('p');
para.classList.add('post__info', 'post__info--text');
let paraContent = document.createTextNode('Тебе бы хотелось выиграть стипендию, которая полностью покроет стоимость обучение на одном из наших четырех курсов? В любом из городов, где мы присутствуем? Разыгрываем магический билет в…'); 
para.appendChild(paraContent); 

let copyright = document.createElement('span');
copyright.classList.add('post__info', 'post__info--copyright');
let copyrightContent = document.createTextNode('docs.google.com'); 
copyright.appendChild(copyrightContent); 

//===== .social
let social = document.createElement('div');
social.classList.add('post__social-wrap', 'clearfix');

let linkLike = document.createElement('a');
linkLike.setAttribute('href', '#');
linkLike.classList.add('post__social', 'post__social--like');
let linkLikeContent = document.createTextNode('Нравится'); 
linkLike.appendChild(linkLikeContent); 

let linkComment = document.createElement('a');
linkComment.setAttribute('href', '#');
linkComment.classList.add('post__social', 'post__social--comment');
let linkCommentContent = document.createTextNode('Коментарий'); 
linkComment.appendChild(linkCommentContent); 

let linkShare = document.createElement('a');
linkShare.setAttribute('href', '#');
linkShare.classList.add('post__social', 'post__social--share');
let linkShareContent = document.createTextNode('Поделиться'); 
linkShare.appendChild(linkShareContent); 

appElement.append(postWrap, paraFirst, paraSecond, linkShow, infoWrap, social);
infoWrap.append(postImg, postInfo);
postWrap.append(logoImg, link, iconRight, time, dot, icon);
postInfo.append(h, para, copyright);
social.append(linkLike, linkComment, linkShare);


})();

