var s = slidr.create('js-slidr', {
    //    after: function (e) {
    //      console.log('in: ' + e.in.slidr);
    //    },
    //    before: function (e) {
    //      console.log('out: ' + e.out.slidr);
    //    },
    direction: 'horizontal',
    controls: 'border',
    pause: false,
    fade: false,
    keyboard: true, //*** what are these
    overflow: false,
    theme: '#222',
    timing: {
      'linear': '0.7s ease-out'
    },
    touch: true,
    transition: 'linear'

  })
  .add('h', ['one', 'two', 'three', 'one']) // loops the first three slides
  .add('h', ['four', 'five', 'six', 'four']) // loops the next three slides
  //  .add('v', ['one', 'four', 'one']) // moves between the two sets of slides
  //.add('v', ['two', 'five', 'two'])
  //.add('v', ['three', 'six', 'three'])// allows vertical sliding across all slides
  .start().auto();

var s = slidr.create('js-slidr1', {
    //    after: function (e) {
    //      console.log('in: ' + e.in.slidr);
    //    },
    //    before: function (e) {
    //      console.log('out: ' + e.out.slidr);
    //    },

    direction: 'horizontal',
    pause: false,
    fade: false,
    keyboard: true, //*** what are these
    overflow: false,
    theme: '#222',
    timing: {
      'linear': '0.7s ease-out'
    },
    touch: true,
    transition: 'linear'

  })
  .add('h', ['one', 'two', 'three', 'one']) // loops the first three slides
  .add('h', ['four', 'five', 'six', 'four']) // loops the next three slides
  //  .add('v', ['one', 'four', 'one']) // moves between the two sets of slides
  //.add('v', ['two', 'five', 'two'])
  //.add('v', ['three', 'six', 'three'])// allows vertical sliding across all slides
  .start().auto();

var s = slidr.create('js-slidr2', {
    //    after: function (e) {
    //      console.log('in: ' + e.in.slidr);
    //    },
    //    before: function (e) {
    //      console.log('out: ' + e.out.slidr);
    //    },

    direction: 'horizontal',
    pause: false,
    fade: false,
    keyboard: true, //*** what are these
    overflow: false,
    theme: '#222',
    timing: {
      'linear': '0.7s ease-out'
    },
    touch: true,
    transition: 'linear'

  })
  .add('h', ['one', 'two', 'three', 'one']) // loops the first three slides
  .add('h', ['four', 'five', 'six', 'four']) // loops the next three slides
  //  .add('v', ['one', 'four', 'one']) // moves between the two sets of slides
  //.add('v', ['two', 'five', 'two'])
  //.add('v', ['three', 'six', 'three'])// allows vertical sliding across all slides
  .start().auto();


var request = new XMLHttpRequest();

function getJson(word) {
  request.open('GET', 'https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=' + word + '&limit=7');
  request.onreadystatechange = function () {
    if (request.status === 200 && request.readyState === 4) {
      var resText = JSON.parse(request.responseText);


      for (i = 0; i < 7; i++) {
        var imgSrc = resText.results[i].url
        var imgTitle = resText.results[i].title

        console.log(imgSrc);
        var grid = document.querySelectorAll('.grid-item');
        grid[i].innerHTML = '<span class="img__title">' + imgTitle + '</span><img src="' + imgSrc + '">';

        //        grid[i].innerHTML = '<img src="' + imgSrc + '">';


      }

      console.log(resText);
    } else if (request.status !== 200) {

      console.log(false);

    }
  }
  request.send();
}
//console.log(request);

getJson('cat');

function someFunc(e) {
  e.preventDefault();
  //  document.querySelector('.grid').innerHTML = '';

  var inputVal = document.getElementById("search").value;


  getJson(inputVal);
}
var submit = document.querySelector(".discover__form__submit");
submit.addEventListener('click', someFunc);





//=================masonry=======================
var msnry = new Masonry(".grid", {
  itemSelector: ".grid-item",
  columnWidth: ".grid-item"

});




//================================================================

//function fixEvent(e) {
//
//  e.currentTarget = this;
//  e.target = e.srcElement;
//
//  if (e.type == 'mouseover' || e.type == 'mouseenter') e.relatedTarget = e.fromElement;
//  if (e.type == 'mouseout' || e.type == 'mouseleave') e.relatedTarget = e.toElement;
//
//  if (e.pageX == null && e.clientX != null) {
//    var html = document.documentElement;
//    var body = document.body;
//
//    e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
//    e.pageX -= html.clientLeft || 0;
//
//    e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
//    e.pageY -= html.clientTop || 0;
//  }
//
//  if (!e.which && e.button) {
//    e.which = e.button & 1 ? 1 : (e.button & 2 ? 3 : (e.button & 4 ? 2 : 0));
//  }
//
//  return e;
//}