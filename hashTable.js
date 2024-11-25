class HashTable {
    constructor(size = 53) {
      this.keyMap = new Array(size);
    }
  
    _hash(key)
   {
      let total = 0;
      const PRIME = 31; 
  
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * PRIME + value) % this.keyMap.length;
      }
      return total;
    }
  
    set(key, value) {
      let index = this._hash(key)
  ;
      if (!this.keyMap[index]) {
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }
  
    get(key)
   {
      let index = this._hash(key)
  ;
      if (this.keyMap[index]) {
        for (let pair of this.keyMap[index]) {
          if (pair[0] === key) { // pair[0] is the key
            return pair[1]; // pair[1] is the value of that key
          }
        }
      }
      return undefined; // Return undefined if the key is not found
    }
  
   
    keys() {
      let keysArr = [];
      for (let bucket of this.keyMap) {
        if (bucket) {
          for (let pair of bucket) {
            keysArr.push(pair[0]);
          }
        }
      }
      return keysArr;
    }
  
    // Method to retrieve all values
    values() {
      let valuesArr = [];
      for (let bucket of this.keyMap) {
        if (bucket) {
          for (let pair of bucket) {
            // Check if the value is already in valuesArr
            if (!valuesArr.includes(pair[1])) { 
              valuesArr.push(pair[1]);
            }
          }
        }
      }
      return valuesArr;
    }
  }
  
  const hashTable = new HashTable();
  hashTable.set("name", "Alla");
  hashTable.set("age", 25);
  hashTable.set("country", "Armenia");
  
  console.log(hashTable.get("name"));
  console.log(hashTable.get("age"));
  console.log(hashTable.keys());
  console.log(hashTable.values());