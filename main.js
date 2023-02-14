console.log('java is workin');

const cursor=document.querySelector('.cursor');

window.addEventListener('mousemove', mouse=> {
    cursor.style.top= mouse.pageY + 'px'
    cursor.style.left=mouse.pageX + 'px'

})
