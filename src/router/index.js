import {createRouter, createWebHistory} from 'vue-router'
import VocabularyView from "@/views/VocabularyView.vue";
import AuthView from "@/views/AuthView.vue";
import WordFormView from "@/views/WordFormView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'vocabulary',
            component: VocabularyView
        },
        {
            path: '/auth',
            name: 'auth',
            component: AuthView
        },
        {
            path: '/word',
            name: 'word-form',
            component: WordFormView,
            props: true
        }
    ],
})

router.beforeEach((to, from) => {
    const isSessionSet = localStorage.getItem('session');
    if (!isSessionSet && !['auth'].includes(to.name)) {
        return {path: 'auth'}
    }

    if (to.name === 'auth') {
        if (isSessionSet)
            return {path: ''}
    }
});

export default router
