function HashSet() {

    const bucketArray = [];
    let entryCount = 0;
    let bucketLength = 16;

    function hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
    } 

    function set(key) {
        const hashNum = hash(key);
        const capacity = Math.ceil(bucketLength * 0.75);
        console.log(capacity);
        if (capacity <= entryCount) {
            bucketLength += 8;
            console.log(bucketLength);
        }
        const bucketIndex = hashNum % bucketLength;
        if (bucketIndex < 0 || bucketIndex >= bucketLength) {
            throw new Error("Trying to access index out of bound");
        }
        bucketArray[bucketIndex] = hashNum;
        entryCount++;
    }
     
    function get(key){
        const hashNum = hash(key);
        const value = bucketArray.filter((obj) => {
            return obj[hashNum];
        });
        return (value.length === 0) ? null : value[0][hashNum];
    }

    function has(key){
        const hashNum = hash(key);
        const value = bucketArray.filter((obj) => {
            return obj[hashNum];
        });
        return (value.length === 0) ? false : true;
    }

    function remove(key){
        const hashNum = hash(key);
        for (let i = 0; i <bucketArray.length; i++){
            if (bucketArray[i] === hashNum){
                delete bucketArray[i];
                console.log(bucketArray);
                return true;
            }
        }
        return false;
    }

    function length(){
        const myKeys = bucketArray.filter((obj) => {
            return obj;
        })

        return myKeys.length;
    }

    function clear(){
        for (let i = 0 ; i<bucketArray.length; i++){
            delete bucketArray[i];
        }
        console.log(bucketArray);
    }

    function keys(){
        const myKeys = bucketArray.filter((obj) => {
            return obj;
        })
        return myKeys;
    }

    return {
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
    }
}

const test = HashSet();

test.set('apple');
test.set('banana');
test.set('carrot');
test.set('dog');
test.set('elephant');
test.remove('elephant');
console.log(test.length());
console.log(test.keys());