// let demo_arr = ['hello', 1, 'world', 2]
// console.log(demo_arr.indexOf("hello")) //If no element is found, returns -1

// demo_arr.push("Nandhini")
// console.log(demo_arr)
// demo_arr.pop("Nandhini")
// console.log(demo_arr)
// console.log(demo_arr[0])

// let index = 2;
// console.log(`Using an index of ${index} the item returned is ${demo_arr.at(index)}`);
// expected output: "Using an index of 2 the item returned is 8"


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result)

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat()); // expected output: [0, 1, 2, 3, 4]


const array1 = ['a', 'b', 'c', 'd']

array1.forEach((element,index) => console.log(element, index));

class Counter{
    constructor(){
        this.num = 0;
        this.count = 0;
    }

    add(array){
        array.forEach(function countEntry(entry){
            this.sum += entry;
            ++this.count;
        },this);
    }
}

// const obj = new Counter();
// obj.add([2, 5, 9]);
// console.log(obj.count); // 3
// console.log(obj.sum); // 16

// console.log(Array.from('foo'));
// // expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3], x => x + x));
// // expected output: Array [2, 4, 6]


const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join('='));

const array12= [1, 4, 9, 16];

// pass a function to map
const map1 = array12.map(x => x * 2);
// console.log(map1);
// expected output: Array [2, 8, 18, 32]

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

const ar = [1, 2, 'a', '1a'];

// console.log(ar.toString());
// expected output: "1,2,a,1a"


const obj = {
    prop1: "I am",
    prop2: "an",
    prop3: "object"
}

// console.log(obj.prop1, obj['prop2'])

const map11 = new Map();
map11.set('a', '1');
map11.set('b', 2);

// console.log(map11);
// Map to object Conversion
const obj_map_con = Object.fromEntries(map11);
// console.log(obj_map_con)

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }