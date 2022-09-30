<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HeaderNav from './components/HeaderNav.vue'

@Component({
  components: {HeaderNav},
})
export default class App extends Vue {
    mounted(){
        this.$store.dispatch('result/fetchTableData')
    }
}
</script>

<style lang="scss">
@import "src/assets/styles/style.scss";
</style>