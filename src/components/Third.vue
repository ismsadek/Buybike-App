<template>
	
		<b-container>
  		<h4>How many kilometres will you do daily?</h4><br>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success">0 - 10km</b-button>
  		</router-link>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success">10 - 15km</b-button>
  		</router-link>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success">More than 15km</b-button>
  		</router-link>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success">Just weekends</b-button>
  		</router-link>
		</b-container>
</template>

<script>
	export default {
		
	}
</script>