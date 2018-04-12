particlesJS.load('particles-js', 'particles.json', function(){
    console.log('particles.json loaded...');
  });

var myName = "Andrew"+2+false;
myName = new String(myName);

console.log(typeof(myName));
console.log(myName.toUpperCase());