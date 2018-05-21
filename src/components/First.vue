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
		<div v-for="moto in selected">
			{{moto.modelo}}
		</div>

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
				// this.answer1.userUid = auth.currentUser.uid
				dbUsersRef.push(this.answer1)
					
				for(var n = 0; n <this.motos.length; n++){
					if(this.answer1.carnet === 1){
							dbSelectedRef.push(this.motos[n])
					} else if(this.motos[n].potencia <=47 && this.answer1.carnet === 2){
							dbSelectedRef.push(this.motos[n])
					}	else if(this.motos[n].cilindrada <=125 && this.answer1.carnet === 3){
							dbSelectedRef.push(this.motos[n])
					} else if(this.answer1.carnet === 4 && this.motos[n].cilindrada <=125 ){
							dbSelectedRef.push(this.motos[n])
					} else if(this.motos[n].cilindrada <=50 && this.answer1.carnet === 5 ){
							dbSelectedRef.push(this.motos[n])
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
			selected:{
				source: dbSelectedRef
			}
		
		}	
			
		
	}
</script>