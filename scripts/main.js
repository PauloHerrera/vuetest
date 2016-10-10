var demo = new Vue({
	el: '#main',

	data: {
    test : "",
		active: 'home',
    services: [
      {
        name: 'Web Development',
        price: 300,
        active:true
      },{
        name: 'Design',
        price: 400,
        active:false
      },{
        name: 'Integration',
        price: 250,
        active:false
      },{
        name: 'Training',
        price: 220,
        active:false
      }
    ]
	},
	// Functions we will be using.
	methods: {
		makeActive: function(item){
			// When a model is changed, the view will be automatically updated.
			this.active = item;
		},
    toggleBee: function (){
      this.test = this.test == "bee" ? "" : "bee";
    },
    toggleActive: function(s){
          s.active = !s.active;
    },
    created: function() {
              this.$http.get('/tasks').then(function(response) {
                  this.tasks = response.data.items ? response.data.items : []
              })
          },
    total: function(){

        var total = 0;

        this.services.forEach(function(s){
          if (s.active){
            total+= s.price;
          }
        });

       return total;
      }
	   }
});
