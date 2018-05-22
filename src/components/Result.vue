<template>
	<b-container>
		<h4>The motorbikes that we have found based on your answers are the next</h4>
		<b-button variant="success"> Find them! </b-button><br><br>
		<b-button variant="success"@click="clearUsersDb"> Clear list! </b-button><br>
		<!-- <h5>Choose one and see the nearest workshop!</h5> -->
		
		<div v-for="moto in selected">
			<ul>
				<li>{{moto.modelo}}</li>
				<li>{{moto.precio}}</li>
				<li>{{moto.potencia}}</li>
				<li>{{moto.cilindrada}}</li>
			</ul>
		</div>
		
		
		
		
	</b-container>

</template>

<script>
	import { dbMotosRef } from '../firebase'
	import { dbUsersRef } from '../firebase'
	import { dbSelectedRef } from '../firebase'

	import { db } from '../firebase';

	



	export default {
		data(){
			return{
				motos: [],
				users: [],
				errors: []
			}
		},
		methods : {
			clearUsersDb(){
				dbUsersRef.remove();
				dbSelectedRef.remove();
			},
		// 	findBikes(){

		// 		// for(var i=0; i<this.users.length; i++){
		// 		// 	if(this.users[i].)
		// 		// }

	    
		},
			
		
	     
		
		firebase: {
			motos: {
				source: dbMotosRef
			},
			users: {
				source: dbUsersRef
			},
			selected:{
				source: dbSelectedRef
			}
		}
	}
	
		
	
</script>

<style>
	
</style>