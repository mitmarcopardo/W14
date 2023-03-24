function App(){
    const [todos, setTodos] = React.useState(
        // intial state
        [
            {
                text: 'learn react',
                isCompleted: false,
            },
            {
                text: 'meet frind for lunch',
                isCompleted: false,
            },
            {
                text: 'build todo app',
                isCompleted: false,
            }
        ]
    );
    // Creation of JSX
    
    const addTodo = text => {
        const newTodos = [...todos, {text:value, isCompleted: false}];
        setTodos(newTodos);
    }
   
    const removeTodo = e => {
        const index = Number(e.target.id); // Number is a JS function that will transform a number from string to a number
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }
    return(<>
        {todos.map((todo, i) => 
            <div className="input" key={i} id={i} onClick={removeTodo}> {todo.text}</div> )}
        <TodoForm addTodo={addTodo}/>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)