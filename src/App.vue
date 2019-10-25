<style>
  @import './assets/css/cssrest.css';
  @import './assets/css/public.css';

.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateX(50px);
  opacity: 0;
}
</style>
<template>
  <div id="app">
      <transition name="slide-fade" mode="out-in">
        <router-view class="child-view"></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      showBanner:false,
    }
  },
  computed:{

  },
  created(){
  },
  methods:{
    
  },
  mounted(){
    if (document.body.clientWidth>750) {
      this.$router.push('/error')
    }
  },
}
</script>
  