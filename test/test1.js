global.name = 'Fade';
const obj1 = {
    name: 'Skye',
    doit: function () {
        console.log(this.name);
    },
    doit2: () => {
        console.log(this.name);
    }
}

obj1.doit();
doit3 = obj1.doit2;
doit3();

