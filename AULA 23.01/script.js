const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
];

// 1. Imprima no console a quantidade de pessoas Total.
console.log(data.length);

// 2. Imprima no console a quantidade de pessoas pessoas do sexo
// Feminino.
const totalFeminino = data.filter(pessoa => pessoa.sexo === 'F').length;
console.log(totalFeminino);

// 3. Imprima no console a soma do salário de todas as pessoas.
const somaSalario = data.reduce((total, pessoa) => total + pessoa.salario,0);
console.log(somaSalario);

// 4. Imprima no console a média do salário de todas as pessoas.
const mediaSalario = somaSalario/data.length;
console.log(mediaSalario);

// 5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino
const somaSalarioMasculino = data.filter(pessoa => pessoa.sexo === 'M').reduce((total, pessoa) => total + pessoa.salario, 0);
console.log(somaSalarioMasculino);

// 6. Imprima no console a média do salário de todas as pessoas do sexo
// Masculino
const totalMasculino = data.filter(pessoa => pessoa.sexo === "M").length;
const mediaSalarioMasculino = somaSalarioMasculino/totalMasculino;

console.log(mediaSalarioMasculino);

// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.
const salarioSuperior7Mil = data.some(pessoa => pessoa.salario > 7000);
console.log(salarioSuperior7Mil);

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.
const indiceEvaTrindade = data.findIndex(pessoa => pessoa.nome === "Eva Trindade");
console.log(indiceEvaTrindade);

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".
const soMaisUmSilva = data.filter(pessoa => pessoa.nome.includes("Silva"));
console.log(soMaisUmSilva);

// 10. Imprima os nomes utilizando o MAP
const nomes = data.map(pessoa => pessoa.nome);
console.log(nomes);