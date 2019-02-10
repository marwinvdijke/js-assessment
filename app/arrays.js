exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {

  },

  sum: function(arr) {

  },

  remove: function(arr, item) {

  },

  removeWithoutCopy: function(arr, item) {

  },

   append: function(arr, item) {
    arr.push(item);
    return arr;
  },


  truncate: function(arr) {
   arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(10);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    arr.pop();
    return arr;
  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
