import {createRouter, createWebHashHistory} from "vue-router";
import Index from "../views/index.vue"
import Home from "../views/home.vue";
import Department from "../views/department.vue";
import LoginRegister from "../views/login-register.vue";
import MobileIndex from "../views/mobile-index.vue";
import MobileHome from "../views/mobile-home.vue";
import MobileClasses from "../views/mobile-classes.vue";
import MobileCard from "../views/mobile-card.vue";
import MobileCardInstructions from "../views/mobile-card-instructions.vue";
import MobileLoginRegister from "../views/mobile-login-register.vue";
import MobileResetPassword from "../views/mobile-reset-password.vue";

const routes = [
    {
        path: '/',
        component: Index,
        redirect: "/home",
        children: [
            {
                path: "home",
                component: Home,
                name: "Home"
            },
            {
                path: "department",
                component: Department,
                name: "Department"
            }
        ]
    },
    {
        path: "/login-register",
        component: LoginRegister
    },
    {
        path: '/mobile',
        component: MobileIndex,
        redirect: "/mobile/home",
        children: [
            {
                path: "home",
                component: MobileHome,
                name: "MobileHome",
            },
            {
                path: "classes",
                component: MobileClasses,
                name: "MobileClasses",
            },
            {
                path: "card",
                component: MobileCard,
                name: "MobileCard",
            },
        ]
    },
    {
        path: "/mobile-card-instructions",
        component: MobileCardInstructions,
        name: "MobileCardInstructions",
    },
    {
        path: "/mobile-login-register",
        component: MobileLoginRegister,
        name: "MobileLoginRegister",
    },
    {
        path: "/mobile-reset-password",
        component: MobileResetPassword,
        name: "MobileResetPassword",
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const loginRequiredPages = [
    "/mobile/classes",
    "/mobile/card"
]

router.beforeEach((to, from, next) => {

    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")

    if (loginRequiredPages.includes(to.path) && !token && !id) {
        next({path: "/login-register", query: {destination: to.path}})
    } else {
        next()
    }
})

export default router
