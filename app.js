// let input = prompt("What would you like to do?")
// const todos = ['Collect Eggs', 'Paint the bedroom']
// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log('************')
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`)
//         }
//         console.log('************')
//     } else if (input === 'new') {
//         const newTodo = prompt('Ok, what is the new todo?')
//         todos.push(newTodo)
//         console.log(`${newTodo} added to the list!`)
//     } else if (input === 'delete') {
//         const index = prompt('Ok, enter an index to delete')
//         const deleted = todos.splice(index, 1)
//         console.log(`Ok, deleted ${deleted[0]}`)
//     }
//     input = prompt("What would you like to do?")
// }
// console.log("Ok, you quit.")

function sing() {
    console.log("DO")
    console.log("RE")
    console.log("MI")
}

function greet(firstName) {
    console.log(`Hi ${firstName}!`)
}