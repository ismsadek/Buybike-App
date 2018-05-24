<template>
	<b-container fluid class="main no-padding">
			<div class="col-12 mt-5">
				<h2 class="text-center">What's your driving license?</h2><br>
			</div>
		</div>
		<div class="text-center no-padding mt-5">
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
		<div class="container pags mt-5">
			<div class="row d-flex justify-content-end">
				<b-pagination-nav align="right" :number-of-pages="5" base-url="#" v-model="currentPage" />
			</div>
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
				currentPage: 1,
				motos: [],
				errors: [],
				answer1: {
					'carnet': "",
				}
			}
		},

		methods: {

			saveFirstAnswer1(e){	// Saving the first answer with the button value

				this.answer1.carnet = parseInt(e.currentTarget.value)
				console.log(this.answer1.carnet)
				dbUsersRef.push(this.answer1)

				for(let moto in this.motos){		// iterating inside the database 
					console.log("Todas se añaden")
					dbFilterOneRef.push(this.motos[moto])
				}
			},

		

		saveFirstAnswer2(e){

				this.answer1.carnet = parseInt(e.currentTarget.value)
				console.log(this.answer1.carnet)
				dbUsersRef.push(this.answer1)
					
				for(let moto in this.motos){
					if(this.motos[moto].potencia <= 47){
						console.log("Las mayores de 47cv se eliminan")
						dbFilterOneRef.push(this.motos[moto])
					}
				}

		},
		saveFirstAnswer3(e){
			
			this.answer1.carnet = parseInt(e.currentTarget.value)
			console.log(this.answer1.carnet)
			dbUsersRef.push(this.answer1)
				
			for(let moto in this.motos){
				if(this.motos[moto].potencia <= 15 || this.motos[moto].cilindrada <= 125){
					console.log("Las mayores de 15cv o 125cc se eliminan")
					dbFilterOneRef.push(this.motos[moto])
				}
			}
		},

		saveFirstAnswer4(e){
			
			this.answer1.carnet = parseInt(e.currentTarget.value)
			console.log(this.answer1.carnet)
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
			// Calling Firebase with axios request
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
	  background: cover;
	  height: 400px;
	}

	.btn {
		padding-left: 30px;
		padding-right: 30px;
	}
	h2 {
    font-family: 'Raleway', sans-serif;
  }
	
</style>