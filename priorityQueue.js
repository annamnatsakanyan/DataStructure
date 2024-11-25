class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element, priority) {
      const queueElement = { element, priority };
      let added = false;
  
      for (let i = 0; i < this.queue.length; i++) {
        if (queueElement.priority < this.queue[i].priority) {
          // without deleting any value inserted queueElement to the i position 
          this.queue.splice(i, 0, queueElement); 
           added = true;
          break;
        }
      }
      //added element if it not added during the loop, because was lower then all elems
      if (!added) {
        this.queue.push(queueElement); 
      }
    }
    // remove and return highest priority element
    dequeue() {
      return this.queue.shift()?.element; 
    }
  
    peekHighest() {
      return this.queue[0]?.element;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    size() {
      return this.queue.length;
    }
  
    print() {
      return this.queue;
    }
  }
  
  const pq = new PriorityQueue();
  pq.enqueue("task1", 2);
  pq.enqueue("task2", 1);
  pq.enqueue("task3", 3);
  console.log(pq.print());
  console.log(pq.dequeue());
  console.log(pq.peekHighest());
  console.log(pq.isEmpty());
  console.log(pq.size());