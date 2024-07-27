import {createMemoryHistory, createRouter} from 'vue-router'

import HomeView from '@/views/home/index.vue'
import HotView from '@/views/hot/index.vue'
import RecentlyView from '@/views/recently/index.vue'

const routes = [
    {path: '/', component: HomeView},
    {path: '/hot', component: HotView},
    {path: '/recently', component: RecentlyView},
]

export default createRouter({
    history: createMemoryHistory(),
    routes,
})