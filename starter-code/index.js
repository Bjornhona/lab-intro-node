class SortedList {
  constructor() {

    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    return this.items[pos-1];
  }

  max() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length-1];
    }
  }

  min() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (this.length <= 0) {
      return 0;
    }
    return this.items.reduce((acc, cval) => acc + cval);
  }

  average() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((acc, cval) => acc + cval) / this.length;
  }

};

module.exports = SortedList;
