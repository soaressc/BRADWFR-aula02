/*let nome = prompt("Informe seu nome: ");
let ident = document.getElementById("id1");
ident.textContent = nome;
//ident.innerHTML = nome;
//ident.innerText = nome;
//ident.innerHTML = nome;

let valor = document.getElementById("media");

let valor1 = Number(prompt("Informe primeira nota: "));
let nota1 = document.getElementById("id2");

let valor2 = Number(prompt("Informe segunda nota: "));
let nota2 = document.getElementById("id3");

let valor3 = Number(prompt("Informe terceira nota: "));
let nota3 = document.getElementById("id4");

let media = (valor1 + valor2 + valor3)/3;

valor.textContent = media;
nota1.textContent = valor1;
nota2.textContent = valor2;
nota3.textContent = valor3;*/

// a = "Ana";
// b = new String("Ana Paula");
// console.log(a.length);
// console.log(b);

let nome = "Ana Paula"
//possui caracter "u" na string?
nome.includes("u");
//começa com "A"? termina com A? -> objeto.endsWith
nome.startsWith("A");
//substituir: objeto.replace("o que é substituído", "o que substitui")
//pra substituir todas as letras, replaceAll
nome.replace("n", "p")
//para separar a string
let estado = "Sao Paulo";
estado.split(" ");
//separar a string em cada caracter
estado.split("");
//maiúsculo e minúsculo (toLowerCase)
estado.toUpperCase();
//pegar parte da string (quero só o "Paulo")
estado.substr(4, 8);
//repetir a string
estado.repeat(3);
//array pode receber dados heterogêneos
let a = [1, 3, 6, 10, 45, 4000, 7];
let b = ["Ana", 9.8, 7*8, [1,2,3], 7*8];
//chamar o indice do array
b[3][2];
//adicionar elementos no começo do array
a.unshift("a", 4000);
//adicionar no final do array
a.push(1000);
//inserir um elemento em algum lugar no array (começo do indice, quantos elementos ele precisa remover depois do indice, inserir este elemento)
let d = ['a', 90, 100, 60000, 10, 1, 3, 6, 10, 4000, 7 , 1000, 20, 45, 'b'];
d.splice(3, 2, 45);
//procurar indice do primeiro elemento do array que coincide
b.indexOf(7*8);
//se for pra saber do indice do ultimo elemento
b.lastIndexOf(7*8);
//remove último elemento
a.pop();
//remove o primeiro element
a.shift();
//zerar o array
a.length = 0;
//unir arrays
let u = [1, 2, 3];
let v = [4, 5, 6];
let uniao = u.concat(v);
//separar a partir do indice 2
uniao.slice(2);
//estrutura de objeto
let obj = {nome: "Ana", sobrenome: "Giancoli", cidade: "Bragança", estado: function estado() {return "São Paulo"}};
//adicionar chave (elemento) ao objeto (atribuir novo atributo ao objeto)
obj.destino = "Minas";
obj.numero = [1, 2, 3];
//retornar o valor da função estado do objeto
obj.estado();
//incluir objeto dentro de outro objeto
obj.novo = {cargo: 'Prof', salario: 20};
//buscar a chave cargo do objeto "novo" no objeto "obj"
obj.novo.cargo;
//copia de objeto - spread (vai permitir concatenar com o objeto anterior)
obj1 = {...obj};
//copiar objeto
obj2 = obj;
