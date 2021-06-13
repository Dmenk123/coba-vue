
const app = Vue.createApp({
    data: () => {
        // must return a data
        return {
           count: 0,
        }
    },
    beforeCreate() {
        console.log('before create');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('before mounted');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUnmount() {
        console.log('before unmount');
    },
    unmounted() {
        console.log('unmounted');
    },
});

app.mount('#app');