$(document).ready(function () {
  const totalPics = 199;
  const pages = Math.ceil(totalPics / 2);
  const flipbook = $("#flipbook");

  // Create pages dynamically
  for (let i = 1; i <= totalPics; i += 2) {
    let left = i;
    let right = i + 1;
    let pagePair = '';

    pagePair += '<div class="page">';
    if (left <= totalPics) {
      pagePair += `<img src="images/${left}.jpg" alt="Image ${left}">`;
    }
    pagePair += '</div>';

    pagePair += '<div class="page">';
    if (right <= totalPics) {
      pagePair += `<img src="images/${right}.jpg" alt="Image ${right}">`;
    }
    pagePair += '</div>';

    flipbook.append(pagePair);
  }

  // Initialize Turn.js
  flipbook.turn({
    width: $('#flipbook').width(),
    height: $('#flipbook').height(),
    autoCenter: true,
    elevation: 50,
    gradients: true,
    duration: 800
  });

  // Navigation buttons
  $('#prev').click(() => {
    flipbook.turn('previous');
  });

  $('#next').click(() => {
    flipbook.turn('next');
  });

  // Page number update
  flipbook.bind('turned', function (e, page) {
    $('#page-num').text(`Page ${page}`);
  });

  // Set initial page number
  $('#page-num').text(`Page 1`);
});
