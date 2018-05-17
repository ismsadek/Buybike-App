<template>
	<b-container>
		<h4>Do you prefer it with gear switching or scooter type?</h4><br>
		<router-link :to="{name:'fifthLink'}">
			<b-button variant="success" value="gear">Gears</b-button>
		</router-link>
		<router-link :to="{name:'fifthLink'}">
			<b-button variant="success" value="automatic">Automatic</b-button>
		</router-link>
	</b-container>
</template>

<script>
	export default {
		methods: {
			saveFourthAnswer(e){
	      var fourth = e.currentTarget.value
	      console.log(fourth)
	    }
	  }
	}
</script>