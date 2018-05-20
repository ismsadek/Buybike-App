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

	export default {
		data(){
			return {
				thirdAnswer: {
					'distancia': "",
				}
			}
		},
		methods: {
			saveThirdAnswer(e){
						// var third = e.currentTarget.value
						// console.log(third)
				this.thirdAnswer.distancia = parseInt(e.currentTarget.value)
				db.ref('users/user1').set(this.thirdAnswer)
			}
		}
	}
</script>