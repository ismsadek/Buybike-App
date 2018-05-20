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
	import { auth } from '../firebase'
	import { db } from '../firebase'
	import { dbMotosRef } from '../firebase'

	export default {
		data(){
			return {
				firstAnswer: {
					'carnet': ""
				}
			}
		},

		methods: {

			saveFirstAnswer(e){
				
				this.firstAnswer.carnet = parseInt(e.currentTarget.value);
				db.ref('users/user1').push(this.firstAnswer);

				// dbMotosRef.forEach(function(moto){
				// 	if(moto.potencia <= 47){
				// 		console.log('found')
				// 	}
				
			}	
			
		}
	}
</script>