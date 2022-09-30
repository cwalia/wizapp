<template>
  <div>
    <header-nav></header-nav>
    hey HomePage
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import HeaderNav from './HeaderNav.vue'
@Component({
  components: {
    HeaderNav
  },
})
export default class HomePage extends Vue {
}
</script>