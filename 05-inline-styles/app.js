const app = Vue.createApp({
    data: () => {
        // must return a data
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    methods: {
        onBoxSelected(box) {
            if(box === 'A') {
                this.boxASelected = true;
            }else if(box === 'B'){
                this.boxBSelected = true;
            }else if(box === 'C'){
                this.boxCSelected = true;
            }
            
        }
    },
});

app.mount('#app');