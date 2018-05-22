<template>
	<b-container>
		<h4>How many kilometres will you do daily?</h4><br>
		<router-link :to="{name:'fourthLink'}">
			<b-button class="ml-3" variant="outline-primary"@click="saveThirdAnswer1" value="10">0 - 10km</b-button>
		</router-link>
		<router-link :to="{name:'fourthLink'}">
			<b-button class="ml-3" variant="outline-primary"@click="saveThirdAnswer2" value="20">10 - 20km</b-button>
		</router-link>
		<router-link :to="{name:'fourthLink'}">
			<b-button class="ml-3" variant="outline-primary"@click="saveThirdAnswer3"value="30">More than 20km</b-button>
		</router-link>
		<router-link :to="{name:'fourthLink'}">
			<b-button class="ml-3" variant="outline-primary"@click="saveThirdAnswer4"value="1">For weekend routes</b-button>
		</router-link>
	</b-container>
</template>

<script>
	import { auth } from '../firebase'
	import { db } from '../firebase'
	import { dbMotosRef } from '../firebase';
	import { dbUsersRef } from '../firebase';
	import { dbFilterTwoRef } from '../firebase';
	import { dbFilterThreeRef } from '../firebase';					

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
			saveThirdAnswer1(e){

				this.answer3.distancia = parseInt(e.currentTarget.value)
				console.log(this.answer3.distancia)	
				db.ref('users').push(this.answer3)
				

				for(let moto in this.tercera){
					// console.log(this.tercera[moto])
					if(this.tercera[moto].cilindrada <=125){
							console.log('Se han elminado las mayores de 125cc')
							dbFilterThreeRef.push(this.tercera[moto])
					}
				}
			},
			saveThirdAnswer2(e){

				this.answer3.distancia = parseInt(e.currentTarget.value)
				console.log(this.answer3.distancia)	
				db.ref('users').push(this.answer3)
				

				for(let moto in this.tercera){
					// console.log(this.tercera[moto].key)
					if(this.tercera[moto].cilindrada >= 124 && this.tercera[moto].cilindrada <= 400){
							console.log('Se han elminado las menores de 125cc y mas de 400cc')
							 dbFilterThreeRef.push(this.tercera[moto])
						}
				}
			},
			saveThirdAnswer3(e){

				this.answer3.distancia = parseInt(e.currentTarget.value)
				console.log(this.answer3.distancia)	
				db.ref('users').push(this.answer3)
				

				for(let moto in this.tercera){
					// console.log(this.tercera[moto])
					if(this.tercera[moto].cilindrada > 400){
							console.log('Se han movido las mayores de 400cc')
							dbFilterThreeRef.push(this.tercera[moto])
						}
				}
			},
			saveThirdAnswer4(e){

				this.answer3.distancia = parseInt(e.currentTarget.value)
				console.log(this.answer3.distancia)	
				db.ref('users').push(this.answer3)
				

				for(let moto in this.tercera){
					// console.log(this.tercera[moto])
					if(this.tercera[moto].cilindrada >= 500){
							console.log('Se han movido las mayores de 400cc')
							dbFilterThreeRef.push(this.tercera[moto])
						}
				}
			}
	},
	created() {
		
	  	axios.get(`https://buy-bike.firebaseio.com/filter2.json`)
	    	.then(response => {
	      // JSON responses are automatically parsed.
	      this.tercera = response.data
	      // console.log(response.data)
	      // console.log(response.data["-LD5rQR8kONWe92YGY-6"].marca)
	      
	      return this.tercera
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
			
			filter2:{
				source: dbFilterTwoRef
			},
			filter3:{
				source: dbFilterThreeRef
			}
		}
	}
</script>