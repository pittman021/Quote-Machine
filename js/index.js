
  
function setScript() {
  var url = "http://api.icndb.com/jokes/random?callback=processQuote";
    // create script with passed in URL
  var script = document.createElement('script');
  var oldScript = document.getElementById('jsonp')
  script.setAttribute('id','jsonp');
  script.src = url;
  
  // insert script tag into the DOM (append to <head>)
  var head = document.getElementsByTagName('head')[0];
  if (oldScript === null) {
    head.appendChild(script);
  }
  else {
   head.replaceChild(script, oldScript);
  }
}

   // accepts quote and adds it to the page
   function processQuote (quote) {
      var content = document.getElementById('content');
      var p = document.createElement('p');
      var joke = quote.value.joke
      p.setAttribute ("id","joke");
      p.innerHTML = joke;
      var oldJoke = document.getElementById('joke');
      console.log(joke);
      if (oldJoke === null) {
      content.appendChild(p);
      }
      else {
        content.replaceChild(p, oldJoke);
      }
     setTwitterURL(joke);
   }

// sets the twitter URL using joke object parameter
  function setTwitterURL(joke) {
        var jokeURL = escape(joke).replace(/%26quot%3B/g,'"');
        var url = "https://twitter.com/home?status=";
        var t = document.getElementById('twitter');
        t.setAttribute("href", url + jokeURL);
  }

setScript();

var button = document.getElementById('chuckbutton');
button.addEventListener('click', setScript);