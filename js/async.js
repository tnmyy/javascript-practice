console.log(`JS Async`);

// 1. JS Callbacks

console.log(`1. JS Callbacks`);

function display(some) {
  console.log(some);
}
function calc(n1, n2, cb) {
  let sum = n1 + n2;
  cb(sum);
}

// display = a cb fnx, passes to calc() as an arg
calc(2, 3, display);

let myNum = [1, 3, -40, -5, 234, -43124, -Infinity, 33];
console.log(myNum);

let positiveNum = removeNegative(myNum, (x) => x >= 0);

console.log(positiveNum);

function removeNegative(num, cb) {
  const myArr = [];

  for (const x of num) {
    if (cb(x)) {
      myArr.push(x);
    }
  }
  return myArr;
}

// 2. JS Asynchronous

console.log(`2. JS Asynchronous`);

let myFnc = function () {
  console.log(`Heyy!!!`);
};
setTimeout(myFnc, 1);

myFnc = function () {
  let d = new Date();
  //   let hrs = d.getHours();
  //   let min = d.getMinutes();
  //   let sec = d.getSeconds();

  //   console.log(`${hrs} : ${min} : ${sec}`);

  let time = d.toLocaleTimeString();
  console.log(time);
};
// setInterval(myFnc, 1000);
myFnc();

// 3. JS Promises

console.log(`3. JS Promises`);

let myProm = new Promise((resolve, reject) => {
  // Producing Code

  resolve(); // When Successful
  reject(); // When error
});

// Consuming Code

myProm.then(
  (val) => {
    console.log(`Success`);
  },
  (error) => {
    console.log(error);
  }
);

function display(some) {
  console.log(some);
}

myProm = new Promise((resolve, reject) => {
  let x = 0;

  if (x === 0) {
    resolve(`Correct Value`);
  } else {
    reject(`Change the value`);
  }
});

myProm.then(
  function (val) {
    display(val);
  },
  function (err) {
    display(err);
  }
);

// Waiting for a TimeOut

// By Callback
setTimeout(() => {
  myFunction("I love you!!!");
}, 1);

function myFunction(val) {
  console.log(val);
}

// By Promises

myProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I love you!!!");
  }, 1);
});

myProm.then((val) => {
  console.log(val);
});

// Waiting For a File

// By callback

function getFile(cb) {
  let req = new XMLHttpRequest();

  req.open("GET", "../js/async.js");
  req.onload = function () {
    if (req.status == 200) {
      cb(req.responseText);
    } else {
      cb("Error: " + req.status);
    }
  };

  req.send();
}

function fileDisplay(file) {
  document.getElementById("body").style.background = "#fff";
  document.getElementById("body").innerHTML = file;
}

// getFile(fileDisplay);

// By Promise
myProm = new Promise((resolve, reject) => {
  let req = new XMLHttpRequest();

  req.open("GET", "../js/async.js");
  req.onload = function () {
    if (req.status == 200) {
      resolve(req.responseText);
    } else {
      reject("Error: " + req.status);
    }
  };

  req.send();
});

myProm.then(
  (val) => {
    fileDisplay(val);
  },
  (err) => {
    fileDisplay(err);
  }
);

// 4. JS Async/Await

console.log(`4. JS Async/Await`);

async function myFnc1() {
  return "HELLO";
}
myFnc1().then((val) => {
  console.log(val);
});
myFnc1();

function myFnc2() {
  return Promise.resolve("Hello");
}
myFnc2().then((val) => {
  console.log(val);
});
myFnc2();

async function d() {
  let myProm = new Promise((resolve) => {
    setTimeout(() => {
      resolve("To kese hai ap log");
    }, 1000);
  });

  let value = await myProm;
  console.log(value);
}

d();

async function fileGet() {
  let myProm = new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open("GET", "js/async.js");
    req.onload = () => {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject("File not Found");
      }
    };

    req.send();
  });
  let val = await myProm;
  document.getElementById("body").innerHTML = val;
}

fileGet();
