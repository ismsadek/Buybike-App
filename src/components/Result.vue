<template>
	<b-container>
		<h4>The motorbikes that we have found based on your answers are the next</h4>
		<!-- <h5>Choose one and see the nearest workshop!</h5> -->
		

		<div v-for="moto in motos">
			
			<div v-if="moto.precio > 5.000 && moto.potencia > 20 "> 
				<ul>
					<li>Marca: {{moto.marca}}</li>
					<li>Modelo: {{moto.modelo}}</li>	
					<li>Precio: {{moto.precio}} €</li>
					<li>Potencia: {{moto.potencia}}cv</li>
					<li>{{moto.foto}}</li>			
				</ul>
			</div>
		</div>
	</b-container>

</template>

<script>
	import { dbMotosRef } from '../firebase'
	 

	export default {
		data(){
			return{
				
			}
		},
		methods : {
		
		},
		firebase: {
			motos: {
				source: dbMotosRef


			}
		}
		
	}
</script>

<style>
	
</style>