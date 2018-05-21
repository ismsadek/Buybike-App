<template>
	<b-container>
		<h4>What's your budget?</h4><br>
		<router-link :to="{name:'thirdLink'}">
			<b-button variant="success"value="4.999"@click="saveSecondAnswer">0 - 4.999 €</b-button>
		</router-link>
		<router-link :to="{name:'thirdLink'}">
			<b-button variant="success"value="9.999"@click="saveSecondAnswer">5.000 - 9.999 €</b-button>
		</router-link>
		<router-link :to="{name:'thirdLink'}">
			<b-button variant="success"value="14.999"@click="saveSecondAnswer">10.000 - 14.999 €</b-button>
		</router-link>
		<router-link :to="{name:'thirdLink'}">
			<b-button variant="success"value="100.000"@click="saveSecondAnswer">I don´t have</b-button>
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
				answer2: {
					'presupuesto': "",
				}
			}
		},
		methods: {
			saveSecondAnswer(e){
				this.answer2.presupuesto = parseFloat(e.currentTarget.value)
				console.log(this.answer2.presupuesto)
				db.ref('users').push(this.answer2)
				console.log(dbSelectedRef.length)

				for(var n = 0; n <this.motos.length; n++){
						if(this.answer2.presupuesto === 4.999 && this.motos[n].precio >5.000){
																
							}
						}
					}

			
				
		},
		created() {
		
	  	axios.get(`https://buy-bike.firebaseio.com/selected.json`)
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