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
    return(<>
        {todos.map((todo, i) => 
        <div className="input" key={i}> {todo.text}</div> )}
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)