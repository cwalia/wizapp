<template>
  <div class="tableView">
    <div v-if="tableData.length==0" class="d-flex justify-content-center mb-3">
        <b-spinner label="Loading..."></b-spinner>
    </div>
    <div v-else>
        <b-table-simple responsive sticky-header>
            <b-thead :head-variant="!darkMode ? 'dark' : 'light'">
                <b-tr>
                    <b-th>API</b-th>
                    <b-th>Auth</b-th>
                    <b-th>Category</b-th>
                    <b-th>Cors</b-th>
                    <b-th>Description</b-th>
                    <b-th>Link</b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="(item,index) in tableData" :key="index">
                    <b-td :variant="!darkMode ? 'secondary' : 'light'">{{item.API}}</b-td>
                    <b-td :variant="!darkMode ? 'secondary' : 'light'">{{!item.Auth ? '-' : item.Auth}}</b-td>
                    <b-td :variant="!darkMode ? 'secondary' : 'light'">{{item.Category}}</b-td>
                    <b-td :variant="!darkMode ? 'secondary' : 'light'">{{item.Cors}}</b-td>
                    <b-td :variant="!darkMode ? 'secondary' : 'light'">{{item.Description}}</b-td>
                    <b-td :variant="!darkMode ? 'secondary' : 'light'"><a :href="item.Link" target="_blank">{{item.Link}}</a></b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
@Component({
  components: {},
})
export default class StickyTableView extends Vue {
    get tableData(){
        return this.$store.state.result.tableData.entries
    }
    get darkMode(){
        return this.$store.state.result.darkMode
    }
}
</script>