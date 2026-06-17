async function getusers(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if (!res.ok) throw new Error(`user fetch failed: ${res.status}`)

    return await res.json()
}

async function gettodos(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    if (!res.ok) throw new Error(`Todo fetch failed: ${res.status}`)

    return await res.json()
}

async function out(userId) {
    try{
        const [users, todos] = await Promise.all([getusers(userId), gettodos(userId)])
        
        console.log(users)
        console.log(`${todos.length} todos found`)
        const incompleteTodos = todos.filter(t => t.completed === false)
        const completedTodos =  todos.filter(t => t.completedTodos === true)
        console.log("Todos Incomplete: ", incompleteTodos.length, incompleteTodos)
        console.log("Todos completeds: ", completedTodos.length, completedTodos)
    }catch(err){
        console.error('Output failed', err)
    }
}

out(1)