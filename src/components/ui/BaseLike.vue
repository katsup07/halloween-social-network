<template>
	<button class="like-btn"  @click="incrementLike"><i class="fa fa-heart"></i>{{ likes }}</button>
</template>

<script>
export default {
   inject: ['updateUserLikes'],
   props: ['user', 'likes'],
  methods: {
    incrementLike(){
      console.log('incrementing like...', this);
      this.updateUserLikes(this.user);
    }
  },
};
</script>

<style scoped>
.fa {
	margin-right: 0.2rem;
}
button.like-btn {
	border: none;
	font-size: 1.1rem;
	transition: all 0.5s;
}

button:hover {
	color: rgb(255, 60, 0);
	font-size: 1.5rem;
  cursor: pointer;
}
</style>
