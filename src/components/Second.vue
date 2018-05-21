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
				// var uid = JSON.stringify(this.answers.userUid)
				db.ref('users').push(this.answer2)
				// for(var n = 0; n <this.motos.length; n++){
				// 	if(this.answer2.presupuesto === 4.999){
						
				// 	}
				// }
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
				source: dbSelectedRef
			}
		}
		
	}
</script>