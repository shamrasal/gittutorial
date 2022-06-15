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
        this.root = new Node(1);
        this.root.left = new Node(2);
        this.root.right = new Node(3);
        this.root.left.left = new Node(4);
        this.root.right.left = new Node(5);
        this.root.right.right = new Node(6);
        this.root.right.left.left = new Node(7);
        this.root.right.left.right = new Node(8);
        this.printpreorder(this.root)
        this.displaypreorder(this.root)
    }
    //print preorder recursive function
    printpreorder(root){
        if(root===null){
            return null
        }
        var str = " "
        str = str + root.data 
        console.log(str)

        this.printpreorder(root.left)

        this.printpreorder(root.right)
    }

    //print preorder ittretive function
    displaypreorder(root){
        if(root===null){
            return
        }
        let stack = []
        stack.push(root)
        while(stack.length!=0){
            var remove = stack.pop()
            let str = ""
            str = str + remove.data 
            console.log(str)
            if(remove.right!=null){
                stack.push(remove.right)
            }
            if(remove.left!=null){
                stack.push(remove.left)
            }
        }

    }
}
var BST = new BinarySearchTree()
BST.preorder()