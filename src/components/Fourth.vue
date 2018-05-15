<template>
	<b-container>
		<h4>Do you prefer it with gear switching or scooter type?</h4><br>
		<router-link :to="{name:'fifthLink'}">
			<b-button variant="success">Gear</b-button>
		</router-link>
		<router-link :to="{name:'fifthLink'}">
			<b-button variant="success">Scooter</b-button>
		</router-link>
	</b-container>
</template>

<script>
	export default {
		
	}
</script>