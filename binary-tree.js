/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root){
      return 0;
    }   
    //To this point. An array and then fin the max number, right?

    function getDepth(depthLevel, current, depthCount ){
      if(!current.left && !current.right){
          depthCount.push(depthLevel);  
          }
      else if (current.right || current.left){
        depthLevel ++;
        if(current.right){
            getDepth(depthLevel, current.right, depthCount);
          }
        if(current.left){
            getDepth(depthLevel, current.left, depthCount);
          }
        }
      }
    let arr = [];
    let depthLevel = 1;
    getDepth(depthLevel, this.root, arr);
    return Math.min(... arr);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root){
      return 0;
    }

    function getDepth(depthLevel, current, depthCount ){
      if(!current.left && !current.right){
          depthCount.push(depthLevel);  
          }
      else if (current.right || current.left){
        depthLevel ++;
        if(current.right){
            getDepth(depthLevel, current.right, depthCount);
          }
        if(current.left){
            getDepth(depthLevel, current.left, depthCount);
          }
        }
      }
    let arr = [];
    let depthLevel = 1;
    getDepth(depthLevel, this.root, arr);
    return Math.max(... arr);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if(!this.root){
        return 0;
      }  
    
    function getDepth(valSum, current, arrCount ){
      console.log('valSum', valSum, 'current :', current, 'arrCount', arrCount);
      valSum = valSum + current.val;
      
      if(!current.left && !current.right){
        
        arrCount.push(valSum);  
        }
      else if (current.right || current.left){
        if(current.right){
          //valSum = valSum + current.right.val;
          getDepth(valSum, current.right, arrCount);
          }
        if(current.left){
          //valSum = valSum + current.left.val;
          getDepth(valSum, current.left, arrCount);
          }
      }  
    }
  let arr = [];
  let val = 0;
  getDepth(val, this.root, arr);
  console.log('arr', arr);
  return Math.max(... arr);
}

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root){
      return null;
    }  
  
  function getDepth(current, arrCount ){
    arrCount.push(current.val);
    if(current.right){
        //valSum = valSum + current.right.val;
        
        getDepth(current.right, arrCount);
        }
    if(current.left){
        //valSum = valSum + current.left.val;
        getDepth(current.left, arrCount);
        }
      }  
    
    let arr = [];
    let val = 0;
    getDepth(this.root, arr);
    arr.sort();
    let smallestNumb = arr[0];
    console.log('arr', arr);
    if (lowerBound < smallestNumb){
      return smallestNumb;
    }
    else{
      return null;
    }
  }  
    
  


  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
