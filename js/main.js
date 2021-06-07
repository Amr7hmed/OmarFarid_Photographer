AOS.init();
let arrayamg = [
  "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg",
  "7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg",
  "13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg",
  "19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg",
  "25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","30.jpg",
  "31.jpg","32.jpg","33.jpg","34.jpg","35.jpg","36.jpg",
  "37.jpg","38.jpg","39.jpg","40.jpg","41.jpg","42.jpg"
];
let num = [12, 6, 6];
function colforimg(num) {
  let numarray = num;
  for (let i = 0; i < arrayamg.length; ) {
    for (let t = 0; t < numarray.length; ) {
        let x = numarray[t];
      document.getElementById("prtofol").innerHTML += `
                <div class="prtofolimg" data-class="col-${x}">
                            <img src="imag/glary/${arrayamg[i]}">
                        </div>
                </div>
            `;
      i++;
      t++;
    }
  }
}
colforimg(num);
/*------imggraly-add-calss--------*/
let imggraly = document.querySelectorAll('.prtofolimg'),
    classnumber = [];
    imggraly.forEach(item =>{
        classnumber.push(item.dataset.class);
    })

function addclass(classnumber){
    let numberclass= [...classnumber];
    console.log(numberclass)

    imggraly.forEach((item,index) =>{
        item.classList.add(numberclass[index]);
    })
}
addclass(classnumber);
/*-----------Zoom-add-crid-system-----*/
let grid = document.querySelector("#zooms .grid"),
  plus = document.querySelector("#zooms .plus"),
  minus = document.querySelector("#zooms .minus");

grid.onclick = function (e) {
    e.preventDefault();
    grid.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "block";
    imggraly.forEach((item,index) =>{
        item.classList.remove(classnumber[index]);
        item.classList.add('col-3');
        item.style.height = `50%`;
    })
};
plus.onclick = function (e) {
  e.preventDefault();
  minus.style.display = "none";
  plus.style.display = "none";
  grid.style.display = "block";
  addclass(classnumber);
  imggraly.forEach(item =>{
    item.style.height = `100%`;
})
  
};
minus.onclick = function (e) {
  e.preventDefault();
  plus.style.display = "block";
  minus.style.display = "block";
  imggraly.forEach((item,index) =>{
      item.classList.remove('col-3');
      item.classList.add('col-2');
      item.style.height = `25%`;
  })
};
//---// gallery-img-poupe--//
let galleryimgs = document.querySelectorAll(".prtofolimg img"),
  divproup = document.querySelector(".tapimg"),
  closeproup = document.querySelector(".close"),
  imgproup = document.querySelector(".the-img");

galleryimgs.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    divproup.style.display = "block";
    imgproup.src = img.src;
    console.log("y")
  });
});
closeproup.onclick = function (e) {
  e.preventDefault();
  divproup.style.display = "none";
};
document.onkeydown = function (e) {
  e.preventDefault();
  if (e.keyCode == "27") {
    divproup.style.display = "none";
  }
};

//show and hidding the work nav
let worknav = document.getElementById("work"),
  listwork = document.querySelector(".list-work");
worknav.onclick = function () {
  listwork.classList.toggle("show");
};
//show and hidding the biography nav
let biography = document.getElementById("biography"),
  biographysection = document.querySelector(".biography"),
  awards = document.getElementById("awards"),
  awardslink = document.getElementById("awardslink"),
  contactlink = document.getElementById("contactlink"),
  contactsect = document.getElementById("contact");
biography.onclick = function () {
  if (
    awards.classList.contains("show") ||
    contactsect.classList.contains("show")
  ) {
    contactsect.classList.remove("show");
    awards.classList.remove("show");
    biographysection.classList.toggle("show");
  } else {
    biographysection.classList.toggle("show");
  }
};
awardslink.onclick = function () {
  if (
    biographysection.classList.contains("show") ||
    contactsect.classList.contains("show")
  ) {
    contactsect.classList.remove("show");
    biographysection.classList.remove("show");
    awards.classList.toggle("show");
  } else {
    awards.classList.toggle("show");
  }
};
contactlink.onclick = function () {
  if (
    biographysection.classList.contains("show") ||
    awards.classList.contains("show")
  ) {
    biographysection.classList.remove("show");
    awards.classList.remove("show");
    contactsect.classList.toggle("show");
  } else {
    contactsect.classList.toggle("show");
  }
};

/*----span-navbar----*/
let about = document.querySelector(".about");
document.querySelector(".navbar").onclick = function () {
  document.querySelector(".navbar").classList.toggle("active");
  about.classList.toggle("open");
  biographysection.classList.remove("show");
  awards.classList.remove("show");
  contactsect.classList.remove("show");
};



