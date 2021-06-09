const app = Vue.createApp({
    data: () => {
        // must return a data
        return {
            enteredHobbyValue : '',
            hobbies: [],
            arrActive: [],
            indexHover: 0,
            userDetails: {
                firstName : 'riski',
                lastName : 'yuanda',
                age : 10,
            },
            bgColor: '#fff'
        }
    },
    computed : {
        setHighlight () {
            // set arr value with false except indexHover
            let arr_map = this.arrActive.map((val, i) => i === this.indexHover ? val : false);
            return arr_map;
        }
    },
    methods: {
        onHobbySubmit() {
            this.hobbies.push(this.enteredHobbyValue);
            this.arrActive.push(false);
            // set data to blank after push
            this.enteredHobbyValue = '';
        },
        removeHobby(index) {
            this.hobbies.splice(index, 1);
        },
        mouseOver (index) {
            this.indexHover = index;
            this.arrActive[index] = true;
        }
    },
});

app.mount('#app');