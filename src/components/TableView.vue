<template>
  <div class="tableView">
    <div v-if="rows.length==0" class="d-flex justify-content-center mb-3">
        <b-spinner label="Loading..."></b-spinner>
    </div>
    <vue-good-table
    v-else
    :columns="columns"
    :rows="rows"
    :theme="!darkMode ? 'polar-bear' : 'nocturnal'"
    :pagination-options="{
        enabled: true
    }"
    :search-options="{
        enabled: true
    }">
    </vue-good-table>
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
    get darkMode(){
        return this.$store.state.result.darkMode
    }
}
</script>