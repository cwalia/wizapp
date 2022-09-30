<template>
  <div>
    <table-view></table-view>
    <card-view></card-view>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import TableView from './TableView.vue'
import CardView from './CardView.vue'
@Component({
  components: {
    TableView,CardView
  },
})
export default class HomePage extends Vue {
}
</script>