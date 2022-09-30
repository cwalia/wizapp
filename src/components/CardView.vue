<template>
  <div>
    CardView
    <b-pagination
      v-model="currentPage"
      :total-rows="totalPages"
      :per-page="perPage"
      last-number
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
@Component({
  components: {},
})
export default class CardView extends Vue {
    currentPage = 1
    perPage = 9
    get totalPages(){
        return this.rows.length/this.perPage
    }
    get rows(){
        return this.$store.state.result.tableData.entries
    }
}
</script>