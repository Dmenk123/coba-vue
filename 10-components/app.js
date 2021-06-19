const HobbiesComponent = {
    template: `<ul>
                    <li class="list-group-item" v-for="(hobby, index) in hobbies">
                        {{hobby}}
                    </li>
                </ul>`,
    data: () => {
        // must return a data
        return {
            hobbies : ['Reading', 'Writing', 'Playing', 'Coding'],
        }
    },
};

const app = Vue.createApp({
    data: () => {
        // must return a data
        return {}
    },
    components: {
        'hobbies-component' : HobbiesComponent
    },
});

// mount must be bottom of the code
app.mount('#app');