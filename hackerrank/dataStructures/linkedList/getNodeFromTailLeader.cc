int GetNode(Node *head,int positionFromTail) {
  Node *leader, *follower;
  leader = follower = head;
  for (int i = 0; i < positionFromTail; i++) leader = leader->next;
  while (leader && leader->next) {
    leader = leader->next;
    follower = follower->next;
  }
  return follower->data;
}
