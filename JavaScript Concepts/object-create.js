const student = { name: 'Sakib', job: 'Crickter'};

const person = new Object();
console.log(person);

const human = Object.create(student);
console.log(human.job);


const val = Object.entries(student);
console.log(val);