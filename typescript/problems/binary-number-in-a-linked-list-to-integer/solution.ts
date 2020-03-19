
type ListNode<A> = {
    val: A,
    next: ListNode<A> | null
}

const nodeListToArray = <A>(nodelist: ListNode<A>) => {
    let current = nodelist;
    const arr = [nodelist.val];
    while (current.next !== null) {
        arr.push(current.next.val);
        current = current.next;
    }
    return arr;
};

// Runtime: 44 ms, faster than 98.74% of JavaScript online submissions for 
// Convert Binary Number in a Linked List to Integer.

const getDecimalValue = (node: ListNode<number>): number => {
    const binArr = nodeListToArray(node)
    let decimal = 0;
    for (var i = 0; i < binArr.length; ++i) {
        decimal += binArr[i] === 0 ? 0 : Math.pow(2, binArr.length - i - 1);
    }
    return decimal;
};