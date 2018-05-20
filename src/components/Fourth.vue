<template>
	<b-container>
		<h4>Do you prefer it with gear switching or scooter type?</h4><br>
		<router-link :to="{name:'fifthLink'}">
			<b-button variant="success" value="0"@click="saveFourthAnswer">Manual</b-button>
		</router-link>
		<router-link :to="{name:'fifthLink'}">
			<b-button variant="success" value="1"@click="saveFourthAnswer">Automático</b-button>
		</router-link>
	</b-container>
</template>

<script>
	import { auth } from '../firebase'
	import { db } from '../firebase'
	
	export default {
		data(){
			return {
				fourthAnswer: {
					'cambio': "",
				}
			}
		},
		methods: {
			saveFourthAnswer(e){
				this.fourthAnswer.cambio = parseInt(e.currentTarget.value)
				db.ref('users/user1').set(this.fourthAnswer)
			}
		}
	}
</script>