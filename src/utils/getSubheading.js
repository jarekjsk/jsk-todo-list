export function getSubheading (numberOfTasks) {
    if (numberOfTasks === 1) {
        return "1 zadanie"
    } else if (numberOfTasks !==1 && numberOfTasks <= 4) {
        return `${numberOfTasks} zadania`
    } else {
        return `${numberOfTasks} zadań`
    }
}
