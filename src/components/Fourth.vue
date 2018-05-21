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
	import { dbMotosRef } from '../firebase';
	import { dbUsersRef } from '../firebase';
	import { dbSelectedRef } from '../firebase';

	
	export default {
		data(){
			return {
				answer4: {
					'preferencia': "",
				}
			}
		},
		methods: {
			saveFourthAnswer(e){
				this.answer4.preferencia = parseInt(e.currentTarget.value)
				// var uid = JSON.stringify(this.answer4.userUid)
				db.ref('users').push(this.answer4)
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