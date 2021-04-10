var app = new Vue({
    el: '#root',
    data: {
      lista_canzoni:[],
      genere_filtered:[],
       orderedlist:[]
    },
    mounted(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
        this.list = response.data.response;
        let lista = this.list;
        this.list.forEach((card, i) => {
        this.lista_canzoni.push(card);
        this.genere_filtered.push(card);
        });
      })
      console.log(this.lista_canzoni)

    },
    methods:{
      onChange: function (event) {
        let selected = event.target.value;
        console.log(selected);
        this.genere_filtered = this.lista_canzoni.filter((card) => card.genre == selected || selected == 'all');
        console.log(this.genere_filtered);
      },
      ordina: function ordina() {
         this.orderedlist = this.sortObject(this.genere_filtered);
      },
      sortObject: function(o) {
        return this.genere_filtered.sort((a, b) => { return a.year - b.year;});
    }
    }
});
