<template>
	<b-container>
		<h4>Which brand would you prefer?</h4> <!-- posterior grafica con las marcas preferidas de los usuarios -->
		<!-- Listado de imagenes como las de motos.net -->
		<img class="aprilia"src="../assets/logo_aprilia.gif"@click="goToResult">
		<img src="../assets/logo_bmw.gif"@click="goToResult">
		<img src="../assets/logo_daelim.gif"@click="goToResult">
		<img src="../assets/logo_derbi.gif"@click="goToResult">
		<img src="../assets/logo_ducati.gif"@click="goToResult">
		<img src="../assets/logo_harleydavidson.gif"@click="goToResult">
		<img src="../assets/logo_honda.gif"@click="goToResult">
		<img src="../assets/logo_hyosung.gif"@click="goToResult">
		<img src="../assets/logo_kawasaki.gif"@click="goToResult">
		<img src="../assets/logo_keeway.gif"@click="goToResult">
		<img src="../assets/logo_ktm.gif"@click="goToResult">
		<img src="../assets/logo_kymco.gif"@click="goToResult">
		<img src="../assets/logo_motoguzzi.gif"@click="goToResult">
		<img src="../assets/logo_piaggio.gif"@click="goToResult">
		<img src="../assets/logo_suzuki.gif"@click="goToResult">
		<img src="../assets/logo_sym.gif"@click="goToResult">
		<img src="../assets/logo_triumph.gif"@click="goToResult">
		<img src="../assets/logo_vespa.gif"@click="goToResult">
		<img src="../assets/logo_yamaha.gif"@click="goToResult">
	</b-container>
</template>

<script>
	export default {
		methods: {
			goToResult(){
				this.$router.replace({name: 'resultLink'})
			}
		}
	}
</script>