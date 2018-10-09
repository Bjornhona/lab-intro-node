class SortedList {
  constructor() {

    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
  }

  get(pos) {
    return this.items[pos-1];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort(function(a, b) {
        return a - b;
      });
      return this.items[0];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort(function(a, b) {
        return a - b;
      });
      return this.items[this.length-1];
    }
  }
  average() {}
  sum() {}
};

new SortedList();

module.exports = SortedList;
