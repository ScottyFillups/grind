/*
  Merge two sorted lists A and B as one linked list
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
void MergeListsHelper(Node *head, Node *headA, Node *headB) {
    if (headA == nullptr && headB == nullptr) return;
    else if (head == nullptr) 
    else if (headA == nullptr || (headB && headB->data < headA->data)) head->next = headB, headB = headB->next;
    else if (headB == nullptr || (headA && headA->data < headB->data)) head->next = headA, headA = headA->next;
    MergeListsHelper(head->next, headA, headB);
}
Node* MergeLists(Node *headA, Node* headB) {
    Node *newHead = nullptr;
    MergeListsHelper(newHead, headA, headB);
    return newHead;
}
