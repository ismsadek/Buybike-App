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
					'carnet': "",
				}
			}
		},

		methods: {

			saveFirstAnswer(e){
				this.answer1.carnet = parseInt(e.currentTarget.value)
				console.log(this.answer1.carnet)
				// var uid = auth.currentUser.uid
				dbUsersRef.push(this.answer1)
					
				for(var n = 0; n <= this.motos.length; n++){
					if(this.answer1.carnet === 1){
							console.log('Carnet A')
							dbSelectedRef.push(this.motos[n])

					} else if(this.motos[n].potencia <=47 && this.answer1.carnet === 2){
							console.log('Carnet A2')
							dbSelectedRef.push(this.motos[n])

					}	else if(this.motos[n].cilindrada <=125 && this.answer1.carnet === 3){
							console.log('Carnet A1')
							dbSelectedRef.push(this.motos[n])

					} else if(this.answer1.carnet === 4 && this.motos[n].cilindrada <=125 ){
							console.log('Carnet B')
							dbSelectedRef.push(this.motos[n])

					} else if(this.motos[n].cilindrada <=50 && this.answer1.carnet === 5 ){
							console.log('Carnet AM')
							dbSelectedRef.push(this.motos[n])
					}
				}  

				}
		// 		for(let moto in this.motos){
		// 			console.log(this.motos[moto].potencia)
					
		// 			if(this.answer1.carnet === 1){
		// 					console.log('Se han pusheado todas')
		// 					db.ref('selected').push(this.motos[moto])

		// 			} else if(this.answer1.carnet === 2 && this.motos[moto].potencia <= 47 ){
		// 					console.log('Se han pusheado las menores de 47cv ')
		// 					db.ref('selected').push(this.motos[moto])

		// 			} else if(this.answer1.carnet === 3 && this.motos[moto].potencia <= 15){
		// 					console.log('Se han pusheado las menores de 15cv')
		// 					db.ref('selected').push(this.motos[moto])

		// 			} else if(this.answer1.carnet === 5 && this.motos[moto].cilindrada <= 50){
		// 					console.log('Se han eliminado las menores de 50cc')
		// 					db.ref('selected').push(this.motos[moto])
		// 			} else if(this.answer1.carnet === 5 && this.motos[moto].cilindrada <= 50){
		// 					console.log('Se han eliminado las menores de 50cc')
		// 					db.ref('selected').push(this.motos[moto]) 
		// 			}
				
		// 	 }
		// 	}
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
			selected:{
				source: dbSelectedRef
			}
		
		}	
			
		
	}
</script>