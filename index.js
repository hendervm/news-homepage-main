const mainImg = document.querySelector(".main-img img");

const mainImgChange = () => {
    if (window.innerWidth >= 768) {
        mainImg.src = "assets/images/image-web-3-desktop.jpg"
    }
    else {
        mainImg.src = "assets/images/image-web-3-mobile.jpg"
    }
}

function changeMenuIcon() {

}

mainImgChange();

window.onresize = mainImgChange

