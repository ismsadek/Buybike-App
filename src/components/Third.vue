<template>
	
		<b-container>
  		<h4>How many kilometres will you do daily?</h4><br>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success"@click="saveThirdAnswer" value="0 - 10km">0 - 10km</b-button>
  		</router-link>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success"@click="saveThirdAnswer" value="10 - 15km">10 - 15km</b-button>
  		</router-link>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success"@click="saveThirdAnswer"value="mas de 15">More than 15km</b-button>
  		</router-link>
  		<router-link :to="{name:'fourthLink'}">
  			<b-button variant="success"@click="saveThirdAnswer"value="weekends">Just weekends</b-button>
  		</router-link>
		</b-container>
</template>

<script>
	

	export default {
		methods: {
	    saveThirdAnswer(e){
	      var third = e.currentTarget.value
	      console.log(third)
	    }
	  }
		
	}
</script>