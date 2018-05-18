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
import { auth } from '../firebase'
import { db } from '../firebase'
export default {
	methods: {
			goToTest(){
				auth.signInAnonymously().catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  // ...
				});
				db.ref('users').push(auth.currentUser.uid)
				this.$router.replace({name: 'firstLink'})
			}
		}
	}
	
</script>

<style>
	
</style>