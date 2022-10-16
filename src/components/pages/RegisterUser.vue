<template>
	<section>
    <base-dialog v-if="modalIsOpen">
			<template #header><p class="modal-message">Sucessfully registered!</p></template>
			<template v-slot:actions>
				<base-button @click="toggleModal" title="Ok"></base-button>
			</template>
		</base-dialog>
		<base-card :applyBigCard="true">
			<form @submit="handleSubmit">
				<div class="input-container">
					<div><label for="name" class="form-label">Username</label></div>
					<input
						type="text"
						class="form-control"
						id="name"
						minlength="3"
						maxlength="30"
						v-model="enteredUsername"
						required />
				</div>
				<div class="input-container">
					<div><label for="email" class="form-label">Email</label></div>
					<input
						type="email"
						class="form-control"
						id="email"
						minlength="3"
						maxlength="50"
						v-model="enteredEmail"
						required />
				</div>
				<div class="input-container">
					<div><label for="password" class="form-label">Password</label></div>
					<input
						type="password"
						class="form-control"
						id="password"
						minlength="6"
						maxlength="20"
						v-model="enteredPassword"
						required />
				</div>
				<div class="input-container">
					<div><label for="avatar" class="form-label">Avatar</label></div>
					<select name="avatar" id="avatar" v-model="enteredAvatar" required>
						<option value="">--- options ---</option>
						<option value="girl_ghost">ghost</option>
						<option value="witch">witch</option>
						<option value="vampire">vampire</option>
						<option value="jack">jack-o-lantern</option>
						<option value="skeleton">skeleton</option>
						<option value="mummy">mummy</option>
						<option value="reaper">grim reaper</option>
					</select>
				</div>
				<div class="input-container">
					<div><label for="profile" class="form-label">Profile</label></div>
					<textarea
						type="text"
						class="form-control"
						id="profile"
						maxlength="255"
						v-model="enteredProfile"
						required />
				</div>
				<div class="input-container">
					<input
						type="checkbox"
						class="form-check-input"
						id="exampleCheck1"
						v-model="agreeToTos"
						required />
					<label class="form-label" for="exampleCheck1"
						>Agree to the terms of service</label
					>
				</div>
				<base-button title="Sign Up" type="submit" class="btn btn-primary"
					></base-button
				>
			</form>
		</base-card>
	</section>
</template>
<script>
  import BaseDialog from '../ui/BaseDialog.vue';

export default {

	inject: ['addUser'],
  components: {
    BaseDialog,
  },
	data() {
		return {
      modalIsOpen: false,
			enteredUsername: '',
			enteredEmail: '',
			enteredPassword: '',
			enteredProfile: '',
			enteredAvatar: '',
			agreeToTos: false,
		};
	},
	methods: {
		handleSubmit(e) {
			e.preventDefault();
			console.log('handling submit...');
			console.log(
				this.enteredUsername,
				this.enteredEmail,
				this.enteredPassword,
				this.enteredProfile,
				this.avatar,
				this.agreeToTos
			);
			if (
				this.enteredUsername.trim() !== '' &&
				this.enteredPassword.trim() !== ''
			)
				console.log('submitting form...');
			this.addUser({
				username: this.enteredUsername,
				email: this.enteredEmail,
        password: this.password,
				profileDesc: this.enteredProfile,
				avatar: this.enteredAvatar,
        agreeToTos: this.agreeToTos,
			});

      this.enteredUsername = '';
			this.enteredEmail = '';
			this.enteredPassword = '';
			this.enteredProfile = '';
			this.enteredAvatar = '';
			this.agreeToTos = false;

      this.toggleModal();
		},
    toggleModal(){
      this.modalIsOpen = !this.modalIsOpen
    }
	},
};
</script>

<style scoped>
section {
	margin: 0.3rem;
	display: flex;
	justify-content: center;
	font-size: 1rem;
}

form {
	min-height: 13rem;
}

input.form-control, textarea.form-control {
	border: 1px solid rgba(8, 8, 8, 0.356);
	border-radius: 0.3rem;
	padding: 0.2rem;
	width: 20rem;
	transition: all 1s;
}

input:focus, textarea:focus{
  background: rgb(177, 181, 255);
  outline: rgba(214, 214, 214, 0.586) solid 2px;
}

.input-container {
	margin-bottom: 0.3rem;
}

select {
	background: rgb(0, 0, 0);
	color: white;
	padding: 0.3rem;
	border-radius: 0.3rem;
	font-weight: 500;
}

textarea {
  width: 20rem;
  height: 5rem;
  padding: 0.3rem
}
</style>
