//  This file contains source code.
const JSNodeSource = `class Node {
    constructor(data) {
        this.data = data;
        this.next = NULL;
    }
}`;

const CppNodeSource = `struct Node {
    int data;
    Node* next;

    Node(int val=0): data(val), next(nullptr){}
    Node(int val, Node *tempNext): data(val), next(tempNext){}
};`;

const JSInstructionsSource = `class LinkedList {
    constructor(head = null) {
        this.head = null;
    }
    add(newNode){
        let node = this.head;
        if(node == null) {
            this.head = newNode;
            return;
        }
        while(node.next) {
            node = node.next;
        }
        node.next = newNode;
    }
    displayList() {
        let node = this.head;
        let str = "";
        while(node) {
            str += node.data + "->";
            node = node.next;
        }
        str += "NULL"
        console.log(str);
    }
}`;

const CppInstructionsSource = `class LinkedList {
    Node* head;

    public:
        LinkedList():head(nullptr){}
        void insert(int val){
            Node* new_node = new Node(val);
            if(head == nullptr) {
                head = new_node;
            } else {
                new_node->next = head;
                head = new_node;
            }
        }
        void displayList() {
            Node* temp = head
            while(temp != nullptr) {
                cout << temp->data << " ";
                temp = temp->next;
            }
            cout << endl;
        }
}`;

export {JSNodeSource, CppNodeSource, JSInstructionsSource, CppInstructionsSource}