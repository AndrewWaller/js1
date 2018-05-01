particlesJS.load('particles-js', 'particles.json', function(){});

function button() {
  let title = prompt('Title?', "");
  let h1 =  document.createElement('h1');
  h1.setAttribute("class","center");
  h1.innerHTML = title;
  document.body.appendChild(h1);
//Steps 1&2
  let urDay = prompt("Please write a few sentences describing what you did today","");
  let pTag = document.createElement('p');
  pTag.setAttribute("class","justify");
  pTag.innerHTML = urDay;
  document.body.appendChild(pTag);
  //Steps 3&4
  let backgroundColor = prompt("What is your favorite color?","");
  pTag.style.backgroundColor = backgroundColor;
};
