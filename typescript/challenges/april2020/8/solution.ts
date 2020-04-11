// runtime: 56ms: beats 36.05 % of javascript submissions.

interface ListNode<A> {
  val: A
  next: ListNode<A> | null
}

const arrayFromListNode: <A>(ln: ListNode<A>) => A[] = ln => {
  const arr = [];
  let next = ln;
  if (ln.next == null) {
    return [ln.val]
  }
  do {
    arr.push(next.val);
    next = next.next;
  } while (next.next != null);
  arr.push(next.val);
  return arr;
};

const createListNodeFromArray = <A>(arr: A[]) => {
  const ln = {};
  let next = ln;
  for (let i = 0; i < arr.length - 1; ++i) {
    Object.assign(next, {
      val: arr[i],
      next: {}
    });
    next = (next as any).next;
  }
  Object.assign(next, {
    val: arr[arr.length - 1],
    next: null
  });
  return ln as ListNode<A>;
};

var middleNode = function <A>(head: ListNode<A>) {
  const toArr = arrayFromListNode(head);
  const secondHalf = toArr.length == 1 ? toArr : toArr.splice(
    Math.floor(toArr.length / 2),
    toArr.length - 1
  );
  return createListNodeFromArray(secondHalf);
};