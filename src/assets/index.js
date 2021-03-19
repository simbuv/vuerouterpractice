import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Friends from '@/components/Friends.vue'
import Accounts from '@/components/Accounts.vue'
import Contact from '@/components/Contact.vue'
import AxiosPractice from '@/components/AxiosPractice.vue'


Vue.use(Router)

const router = new Router(
    {
        mode: 'history',
        routes:[
            {
                
                path: '/',
                name: 'Hello',
                component: HelloWorld
            },
            {
                path : '/friends/:id/:age/:weight',
                name: 'friends',
                component : Friends
            },
            {
                path: '/accounts',
                name: 'accounts',
                component: Accounts
            },
            {
                path:'/contact/:greetings/:name',
                name : 'contact',
                props: true,
                component : Contact
            },
            {
                path: '/axiospractice',
                name:'axiospractice',
                component: AxiosPractice
            }

        ]
    }
)
export default router