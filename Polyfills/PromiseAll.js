let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 1");
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 2");
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 3");
  }, 1000);
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 4");
  }, 4000);
});

const arr = [promise1, promise2, promise3, promise4];

if (!Promise.all) {
  Promise.all = function(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('Promise.all accepts an array'));
      }

      let results = new Array(promises.length);
      let completedCount = 0;

      promises.forEach((promise, index) => {
        Promise.resolve(promise).then((value) => {
          results[index] = value;
          completedCount++;

          if (completedCount === promises.length) {
            resolve(results);
          }
        }).catch((error) => {
          reject(error);
        });
      });
    });
  };
}


Promise.all(arr).then((res) => {
  console.log(res); // Output: ["resolved 1", "resolved 2", "resolved 3", "resolved 4"]
}).catch((error) => {
  console.error(error);
});
