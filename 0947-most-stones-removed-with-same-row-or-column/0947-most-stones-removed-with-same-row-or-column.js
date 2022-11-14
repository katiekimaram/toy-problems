class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((val, index) => index)
    this.size = new Array(n).fill(1)
    this.count = n
  }

  root(i) {
    while (this.parent[i] !== undefined && i !== this.parent[i]) {
      this.parent[i] = this.parent[this.parent[i]] // Path compression
      i = this.parent[i]
    }
    return i
  }

  connected(a, b) {
    return this.root(a) === this.root(b)
  }

  union(a, b) {
    const rootA = this.root(a)
    const rootB = this.root(b)
    if (rootA === rootB) {
      return
    }
    if (this.parent[rootA] < this.parent[rootB]) {
      this.parent[rootA] = rootB
      this.size[rootB] += this.size[rootA]
    } else {
      this.parent[rootB] = rootA
      this.size[rootA] += this.size[rootB]
    }
    this.count -= 1
  }

  getCount() {
    return this.count
  }
}
/**
 * @param {number[][]} stones
 * @return {number}
 */
const removeStones = function (stones) {
  const uf = new UnionFind(stones.length)
  for (let i = 0; i < stones.length; i++) {
    for (let j = i + 1; j < stones.length; j++) {
      const [x1, y1] = stones[i]
      const [x2, y2] = stones[j]
      if (x1 === x2 || y1 === y2) {
        uf.union(i, j)
      }
    }
  }
  const used = []
  let count = 0
  for (let i = 0; i < stones.length; i++) {
    const currentRoot = uf.root(i)
    if (!used[currentRoot]) {
      used[currentRoot] = true
      count += uf.size[currentRoot] - 1
    }
  }
  return count
}