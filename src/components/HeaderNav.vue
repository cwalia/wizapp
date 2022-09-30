<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">WizApp</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="item in menuItems" :key="item.text" @click="moveToPage(item.id)">{{item.text}}</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class HeaderNav extends Vue {
  menuItems = [
    {id:'',text:'Table View'},
    {id:'cards',text:'Card View'},
    {id:'setting',text:'Change Mode'},
  ]
  moveToPage(id:string){
    this.$router.push('/'+id)
  }
}
</script>