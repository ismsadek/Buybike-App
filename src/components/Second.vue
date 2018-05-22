<template>
	<b-container>
		<h4>What's your budget?</h4><br>
		<router-link :to="{name:'thirdLink'}">
			<b-button class="ml-3" variant="outline-primary"value="4.999"@click="saveSecondAnswer1">0 - 4.999 €</b-button>
		</router-link>
		<router-link :to="{name:'thirdLink'}">
			<b-button class="ml-3" variant="outline-primary"value="9.999"@click="saveSecondAnswer2">5.000 - 9.999 €</b-button>
		</router-link>
		<router-link :to="{name:'thirdLink'}">
			<b-button class="ml-3" variant="outline-primary"value="14.999"@click="saveSecondAnswer3">10.000 - 14.999 €</b-button>
		</router-link>
		<router-link :to="{name:'thirdLink'}">
			<b-button class="ml-3" variant="outline-primary"value="100.000"@click="saveSecondAnswer4">I don´t have</b-button>
		</router-link>
	</b-container>
</template>

<script>
	import { auth } from '../firebase'
	import { db } from '../firebase'
	import { dbMotosRef } from '../firebase';
	import { dbUsersRef } from '../firebase';
	import { dbFilterOneRef } from '../firebase';
	import { dbFilterTwoRef } from '../firebase';	

	import axios from 'axios';

	export default {
		data(){
			return {
				answer2: {
					'presupuesto': "",
				},
				
			}
		},
		methods: {
			saveSecondAnswer1(e){
				this.answer2.presupuesto = parseFloat(e.currentTarget.value)
				console.log(this.answer2.presupuesto)
				db.ref('users').push(this.answer2)
				
				// console.log("soy marca  :" + this.selections["-LD5rQR8kONWe92YGY-7"].marca)
				for(let selected in this.selections){

					if(this.selections[selected].precio <5.000){
							
							console.log("Las mayores de 5.000 pavos fuera")
							dbFilterTwoRef.push(this.selections[selected])
						}
				}
			}, 

			saveSecondAnswer2(e){
				this.answer2.presupuesto = parseFloat(e.currentTarget.value)
				console.log(this.answer2.presupuesto)
				db.ref('users').push(this.answer2)
				
				// console.log("soy marca  :" + this.selections["-LD5rQR8kONWe92YGY-7"].marca)
				for(let selected in this.selections){

					if(this.selections[selected].precio <=10.000){
							
							console.log("Las mayores de 10.000 pavos fuera")
							dbFilterTwoRef.push(this.selections[selected])
						}
				}
			},
			saveSecondAnswer3(e){
				this.answer2.presupuesto = parseFloat(e.currentTarget.value)
				console.log(this.answer2.presupuesto)
				db.ref('users').push(this.answer2)
				
				// console.log("soy marca  :" + this.selections["-LD5rQR8kONWe92YGY-7"].marca)
				for(let selected in this.selections){

					if(this.selections[selected].precio <=15.000){
							
							console.log("Las mayores de 15.000 pavos fuera")
							dbFilterTwoRef.push(this.selections[selected])
						}
				}
			},
			saveSecondAnswer4(e){
				this.answer2.presupuesto = parseFloat(e.currentTarget.value)
				console.log(this.answer2.presupuesto)
				db.ref('users').push(this.answer2)
				
				// console.log("soy marca  :" + this.selections["-LD5rQR8kONWe92YGY-7"].marca)
				for(let selected in this.selections){							
							console.log(" Todas dentro ")
							dbFilterTwoRef.push(this.selections[selected])
						}
				}
			
			
				
		},
		created() {
		
	  	axios.get(`https://buy-bike.firebaseio.com/filter1.json`)
	    	.then(response => {
	      // JSON responses are automatically parsed.
	      this.selections = response.data
	      // console.log(response.data)
	      // console.log(response.data["-LD5rQR8kONWe92YGY-6"].marca)
	      
	      return this.selections
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
			},
			filter2:{
				source: dbFilterTwoRef
			}
		}
	}
		
	
</script>