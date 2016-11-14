
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('You must enter a number');
    }
  });
}

var a = 1;
var b = 2;
addPromise(a,b)
  .then(
    value => {
       console.log(` ${a} + ${b} = ${value}`);
    },
    err => {
      console.log(err);
    }
);


addPromise(b)
  .then(
    value => {
       console.log(` ${a} + ${b} = ${value}`);
    },
    err => {
      console.log(err);
    }
);

addPromise(a,'3')
  .then(
    value => {
       console.log(` ${a} + ${b} = ${value}`);
    },
    err => {
      console.log(err);
    }
);
