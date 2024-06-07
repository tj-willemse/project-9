// problem: when we click on bars icon nothing happens
// goal: we want our mobile menu to open when we click on our bars icon!

// what is the solution: create a click event on the bars icon that changes the display property on the mobile menu from none to flex.

// steps:
// 1. select the bars icon
// 2. select mobile nav
// 3. create a click event listener

const mobileNav =() => {

const barsBtn = document.querySelector('#bars-btn');
const mobileNav =document.querySelector('#mobile-nav');
const closeBtn =document.querySelector('#close-btn');

const handleBarsBtn =() => (mobileNav.style.display ='flex')
const handleCloseBtn =() => (mobileNav.style.display='none')

barsBtn.addEventListener('click', handleBarsBtn)
closeBtn.addEventListener('click', handleCloseBtn)

};

export default mobileNav