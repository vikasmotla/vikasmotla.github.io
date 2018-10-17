var app = angular.module("myProfile", []);


app.controller("main.ctrl", function($scope) {

  // $scope.goto = function (where) {
  //   if (where=='home') {
  //     document.body['scrollTop']
  //   }
  // }

  $scope.calculatePerc = function() {
    var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
  }
  var a = 0;
  var topLine = document.getElementById("topLine")
  var home = document.getElementById('home')
  var about = document.getElementById('about')
  var work = document.getElementById('work')
  var contact = document.getElementById('contact')
  topLine.style.width = a + "%";

  var css = 'nav ul li:hover{border-bottom: 4px solid #000;}';


  document.addEventListener("scroll", function() {
    topLine.style.width = a + "%";
    a = $scope.calculatePerc()
    // console.log(a);
    // if (a>0 && a<=32) {
    //   home.firstChild.style.color="#fff";
    //   about.firstChild.style.color="#fff";
    //   work.firstChild.style.color="#fff";
    //   contact.firstChild.style.color="#fff";
    // }else if (a>32 && a<=64) {
    //   home.firstChild.style.color="#000";
    //   about.firstChild.style.color="#000";
    //   work.firstChild.style.color="#000";
    //   contact.firstChild.style.color="#000";
    // }else if (a>64 && a<=98) {
    //   home.firstChild.style.color="#fff";
    //   about.firstChild.style.color="#fff";
    //   work.firstChild.style.color="#fff";
    //   contact.firstChild.style.color="#fff";
    // }else if (a>98) {
    //   home.firstChild.style.color="#000";
    //   about.firstChild.style.color="#000";
    //   work.firstChild.style.color="#000";
    //   contact.firstChild.style.color="#000";
    // }


  });

});
