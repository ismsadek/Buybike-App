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
				console.log(this.answer4.preferencia)	
				db.ref('users').push(this.answer4)

				for(let moto in this.selected){
					// console.log(this.selected[moto].modelo)
					
					if(this.answer4.preferencia === 0 && this.selected[moto].cambio === 'Automático'){
							console.log('Se ha elminado la scooter '+ this.selected[moto].modelo )
							db.ref('selected').child(moto).remove()

					} else if(this.answer4.preferencia === 1 && this.selected[moto].cambio === 'Manual'){
							console.log('Se han elminado la de marchas '+ this.selected[moto].modelo )
							db.ref('selected').child(moto).remove()
					}

			
				 }

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