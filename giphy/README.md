# Giphy Search engine

https://onemonth.com/courses/javascript/steps/what-is-the-dom?autoplay=1

## Get started

### Exercise

1. 두개의 숫자를 더하는 `sum()` function 만들기.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Function</title>
    </head>
    <body>
    
    <script type="text/javascript">
    
        // const sum = (a, b) =>  a + b;
        function sum(a,b) {
            c = a + b; 
            console.log(c); 
        }
        sum(3,2);
    
    </script>
    </body>
    </html>
    ```

2. 글자 수 세어주는 함수 만들기

   ```js
   function howManyLetters(x) {
       return x.length;
   }
   
   // const howManyLetters = x => x.length
   
   howManyLetters("Chris");
   ```

3. Animation

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="utf-8">
       <title>JavaScript: Animation</title>
       <style type="text/css">
           #container{
               position: absolute;
               left: 20px;
               top: 20px;
               height: 500px;
               width: 500px;
               border: 3px solid #CCC;
               background-color: #FFF;
           }
           .box{
               float: left;
               width: 75px;
               height: 100px;
               margin: 10px;
               background: #FFF url('http://placekitten.com/g/75/100/') no-repeat;
           }
       </style>
   </head>
   <body>
   <div id="container">
   
   </div>
   <script>
     for(let x = 0; x < 20; x++) {
       setTimeout(function(){
         const box = document.createElement('div');
         box.className = 'box';
         document.getElementById('container').appendChild(box);
       }, 500 * x);
     }
   </script>
   </body>
   </html>
   
   
   ```


### installation

url 에서 기본 템플릿을 받는다. 이후 동작을 확인하고, js 코드를 주석(`/* */`)을 제외하고 모두 삭제한다.

* `index.html`
* `main.css`
* `main.js`

## input 값 잡아내기

### `input` 태그 안의 값(`value`) 잡기.

```html
<!doctype html>
<html>
<head>
    <title>Giphy Search Engine</title>
    <link rel="stylesheet" href="./main.css">
</head>
<body>
    <div class="container container-padding50">
        <!-- value='아무거나'-->
        <input type="text" id="js-userinput" class="container-textinput" value="neo" /> 
        <button id="js-go" class="container-button">Go!</button>
    </div>
    <div class="container container-padding50 js-container">

    </div>
    <script src="./main.js"></script>
</body>
</html>
```

```js
// 1. <input> 태그 안의 값을 잡는다.
const input = document.querySelector('#js-userinput').value;
console.log(input);
// 2. API 를 활용해 data 를 받아서 가공한다.

// 3. GIF 파일들을 index.html 에 밀어 넣어서 보여준다.
```

### `<button>` 에 event listener 추가하기 - click

```html
<!doctype html>
<html>
<head>
    <title>Giphy Search Engine</title>
    <link rel="stylesheet" href="./main.css">
</head>
<body>
    <h1>Search GIFs</h1>
    <div class="container container-padding50">
        <!-- value 삭제-->
        <input type="text" id="js-userinput" class="container-textinput" /> 
        <button id="js-go" class="container-button">Go!</button>
    </div>
    <div class="container container-padding50 js-container">

    </div>
    <script src="./main.js"></script>
</body>
</html>
```

```js
// 1. <input> 태그 안의 값을 잡는다.

const button = document.querySelector('#js-go');
button.addEventListener('click', (e) => {
  const input = document.querySelector('#js-userinput').value;
  console.log(input);
});

console.log(input);
// 2. API 를 활용해 data 를 받아서 가공한다.

// 3. GIF 파일들을 index.html 에 밀어 넣어서 보여준다.
```

scope 때문에 익명함수 밖에서는 보이지 않음. `#result-area` 에 우리가 결과를 집어 넣기 위해 함수로 만들자.

---

함수를 정의 & 동작 확인

```js
// 1. <input> 태그 안의 값을 잡는다.

const button = document.querySelector('#js-go');
button.addEventListener('click', (e) => {
  const input = document.querySelector('#js-userinput').value;
  pushToDOM('hello')
});

// 2. API 를 활용해 data 를 받아서 가공한다.

// 3. GIF 파일들을 index.html 에 밀어 넣어서 보여준다.
const pushToDOM = (data) => {
  alert(data);
};
```

