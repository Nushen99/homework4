//2.
const line = function (char, numb) {
  let c = '';
  while (numb>0) {
    c = c + char;
    numb = numb-1;
  } return c;
}


const pattern = function (space, star) {
  console.log(line(" ", space) + line("*", star))
}

const height = function(h) {
  let star = 2*h - 1;
  let space = 0;
  while (h>0) {
    h = h-1;
    pattern(space,star)
    star = star - 2;
    space = space +1
   
  }
}
height(4);





//3.
const multiToSingle = function(arr) {
  let base = [];
  let parentIndex = 0;
  while (parentIndex < arr.length) {
    let innerArray = arr[parentIndex];
    let innerIndex = 0;
    while (innerIndex < innerArray.length) {
      base[base.length] = innerArray[innerIndex];
      innerIndex++;
    }
    parentIndex++;
  } return base;
}

multiToSingle([[1, 2, 3], [4, 5, 6]]);





//4.
const findMaxMin = function (arr, bool) {
  if (bool === true) {
    let max = arr[0];
    let index1 = 1;
    while (index1 < arr.length) {
      if (max < arr[index1]) {
        max = arr[index1];
      }
      index1 = index1 + 1;
    } return max;
  }
  if (bool === false) {
    let min = arr[0];
    let index2 = 1;
    while(index2 < arr.length) {
      if (min > arr[index2]) {
        min = arr[index2];
      } 
      index2 = index2 +1;
    } return min;

  }
}

findMaxMin([3,4,5], true);





//5.
const forEach = function(arr, func) {
  let index = 0;
while (index< arr.length) {
  func(arr[index]);
  index=index+1;
  }
}
const f1 = function (a) {
  console.log(a + 1);
}

forEach([3, 4, 5], f1);





//6.
const sum = function(arr) {
  let base = 0;
  let index = 0;
  while(index < arr.length) {
    base = base + arr[index]
    index++;
  }
  return base;
}

sum([4,3,2]);





//7.
const reverse = function (str) {
  let base = '';
  let index = str.length - 1;
  while (index >= 0) {
    base = base + str[index];
    index--;
  }
return base;
}

reverse('abcde');





//8.
const line = function (char, num) {
  let a ='';
  while (num > 0) {
    a = a + char;
    num--;
  }
  return a;
}


const checkerboard = function (n) {
  let index = 0;
  while (index < n) {
    if (index % 2 === 0) {
      console.log(line('* ', n));
    } else {
      console.log(line(' *', n))
    }
    index++;
  }
}
checkerboard(5);
