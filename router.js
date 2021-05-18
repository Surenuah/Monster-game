import Vue from 'vue'
import Router from 'vue-router'

import MonsterGame from "@/Views/MonsterGame/MonsterGame";
import SignUp from "@/Views/Authorization/SignUp";


Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: {
                render(c) {
                    return c('router-view');
                }
            },
            children: [
                {
                    path: '/game',
                    name: 'MonsterGame',
                    component: MonsterGame
                },
                {
                    path: '/sign-up',
                    name: 'SignUp',
                    component: SignUp
                }
            ]
        }
    ]
})

export default router;

















































