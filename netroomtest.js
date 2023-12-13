let number  = document.querySelector('h1');
let plusImg = $("#clickimg");
let count   = 0;

plusImg.addEventListener('click', () => {
    count ++; 
    number.innerHTML = count;
});
