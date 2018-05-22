<template>
	
	 <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="500px"
                img-height="480px"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
    	<b-carousel-slide img-src="src/assets/bike1_mini.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="src/assets/bike2_mini.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="src/assets/bike3_mini.jpg">
      </b-carousel-slide>
     </b-carousel>
     <!--  <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
   </div>
</template>

<script>
import {storage} from '../firebase'

export default {
  data () {
    return {
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
    }
  }
}
</script>

<style>

/*	body {
		 background-image: url('..src/assets/road.jpg') no-repeat center center fixed; 
	  -webkit-background-size: cover;
	  -moz-background-size: cover;
	  -o-background-size: cover;
	  background-size: cover;
	}*/
</style>
