<template>
	<div class="container">
		<h5>The motorbikes that we have found based on your preferences are the next: </h5>
		<!-- <b-button variant="outline-success"@click="findThem"> Find them! </b-button><br><br> -->
		<router-link :to="{name:'homeLink'}">
		<b-btn  v-b-popover.hover.focus="'Clear everything!'" variant="outline-danger"@click="clearUsersDb" id="clear"> Clear </b-btn><br><br>
		</router-link>

		<!-- <h5>Choose one and see the nearest workshop!</h5> -->
		<!-- <div v-for="user in users">
			{{user.carnet}}
			{{user.presupuesto}}
			{{user.distancia}}
			{{user.preferencia}}
			
		</div> -->
		<div class="container">
			<div class="row">
			<div class="card-group pt-2 pb-2 col-sm-3 col-md-4" v-for="moto in final">
				<div class="card m-2">
					<img v-bind:src="moto.foto" alt="imagen de la moto" class="img fluid card-img-top">
			 		<div class="card-body"> 
				 		<ul class="card-text">
							<li>Marca: <strong>{{moto.marca}}</strong> </li>
							<li>Modelo: <strong>{{moto.modelo}}</strong></li> 
							<li>Potencia: {{moto.potencia}}cv</li>
							<li>Cilindrada: {{moto.cilindrada}}cc</li>  
							<li>Precio: <strong>{{moto.precio}}</strong> €</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		</div>

	</div>

		
		
		
		
		
	

</template>

<script>
	import { dbMotosRef } from '../firebase'
	import { dbUsersRef } from '../firebase'
	import { dbFilterOneRef } from '../firebase';
	import { dbFilterTwoRef } from '../firebase';
	import { dbFilterThreeRef } from '../firebase';	
	import { dbFinalRef } from '../firebase'
	import { dbBrandRef } from '../firebase'

	import { db } from '../firebase';

	



	export default {
		data(){
			return{
				motos: [],
				users: [],
				errors: []
			}
		},
		methods : {
			clearUsersDb(){
				dbUsersRef.remove();
				dbFilterOneRef.remove();
				dbFilterTwoRef.remove();
				dbFilterThreeRef.remove();
				dbFinalRef.remove();
				// alert('If you wanna start again click on Try now button')
			}
			
		},
			
		firebase: {
			motos: {
				source: dbMotosRef
			},
			users: {
				source: dbUsersRef
			},
			filter1:{
				source: dbFilterOneRef
			},
			filter2:{
				source: dbFilterTwoRef
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
	img {
		/*height: 450px;
		width: 600px;*/
	}
	#clear {
		float: right;

	}


</style>