
const smallerCursor = document.querySelector('.small-cursor');


this.addEventListener("mousemove", function(e){

    smallerCursor.style.top= `${e.pageY}px`;
    smallerCursor.style.left = `${e.pageX -5}px`;
    


});
;

const cursor = curDot({
    zIndex: 10,
    diameter: 50,
    borderWidth: 1,
    borderColor: 'Orange',
    easing: 4,
    background: 'white'
})


cursor.over(".text-h1" , {
    scale:2,
    background:'black',

},
)
cursor.over("nav ul li", {
    scale: 1.2,
    background: "transparent"
})
cursor.over(".img-container img", {
    scale:2,
})
cursor.over('.location .img img', {
    scale:9,
})