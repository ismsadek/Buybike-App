<template>
	<b-container fluid>
		<b-jumbotron fluid>
		  <template slot="header">
		    Buybike
		  </template>
		  <template slot="lead">
		    The app which helps you to choose the best option!
		  </template>
		  <hr class="my-4">
		  <router-link :to="{name:'firstLink'}">
		  	<b-btn variant="primary" href="#">Start the test</b-btn>
			</router-link>
		  <b-btn variant="success" href="#">Other thing</b-btn>
		</b-jumbotron>
	</b-container>
</template>

<script>

export default {

	
}
</script>