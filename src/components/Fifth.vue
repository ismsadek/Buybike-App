<template>
	<b-container fluid class="main no-padding">
		<div class="row">
			<div class="col-12 mt-5">
				<h2 class="text-center">What brand are you interested in?</h2><br>
				<h5 class="text-center">Note: This is only to know the perferences of our customers</h5>
			</div>
		</div>
		<div class="container brands">
			<div class="row">			
				<img class="aprilia ml-2" src="../assets/logo_aprilia.gif"@click="goToResult">
				<img class="aprilia ml-2" src="../assets/logo_bmw.gif"@click="goToResult">
				<img class="aprilia ml-2"  src="../assets/logo_daelim.gif"@click="goToResult">
				<img class="aprilia ml-2"  src="../assets/logo_derbi.gif"@click="goToResult">
				<img class="aprilia ml-2"  src="../assets/logo_ducati.gif"@click="goToResult">
				<img class="aprilia ml-2"  src="../assets/logo_harleydavidson.gif"@click="goToResult">
				<img class="aprilia ml-2"  src="../assets/logo_honda.gif"@click="goToResult">
				<img class="aprilia ml-2"  src="../assets/logo_hyosung.gif"@click="goToResult">
				<img class="aprilia ml-2"  src="../assets/logo_kawasaki.gif"@click="goToResult">
				<img class="aprilia ml-2"  src="../assets/logo_keeway.gif"@click="goToResult">
				
			</div>
			<div class="row">
				<img class="aprilia ml-2 mt-2" src="../assets/logo_ktm.gif"@click="goToResult">
				<img class="aprilia ml-2 mt-2" src="../assets/logo_kymco.gif"@click="goToResult">
				<img class="aprilia ml-2 mt-2" src="../assets/logo_motoguzzi.gif"@click="goToResult">
				<img class="aprilia ml-2 mt-2" src="../assets/logo_piaggio.gif"@click="goToResult">
				<img class="aprilia ml-2 mt-2" src="../assets/logo_suzuki.gif"@click="goToResult">
				<img class="aprilia ml-2 mt-2" src="../assets/logo_sym.gif"@click="goToResult">
				<img class="aprilia ml-2 mt-2" src="../assets/logo_triumph.gif"@click="goToResult">
				<img class="aprilia ml-2 mt-2" src="../assets/logo_vespa.gif"@click="goToResult">
				<img class="aprilia ml-2 mt-2" src="../assets/logo_yamaha.gif"@click="goToResult">
				 <b-btn class="ml-2 mt-2" variant="primary"@click="goToResult">None</b-btn>
			</div>
		</div>
			<!-- <b-button variant="outline-primary"@click="goToResult"value="none">None</b-button> -->
	</b-container>
</template>

<script>
	import { auth } from '../firebase'
	import { db } from '../firebase'
	import { dbBrandRef } from '../firebase'

	export default {
		data(){
			return{
				currentPage: 5,
			}
		},
		methods: {
			goToResult(){
				this.$router.replace({name: 'resultLink'})
				auth.signOut()
					.then(function() {
					console.log('Deslogeado')
					}, function(error) {
					//muestra error
					alert(err.message);
				});
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
	img {
		height: 80px;
	}
	h2 {
    font-family: 'Raleway', sans-serif;
  }
	
</style>