const app = Vue.createApp({
    data: () => {
        // must return a data
        return {
            title: 'Create a Post Data',
            text1: '<h1>Learn Vue Course</h1>',
            text2: 'Master the Vue',
            link : 'https://vuejs.org'
        }
    },
    methods: {
        // must be a function, not property
        // arrow function inside property, cannot access data value
        // getText : () => {
        //     return this.text1;
        // },
        getText() {
            return this.text1;
        },
        getAnotherText() {
            return this.text2;
        }
    },
});

app.mount('#app');