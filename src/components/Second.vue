<template>
	<b-container>
		<h4>What's your budget?</h4><br>
		<router-link :to="{name:'thirdLink'}">
			<b-button variant="success"value="0 - 4999"@click="saveSecondAnswer">0 - 4.999 €</b-button>
		</router-link>
		<router-link :to="{name:'thirdLink'}">
			<b-button variant="success"value="5000 - 9999"@click="saveSecondAnswer">5.000 - 9.999 €</b-button>
		</router-link>
		<router-link :to="{name:'thirdLink'}">
			<b-button variant="success"value="10000 - 14999"@click="saveSecondAnswer">10.000 - 14.999 €</b-button>
		</router-link>
		<router-link :to="{name:'thirdLink'}">
			<b-button variant="success"value="infinite"@click="saveSecondAnswer">I don´t have</b-button>
		</router-link>
	</b-container>
</template>

<script>
	import { auth } from '../firebase'
	import { db } from '../firebase'

	export default {
		data(){
			return {
				newUser: {
					'uid':"",
					'carnet': "",
					'presupuesto': "",
					'distancia': "",
					'preferencia':"",
					'favbrand': ""


				}
		}
	},
		methods: {
			saveSecondAnswer(e){
						// var second = e.currentTarget.value
						// console.log(second)
				this.newUser.presupuesto = e.currentTarget.value;
				console.log(this.newUser.presupuesto)
				db.ref('users').child(this.newUser.uid).set(this.newUser)
			}
		}
		
	}
</script>