<template>
	<b-container>
		<h4>What's your driving license?</h4><br>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="1"@click="saveFirstAnswer">A</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="2"@click="saveFirstAnswer">A2</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="3"@click="saveFirstAnswer">A1</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="4"@click="saveFirstAnswer">B</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="5"@click="saveFirstAnswer">AM</b-button>
		</router-link>

	</b-container>
	
</template>

<script>
	import { auth } from '../firebase';
	import { dbMotosRef } from '../firebase';
	import { dbUsersRef } from '../firebase';
	import { dbSelectedRef } from '../firebase';
	import { db } from '../firebase';

	import axios from 'axios';


	export default {
		data(){
			return {
				motos: [],
				errors: [],
				answer1: {
					'carnet': null,
				}
			}
		},

		methods: {

			saveFirstAnswer(e){
				this.answer1.carnet = parseInt(e.currentTarget.value)
				// this.answer1.userUid = auth.currentUser.uid
				dbUsersRef.push(this.answer1.carnet)
					
					
				for(var n = 0; n <this.motos.length; n++){
					if(this.answer1.carnet === 1 && this.motos[n].potencia>0){
						//Mete en una carpeta moto.potencia>=0
						console.log('carne A')
						db.ref('selected').push(this.motos[n]);
					} else if(this.answer1.carnet === 2 && this.motos[n].potencia <=47){
						//Mete en uan carpeta moto.potencia <=47
						console.log(this.moto[n].modelo)
						db.ref('selected').push(this.motos[n]);
					} else if((this.answer1.carnet === 3 || this.answer1.carnet === 4) && this.motos[n].potencia <= 15){
						//Mete en una carpeta moto.potencia <=15
						db.ref('selected').push(this.motos[n]);
					} else {
						// Mete en una carpeta moto.cilindrada <= 50
						db.ref('selected').push(this.motos[n]);
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
			    
			  axios.get(`https://buy-bike.firebaseio.com/users.json`)
		    	.then(response => {
		      // JSON responses are automatically parsed.
		      this.users = response.data
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
			selected:{
				source: dbSelectedRef
			}
		
		}	
			
		
	}
</script>