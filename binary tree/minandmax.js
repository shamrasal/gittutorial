class Node {
    constructor(data){
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    
    preorder(){
        this.root = new Node(15);
        this.root.left = new Node(10);
        this.root.right = new Node(20);
        this.root.left.left = new Node(8);
        this.root.left.right = new Node(12);
        this.root.right.left = new Node(17);
        this.root.right.right = new Node(25);
        this.minvalue(this.root)
        this.maxvalue(this.root)
    }
    //print preorder recursive function
    minvalue(root){
        if(root===null){
            return -1
        }
        while(root.left!=null){
            root=root.left
        }
        return console.log(root.data)
        // let ans = root.data 
        // console.log(ans)

        // this.minvalue(root.left)
    }
    maxvalue(root){
        if(root===null){
            return -1
        }
        while(root.right!=null){
            root=root.right
        }
        return console.log(root.data)
    }
}
var BST = new BinarySearchTree()
BST.preorder()