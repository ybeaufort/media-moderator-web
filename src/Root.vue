<template>
  <div class="root">
    <medialist></medialist>
  </div>
</template>

<script>
  import MediaList from './components/MediaList'
  export default {
    components: {
      medialist: MediaList
    }
  }
</script>
<style lang="scss">
  @import './assets/base.scss';

  html {
    height: 100%;
  }

  #app {
    color: #2c3e50;
    max-width: 600px;
    font-family: "Source Sans Pro", sans-serif;
    text-align: center;
  }

  #app a {
    color: #ff5858;
    text-decoration: none;
  }

  #app p {
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
  }

  #app > div {
    position: absolute;
    width: 100%;
  }

</style>