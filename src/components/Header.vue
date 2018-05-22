<template>
	<b-container fluid>
		<b-jumbotron fluid class="jumbo"  header="Buybike" lead="The app which helps you to choose the best option!">
		  <b-btn variant="outline-primary"@click="goToTest">Try now!</b-btn>
		</b-jumbotron>
	</b-container>
</template>

<script>
import { auth } from '../firebase'
import { db } from '../firebase'



export default {
	data(){
		return{
		}
	},
	methods: {
			goToTest(){
				auth.signInAnonymously().catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  // ...
				});
				// this.answers.userUid = auth.currentUser.uid
				// var uid = JSON.stringify(this.answers.userUid)
				// db.ref('users').push(this.answers)
				this.$router.replace({name: 'firstLink'})
			}
		},
		
	}
	
</script>

<style>

.jumbo {
	background-color: #012744;
	color: white;
}
	
/*.main-logo {
	position: absolute;
	width: 5%;
	margin-left: 10px;
}
*/
</style>