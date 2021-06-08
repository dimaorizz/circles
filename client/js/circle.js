let circle = document.querySelector('#circle');

circle.onmousedown = function(event) {

    function moveAt(pageX, pageY) {
      circle.style.left = pageX - circle.offsetWidth / 2 + 'px';
      circle.style.top = pageY - circle.offsetHeight / 2 + 'px';
    }
  
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    document.addEventListener('mousemove', onMouseMove);
  
    circle.onmouseup = async () => {
      document.removeEventListener('mousemove', onMouseMove);
      circle.onmouseup = null;
      let circleInfo = circle.getBoundingClientRect();
      await fetch('http://localhost:3000/coords', {
          method: 'post',
          mode: 'no-cors',
          headers: new Headers({
            'Accept':'application/json',
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify({
              offsetTop: circleInfo.top,
              offsetLeft: circleInfo.left
          }),
      })
    };
  
  };

// const getPosTimer = setInterval(() => {
//     let circleInfo = circle.getBoundingClientRect();
//     console.log(circleInfo.top)
//     console.log(circleInfo.left);
// }, 100);


const circlePosition = {
    posX: 0,
    posY: 0
};



// console.log(circleInfo.y);