결과가 표시될 자리를 잡고, 거기에 `data` 를 집어 넣기.

```js
// 1. <input> 태그 안의 값을 잡는다.

const button = document.querySelector('#js-go');
button.addEventListener('click', (e) => {
  const input = document.querySelector('#js-userinput').value;
  pushToDOM(input)
});

// 2. API 를 활용해 data 를 받아서 가공한다.

// 3. GIF 파일들을 index.html 에 밀어 넣어서 보여준다.
const pushToDOM = (data) => {
  const resultArea = document.querySelector("#result-area");
  resultArea.innerHTML = data;
};
```

### `<input>` 에 event listner 추가하기 - 엔터키

```js
/* 1. <input> 태그 안의 값을 잡는다. */

const button = document.querySelector('#js-go');
const inputArea = document.querySelector('#js-userinput');

button.addEventListener('click', (e) => {
  const inputValue = document.querySelector('#js-userinput').value;
  pushToDOM(inputValue);
});

inputArea.addEventListener('keyup',function(e){
  const inputValue = document.querySelector('#js-userinput').value;
  console.log(inputValue); // testing

  if (e.which === 13) pushToDOM(input); // 엔터키가 눌리면 push to DOM
});

/* 2. API 를 활용해 data 를 받아서 가공한다. */

/*  3. GIF 파일들을 index.html 에 밀어 넣어서 보여준다. */
const pushToDOM = (data) => {
  const resultArea = document.querySelector("#result-area");
  resultArea.innerHTML = data;
};
```

코드정리

```js
/* 1. <input> 태그 안의 값을 잡는다. */

const button = document.querySelector('#js-go');
const inputArea = document.querySelector('#js-userinput');
const resultArea = document.querySelector("#result-area");

button.addEventListener('click', (e) => {
  pushToDOM(inputArea.value); //정리
});

inputArea.addEventListener('keyup',function(e){
  if (e.which === 13) pushToDOM(inputArea.value);
});

/* 2. API 를 활용해 data 를 받아서 가공한다. */

/*  3. GIF 파일들을 index.html 에 밀어 넣어서 보여준다. */
const pushToDOM = (data) => {
  // const resultArea = document.querySelector("#result-area"); 올리기
  resultArea.innerHTML = data;
};
```



## GIPHY API 사용하기

### 데이터 받기

https://developers.giphy.com/ 가입 - API키 받기 - AJAX(XHR) 를 통해  원하는 데이터(json - str) 받기.

```js
/* 1. <input> 태그 안의 값을 잡는다. */

const button = document.querySelector('#js-go');
const inputArea = document.querySelector('#js-userinput');
const resultArea = document.querySelector("#result-area");

button.addEventListener('click', (e) => {
  pushToDOM(inputArea.value);
});

inputArea.addEventListener('keyup',function(e){
  if (e.which === 13) pushToDOM(inputArea.value); // 엔터키가 눌리면 push to DOM
});

/* 2. API 를 활용해 data 를 받아서 가공한다. */
const API_KEY = 'pETal56SsBpImEECWh6AcSOUlSZfg7zU'; // YOUR API KEY
let keyword = 'matrix';
const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

// AJAX Request
const GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', URL);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', (e) => {
  const rawData = e.target.response;
  pushToDOM(rawData);
});


/*  3. GIF 파일들을 index.html 에 밀어 넣어서 보여준다. */
const pushToDOM = (data) => {
  resultArea.innerHTML = data;
};
```

### 데이터 가공하기 - JSON parsing

그저 string 에 불과한 데이터를  JS 에서 사용가능한 object로 바꾼다.

