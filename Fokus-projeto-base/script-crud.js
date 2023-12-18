//Find the add task button

const addTaskBtn = document.querySelector('.app__button--add-task')
const addTaskForm = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')

const tasks = []

function createTaskElemnt(task) {
    const createElement = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML = `
    <svg>
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    </svg>
    `

    const paragraph = document.createElement('p')
    paragraph.textContent = task.description

    const button = document.createElement('button')
    const imgBtn = document.createElement('img')
    imgBtn.setAttribute('src', '/imagens/edit.png')

    button.append('imgButton')

    li.append('svg')
    li.append('paragraph')
    li.append('button')
}

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