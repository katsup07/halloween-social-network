<template>
	<div class="btn">
		<button>{{ title || 'Click' }}</button>
    <slot></slot>
	</div>
</template>

<script>
export default{
  props:{
    title:{
      type: String,
    }
  }
}
</script>

<style scoped>
button{
  font-weight: 600;
  border: none;
  background: rgb(255, 115, 0);
  padding: 0.3rem 0.8rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 1s;
}

button:hover{
  background: rgb(46, 46, 46);
  color: white;
}

</style>