```js
/* 1. <input> 태그 안의 값을 잡는다. */

const button = document.querySelector('#js-go');
const inputArea = document.querySelector('#js-userinput');
const resultArea = document.querySelector("#result-area");

button.addEventListener('click', (e) => {
  pushToDOM(inputArea.value);
});

inputArea.addEventListener('keyup',function(e){
  if (e.which === 13) pushToDOM(inputArea.value); // 엔터키가 눌리면 push to DOM
});

/* 2. API 를 활용해 data 를 받아서 가공한다. */
const API_KEY = 'pETal56SsBpImEECWh6AcSOUlSZfg7zU'; // YOUR API KEY
let keyword = 'matrix';
const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

// AJAX Request
const GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', URL);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', (e) => {
  const rawData = e.target.response;
  pushToDOM(rawData);
});


/*  3. GIF 파일들을 index.html 에 밀어 넣어서 보여준다. */
const pushToDOM = (data) => {
  console.log(data);
  console.log(JSON.parse(data));
  // resultArea.innerHTML = data;
};
```

parsing 한 데이터에서 필요한 이미지 뽑아보기.

```js
/* 1. <input> 태그 안의 값을 잡는다. */

const button = document.querySelector('#js-go');
const inputArea = document.querySelector('#js-userinput');
const resultArea = document.querySelector("#result-area");

button.addEventListener('click', (e) => {
  pushToDOM(inputArea.value);
});

inputArea.addEventListener('keyup',function(e){
  if (e.which === 13) pushToDOM(inputArea.value); // 엔터키가 눌리면 push to DOM
});

/* 2. API 를 활용해 data 를 받아서 가공한다. */
const API_KEY = 'pETal56SsBpImEECWh6AcSOUlSZfg7zU'; // YOUR API KEY
let keyword = 'matrix';
const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

// AJAX Request
const GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', URL);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', (e) => {
  const rawData = e.target.response;
  pushToDOM(rawData);
});


/*  3. GIF 파일들을 index.html 에 밀어 넣어서 보여준다. */
const pushToDOM = (data) => {
  const parsedData = JSON.parse(data);
  console.log(parsedData.data[0].images.fixed_height.url);
  // console.log(parsedData.data[0].images.fixed_height.webp);
  // resultArea.innerHTML = ''
};
```

### 데이터를 html 에서 이미지로 표시하기

`<img>` 태그에 넣어서 HTML 에 표시해보자.

```js
/* 1. <input> 태그 안의 값을 잡는다. */

const button = document.querySelector('#js-go');
const inputArea = document.querySelector('#js-userinput');
const resultArea = document.querySelector("#result-area");

button.addEventListener('click', (e) => {
  pushToDOM(inputArea.value);
});

inputArea.addEventListener('keyup',function(e){
  if (e.which === 13) pushToDOM(inputArea.value); // 엔터키가 눌리면 push to DOM
});

/* 2. API 를 활용해 data 를 받아서 가공한다. */
const API_KEY = 'pETal56SsBpImEECWh6AcSOUlSZfg7zU'; // YOUR API KEY
let keyword = 'matrix';
const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

// AJAX Request
const GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', URL);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', (e) => {
  const rawData = e.target.response;
  pushToDOM(rawData);
});


/*  3. GIF 파일들을 index.html 에 밀어 넣어서 보여준다. */
const pushToDOM = (data) => {
  const parsedData = JSON.parse(data);
  const imgURL = parsedData.data[0].images.fixed_height.url;
  resultArea.innerHTML = `<img src="${imgURL}">`
};
```

### 배열 데이터 iterate

현재는 `Json.parse(data).data[0]` 을 통해 하나의 사진만 가져오고 있다. 이걸 `forEach` 메서드를 사용해 전체 표시해 보자.

```js
/* 1. <input> 태그 안의 값을 잡는다. */

const button = document.querySelector('#js-go');
const inputArea = document.querySelector('#js-userinput');
const resultArea = document.querySelector("#result-area");

button.addEventListener('click', (e) => {
  pushToDOM(inputArea.value);
});

inputArea.addEventListener('keyup',function(e){
  if (e.which === 13) pushToDOM(inputArea.value); // 엔터키가 눌리면 push to DOM
});

/* 2. API 를 활용해 data 를 받아서 가공한다. */
const API_KEY = 'pETal56SsBpImEECWh6AcSOUlSZfg7zU'; // YOUR API KEY
let keyword = 'matrix';
const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

// AJAX Request
const GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', URL);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', (e) => {
  const rawData = e.target.response;
  pushToDOM(rawData);
});


/*  3. GIF 파일들을 index.html 에 밀어 넣어서 보여준다. */
const pushToDOM = (data) => {
  const parsedData = JSON.parse(data);
  const imgDataSet = parsedData.data.forEach( imgData => {
  let imgURL = imgData.images.fixed_height.url;
  // = vs +=
  resultArea.innerHTML += `<img src="${imgURL}" class="container-image">` 
  });
};
```

