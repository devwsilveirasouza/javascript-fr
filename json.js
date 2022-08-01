/**
 * -- Aula 06 --
 *  ----- JSON -----
 */
 const tarefas = [
    { 
        id: 1, 
        description: "Estudar programação",
        isCompleted: false,
    },
    { 
        id: 2, 
        description: "Ler",
        isCompleted: true,
    },
    {
        id: 3, 
        description: "Treinar",
        isCompleted: true,
    },
];
//Converter lista para JSON
const tarefasJSON = JSON.stringify(tarefas);
console.log(tarefasJSON);

//Converter JSON para lista
const tarefasList = JSON.parse(tarefasJSON);
console.log(tarefasList);