import {createMemoryHistory, createRouter} from 'vue-router'

import HomeView from '@/views/home/index.vue'
import RecommendView from '@/views/recommend/index.vue'
import ActivityView from '@/views/activity/index.vue'

const routes = [
    {path: '/', component: HomeView},
    {path: '/recommend', component: RecommendView},
    {path: '/activity', component: ActivityView},
]

export default createRouter({
    history: createMemoryHistory(),
    routes,
})