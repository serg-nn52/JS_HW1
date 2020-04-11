var term = {
    Canada: 10,
    Germany: 13,
    Spain: 22
}

for (let key in term) {
    alert(key + ": " + term[key] + " градусов/градуса");
};

var i=0;
var a=0
for(let key in term) {
    i+=term[key];
    a++;
};

alert("Средняя температура в странах " + i/a + " градусов");

i=-1000;
var b;
for(let key in term) {
    if(i < term[key]) {
        i = term[key];
        b = key;
    };
    i=i;
    b=b;
};

alert("Максимальная температура " + i + " градусов/градуса, страна " + b);