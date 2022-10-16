<template>
<div class="backdrop"></div>
	<dialog open>
		<header>
			<slot name="header">
				<h2>{{ title }}</h2>
			</slot>
		</header>
		<section>
			<slot></slot>
		</section>
		<menu><slot name="actions"></slot></menu>
	</dialog>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			required: false,
		},
	},
};
</script>

<style scoped>

.backdrop{
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
}
menu{
  text-align: center;
  margin: 0;
  padding: 0;
}
h2{
  font-size: 3rem;
}
</style>
