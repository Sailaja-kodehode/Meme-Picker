const dogsData = [
  {
    emotionTags: ["moody"],
    isGif: false,
    image: "./angry.jpg.jpg",
    alt: "A dog looking moody",
  },
  {
    emotionTags: ["angry"],
    isGif: false,
    image: "image/angry.jpg.jpg",
    alt: "A dog looking moody",
  },
  {
    emotionTags: ["happy"],
    isGif: false,
    image: ".image/sleeping2.jpg",
    alt: "A dog looking happy",
  },
  {
    emotionTags: ["hungry"],
    isGif: false,
    image: "image/hungry.jpg",
    alt: "A dog looking hungry",
  },
  {
    emotionTags: ["sad"],
    isGif: false,
    image: "image/sad.jpg",
    alt: "A dog looking sad",
  },

  {
    emotionTags: ["sleepy"],
    isGif: false,
    image: "/image/sleepy.jpg",
    alt: "A dog looking sleepy",
  },
];
const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-options");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.getElementById("meme-modal");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");
emotionRadios.addEventListener("change", highlightCheckedOption);
memeModalCloseBtn.addEventListener("click", closeModal);
getImageBtn.addEventListener("click", renderDog);
function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName("radio");
  for (let radio of radios) {
    radio.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
  // console.log(e.target.id);
}

function closeModal() {
  memeModal.style.display = "none";
}
function renderDog() {
  const dogObject = getSingleDogObject();
  memeModalInner.innerHtml = `<img class="dog-img" src="
  image/${dogObject}" alt="">`;
  memeModal.style.display = "flex";
}
function getSingleDogObject() {
  const dogsArray = getMatchingDogsArray();
  if (dogsArray.Length === 1) {
    return dogsArray[0];
  } else {
    const randomNumber = Math.floor(Math.random() * dogsArray.length);
    return dogsArray[randomNumber];
  }
}

function getMatchingDogsArray() {
  // console.log(isGif);
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    const isGif = gifsOnlyOption.checked;

    const matchingDogsArray = dogsData.filter(function (dogs) {
      if (isGif) {
        return dogs.emotionTags.includes(selectedEmotion) && dogs.isGif;
      } else {
        return dogs.emotionTags.includes(selectedEmotion);
      }
    });
    return matchingDogsArray;
  }
}

function getEmotionsArray(dogs) {
  const emotionsArray = [];
  for (let dog of dogs) {
    for (let emotion of dog.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
  //   console.log(emotionsArray);
}
// console.log(getEmotionsArray(dogsData));
function renderEmotionRadios(dogs) {
  let radioItems = ``;
  const emotions = getEmotionsArray(dogs);
  for (let emotion of emotions) {
    radioItems += ` 

    <div class="radio">
    <label for="${emotion}">${emotion}</label>
    <input type="radio" id="${emotion}
    value="${emotion}"
    name="emotions">
    </div>`;
  }
  emotionRadios.innerHTML = radioItems;
  //   console.log(emotions);
}
renderEmotionRadios(dogsData);

// const submitBtn = document.getElementById("submit-btn");
// submitBtn.addEventListener("click", function () {
//   const checkedRadio = document.querySelector('input[type="radio"]:checked');
//   console.log(checkedRadio.value);
// });
