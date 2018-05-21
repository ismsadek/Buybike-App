<template>
	
		<b-container>
  		<h4>How many kilometres will you do daily?</h4><br>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success"@click="saveThirdAnswer" value="10">0 - 10km</b-button>
  		</router-link>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success"@click="saveThirdAnswer" value="15">10 - 15km</b-button>
  		</router-link>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success"@click="saveThirdAnswer"value="30">More than 15km</b-button>
  		</router-link>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success"@click="saveThirdAnswer"value="1">Just weekends</b-button>
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
				answer3: {
					'distancia': "",
				}
			}
		},
		methods: {
			saveThirdAnswer(e){
						// var third = e.currentTarget.value
						// console.log(third)
				this.answer3.distancia = parseInt(e.currentTarget.value)
				// var uid = JSON.stringify(this.answers.userUid)
				db.ref('users').push(this.answer3)
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