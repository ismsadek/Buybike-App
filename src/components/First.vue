<template>
	<b-container>
		<h4>What's your driving license?</h4><br>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="A"@click="saveFirstAnswer">A</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="A2"@click="saveFirstAnswer">A2</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="A1"@click="saveFirstAnswer">A1</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="B"@click="saveFirstAnswer">B</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="AM"@click="saveFirstAnswer">AM</b-button>
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
			};
		},

		methods: {

			saveFirstAnswer(e){
				// var first = e.currentTarget.value
				// console.log(first)
				this.newUser.uid = auth.currentUser.uid;
				this.newUser.carnet = e.currentTarget.value;
				db.ref('users').child(this.newUser.uid).set(this.newUser)
			}
			
		}
	}
</script>