<template>
	<b-container>
		<h4>The motorbikes that we have found based on your answers are the next</h4>
		<!-- <h5>Choose one and see the nearest workshop!</h5> -->
		

		<div v-for="moto in motos">
			
			<!-- .replace("€","").trim() -->
			<ul>
				<li>{{moto.marca}}</li>
				<li>{{moto.modelo}}</li>	
				<li>{{moto.precio}}</li>
				<li>{{moto.potencia}}</li>			
			</ul>
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