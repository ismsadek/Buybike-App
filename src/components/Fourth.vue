<template>
	<b-container fluid class="main no-padding">
		<div class="row">
			<div class="col-12 mt-5">
				<h2 class="text-center">Do you prefer it with gear switching or scooter type?</h2><br>
			</div>
		</div>
		<div class=" row justify-content-center no-padding mt-5">
		<router-link :to="{name:'fifthLink'}">
			<b-button class="ml-3 btn-lg" variant="outline-primary" value="0"@click="saveFourthAnswer1">Gears</b-button>
		</router-link>
		<router-link :to="{name:'fifthLink'}">
			<b-button class="ml-3 btn-lg" variant="outline-primary" value="1"@click="saveFourthAnswer2">Scooter</b-button>
		</router-link>
		<router-link :to="{name:'fifthLink'}">
			<b-button class="ml-3 btn-lg" variant="outline-primary" value="2"@click="saveFourthAnswer3">I don´t mind</b-button>
		</router-link>
	</div>
	<div class="container pags mt-5">
		<div class="row d-flex justify-content-end">
			<b-pagination-nav align="right" :number-of-pages="5" base-url="#" v-model="currentPage" />
		</div>
	</div>
	</b-container>
</template>

<script>
	import { auth } from '../firebase'
	import { db } from '../firebase'
	import { dbMotosRef } from '../firebase';
	import { dbUsersRef } from '../firebase';
	import { dbFilterThreeRef } from '../firebase';		
	import { dbFinalRef } from '../firebase';

	import axios from 'axios';

	
	export default {
		data(){
			return {
				currentPage: 4,
				answer4: {
					'preferencia': "",
				}
			}
		},
		methods: {
			saveFourthAnswer1(e){
				this.answer4.preferencia = parseInt(e.currentTarget.value)
				console.log(this.answer4.preferencia)	
				db.ref('users').push(this.answer4)

				for(let moto in this.cuarta){
					// console.log(this.cuarta[moto].modelo)
					
					if( this.cuarta[moto].cambio === 'Manual'){
							console.log('Se ha movido la '+ this.cuarta[moto].modelo )
							db.ref('final').push(this.cuarta[moto])

					}
				}
			}, 
			saveFourthAnswer2(e){
				this.answer4.preferencia = parseInt(e.currentTarget.value)
				console.log(this.answer4.preferencia)	
				db.ref('users').push(this.answer4)

				for(let moto in this.cuarta){
					

					if( this.cuarta[moto].cambio === 'Automático'){
							console.log('Se ha movido la scooter '+ this.cuarta[moto].modelo )
							db.ref('final').push(this.cuarta[moto])
					}
				}

			},
			saveFourthAnswer3(e){
				this.answer4.preferencia = parseInt(e.currentTarget.value)
				console.log(this.answer4.preferencia)	
				db.ref('users').push(this.answer4)

				for(let moto in this.cuarta){
						console.log('Se han movido con y sin marchas '+ this.cuarta[moto].modelo )
						db.ref('final').push(this.cuarta[moto])
					}
				}

			
		},
		created() {
		
	  	axios.get(`https://buy-bike.firebaseio.com/filter3.json`)
	    	.then(response => {
	      // JSON responses are automatically parsed.
	      this.cuarta = response.data
	      // console.log(response.data)
	      // console.log(response.data["-LD5rQR8kONWe92YGY-6"].marca)
	      
	      return this.cuarta
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
			filter3:{
				source: dbFilterThreeRef
			},
			
			final:{
				source: dbFinalRef
			}
		}
	}
</script>

<style>
	.main {
	  background-image: url("/src/assets/fondo.jpg");
	  background: cover;
	  height: 400px;
	}

	.btn {
		padding-left: 30px;
		padding-right: 30px;
	}
	h2 {
    font-family: 'Raleway', sans-serif;
  }
	
</style>