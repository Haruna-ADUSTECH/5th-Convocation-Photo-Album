$(document).ready(function () {
  // Load 100 pages
  for (let i = 1; i <= 100; i++) {
    $('#flipbook').turn('addPage', $('<div><img src="images/page' + i + '.jpg" alt="Page ' + i + '"></div>'));
  }

  $('#flipbook').turn({
    width: 800,
    height: 500,
    autoCenter: true,
    duration: 1000,
    gradients: true,
    elevation: 50,
  });
});

function goToPage() {
  const page = parseInt(document.getElementById('goToPage').value);
  if (!isNaN(page)) {
    $('#flipbook').turn('page', page + 1); // offset due to cover
  }
}
