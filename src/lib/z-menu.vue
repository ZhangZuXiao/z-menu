<template>
  <div class="z-menu">
       <div class="z-menu-chunk" v-for="(item,index) in data">
            <i @click="zm_event(item.name)">{{item.name}}</i> 
       </div>
  </div>
</template>

<script>
  export default {
    name: 'z-menu',
    props: ['data','type'],
    data () {
      return {
         msg:'msg ccmt'
      }
    },
    methods: {
      zm_event(name) {
         this.$emit('zmClick',name);
      },
      
    }
  }
</script>

<style>
  .z-menu{background: #000;width: 56px;height: 100%;float: left;color: #fff;}
  .z-menu-chunk{width: 100%;height: 56px;background: red;}
</style>
