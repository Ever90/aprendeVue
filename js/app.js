var app = new Vue({
    el:'#app',
    data:{
        message:'Hello World con Vue JS',
        sum: 10+20
        
    },
    methods:{

        calcularSuma(valor1,valor2){
            return valor1 + valor2;


        }
    }
});

//directiva
let app2= new Vue({
    el:'#app-2',
    data:{
        message:'Usted cargo esta pagina el ' + new Date().toLocaleString()
    }

});

//condicional

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen:false,
      value:10
    }
  })

// ciclo for

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Aprender JavaScript' },
        { text: 'Aprender Vue' },
        { text: 'Construir algo increíble' }
      ],
      nombre:['Antonio','Luis', 'Arturo']
    }
  })

//interaccion con el usuario

let app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hola Vue.js!'
    },
    methods: {
      mensajeReves: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

  //enlace bidedireccional con v-model

  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hola Vue!'
    }
  })
  
  // creacion de componentes

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })

  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetales' },
        { id: 1, text: 'Queso' },
        { id: 2, text: 'Cualquier otra cosa que se supone que los humanos coman' }
      ]
    }
  })



  //Computed Properties and Watchers

  var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hello'
    },
    computed: {
      // a computed getter
      reversedMessage: function () {
        // `this` points to the vm instance
        return this.message.split('').reverse().join('')
      }
    }
  })

  //renderizado de html y atributos

  let app8= new Vue({

    el: '#app-8',
    data: {

        contenido_html:"<h2>Desarrollador de Software</h2>",
        src:"development-4536630_640.png",
        image:"digital-marketing-1563467_640.png",
        titulo:"<h2>Marketing digital</h2>",
        altTexto:"descripcion de imagen"

    }

  });


   