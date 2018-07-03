<template>
  <div id="app">
    <app-header :headerBack="header_back" :header-title="header_title"  ></app-header>
    <transition :name="transitionName">
      <router-view v-on:titleChanged="titleChanged($event)" />
    </transition>
  </div>
</template>

<script>
import AppHeader from '@/components/pages/Comment/Header';
export default {
  name: 'App',

  components:{
    AppHeader
  },
  data(){
    return {
      transitionName: 'slide',
      header_title:"首页",
      header_back:1,
    }
  },
  methods:{
    titleChanged(msg){
       this.header_title=msg.title;

       this.header_back=msg.is_back;
       this.transitionName = msg.is_back >=1 ? 'slide_back' : 'slide';
    }
  }

}
</script>

<style>

</style>
