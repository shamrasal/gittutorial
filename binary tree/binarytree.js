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
    insert(data){
        var newNode = new Node(data)
        if(this.root===null){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(node,newNode){
        if(node.data>newNode.data){
            if(node.left===null){
                node.left=newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right==null){
                node.right=newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }

    search(data){
        if(this.root===null){
            return false
        }
        let current = this.root
        let found = false
         while(current && !found){
            if(data<current.data){
                current=current.left
            }else if(data>current.data){
                current=current.right
            }else{
                found=current
            }

         }
        if(!found) return undefined
        return found 
    }
}
var BST = new BinarySearchTree()
BST.insert(100)
BST.insert(200)
BST.insert(50)
BST.insert(400)
BST.insert(20)
console.log(BST.search(200))
console.log(BST.search(1220))
console.log(BST)