var image1 = 'https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg';
var image2, image3;
image2 = 'https://i.pinimg.com/originals/39/06/74/390674d539fab9d8a21237e14baa7bb7.jpg';
image3 = 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'
var images = [image1, image2, image3];
var num = 0;

function next() {
    var slider = document.getElementById('slide');
    num++
    if (num >= images.length) {
        num = 0
    }
    slider.src = images[num]
}

function prev() {
    var slider = document.getElementById('slide');
    num--
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num]
}