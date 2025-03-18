
// �������
var slides = $(".slides");
var slide = $(".slide");
var currentIndex = 0; // ����� ��� ��������� ��������� ������� ������

function changeSlide(direction) {
    currentIndex += direction; // �������� ��� �������� �������� ������
    if (currentIndex < 0) {
        currentIndex = slide.length - 1;
    } else if (currentIndex >= slide.length) {
        currentIndex = 0;
    }
    var moveAmt = -currentIndex * getSlideWidth(); // ��������� ������� ��� ��������� ������ ��������
    slides.css("transform", "translateX(" + moveAmt + "px)");
}

$(".prev").on("click", function () {
    changeSlide(-1);
});

$(".next").on("click", function () {
    changeSlide(1);
});

function getSlideWidth() {
    return $(".slider").width();
}
$(window).resize(function () {
    if (isMobile()) {
        slides.css("transform", "translateX(0)");
        currentIndex = 0;
    }
    function isMobile() {
        return window.innerWidth <= 768;
    }

});


// Google map
document.getElementById('contact-button').addEventListener('click', function () {
    var mapContainer = document.getElementById('map-container');
    if (mapContainer.style.display === 'none' || mapContainer.style.display === '') {
        mapContainer.style.display = 'block';
    } else {
        mapContainer.style.display = 'none';
    }

})
