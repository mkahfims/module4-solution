const names = ['Alice', 'Bob', 'Jason', 'jenny', 'Michael', 'John'];

names.forEach(name => {
    if (name.charAt(0).toLowerCase() === 'j') {
        console.log(`Goodbye ${name}`);
    } else {
        console.log(`Hello ${name}`);
    }
});