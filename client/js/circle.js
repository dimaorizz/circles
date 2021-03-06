let circle = document.querySelector('#circle');

init();

circle.onmousedown = function(event) {
    function moveAt(pageX, pageY) {
      circle.style.left = `${pageX-circle.offsetWidth/2}px`;
      circle.style.top = `${pageY-circle.offsetHeight/2}px`;
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
          mode: 'cors',
          headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              offsetTop: circleInfo.top,
              offsetLeft: circleInfo.left
          }),
      })
    };
  
  };

async function locateCircle() {
  try {
    let circlePosition = await fetch('http://localhost:3000/coords');
    circlePosition = await circlePosition.json();
    return circlePosition;
    
  } catch (err) {
    
  }

}

async function init() {
  circlePosition = await locateCircle();
  console.log(circlePosition);
  circle.style.top = `${circlePosition.offsetTop}px`;
  circle.style.left = `${circlePosition.offsetLeft}px`;
}

async function rerenderCircle() {
  const serverPos = await locateCircle();
  if(serverPos.offsetTop !== circlePosition.offsetTop || serverPos.offsetLeft !== circlePosition.offsetLeft) {
    circlePosition.offsetTop = serverPos.offsetTop;
    circlePosition.offsetLeft = serverPos.offsetLeft;
    circle.style.top = `${circlePosition.offsetTop}px`;
    circle.style.left = `${circlePosition.offsetLeft}px`;
    console.log('rerendered')
    return;
  }
  console.log('as is');
}



const fetchCoordsInterval = setInterval(rerenderCircle, 1000);

// console.log(circleInfo.y);