/*
   Merge two sorted lists A and B as one linked list
   Node is defined as 
   struct Node
   {
   int data;
   struct Node *next;
   }
   */
Node *MergeListsHelper(Node *head, Node *headA, Node *headB) {
  if (headA == nullptr && headB == nullptr) return head;
  else if (headA == nullptr) {
    head = headB;
    headA = headB = nullptr;
  }
  else if (headB == nullptr) {
    head = headA;
    headA = headB = nullptr;
  }
  else if (headB->data < headA->data) {
    head = headB;
    headB = headB->next;
  }
  else if (headA->data < headB->data) {
    head = headA;
    headA = headA->next;
  }
  head->next = MergeListsHelper(head->next, headA, headB);
  return head;
}
Node* MergeLists(Node *headA, Node* headB) {
  Node *newHead = nullptr;
  newHead = MergeListsHelper(newHead, headA, headB);
  return newHead;
}
