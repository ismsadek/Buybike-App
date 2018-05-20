<template>
	<b-container fluid>
		<b-jumbotron fluid  header="Buybike" lead="The app which helps you to choose the best option!">
		 <!--  <img src="../assets/logo_pag.png" alt="logo" class="main-logo">		  --> 
		  	<b-btn variant="primary"@click="goToTest">Start now!</b-btn>
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
				// db.ref('users').push(auth.currentUser.uid)
				this.$router.replace({name: 'firstLink'})
			}
		}
	}
	
</script>

<style>
	
/*.main-logo {
	position: absolute;
	width: 5%;
	margin-left: 10px;
}
*/
</style>