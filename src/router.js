import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import RegisterUser from './components/pages/RegisterUser.vue';
import ImagesAlbum from './components/pages/ImagesAlbum.vue';
import TrickOrTreat from './components/pages/TrickOrTreat.vue';
import PartyTime from './components/pages/PartyTime.vue';
import ScaryStories from './components/pages/ScaryStories.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/scary-stories', component: ScaryStories },
		{ path: '/trick-or-treat', component: TrickOrTreat },
		{ path: '/images-album', component: ImagesAlbum },
		{ path: '/party-time', component: PartyTime },
		{ path: '/register', component: RegisterUser },
	],
});


export default router;