## 검색기능과 합치기

### 검색기능과 migrate

``` js
/* 1. <input> 태그 안의 값을 잡는다. */

const button = document.querySelector('#js-go');
const inputArea = document.querySelector('#js-userinput');
const resultArea = document.querySelector("#result-area");

button.addEventListener('click', (e) => {
  searchAndPush(inputArea.value);
});

inputArea.addEventListener('keyup',function(e){
  if (e.which === 13) searchAndPush(inputArea.value); // 엔터키가 눌리면 push to DOM
});


const searchAndPush = (keyword) => {
  /* 2. API 를 활용해 data 를 받아서 가공한다. */
  const API_KEY = 'pETal56SsBpImEECWh6AcSOUlSZfg7zU'; // YOUR API KEY
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

// AJAX Request
  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open('GET', URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load', (e) => {
    const rawData = e.target.response;
    pushToDOM(rawData);
  });


  /*  3. GIF 파일들을 index.html 에 밀어 넣어서 보여준다. */
  const pushToDOM = (data) => {
    const parsedData = JSON.parse(data);
    const imgDataSet = parsedData.data;
    imgDataSet.forEach( imgData => {
      let imgURL = imgData.images.fixed_height.url;
      resultArea.innerHTML += `<img src="${imgURL}" class="container-image">` // += vs +
    });
  };
};

```

문제가 있다. 새롭게 보여주고 싶은데 계속해서 이어진다

```js
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
      resultArea.innerHTML += `<img src="${imgURL}" class="container-image">`; // += vs +
    });
  };
};

```

### Optimize : `innerHTML` vs `appendChild` 

```html
<!-- .createElement(), .src, .appendChild -->
<!DOCTYPE html>
<html>
<head>
	<title>classList, createElement() and appendChild()</title>
</head>
<body>

   <div class="js-search-results">

   </div>

   <script type="text/javascript">
   	
   		var card  = document.createElement('div'); // 1
   		card.classList.add("card"); // 4

   		var searchResults = document.querySelector('.js-search-results'); // 2
   		searchResults.appendChild(card); // 3

   </script>
</body>
</html>
```



```js
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
      // element.classList.add("container-image");
      element.src = imgURL;
      resultArea.appendChild(element);
    });
  };
};

```

https://stackoverflow.com/questions/2305654/innerhtml-vs-appendchildtxtnode

## TV 기능 추가하기

### 새로운 파일 추가하기 : `gif_tv.js`

```html
<!doctype html>
<html>
<head>
    <title>Giphy Search Engine</title>
    <link rel="stylesheet" href="./main.css">
</head>
<body>
    <h1>Search GIFs</h1>
    <div id="js-tv-area"></div> <!-- 추가하기 -->

    <div class="container container-padding50">
        <input type="text" id="js-userinput" class="container-textinput"/>
        <button id="js-go" class="container-button">Go!</button>
    </div>
    <div id="result-area" class="container-padding50 js-container">

    </div>
    <script src="./main.js"></script>
    <script src="./gif_tv.js"></script>
</body>
</html>
```



```js
const tvArea = document.querySelector("#js-tv-area");

const animateTV = () => {
  const keywords = [
    'pepe',
    'dogs',
    'cats',
  ];
  const keyword = keywords.sort(() => 0.5 - Math.random())[0];

  const API_KEY = "pETal56SsBpImEECWh6AcSOUlSZfg7zU"; // YOUR API KEY
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
    tvArea.innerHTML = null;
    const parsedData = JSON.parse(data);
    const imgDataSet = parsedData.data;

    let i = 0;
    imgDataSet.forEach(imgData => {
      setTimeout(()=>{
        let imgURL = imgData.images.fixed_height.url;
        tvArea.innerHTML = `<img src="${imgURL}" class="img-center">`;
      }, 3000 * i);
      i++;
    });
  };
};

document.addEventListener('DOMContentLoaded', animateTV);
```

