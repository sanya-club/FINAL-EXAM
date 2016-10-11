function getJson(e) {
  request.open("GET", "https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=" + e + "&limit=8"), request.onreadystatechange = function () {
    if (200 === request.status && 4 === request.readyState) {
      var e = JSON.parse(request.responseText);
      for (i = 0; i < 8; i++) {
        var t = e.results[i].url,
          r = e.results[i].title;
        e.results[i].media[0].gif.dims[0], e.results[i].media[0].gif.dims[1];
        console.log(t);
        var o = document.querySelectorAll(".grid-item");
        o[i].innerHTML = '<span class="img__title">' + r + '</span><img src="' + t + '">'
      }
      console.log(e)
    } else 200 !== request.status && console.log(!1)
  }, request.send()
}

function someFunc(e) {
  e.preventDefault();
  var t = document.getElementById("search").value;
  getJson(t), setTimeout(function () {
    new Masonry(".grid", {
      itemSelector: ".grid-item",
      columnWidth: ".grid-item",
      gutter: 10
    })
  }, 2e3)
}
var s = slidr.create("js-slidr", {
    direction: "horizontal",
    controls: "border",
    pause: !1,
    fade: !1,
    keyboard: !0,
    overflow: !1,
    theme: "#222",
    timing: {
      linear: "0.7s ease-out"
    },
    touch: !0,
    transition: "linear"
  }).add("h", ["one", "two", "three", "one"]).add("h", ["four", "five", "six", "four"]).start().auto(),
  s = slidr.create("js-slidr1", {
    direction: "horizontal",
    pause: !1,
    fade: !1,
    keyboard: !0,
    overflow: !1,
    theme: "#222",
    timing: {
      linear: "0.7s ease-out"
    },
    touch: !0,
    transition: "linear"
  }).add("h", ["one", "two", "three", "one"]).add("h", ["four", "five", "six", "four"]).start().auto(),
  s = slidr.create("js-slidr2", {
    direction: "horizontal",
    pause: !1,
    fade: !1,
    keyboard: !0,
    overflow: !1,
    theme: "#222",
    timing: {
      linear: "0.7s ease-out"
    },
    touch: !0,
    transition: "linear"
  }).add("h", ["one", "two", "three", "one"]).add("h", ["four", "five", "six", "four"]).start().auto(),
  request = new XMLHttpRequest;
getJson("n/a");
var submit = document.querySelector(".discover__form__submit");
submit.addEventListener("click", someFunc), setTimeout(function () {
  new Masonry(".grid", {
    itemSelector: ".grid-item",
    columnWidth: ".grid-item",
    gutter: 10
  })
}, 2e3);