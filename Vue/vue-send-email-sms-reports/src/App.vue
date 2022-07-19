<template>
<Navigation/>
  <div class="app">
    
    <container>
      
    <router-view />
    </container>
  </div>
</template>
  
<script>
import Navigation from "./components/Navigation"
export default {
  name: "App",
  components:{
    Navigation
  }
  
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}
.modal{
  display: unset;
}
</style>
