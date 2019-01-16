    var canvas = document.getElementById('myCanvas')
    var c = canvas.getContext("2d");
    var w = window.innerWidth - 20;
    var h = window.innerHeight - 20;
    canvas.width = w;
    canvas.height = h;
    var color = ['#FF3F8E', '#04C2C9', '#2E55C1']

    var dotsArray = [];

    var mouse = {
      mouseX: w / 2,
      mouseY: h / 2
    }
    let cirRad, radSpeed, randX, randY;

    window.addEventListener('mousemove', function(event) {
      mouse.mouseX = event.x;
      mouse.mouseY = event.y
    })

    for (var i = 0, j = 0; i < 80; i++, j += 25) {
       cirRad = Math.floor(Math.random() * 200) + 100
       radSpeed = (0.001 / 100) * cirRad
       randX = Math.floor(Math.random() * w) + 150
       randY = Math.random() * h
      dotsArray[i] = new MainFun(randX, randY, color[Math.floor(Math.random() * color.length)], 1.5, cirRad, radSpeed)
    }

    function MainFun(x, y, col, rad, cirRad, radSpeed) {
      this.x = x;
      this.y = y;
      this.col = col;
      this.rad = rad;
      this.radians = 0;
      this.cirRad = cirRad;
      this.radSpeed = radSpeed;
      this.op = 0.3;
      this.lenY = 1200;
      this.lenX = this.lenY / 2

      this.update = function() {
        if (Math.abs(this.x - mouse.mouseX) < 50) {
          this.op = 1;
        } else {
          this.op = 0.3;
        }
        this.radians += this.radSpeed
        this.x = x + Math.cos(this.radians) * this.cirRad
        this.y = y + Math.sin(this.radians) * this.cirRad
        this.draw()
      }
      this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
        c.fillStyle = this.col;
        c.fill();
        c.closePath();

        c.beginPath();
        c.arc(this.x + this.lenX, this.y - this.lenY, this.rad, 0, 2 * Math.PI);
        c.fillStyle = this.col;
        c.fill();
        c.closePath();

        c.beginPath();
        c.lineJoin = "round";
        c.moveTo(this.x, this.y);
        c.lineTo(this.x + this.lenX + 0.5, this.y - this.lenY + 0.5);
        c.lineWidth = 0.2;
        c.strokeStyle = "rgba(255,255,255," + this.op + ")"
        c.stroke();
      }
    }

    function animate() {
      requestAnimationFrame(animate)
      c.clearRect(0, 0, w, h)
      for (var i = 0; i < dotsArray.length; i++) {
        dotsArray[i].update()
      }
    }
    animate()
