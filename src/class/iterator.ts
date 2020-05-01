class IteratorSample implements IterableIterator<number> {
  private list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private index = 0;

  public next(): IteratorResult<number> {
    if (this.index < this.list.length) {
      return {
        done: false,
        value: this.list[this.index++]
      };
    } else {
      return {
        done: true,
        value: null
      };
    }
  }

  [Symbol.iterator](): IterableIterator<number> {
    return this;
  }
}

for (const i of new IteratorSample()) {
  console.log(i);
}
