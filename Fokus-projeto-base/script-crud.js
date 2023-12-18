//Find the add task button

const addTaskBtn = document.querySelector('.app__button--add-task')
const addTaskForm = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')

const tasks = []

addTaskBtn.addEventListener('click', () => {
    addTaskForm.classList.toggle('hidden')
})

addTaskForm.addEventListener('submit', (events) => {
    events.preventDefault();
    const task = {
        description: textArea.value
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
})