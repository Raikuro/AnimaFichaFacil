export interface INode<T> {
    value: T;
    next?: INode<T>;
}

export class LinkedList<T> {
    private head: INode<T> = null;
    private tail: INode<T> = null;

    public static fromArray<U>(values: U[]): LinkedList<U>{
        let aux = new LinkedList<U>();
        values.forEach(v => aux.append(v));
        return aux;
    };

    public append = (value: T): LinkedList<T> => {
        const node = this.forgeNode(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            return this;
        }

        this.appendToTheEndOfTheList(node);
        return this;
    };
    
    public isEmpty = () => !this.head;
    
    public toArray = (): T[] => {
        const result: T[] = [];
        let node = this.head;
        while (node) {
            result.push(node.value);
            node = node.next;
        }
        return result;
    };    

    private appendToTheEndOfTheList = (node: INode<T>) => {
        this.tail.next = node;
        this.tail = node;
    };

    private forgeNode = (value: T): INode<T> => {
        return { value, next: null };
    };

    public *items() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}