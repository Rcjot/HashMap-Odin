
function HashMap() {

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

    function set(key, value) {
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
        bucketArray[bucketIndex] = {[hashNum]: value};
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
            let tempNo;
            try {
                tempNo = Object.keys(bucketArray[i])[0];

            } catch (error) {
            }
            if (Number(tempNo) === hashNum){
                delete bucketArray[i];
                console.log(bucketArray);
                return true;
            }
        }
        return false;
    }

    function length(){
        let length = 0;
        for (let obj of bucketArray){
            if (typeof obj === 'object' && obj !== null){
                length++;
            }
        }
        return length;
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
        const keysArr = [];
        for (let obj of myKeys) {
            keysArr.push(parseInt(Object.keys(obj)));
        }
        return keysArr;
    }

    function values(){
        const myValues = bucketArray.filter((obj) => {
            return obj;
        })
        const valuesArr = [];
        for (let obj of myValues) {
            valuesArr.push(obj[Object.keys(obj)[0]]);
        }
        return valuesArr;
    }

    function entries(){
        const myEntries = bucketArray.filter((obj) => {
            return obj;
        })
        const entryArr = [];
        for (let obj of myEntries) {
            const objArr = []
            objArr.push(parseInt(Object.keys(obj)));
            objArr.push(obj[Object.keys(obj)[0]]);
            entryArr.push(objArr);
        }
        console.log(bucketArray);
        return entryArr;
    }

    return {
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries,
    }
}

// const map = HashMap();

// map.set('apple', 'red');
// map.set('banana', 'yellow');
// map.set('carrot', 'orange');
// console.log(map.get('apple'));
// console.log(map.has('apple'));
// console.log(map.remove('apple'));
// console.log(map.length());
// // map.clear();
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

const test = HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')
console.log(test.entries());
