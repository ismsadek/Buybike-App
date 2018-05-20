<template>
	<b-container>
		<h4>The motorbikes that we have found based on your answers are the next</h4>
		<!-- <b-button variant="success"@click="findBikes"> Find them! </b-button><br><br> -->
		<b-button variant="success"@click="clearUsersDb"> Clear list! </b-button><br>
		<!-- <h5>Choose one and see the nearest workshop!</h5> -->
		<div v-for="user in users">
			{{user.carnet}}
			{{user.presupuesto}}
			{{user.distancia}}
			{{user.cambio}}	
		</div>
		<div v-for= "moto in motos">
			<div v-if= " moto.precio < 9.999 ">
				<ul>
					<li>Marca: {{moto.marca}}</li>
					<li>Modelo: {{moto.modelo}}</li>	
					<li>Precio: {{moto.precio}} €</li>
					<li>Cilindrada: {{moto.cilindrada}} </li>
					<li>Potencia: {{moto.potencia}}cv</li>
					<!-- <li>Cambio: {{moto.cambio}}</li>
					<li>{{moto.foto}}</li> -->
				</ul>
			</div>
		</div>
		
		
		
	</b-container>

</template>

<script>
	import { dbMotosRef } from '../firebase'
	import { dbUsersRef } from '../firebase'


	export default {
		data(){
			var case1;

			return{
				case1
			}
		},
		methods : {
			clearUsersDb(){
					dbUsersRef.remove();
			}
			
			
		},
		
		firebase: {
			motos: {
				source: dbMotosRef
			},
			users: {
				source: dbUsersRef
			}
		}
	}
		
	
</script>

<style>
	
</style>