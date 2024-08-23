import { Button } from "../Button/Button";
import styles from "./ListElement.module.css";

export default function ListElement({name,  onDeleteButtonClick, onDoneButtonClick, done}) {

    return (
        <li className={styles.list_element}>
            <span className={`${styles.element} ${done ? styles.done : ""}`}>{name}</span>
            {!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
            <Button onClick={onDeleteButtonClick}>Usuń</Button>
        </li>
                
           
        
    )
}