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
    const [value, setValue] = React.useState('');
    const handleSubmit = e =>{
        e.preventDefault();
        if(!value) return;
        const newTodos = [...todos, {text:value, isCompleted: false}];
        setTodos(newTodos);
        setValue('');
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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"ß
                value={value}
                placeholder="Add Todo..."
                onChange={e => setValue(e.target.value)}
            />
        </form>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)