<template>
	<b-container fluid>
		<h4>What's your driving license?</h4><br>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success">A</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success">A2</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success">A1</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success">B</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success">AM</b-button>
		</router-link>
	</b-container>
</template>

<script>
	export default {
		
	}
</script>