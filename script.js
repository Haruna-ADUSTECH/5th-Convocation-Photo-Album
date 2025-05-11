$(document).ready(function () {
  const totalPics = 199;
  const flipbook = $("#flipbook");

  // Create pages: one photo per page
  for (let i = 1; i <= totalPics; i++) {
    flipbook.append(`
      <div class="page">
        <img src="images/${i}.jpg" alt="Convocation Photo ${i}">
      </div>
    `);
  }

  // Initialize Turn.js
  flipbook.turn({
    width: flipbook.width(),
    height: flipbook.height(),
    autoCenter: true,
    display: 'single',
    elevation: 50,
    gradients: true,
    duration: 1000
  });

  // Page tracking
  flipbook.on('turned', function (e, page) {
    $('#page-num').text(`Page ${page}`);
  });

  // Navigation buttons
  $('#prev').click(() => flipbook.turn('previous'));
  $('#next').click(() => flipbook.turn('next'));

  $('#page-num').text(`Page 1`);
});
