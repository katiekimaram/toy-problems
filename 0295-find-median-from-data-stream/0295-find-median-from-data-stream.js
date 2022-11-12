
const Heap = (compare) => {
  const list = []
  const parent = index => Math.floor((index - 1) / 2)
  const left = index => 2 * index + 1
  const right = index => 2 * index + 2
  const swap = (a, b) => {
    const temp = list[a]
    list[a] = list[b]
    list[b] = temp
  }
  const insert = (x) => {
    list.push(x)
    let currentIndex = list.length - 1
    let parentIndex = parent(currentIndex)
    while (compare(list[parentIndex], list[currentIndex]) > 0) {
      swap(parentIndex, currentIndex)
      currentIndex = parentIndex
      parentIndex = parent(parentIndex)
    }
  }
  const size = () => list.length
  const top = () => list[0]
  const sink = (index) => {
    let currentIndex = index
    const leftIndex = left(index)
    const rightIndex = right(index)
    if (compare(list[currentIndex], list[leftIndex]) > 0) {
      currentIndex = leftIndex
    }
    if (compare(list[currentIndex], list[rightIndex]) > 0) {
      currentIndex = rightIndex
    }
    if (currentIndex !== index) {
      swap(index, currentIndex)
      sink(currentIndex)
    }
  }
  const extract = () => {
    swap(0, list.length - 1)
    const result = list.pop()
    sink(0)
    return result
  }
  return {
    list,
    size,
    top,
    insert,
    extract,
  }
}

// Heap Solution
const MedianFinder = function () {
  this.maxHeap = Heap((a, b) => b - a)
  this.minHeap = Heap((a, b) => a - b)
  this.size = 0
}

/** Log(N)
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.size += 1
  const min = this.minHeap.top()
  if (num > min) {
    this.minHeap.insert(num)
    while (this.minHeap.size() > this.maxHeap.size()) { // balance Heaps
      this.maxHeap.insert(this.minHeap.extract())
    }
  } else {
    this.maxHeap.insert(num)
    while (this.maxHeap.size() > this.minHeap.size() + 1) { // balance Heaps
      this.minHeap.insert(this.maxHeap.extract())
    }
  }
}

/** O(1)
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.size > 0) {
    if (this.size % 2 === 0) {
      return (this.maxHeap.top() + this.minHeap.top()) / 2
    }
    return this.maxHeap.top()
  }
  return undefined
}