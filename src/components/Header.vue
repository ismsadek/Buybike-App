<template>
	<div class=" container-fluid no-padding mb-0">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="400px"
                img-height="350px"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
    	<b-carousel-slide id="foto-1" img-src="src/assets/bike1_mini.jpg">
      </b-carousel-slide>
      <b-carousel-slide id="foto-2" img-src="src/assets/bike2_mini.jpg">
      </b-carousel-slide>
      <b-carousel-slide id="foto-3" img-src="src/assets/bike3_mini.jpg">
      </b-carousel-slide>
    </b-carousel>
    <img class=" logo rounded-circle" src="src/assets/logo.jpg">
		<b-container class="jumbo ml-4">
			<b-jumbotron class="pt-0 pb-0" header="Buybike" lead="The app which helps you to choose the best option!">
			  <b-btn class="ml-4" variant="danger"@click="goToTest">Try now!</b-btn>
			</b-jumbotron>
		</b-container>
	</div>
</template>

<script>
import { auth } from '../firebase'
import { db } from '../firebase'

export default {
	data(){
		return{
			slide: 0,
      sliding: null
		}
	},
	methods: {
		 onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
		goToTest(){
			auth.signInAnonymously().catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			});
			
			this.$router.replace({name: 'firstLink'})
		}
	}
		
	}
	
</script>

<style>

	.jumbotron {
		background-color: rgb(18, 18, 18);
		color: white;
		padding: 20px;
		position: absolute;
		top: 200px;
		right: 120px;
		height: 200px;
		opacity: 0.95;
	}
	.no-padding {
		padding-left: 0px !important;
		padding-right: 0px !important;
		margin-bottom: 0px !important;

	}
	
	#carousel1 {
	    padding-left: 0px !important;
	    padding-right: 0px !important;
	    margin-bottom: 0px !important;
	    
	 }
	 #foto-1, #foto-2 ,#foto-3{
	 	height: 500px;

	 }
	 .logo {
	 	height: 80px;
	 	position: absolute;
	 	top: 30px;
	 	left: 50px;
	 }
	
</style>