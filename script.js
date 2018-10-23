var zin = 0;
function invis(){
  for(var i in arguments) {
    $(arguments[i]).addClass('invis');
    $(arguments[i]).removeClass('vis');
  }
}

function vis(){
  for(var i in arguments) {
    $(arguments[i]).addClass('vis');
    $(arguments[i]).removeClass('inv');
  }
}

function ls() {
  if (cl == "eng") {
    $('[data-lang="eng"]').addClass('invis');
    $('[data-lang="kor"]').removeClass('invis');
    cl = "kor";
  } else
  if (cl == "kor") {
    $('[data-lang="kor"]').addClass('invis');
    $('[data-lang="eng"]').removeClass('invis');
    cl = "eng";
  }
}







interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target.parentNode,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
// console.log(event.target.parentNode)
    // translate the element
    target.style.webkitTransform =
    target.style.zIndex = zin;
    zin++;
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;
