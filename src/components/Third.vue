<template>
	
		<b-container>
  		<h4>How many kilometres will you do daily?</h4><br>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success"@click="saveThirdAnswer" value="10">0 - 10km</b-button>
  		</router-link>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success"@click="saveThirdAnswer" value="20">10 - 20km</b-button>
  		</router-link>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success"@click="saveThirdAnswer"value="30">More than 20km</b-button>
  		</router-link>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success"@click="saveThirdAnswer"value="1">For weekend routes</b-button>
  		</router-link>
		</b-container>
</template>

<script>
	import { auth } from '../firebase'
	import { db } from '../firebase'
	import { dbMotosRef } from '../firebase';
	import { dbUsersRef } from '../firebase';
	import { dbSelectedRef } from '../firebase';	

	import axios from 'axios';


	export default {
		data(){
			return {
				answer3: {
					'distancia': "",
				}
			}
		},
		methods: {
			saveThirdAnswer(e){

				this.answer3.distancia = parseInt(e.currentTarget.value)
				console.log(this.answer3.distancia)	
				db.ref('users').push(this.answer3)
				

				for(let moto in this.selected){
					console.log(this.selected[moto])
					
					if(this.answer3.distancia === 1 && this.selected[moto].cilindrada < 500){
							console.log('Se han eliminado las menores de 500cc')
							db.ref('selected').child(moto).remove()
					} else if(this.answer3.distancia === 10 && this.selected[moto].cilindrada >125){
							console.log('Se han elminado las mayores de 125cc')
							db.ref('selected').child(moto).remove()

					} else if(this.answer3.distancia === 20 && (this.selected[moto].cilindrada < 124 || this.selected[moto].cilindrada > 400)){
							console.log('Se han elminado las menores de 125cc y las mayores de 400cc ')
							db.ref('selected').child(moto).remove()

					} else if(this.answer3.distancia === 30 && this.selected[moto].cilindrada < 400){
							console.log('Se han eliminado las menores de 400cc')
							db.ref('selected').child(moto).remove()

					} 
				}
			
		
		// created() {
		
	 //  	axios.get(`https://buy-bike.firebaseio.com/selected.json`)
	 //    	.then(response => {
	 //      // JSON responses are automatically parsed.
	 //      this.selected = response.data	      
	 //      return this.selected
	 //      })
		//     .catch(e => {
		//       this.errors.push(e)
		//     })
			    
		 }
	},
		firebase: {
			motos: {
				source: dbMotosRef
			},
			users: {
				source: dbUsersRef
			},
			selected:{
				source: dbSelectedRef,
				
			}
		}
	}
</script>