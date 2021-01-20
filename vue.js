var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Hello Vue'
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        noti: 'You loaded this page on ' + new Date().toLocaleString()
    }
})
var app3 = new Vue({
    el: '#app-3',
    data: { seen: true }
})
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})
var app5 = new Vue({
    el: '#app-5',
    data: { text5: 'Hello' },
    methods: {
        clickHere: function () {
            app5.text5 = 'Hello Thiem'
        }
    }
})
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++"> Bạn đã bấm {{ count }} lần.</button>'
})
new Vue({ el: '#components-demo' })
