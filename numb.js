var i=0;
    var image=document.getElementById("image");
    // Добавьте свои картинки в массив через запятую
    var imgs=new Array('/site/number 1.jpg', '/site/number 2.jpg','/site/number 3.jpg','/site/number 4.jpg','/site/number 5.jpg');
    function imgsrc() {
    i++;i%=imgs.length;
    image.src = imgs[i];
}