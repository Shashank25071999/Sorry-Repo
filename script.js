var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
  var x = Math.random() * canvas.offsetWidth;
  var y = Math.random() * canvas.offsetHeight;
  var radius = Math.random() * 1.2;
  var hue = colorrange[getRandom(0, colorrange.length - 1)];
  var sat = getRandom(50, 100);
  var opacity = Math.random(); // Initialize with random opacity
  starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;
var fourthOpacity = 0;

var baseFrame = context.getImageData(
  0,
  0,
  window.innerWidth,
  window.innerHeight
);

function drawStars() {
  for (var i = 0; i < stars; i++) {
    var star = starArray[i];

    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 360);
    context.fillStyle =
      "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
    context.fill();
  }
}

function updateStars() {
  for (var i = 0; i < stars; i++) {
    if (Math.random() > 0.99) {
      starArray[i].opacity = Math.random();
    }
  }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  if (button.textContent === "Click Me! ❤") {
    button.textContent = "loading...";
    fetch("send_mail.php")
      .then((response) => {
        if (response.ok) {
          button.textContent = "Check Your Email 🙃";
        } else {
          console.error("Failed to send email");
          button.textContent = "Error 😞";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        button.textContent = "Error 😞";
      });
  }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
  lines.forEach((line, index) => {
    context.fillText(line, x, y + index * (fontSize + lineHeight));
  });
}

function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 25); // Adjust font size based on screen width
  var lineHeight = 8;

  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

  if (frameNumber < 500) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I'm sorry for the words that hurt you, they were never meant to.😔",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  //fades out the text by decreasing the opacity
  if (frameNumber >= 500 && frameNumber < 1000) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I'm sorry for the words that hurt you, they were never meant to.😔",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  //needs this if statement to reset the opacity before next statement on canvas
  if (frameNumber == 1000) {
    opacity = 0;
  }
  if (frameNumber > 1000 && frameNumber < 1500) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "Every joke we share, every morning text—I miss it all. I'm sorry for jeopardizing that.😞",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 1500 && frameNumber < 2000) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "Every joke we share, every morning text—I miss it all. I'm sorry for jeopardizing that.😞",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }
  if (frameNumber == 2000) {
    opacity = 0;
  }

  if (frameNumber > 2000 && frameNumber < 2500) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "Your laughter brightens my day, and I hate that I've dimmed it with my thoughtless words.😢",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2500 && frameNumber < 3000) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "Your laughter brightens my day, and I hate that I've dimmed it with my thoughtless words.😢",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 3000) {
    opacity = 0;
  }
  if (frameNumber > 3000 && frameNumber < 3500) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I value every moment with you, and I regret anything that makes you want to pull away.🙏",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 3500 && frameNumber < 4000) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I value every moment with you, and I regret anything that makes you want to pull away.🙏",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 4000) {
    opacity = 0;
  }
  if (frameNumber > 4000 && frameNumber < 4500) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "I'm not just sorry; I'm committed to making things right.",
          "Please give me the chance to.❤️",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I've realized my mistake, and it's eating me up. I hope you can forgive me.🌟",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }
  if (frameNumber >= 4500 && frameNumber < 5000) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "I'm not just sorry; I'm committed to making things right.",
          "Please give me the chance to.❤️",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I've realized my mistake, and it's eating me up. I hope you can forgive me.🌟",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity - 0.01;
  }

  if (frameNumber == 5000) {
    opacity = 0;
  }
  if (frameNumber > 5000 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "I promise to think twice before speaking,",
          "especially when it comes to something as precious as us.❤️",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I promise to think twice before speaking, especially when it comes to something as precious as us.❤️",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }

  if (frameNumber >= 6000 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "I can't bear the thought of losing your presence in my life. I'm truly, deeply sorry.",
          "Please don't change how we interact because of this.💔",
        ],
        canvas.width / 2,
        canvas.height / 2 + 70,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I can't bear the thought of losing your presence in my life. I'm truly, deeply sorry. Please don't change how we interact because of this.💔",
        canvas.width / 2,
        canvas.height / 2 + 50
      );
    }

    secondOpacity = secondOpacity + 0.01;
  }

  if (frameNumber >= 7000 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${fourthOpacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "Let me make it up to you. I'll do whatever it takes to earn back your trust and laughter, and please don't change our pure bond because of this.🌈",
        ],
        canvas.width / 2,
        canvas.height / 2 + 110,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "Let me make it up to you. I'll do whatever it takes to earn back your trust and laughter, and please don't change our pure bond because of this.🌈",
        canvas.width / 2,
        canvas.height / 2 + 110
      );
    }

    fourthOpacity = fourthOpacity + 0.01;
  }

  if (frameNumber >= 7500 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${thirdOpacity})`;
    context.fillText(
      "Please Forgive Me.😔",
      canvas.width / 2,
      canvas.height / 2 + 170
    );
    thirdOpacity = thirdOpacity + 0.01;

    
  }
}

function draw() {
  context.putImageData(baseFrame, 0, 0);

  drawStars();
  updateStars();
  drawText();

  if (frameNumber < 99999) {
    frameNumber++;
  }
  window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
