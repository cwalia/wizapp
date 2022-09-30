<template>
  <div class="tableView">
    <div>
        <vue-good-table
        :columns="columns"
        :rows="rows"
        :pagination-options="{
            enabled: true
        }"
        :search-options="{
            enabled: true
        }">
        </vue-good-table>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
@Component({
  components: {},
})
export default class TableView extends Vue {
    get columns(){
        const col = [
            {label: 'API',field: 'API'},
            {label: 'Auth',field: 'Auth'},
            {label: 'Category',field: 'Category'},
            {label: 'Cors',field: 'Cors'},
            {label: 'Description',field: 'Description'},
            {label: 'Link',field: 'Link'},
        ]
        return col
    }
    get rows(){
        return this.$store.state.result.tableData.entries
    }
}
</script>