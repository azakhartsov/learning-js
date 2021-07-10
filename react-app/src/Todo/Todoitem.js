import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottor: '.5rem'
    },
    input: {
        marginRight: '1rem' 
    }
}

 function TodoItem({todo, index, onChange}){
    const {removeTodo} = useContext(Context)
    const classes = []

if (todo.completed) {
    classes.push('done')

} 

    // const clickHandler = removeTodo.bind(null,todo.id); // reference to a function
    // const anotherHandler = removeTodo(todo.id); // this will remove todo straight away, result of function execution
    // const anotherCorrectHandler = () => removeTodo(todo.id); // that's what you meant,  reference to a function

    const customBind = (fn, scope, ...args) => {
        return (...innerArgs) => fn.call(scope, ...args, ...innerArgs);
    }

    const sum = (a, b) => {
        return a + b;
    }

    const add5 = sum.bind(null, 5);
    const add5Manual = (b) => {
        return 5 + b;
    };
    console.log(add5(20)); // 25

    return (
        <li style={styles.li}>
        <span className={classes.join(' ')}>
            <input type="checkbox" 
            checked={todo.completed}
            styles={styles.input} onChange={() => onChange(todo.id)}/>
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
        </span>
        <button className='rm' onClick={removeTodo.bind(null,todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
export default TodoItem