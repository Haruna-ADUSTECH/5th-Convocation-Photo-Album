// Configuration
const TOTAL_PAGES = 100; // 100 pages (200 images)
const IMAGES_PER_PAGE = 2;
const IMAGE_FOLDER = 'images/';
const IMAGE_PREFIX = 'image';
const IMAGE_EXTENSION = '.jpg';

// Initialize variables
let flipbook;
let currentPage = 1;

// Initialize the flipbook
function initFlipbook() {
    // Create the flipbook
    flipbook = $('#flipbook').turn({
        width: 900,
        height: 600,
        autoCenter: true,
        duration: 1000,
        acceleration: true,
        gradients: true,
        when: {
            turning: updateControls,
            turned: updateControls
        }
    });

    // Add front cover
    flipbook.turn('addPage', createCoverPage('5th Convocation<br>ADUSTECH Wudil'), 1);

    // Add content pages (2 images per spread)
    for (let i = 1; i <= TOTAL_PAGES; i++) {
        const img1 = `${IMAGE_FOLDER}${IMAGE_PREFIX}${(i*2)-1}${IMAGE_EXTENSION}`;
        const img2 = `${IMAGE_FOLDER}${IMAGE_PREFIX}${i*2}${IMAGE_EXTENSION}`;
        flipbook.turn('addPage', createContentPage(img1, img2), i + 1);
    }

    // Add back cover
    flipbook.turn('addPage', createCoverPage('Congratulations Graduates!<br>Class of 2023'), TOTAL_PAGES + 2);

    // Create thumbnails
    createThumbnails();

    // Update controls
    updateControls();
}

// Create a cover page
function createCoverPage(content) {
    return $(`<div class="hard"><h2>${content}</h2></div>`);
}

// Create a content page with two images
function createContentPage(img1, img2) {
    const page = $('<div class="page"></div>');
    
    // Left page (first image)
    page.append($(`<div style="width:50%;height:100%;float:left;background-image:url(${img1});background-size:contain;background-repeat:no-repeat;background-position:center;"></div>`));
    
    // Right page (second image)
    page.append($(`<div style="width:50%;height:100%;float:right;background-image:url(${img2});background-size:contain;background-repeat:no-repeat;background-position:center;"></div>`));
    
    return page;
}

// Create thumbnail navigation
function createThumbnails() {
    const thumbnails = $('#thumbnails');
    
    // Add cover thumbnail
    thumbnails.append($('<div class="thumbnail" data-page="1" style="background:#008000;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;">Cover</div>'));
    
    // Add content thumbnails (use first image of each spread)
    for (let i = 1; i <= TOTAL_PAGES; i++) {
        const imgSrc = `${IMAGE_FOLDER}${IMAGE_PREFIX}${(i*2)-1}${IMAGE_EXTENSION}`;
        thumbnails.append($(`<img class="thumbnail" src="${imgSrc}" data-page="${i + 1}">`));
    }
    
    // Add back cover thumbnail
    thumbnails.append($(`<div class="thumbnail" data-page="${TOTAL_PAGES + 2}" style="background:#008000;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;">Back</div>`));
    
    // Add click handlers
    $('.thumbnail').click(function() {
        const page = $(this).data('page');
        flipbook.turn('page', page);
    });
}

// Update control buttons
function updateControls() {
    const page = flipbook.turn('page');
    const totalPages = flipbook.turn('pages');
    
    $('#current-page').text(page);
    $('#total-pages').text(totalPages - 2); // Subtract cover pages
    
    $('#first-btn').prop('disabled', page === 1);
    $('#prev-btn').prop('disabled', page === 1);
    $('#next-btn').prop('disabled', page === totalPages);
    $('#last-btn').prop('disabled', page === totalPages);
    
    // Update active thumbnail
    $('.thumbnail').removeClass('active');
    $(`.thumbnail[data-page="${page}"]`).addClass('active');
}

// Event handlers
$('#first-btn').click(() => flipbook.turn('page', 1));
$('#prev-btn').click(() => flipbook.turn('previous'));
$('#next-btn').click(() => flipbook.turn('next'));
$('#last-btn').click(() => flipbook.turn('page', flipbook.turn('pages')));

// Keyboard navigation
$(document).keydown(function(e) {
    if (e.key === 'ArrowLeft') {
        flipbook.turn('previous');
        e.preventDefault();
    } else if (e.key === 'ArrowRight') {
        flipbook.turn('next');
        e.preventDefault();
    }
});

// Initialize when DOM is ready
$(document).ready(initFlipbook);
