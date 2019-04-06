/* 1. <input> 태그 안의 값을 잡는다. */

const button = document.querySelector("#js-go");
const inputArea = document.querySelector("#js-userinput");
const resultArea = document.querySelector("#result-area");

button.addEventListener("click", e => {
  searchAndPush(inputArea.value);
});

inputArea.addEventListener("keyup", function(e) {
  if (e.which === 13) searchAndPush(inputArea.value); // 엔터키가 눌리면 push to DOM
});

/* 2. API 를 활용해 data 를 받아서 가공한다. */
const searchAndPush = keyword => {
  const API_KEY = "pETal56SsBpImEECWh6AcSOUlSZfg7zU"; // YOUR API KEY`
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

  // AJAX Request
  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", e => {
    const rawData = e.target.response;
    pushToDOM(rawData);
  });

  /*  3. GIF 파일들을 index.html 에 밀어 넣어서 보여준다. */
  const pushToDOM = data => {
    resultArea.innerHTML = null;
    const parsedData = JSON.parse(data);
    const imgDataSet = parsedData.data;
    imgDataSet.forEach(imgData => {
      let imgURL = imgData.images.fixed_height.url;
      // resultArea.innerHTML += `<img src="${imgURL}" class="container-image">`;
      const element = document.createElement("img");
      element.className = 'container-image';
      element.src = imgURL;
      resultArea.appendChild(element);
    });
  };
};
