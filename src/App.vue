<template>
	<the-nav></the-nav>
	<router-view></router-view>
</template>

<script>
import TheNav from './components/TheNav.vue';

export default {
	components: {
		TheNav,
	},
	data() {
		return {
			users: [ { id: 1,
					username: 'Luke',
					email: 'honey@bear.com',
					password: '123456',
					avatar: 'mummy',
					profileDesc:
						"I'm a round bear. My favorite TV show is Winnie the Pooh",
          image: 'images/mummy.jpg',
          likes: 22,
				},
				{
          id: 2,
					username: 'John',
					email: 'longBoy@long.com',
					password: '123456',
					avatar: 'girl_ghost',
					profileDesc:
						"I'm a long dog. I sit on the couch all day long. I hope I can get longer one day.",
          image: 'images/girl_ghost.jpg',
          likes: 100,
				},
				{
          id: 3,
					username: 'Lucy',
					email: 'lucy@carrots.com',
					password: '123456',
					avatar: 'vampire',
					profileDesc:
						"I can't stop eating carrots. The color is so nice and you can use them as weapons too.",
          image: 'images/vampire.jpg',
          likes: 7,
				},
				{
          id: 4,
					username: 'William',
					email: 'w@b.com',
					password: '123456',
					avatar: 'skeleton',
					profileDesc:
						'This year I will get so much candy when I go trick or treating..',
          image: 'images/skeleton.jpg',
          likes: 19,
  }],
			idCounter: 5,
		};
	},
	methods: {
		async addUser(user) {
			user.image = 'images/' + user.avatar + '.jpg';
			user.likes = 0;
			user.id = 'not yet updated in database, only locally';
			this.users.unshift(user);
			this.idCounter += 1;

			try {
				const response = await fetch(
					`https://halloween-34304-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`,
					{
						method: 'POST',
						body: JSON.stringify(user),
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);
				if (!response.ok)
					throw new Error('Something went wrong when posting a new user!');

				const { name: firebase_id } = await response.json();
				user.id = firebase_id;
				console.log('add user', user);
        console.log('current local users', this.users);
			} catch (error) {
				console.log('POST user error: ', error);
			}
		},

		async getUsers() {
			try {
				const response = await fetch(
					'https://halloween-34304-default-rtdb.asia-southeast1.firebasedatabase.app/users.json'
				);
				if (!response.ok)
					throw new Error('Something went wrong when getting users!');

				const data = await response.json();
				console.log('current users: ', data);
				for (const key in data) 
					this.users.push(data[key]);
			} catch (error) {
				console.log('Get users error:', error);
			}
		},

		async updateUserHandler(user) {
			console.log('went here...', user.firebaseId);
			try {
				const response = await fetch(
					`https://halloween-34304-default-rtdb.asia-southeast1.firebasedatabase.app/users/${user.id}.json`,
					{
						method: 'PUT',
						body: JSON.stringify(user),
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);
				if (!response.ok)
					throw new Error('Something went wrong when updating a new user!');
			} catch (error) {
				console.log('Updating user error: ', error);
			}
		},
		updateUserLikesHandler(user) {
			const foundUser = this.users.find((u) => u.id === user.id);
      foundUser.likes += 1;
			this.updateUserHandler(foundUser);
		},
	},
	mounted() {
		this.getUsers();
	},
	provide() {
		return {
			users: this.users,
			addUser: this.addUser,
			updateUserLikes: this.updateUserLikesHandler,
		};
	},
};
</script>

<style>
body {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	background: rgb(255, 198, 174);
	color: rgb(36, 35, 35);
	margin: 0;
	background: url('/public/images/witchs-house.jpg');
	background-size: cover;
}

p {
	margin: 0.5rem;
}
</style>
