let colors = ["red", "blue", "green"];
    console.log(colors[0]);

    const fruits = new Array("apple", "banana");

    let items = ["a", "b", "c"];
    console.log(items); //[ 'a', 'b', 'c' ]
    items.push("d"); //add from end
    console.log(items); //[ 'a', 'b', 'c', 'd' ]
    items.pop(); // remove from end
    console.log(items); //[ 'a', 'b', 'c' ]
    items.unshift("z"); //adds at beginning and shifts the elements
    console.log(items); //[ 'z', 'a', 'b', 'c' ]
    items.shift(); //removes from beginning and shifts
    console.log(items); //[ 'a', 'b', 'c' ]
    items.splice(1, 1, "x"); // replaces 1 element at index 1 with "x"
    console.log(items); //[ 'a', 'x', 'c' ]
    console.log(items.slice(0, 2)); //[ 'a', 'x' ]

    // Arrays from strings
    let text = "ABCDEFG";
    let texts = Array.from(text);
    console.log(texts);

    // Array spread will join ...
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [...arr1, ...arr2];
    console.log(arr3);