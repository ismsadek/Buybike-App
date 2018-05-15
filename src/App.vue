<template>
  <div id="app">
     <b-container fluid>
      <Header/>  
    </b-container>
    <b-container 
      <router-view/>
    </b-container>
    <b-container fluid>
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
