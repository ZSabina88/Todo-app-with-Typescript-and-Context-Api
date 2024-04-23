import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const enteredText = inputRef.current!.value;

        if (enteredText?.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText);
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id='text' ref={inputRef} />
            <button>Add todo</button>
        </form>
    );
}

export default NewTodo;
