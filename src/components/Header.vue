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
		  	<b-btn variant="primary"@click="goToTest">Start the test</b-btn>
		</b-jumbotron>
	</b-container>
</template>

<script>

export default {
	methods: {
			goToTest(){
				this.$router.replace({name: 'firstLink'})
			}
		}
	}
	
</script>

<style>
	
</style>