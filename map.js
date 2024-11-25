class MyMap {
    constructor() {
        this._keys = [];
        this._values = [];
    }

    set(key, value) {
        // returned -1 if no index of this key or returned index if exist
        const index = this._keys.indexOf(key)
;  
        if (index === -1) {
            // If the key is not found, add it
            this._keys.push(key)
;
            this._values.push(value);
        } else {
            // If the key already exists, update the value
            this._values[index] = value;
        }
    }

    get(key)
 {
        const index = this._keys.indexOf(key)
;
        if (index === -1) { 
            return undefined;
        }
        return this._values[index];
    }

    has(key)
 {
        return this._keys.indexOf(key)
 !== -1;
    }

    delete(key)
 {
        const index = this._keys.indexOf(key)
;
        if (index !== -1) {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            return true;
        }
        return false; // not found for delete
    }

    getSize() {
        return this._keys.length;
    }

    clearMap() {
        this._keys = [];
        this._values = [];
    }

    getKeys() {
        return [...this._keys];  
    }

    getValues() {
        return [...this._values];
    }
}


  const map = new MyMap();
  map.set("name", "Alice");
  map.set("age", 22);
  console.log(map.getValues())
  console.log(map.getKeys())
  console.log(map.get("name"));
  console.log(map.has("age"));
  console.log(`size is: ${map.getSize()}`)
  map.delete("name");
  console.log(map.has("name")); // false