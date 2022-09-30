<template>
  <div class="cardView">
    <div v-if="rows.length==0" class="d-flex justify-content-center mb-3">
        <b-spinner label="Loading..."></b-spinner>
    </div>
    <b-card-group v-else deck  class="cardsList">
        <b-card v-for="(item,index) in cardData" :key="item.Link" :bg-variant="bgVariant((currentPage-1)*perPage+index)" :header="item.API" :text-variant="!darkMode ? 'white' : ''" class="text-center">
            <b-card-text>{{item.Description}}</b-card-text>
            <b-button size="sm" pill variant="outline-danger" @click="removeItem((currentPage-1)*perPage+index)">Remove</b-button>
        </b-card>
    </b-card-group>
    
    <b-pagination v-if="rows.length>0" style="justify-content: center;" v-model="currentPage" :total-rows="rows.length" :per-page="perPage" last-number></b-pagination>
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
    get rows(){
        return this.$store.state.result.tableData.entries
    }
    get cardData(){
        return this.rows.length>0 ? this.rows.slice((this.currentPage-1)*this.perPage, this.currentPage*this.perPage) : []
    }
    removeItem(index:number){
        this.rows.splice(index,1);
    }
    get darkMode(){
        return this.$store.state.result.darkMode
    }
    mounted(){
        this.$route.params.id ? this.currentPage = Math.ceil(parseInt(this.$route.params.id)/this.perPage) : ''
    }
    bgVariant(index:number){
        return parseInt(this.$route.params.id) == index ? 'warning' : !this.darkMode ? 'dark' : 'light'
    }
}
</script>