








const tabcontent = document.querySelectorAll(".tabs-content li")
const tabcontentfirst = document.querySelector(".tabs-content li")
tabcontent.forEach((content) => { content.style.display = "none" })
tabcontentfirst.style.display = "flex"


const btnCollection = document.querySelectorAll('.tabs li')
btnCollection.forEach(btn => {


  btn.addEventListener('click', (event) => {

    const btnCollection = document.querySelectorAll('.tabs li')
    btnCollection.forEach((item) => { item.className = "tabs-title" })

    const tabcontent = document.querySelectorAll(".tabs-content li")
    tabcontent.forEach((content) => { content.style.display = "none" })

    document.getElementById(event.target.dataset.category).style.display = "flex"

    event.target.classList.value = "tabs-title active"
  })
})


// Portfolio Gallery with Filtering

const showSelectedPhoto = (folder, numb) => {
  const container = document.querySelector(".container");
  container.innerHTML = ""
  for (let i = 0; i < numb; ++i) {

    container.insertAdjacentHTML("beforeend", `<img src="../TheHamProject/stepProjHam/${folder}/${folder}${i}.jpg" alt="">`)
  }
}


const testbtn = document.querySelector('.test')

const testbtn2 = document.querySelector('.test2')
const testbtn3 = document.querySelector('.test3')

const testbtn4 = document.querySelector('.test4')
const testbtn5 = document.querySelector('.test5')


const more = document.querySelector('.more-btn')

showSelectedPhoto("landing-page", 7)

testbtn.addEventListener("click", function () { showSelectedPhoto("landing-page", 7);
document.querySelector('.more-btn').style.display = 'block'
 })

testbtn2.addEventListener("click", function () { showSelectedPhoto("graphic-design", 12);
document.querySelector('.more-btn').style.display = 'none' })

testbtn3.addEventListener("click", function () { showSelectedPhoto("web-design", 7);
document.querySelector('.more-btn').style.display = 'none' })

testbtn4.addEventListener("click", function () { showSelectedPhoto("landing-page", 7);
document.querySelector('.more-btn').style.display = 'none' })

testbtn5.addEventListener("click", function () { showSelectedPhoto("wordpress", 10);
document.querySelector('.more-btn').style.display = 'none' })

// __________________________________more



more.addEventListener("click", function () { showSelectedPhoto("web-design", 7);
document.querySelector('.more-btn').style.display = 'none' })

more.addEventListener("click", function () { showSelectedPhoto("graphic-design", 12);
document.querySelector('.more-btn').style.display = 'none' })


// _______________________________________________-


// swiper
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});


// Masonry
var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  // columnWidth: 200
  gutter: 20,

});


