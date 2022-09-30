<template>
  <div>
    <b-navbar toggleable="lg" type="dark" :variant="!darkMode ? 'dark' : 'secondary'">
      <b-navbar-brand>WizApp</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav style="align-items: center;color:rgba(255, 255, 255, 0.5)">
          <b-nav-item v-for="item in menuItems" :key="item.text" @click="moveToPage(item.id)">{{item.text}}</b-nav-item>
          <b-form-checkbox v-model="darkMode" name="check-button" switch>
            {{darkMode ? 'Light Mode' : 'Dark Mode'}}
          </b-form-checkbox>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-form-select v-model="selected" :options="optionsSelect" @change="changeSelect">
            <b-form-select-option :value="null">Select</b-form-select-option>
          </b-form-select>
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
    // {id:'setting',text:'Change Mode'},
  ]
  selected = null
  moveToPage(id:string){
    this.$router.push('/'+id)
  }
  get darkMode(){
    if(this.$store.state.result.darkMode){
      // @ts-ignore
      document.querySelector('body').classList.add('dark-mode')
    }else{
      // @ts-ignore
      document.querySelector('body').classList.remove('dark-mode')
    }
    
    return this.$store.state.result.darkMode
  }
  set darkMode(v){
    this.$store.state.result.darkMode = v
  }
  get optionsSelect(){
    var opt = []
    if(this.rows.length>0){
      for(var i=0;i<5;i++){
        const index = Math.floor(Math.random() * this.rows.length)
        var randomAnswer = this.rows[index];
        opt.push({text:randomAnswer.API,value:index})
      }
    }

    return opt
  }
  changeSelect(){
    console.log(this.selected)
    this.$router.push('/cards/'+this.selected)
    if(location.href.includes('cards')){
      location.reload();
    }
  }
  get rows(){
      return this.$store.state.result.tableData.entries
  }

}
</script>