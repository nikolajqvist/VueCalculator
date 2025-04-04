const app = Vue.createApp({
    data () {
        return{
            intro: 'Velkommen til min Vue lommeregner',
            number1: '',
            number2: '',
            result: '',
            operation: '',
        }
    },
    methods: {
        calculate() {
            switch(this.operation){
            case '+': return this.result = this.number1 + this.number2;
            case '-': return this.result = this.number1 - this.number2;
            case '*': return this.result = this.number1 * this.number2;
            case '/': return this.result = this.number1 / this.number2;
        }
    }
    },
    computed: {

    }
})