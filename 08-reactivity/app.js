// common data to share data betwwen two instances
const commonData = {
    commonMessage: 'this is common message',
    junaedi: 'asasas'
};


const app = Vue.createApp({
    data: () => {
        // must return a data
        return {
            instanceName: 'app Instance',
            message: 'Hello world',
            dataInstance : commonData,
            text: '',
            textMessage: '',
        }
    },
    methods: {
        setText(){
            // $refs : get element based on ref attribute 
            // use console.dir to see all node object on elements
            this.textMessage = this.$refs.userText.value;

            // console.dir(this.$refs.userText.value);
        },
        changeMessage() {
            // change commonData via data property in instance 2
            // automatically commonData in instance 1 changed too
            this.dataInstance.commonMessage = 'changed the message in instance 1';
            // console.log(this.dataInstance2.commonMessage);
        }
    }
});

app.mount('#app');

const app2 = Vue.createApp({
    data: () => {
        // must return a data
        return {
            instanceName: 'app2 Instance',
            anotherMessage: 'Hello another world',
            dataInstance2 : commonData,
        }
    },
    methods: {
        changeText(event) {
            this.text = event.target.value;
        },
        changeMessage() {
            // change commonData via data property in instance 2
            // automatically commonData in instance 1 changed too
            this.dataInstance2.commonMessage = 'changed the message in instance 2';
            // console.log(this.dataInstance2.commonMessage);
        }
    }
});

app2.mount('#app2');