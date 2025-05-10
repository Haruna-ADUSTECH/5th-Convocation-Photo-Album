$(document).ready(function() {
  const totalPics = 199;
  const pages = Math.ceil(totalPics / 2);
  const flipbook = $('#flipbook');

  // Generate page divs
  for (let i = 1; i <= pages * 2; i += 2) {
    let leftIdx = i;
    let rightIdx = i + 1;
    let pageHTML = '<div class="page">';
    if (leftIdx <= totalPics) {
      pageHTML += `<img src="images/${leftIdx}.jpg" alt="Pic ${leftIdx}">`;
    }
    pageHTML += '</div><div class="page">';
    if (rightIdx <= totalPics) {
      pageHTML += `<img src="images/${rightIdx}.jpg" alt="Pic ${rightIdx}">`;
    }
    pageHTML += '</div>';
    flipbook.append(pageHTML);
  }

  // Initialize turn.js
  flipbook.turn({
    width: '100%',
    height: '100%',
    autoCenter: true,
    pages: pages * 2,
    acceleration: true
  });

  // Update page count
  $('#page-num').text(`1 / ${pages * 2}`);
  flipbook.bind('turned', function(e, page) {
    $('#page-num').text(`${page} / ${pages * 2}`);
  });

  // Navigation buttons
  $('#prev').click(() => flipbook.turn('previous'));
  $('#next').click(() => flipbook.turn('next'));
});
