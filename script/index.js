// change colors
var flash = document.getElementById("flash");
var fs = document.getElementById("full-stop");

function changeColor(){
  // var colors = ['#fd32fd', '#11ab00', '#ad2d98']
  var colors = ['#e92efb', '#ff2079', '#440bd4', '#04005e', '#fcf340', '#7fff00']
  var color = colors[Math.floor(Math.random() * 6)];
  flash.style.backgroundColor = color;
  fs.style.color = color;
};

setInterval(changeColor,1000);


// type effect
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #333}";
    document.body.appendChild(css);
};

window.onscroll = function () {
  if (document.body.scrollTop > window.innerHeight*0.75 || document.documentElement.scrollTop > window.innerHeight*0.75) {
    document.getElementById("long-form-logo").style.display = "none";
    document.getElementById("short-form-logo").style.display = "flex";
    document.getElementById("long-form-menu").style.display = "none";
    document.getElementById("short-form-menu").style.display = "flex";
  } else {
    document.getElementById("long-form-logo").style.display = "flex";
    document.getElementById("short-form-logo").style.display = "none";
    document.getElementById("long-form-menu").style.display = "flex";
    document.getElementById("short-form-menu").style.display = "none";
  }
}

//toggle navmenu
function openNavmenu() {
var x = document.getElementById("navmenu");
var y = document.getElementById("navbar");
    x.style.display = "flex";
    y.style.display = "none";
}

function closeNavmenu() {
var x = document.getElementById("navmenu");
var y = document.getElementById("navbar");
    x.style.display = "none";
    y.style.display = "flex";
} 