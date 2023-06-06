/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root){
      return 0;
        }
    let treeStack = [this.root];
    let  accumValues = 0;
    while(treeStack.length){
        const current = treeStack.pop();
        accumValues = accumValues + current.val;
        if (current.children){
        for(let child of current.children){
          treeStack.push(child);
        }
      }
    }
    return accumValues;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root){
      return 0;
        }
    let treeStack = [this.root];
    let  accumValues = 0;
    while(treeStack.length){
        const current = treeStack.pop();
        if (current.val % 2 == 0){
          accumValues ++;
        }
        if (current.children){
          for(let child of current.children){
            treeStack.push(child);
        }
      }
    }
    return accumValues;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root){
      return 0;
        }
    let treeStack = [this.root];
    let  accumValues = 0;
    while(treeStack.length){
        const current = treeStack.pop();
        if (current.val > lowerBound){
          accumValues ++;
        }
        if (current.children){
          for(let child of current.children){
            treeStack.push(child);
        }
      }
    }
    return accumValues;
  }
}

module.exports = { Tree, TreeNode };
