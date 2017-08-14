/*
  Reverse a linked list and return pointer to the head
  The input list will have at least one element  
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
// create a helper recursive function
Node* ReverseHelper(Node *head, Node *prev) {
    if (head == nullptr) return prev;
    Node *newHead = ReverseHelper(head->next, head);
    head->next = prev;
    return newHead;
}

Node* Reverse(Node *head)
{
    return ReverseHelper(head, nullptr);
}
