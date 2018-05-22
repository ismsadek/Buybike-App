<template>
	<b-container fluid class="main">
		<div class=" row">
			<div class="col-6">
			<h4>What's your driving license?</h4><br>
			</div>
		</div>
		<div class=" row justify-content-center">
			<router-link :to="{name:'secondLink'}">
				<b-button  class="ml-3 btn-lg" variant="outline-primary"value ="1"@click="saveFirstAnswer1">A</b-button>
			</router-link>
			<router-link :to="{name:'secondLink'}">
				<b-button btn-lg class="ml-3 btn-lg" variant="outline-primary"value ="2"@click="saveFirstAnswer2">A2</b-button>
			</router-link>
			<router-link :to="{name:'secondLink'}">
				<b-button class="ml-3 btn-lg" variant="outline-primary"value ="3"@click="saveFirstAnswer3">A1</b-button>
			</router-link>
			<router-link :to="{name:'secondLink'}">
				<b-button class="ml-3 btn-lg" variant="outline-primary"value ="4"@click="saveFirstAnswer3">B</b-button>
			</router-link>
			<router-link :to="{name:'secondLink'}">
				<b-button class="ml-3 btn-lg" variant="outline-primary"value ="5"@click="saveFirstAnswer4">AM</b-button>
			</router-link>
		</div>

		

	</b-container>
	
</template>

<script>
	import { auth } from '../firebase';
	import { dbMotosRef } from '../firebase';
	import { dbUsersRef } from '../firebase';
	import { dbFilterOneRef } from '../firebase';
	import { db } from '../firebase';

	import axios from 'axios';


	export default {
		data(){
			return {
				motos: [],
				errors: [],
				answer1: {
					'carnet': "",
				}
			}
		},

		methods: {

			saveFirstAnswer1(e){
				this.answer1.carnet = parseInt(e.currentTarget.value)
				console.log(this.answer1.carnet)
				// var uid = auth.currentUser.uid
				dbUsersRef.push(this.answer1)
					
				for(let moto in this.motos){
					console.log("Todas se van")
					dbFilterOneRef.push(this.motos[moto])
				}
			},

		

		saveFirstAnswer2(e){
				this.answer1.carnet = parseInt(e.currentTarget.value)
				console.log(this.answer1.carnet)
				// var uid = auth.currentUser.uid
				dbUsersRef.push(this.answer1)
					
				for(let moto in this.motos){

					if(this.motos[moto].potencia <= 47){
							
						console.log("Las mayores de 47cv se van")
						dbFilterOneRef.push(this.motos[moto])
					}
				}

		},
		saveFirstAnswer3(e){
			this.answer1.carnet = parseInt(e.currentTarget.value)
			console.log(this.answer1.carnet)
			// var uid = auth.currentUser.uid
			dbUsersRef.push(this.answer1)
				
			for(let moto in this.motos){

				if(this.motos[moto].potencia <= 15 || this.motos[moto].cilindrada <= 125){
						
					console.log("Las mayores de 15cv se van")
					dbFilterOneRef.push(this.motos[moto])
				}
			}

		},
		saveFirstAnswer4(e){
			this.answer1.carnet = parseInt(e.currentTarget.value)
			console.log(this.answer1.carnet)
			// var uid = auth.currentUser.uid
			dbUsersRef.push(this.answer1)
				
			for(let moto in this.motos){

				if( this.motos[moto].cilindrada <= 50){
						
					console.log("Las mayores de 50cc se van")
					dbFilterOneRef.push(this.motos[moto])
				}
			}

		}

	},
		created() {
			
	  	axios.get(`https://buy-bike.firebaseio.com/motos.json`)
	    	.then(response => {
	      // JSON responses are automatically parsed.
	      this.motos = response.data
	      })
		    .catch(e => {
		      this.errors.push(e)
		    })
			    
		},

		firebase: {
			motos: {
				source: dbMotosRef
			},
			users: {
				source: dbUsersRef
			},
			filter1:{
				source: dbFilterOneRef
			}
		
		}
		
	}
</script>

<style>

	.main {
	  background-image: url("/src/assets/fondo.jpg");
	  height: 500px;
	  padding: 10%;


	}
</style>