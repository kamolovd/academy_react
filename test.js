const data = {
    0: {
      filename: "images/data/0.png",
      width: 262,
      height: 350,
      label: 1,
      likes: 91
    },
    1: {
      filename: "images/data/1.png",
      width: 409,
      height: 336,
      label: 1,
      likes: 85
    },
    2: {
      filename: "images/data/2.png",
      width: 493,
      height: 500,
      label: 1,
      likes: 43
    },
    3: {
      filename: "images/data/3.png",
      width: 375,
      height: 500,
      label: 0,
      likes: 77
    },
    4: {
      filename: "images/data/4.png",
      width: 240,
      height: 320,
      label: 1,
      likes: 7
    },
    5: {
      filename: "images/data/5.png",
      width: 100,
      height: 100,
      label: 1,
      likes: 13
    },
    6: {
      filename: "images/data/6.png",
      width: 216,
      height: 182,
      label: 0,
      likes: 51
    },
    7: {
      filename: "images/data/7.png",
      width: 375,
      height: 500,
      label: 0,
      likes: 80
    },
    8: {
      filename: "images/data/8.png",
      width: 377,
      height: 500,
      label: 1,
      likes: 16
    },
    9: {
      filename: "images/data/9.png",
      width: 500,
      height: 375,
      label: 1,
      likes: 72
    },
    10: {
      filename: "images/data/10.png",
      width: 500,
      height: 496,
      label: 1,
      likes: 4
    },
    11: {
      filename: "images/data/11.png",
      width: 360,
      height: 500,
      label: 0,
      likes: 62
    },
    12: {
      filename: "images/data/12.png",
      width: 375,
      height: 500,
      label: 0,
      likes: 42
    },
    13: {
      filename: "images/data/13.png",
      width: 412,
      height: 402,
      label: 1,
      likes: 77
    },
    14: {
      filename: "images/data/14.png",
      width: 347,
      height: 500,
      label: 0,
      likes: 72
    }
  }

const result = { top: [], rest: [] }; //todo

let arr = [];

for (let key in data) {
  arr.push(data[key])
}

arr.sort((a,b) => b.likes - a.likes);


for (let i = 0; i < 5; i++) {
  result.top.push(arr[i])
}

for (let i = 5; i < arr.length; i++) {
  result.rest.push(arr[i])
}

result.top = result.top.sort((a,b) => a.likes - b.likes)
result.rest = result.rest.sort((a,b) => a.likes - b.likes)
console.log(result);