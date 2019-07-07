new Vue ({
    el:'#app',
    data: {
        amount: null,
        from: '',
        to: '',
        result: '',
        currencies: []
    },
    mounted(){

        this.getCurrencies();
        this.getConversionRates();
        
    },
    computed: {

    },
    methods: {
        getCurrencies() {
            axios.get('https://openexchangerates.org/api/currencies.json')
        .then(response => {
            this.currencies = response.data;
        });
        },

        getConversionRates()
        {
            axios.get('https://openexchangerates.org/api/convert/GBP/EUR/')
            .then(response => {
                this.result = JSON.stringify(response.data);
                console.log(response);
            });
        }
    }

})