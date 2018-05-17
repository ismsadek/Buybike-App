<template>
	<b-container>
		<h4>What's your driving license?</h4><br>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="A"@click="saveFirstAnswer">A</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="A2"@click="saveFirstAnswer">A2</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="A1"@click="saveFirstAnswer">A1</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="B"@click="saveFirstAnswer">B</b-button>
		</router-link>
		<router-link :to="{name:'secondLink'}">
			<b-button variant="success"value ="AM"@click="saveFirstAnswer">AM</b-button>
		</router-link>
	</b-container>
	
</template>

<script>
	export default {
		methods :{

			saveFirstAnswer(e){
				var first = e.currentTarget.value
				console.log(first)
			}
			
		}
	}
</script>