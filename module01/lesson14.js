class node {
    constructor(dta) {
        this.data = data
        this.next = null
    }
}

class Linkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }
    add(data) {
        let newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
        } else{
            let current = this.head
            while (current.next !== null){
                current = current.next
            }
            current.next = newNode
        }

         this.size++
    }

    printList() {
        let current = this.head
        while(current !== null){
            console.log(current.data)
            current = current.next
        }

    }
}
let list = new Linkedlist()
list.add("Formação +praTi")
list.add(true)
list.add('elemento')
list.add(17)
