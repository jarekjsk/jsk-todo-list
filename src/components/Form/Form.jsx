import { useState } from "react";
import { Button } from "../Button/Button"
import styles from "./Form.module.css"

export default function Form({onFormSubmit}) {
const [inputValue, setInputValue] = useState("")

    return (
        <form 
        onSubmit={(e) => {
            e.preventDefault();
            onFormSubmit(inputValue);
        }}>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className={styles.input} type="text"></input>
            <Button>Dodaj</Button>
        </form>

    )
}