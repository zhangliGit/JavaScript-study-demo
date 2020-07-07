window.onload = function () {
  const arr = [3, 5, 2, 9, 10, 19, 13, 6, 4, 7];
  // 冒泡排序
  // 不断的对相同的两组数进行比较，选择较大或较小的一个替换
  // 没循环一遍次数都会减少一次
  console.time("冒泡耗时");

  function maopao(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
    return arr;
  }

  console.log("冒泡排序", maopao(arr));
  console.timeEnd("冒泡耗时");
  // 选择排序
  // 每次选择一个最大值或最小值放到最后面或最前面
  function xuanze(arr) {
    let len = arr.length;
    let minIndex;
    let result = [];
    for (let i = 0; i < len; i++) {
      // 每次设置一个最小值为遍历数组元素的第一个值
      minIndex = i;
      for (let j = i; j < len; j++) {
        // 其他数组值不断的之比较然后重新设置最小值
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // 最小值与第一位交换
      let tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
    return arr;
  }
  console.log("选择排序", xuanze(arr));
  // 插入排序
  // 从数组第二项开始，不断的拿出数组与之前的相比较，如果小于就交换位置
  function charu(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[j] < arr[j - 1]) {
          let tmp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    return arr;
  }
  console.log("插入排序", charu(arr));
  // 快速排序
  // 在数组中选择一个中间值作为基准点，然后定义两个空数组，分为左和右
  // 把原始数组和基准点做比较，小的值放在左边，大的值放在右边，然后在对左右数组进行同样的操作
  // 进行不断递归需要有点临界点判断，当数组长度为1时，不用判断了 直接返回
  function kuaisu(arr) {
    if (arr.length <= 1) return arr;
    let pointIndex = arr.splice(Math.floor(arr.length / 2), 1)[0];
    let len = arr.length;
    let left = [];
    let right = [];
    // 取出基准点的数组元素

    for (let i = 0; i < len; i++) {
      if (arr[i] < pointIndex) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return kuaisu(left).concat([pointIndex]).concat(kuaisu(right));
  }
  console.log("快速排序", kuaisu(arr));
  // 归并排序 采用分而治之，至上而下的递归方式，把原始数组进行平等拆分为两部分，不断的比较两个数组的首项
  // 哪边小就把值加入到新创建的数组，同时把原数组的值删掉，不然的重复此过程
  // 主要递归的过程也需要边界值，不然会报内存泄漏
  var arr1 = [12, 23, 14, 5, 6, 7, 9, 8, 13, 19];

  function mergeSort(arr) {
    let len = arr.length;
    if (len < 2) {
      return arr;
    }
    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return guibing(mergeSort(left), mergeSort(right));
  }

  function guibing(left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
    return result;
  }
  console.log("归并排序", mergeSort(arr1));
};
