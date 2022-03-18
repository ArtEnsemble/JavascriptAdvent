const content = [
  {
    image: "dave-hoefler-okUIdo6NxGo-unsplash.jpg",
    caption: "Photo by Dave Hoefler on Unsplash",
  },
  {
    image: "eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg",
    caption: "Photo by Eugene Golovesov on Unsplash",
  },
  {
    image: "finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg",
    caption: "Photo by Dan Grinwis on Unsplash",
  },
  {
    image: "jakob-owens-EwRM05V0VSI-unsplash.jpg",
    caption: "Photo by Jakob Owens on Unsplash",
  },
  {
    image: "jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg",
    caption: "Photo by Jennifer reynolds on Unsplash",
  },
  {
    image: "kellen-riggin-SIBOiXKg0Ds-unsplash.jpg",
    caption: "Photo by Kellen Riggin on Unsplash",
  },
  {
    image: "rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg",
    caption: "Photo by Rafael Hoyos on Unsplash",
  },
  {
    image: "sherman-yang-VBBGigIuaDY-unsplash.jpg",
    caption: "Photo by Sherman Yang n Unsplash",
  },

  {
    image: "silas-baisch-Wn4ulyzVoD4-unsplash.jpg",
    caption: "Photo by Silas Baisch on Unsplash",
  },
  {
    image: "sonya-romanovska-wzdXhyi3AiM-unsplash.jpg",
    caption: "Photo by Sonya Romanovska on Unsplash",
  },
  {
    image: "vincentiu-solomon-ln5drpv_ImI-unsplash.jpg",
    caption: "Photo by Vincentiu Solomon on Unsplash",
  },
];

const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const featuredPic = document.querySelector(".feature img");
const filmstrip = document.querySelector(".thumbnails ul");
const pics = document.querySelectorAll(".thumbnails ul li");
const featureCaption = document.querySelector(".caption");

let selected;

document.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target.className == "left" || e.target.closest(".left")) {
    pickPic("prev", selected);
  }
  if (e.target.className == "right" || e.target.closest(".right")) {
    pickPic("next", selected);
  }
});

function loadImages() {
  let frag = document.createDocumentFragment();

  for (pic of content) {
    let el = document.createElement("li");

    el.innerHTML = `
    <a href="#">
      <img src="./images/${pic.image}" alt="${pic.caption}">
    </a>
  `;
    frag.appendChild(el);
  }
  filmstrip.appendChild(frag);
}

function indexImages() {
  for (let [index, pic] of pics.entries()) {
    if (index === 0) {
      pic.classList.add("selected");
      selected = index;
    }
    pic.addEventListener("click", function () {
      selectImage(index);
    });
  }
}

function selectImage(index) {
  document.querySelector(".selected").classList.remove("selected");
  // console.log(index);
  featuredPic.src = `images/${content[index].image}`;
  featureCaption.textContent = content[index].caption;
  pics[index].classList.add("selected");
  selected = index;
}

function pickPic(action, position) {
  document.querySelector(".selected").classList.toggle("selected");
  if (action === "next") {
    if (position === pics.length - 1) {
      pics[0].classList.add("selected");
      selected = 0;
    } else {
      pics[position + 1].classList.add("selected");
      selected = position + 1;
    }
  }
  if (action === "prev") {
    if (position === 0) {
      pics[pics.length - 1].classList.add("selected");
      selected = pics.length - 1;
    } else {
      pics[position - 1].classList.add("selected");
      selected = position - 1;
    }
  }
  featuredPic.src = `images/${content[selected].image}`;
  featureCaption.textContent = content[selected].caption;
}

indexImages();

// loadImages();
