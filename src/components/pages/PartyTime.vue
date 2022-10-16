<template>
	<section>
		<base-dialog v-if="modalIsOpen">
			<template #header><p class="modal-message">Message Sent</p></template>
			<template v-slot:actions>
				<base-button @click="toggleModal" title="Ok"></base-button>
			</template>
		</base-dialog>

		<h1>Meet new friends!</h1>
		<ul v-for="user in users" :key="user.userName + generateKey">
			<!-- This is like a hidden key in firebase -->
			<base-card>
				<li>
					<div class="username">{{ user.username }}</div>
					<div class="users"><img :src="user.image" :alt="user.image" /></div>
					<p>{{ user.profileDesc }}</p>
					<div className="actions">
						<base-button title="Message" @click="sendMessage"></base-button>
						<base-like :likes="user.likes" :user="user"></base-like>
					</div>
					<textarea></textarea>
				</li>
			</base-card>
		</ul>
	</section>
</template>

<script>
import BaseDialog from '../ui/BaseDialog.vue';
import BaseLike from '../ui/BaseLike.vue';

export default {
	inject: ['users'],
	components: {
		BaseDialog,
		BaseLike,
	},

	data() {
		return {
			modalIsOpen: false,
		};
	},
	computed: {
		generateKey() {
			const key = Date.now().toString();
			console.log(key);
			return key;
		},
	},
	methods: {
		toggleModal() {
			console.log('toggling modal...', this.modalIsOpen);
			this.modalIsOpen = !this.modalIsOpen;
		},
		sendMessage() {
			// add message sending logic
			this.toggleModal();
		},
	},
};
</script>

<style scoped>
h1 {
	font-size: 2rem;
	text-align: center;
	background: white;
	margin: 1rem auto;
	border-radius: 0.3rem;
	padding: 0.2rem;
	width: 20rem;
	box-shadow: 0.01rem 0.01rem 0.2rem 0.1rem rgba(142, 142, 142, 0.586);
}

ul {
	display: inline-block;
	list-style: none;
}

img {
	width: 4rem;
	border: 1px solid black;
  border-radius: 0.2rem;
  padding: 0.15rem;
  transition: all 1s;
}
img:hover {
  width: 5rem;
  box-shadow: 0.01rem 0.01rem 1rem 0.2rem rgba(196, 122, 88, 0.586);
}
textarea {
	margin-top: 0.5rem;
	height: 6rem;
	width: 15rem;
}
.modal-message {
	font-size: 1.5rem;
}
.users {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
}
.actions {
	display: flex;
	justify-content: space-between;
}

.username {
	font-size: 1.2rem;
	font-weight: 700;
}
</style>
