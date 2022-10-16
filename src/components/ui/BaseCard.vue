<template>
	<div :class="['card', { bigCard: applyBigCard }]"><slot></slot></div>
</template>
<script>
export default {
	props: ['applyBigCard'],
};
</script>

<style scoped>
.card {
	background: white;
	margin: auto;
	width: 17rem;
	height: 12rem;
	padding: 1rem;
	border-radius: 0.3rem;
	box-shadow: 0.01rem 0.01rem 0.2rem 0.1rem rgba(142, 142, 142, 0.586);
	overflow: auto;
}

.bigCard {
	margin-top: 1rem;
	width: 25rem;
	height: 24rem;
}

/* width */
::-webkit-scrollbar {
  width: 0.5rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
