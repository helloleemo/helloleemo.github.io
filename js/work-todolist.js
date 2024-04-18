const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            newTodo: '',
            todos: [],
            currentColorClass: 'normal',
            colors: ['normal', 'important', 'medium']
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim()) {
                this.todos.push({
                     text: this.newTodo, colorClass: this.currentColorClass 
                    });
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        changeColorClass() {
            let currentIndex = this.colors.indexOf(this.currentColorClass);
            this.currentColorClass = this.colors[(currentIndex + 1) % this.colors.length];  // 循环切换颜色
        },
        toggleComplete(index) {
            this.todos[index].completed = !this.todos[index].completed;
            this.todos[index].colorClass = this.todos[index].completed ? 'done' : 'normal'; // 或者任何其他未完成时的默认类
        },
        getIconClass(todo) {
            // 根据完成状态返回不同的图标类
            return todo.completed ? 'fa-solid fa-check' : 'fa-solid fa-check';
        }
    }
}).mount('#app');