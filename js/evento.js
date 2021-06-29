//eventos en html

let app9= new Vue({
    el: '#app-9',
    data:{
        numero: 14
    },
    methods:{

      incrementar(){
        this.numero++
      },

      decrementar(){
        this.numero--

      },

      
    }  
    });

    //manejador de eventos

  var example2 = new Vue({
    el: '#example-2',
    data: {
      name: 'Vue.js'
    },
    // definir métodos bajo el objeto `methods`
    methods: {
      saludar: function (event) {
        // `this` dentro de los métodos apunta a la instancia de Vue
        alert('Hola ' + this.name + '!')
        // `evento` es el evento DOM nativo
        if (event) {
          alert(event.target.tagName)
        }
      }
    }
  });

  //observadores personalizados (watch)

  var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
      question: '',
      answer: 'No puedo darte una respuesta hasta que hagas una pregunta!'
    },
    watch: {
      // cada vez que la pregunta cambie, esta función será ejecutada
      question: function (newQuestion, oldQuestion) {
        this.answer = 'Esperando que deje de escribir...'
        this.debouncedGetAnswer()
      }
    },
    created: function () {
      // _.debounce es una función proporcionada por lodash para limitar cuan
      // a menudo se puede ejecutar una operación particularmente costosa.
      // En este caso, queremos limitar la frecuencia con la que accedemos a
      // yesno.wtf/api, esperando hasta que el usuario haya terminado
      // de escribir antes de realizar la solicitud ajax.
      // Para aprender más sobre la función _.debounce (y su primo
      // _.throttle), visite: https://lodash.com/docs#debounce
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
      getAnswer:  function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Las preguntas suelen contener un signo de interrogación. ;-)'
          return
        }
        this.answer = 'Pensando...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = '¡Error! No se pudo alcanzar la API. ' + error
          })
      }
    }

    
  })
  let clase=new Vue({
    el:'#clase',
  data: {
     p_error:true
    }
  });

    