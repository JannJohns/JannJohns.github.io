function testWebP (callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        console.log('WebP is supported!');
    } else {
        console.log('WebP is not supported :(');
    }
});

document.getElementById('infoBtn').addEventListener('click', () => {
  document.getElementById('popup').classList.add('active');
})


try {
  const wimg1 = document.getElementById('infoBtn');
} catch (e) {
  console.log(e)
}