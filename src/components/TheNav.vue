<template>
	<header>
		<nav>
			<div class="home">
				<router-link to="/">Halloween</router-link>
			</div>
			<div>
				<router-link to="/scary-stories">Scary_Stories</router-link>
				<router-link to="/trick-or-treat">Trick_or_Treat</router-link>
				<router-link to="/images-album">Evil_Images</router-link>
				<router-link to="/party-time">Party_Time</router-link>
				<router-link to="/register">Sign_Up</router-link>
			</div>
		</nav>
	</header>
</template>

<style scoped>
header {
	height: 5rem;
	width: 100%;
	background: rgb(35, 35, 35);
	padding: 0.2rem;
	box-shadow: 0.01rem 0.01rem 0.3rem 0.1rem rgba(43, 43, 43, 0.758);
}

nav {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	font-size: 1.2rem;
	font-weight: 500;
	width: 95%;
	height: 100%;
	margin: auto;
}

a {
	text-decoration: none;
	color: white;
	margin: 1rem;
	transition: all 0.5s;
  text-shadow: 0.1rem 0.1rem 0.5rem rgba(168, 168, 168, 0.586);
}

a:hover,
a:active {
	color: rgb(223, 104, 61);
  text-shadow: 0.1rem 0.1rem 0.5rem rgba(232, 223, 206, 0.586);
}

a.router-link-active {
	color: rgb(223, 104, 61);
}

.home{
  font-size: 3rem;
}
</style>
