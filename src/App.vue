<template>
  <div id="app">
     <div class="container">
      <Header/>  
    </div>
    <div class="container fluid">
      <router-view/>
    </div>
    <div class="container">
      <Footer/>
    </div>
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
