var times = [];

//push - insere o elemento no final do vetor
times.push("Flamengo");
times.push("Vasco");
times.push("Fluminense");
times.push("Botafogo");

//unshift - insere o elemento no início do vetor
times.unshift("Bangu");

//remove o último elemento do vetor
//times.pop();

//remove o primeiro elemento do vetor
//times.shift();

//times.splice(0, 2);

times.sort();

//Arrow Function
times.forEach((f) => console.log(f));
