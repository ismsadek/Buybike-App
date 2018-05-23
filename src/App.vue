<template>
  <div id="app">
     <b-container fluid class="no-padding">
      <Header/>  
    </b-container>
    <b-container fluid class="no-padding">
      <router-view/>
    </b-container>
    <b-container fluid class="no-padding">
      <Footer/>
    </b-container fluid>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

  
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
