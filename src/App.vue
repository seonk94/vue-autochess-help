<template>
  <v-app style="background: #343a40;">
    <v-content>
      <MainView v-if="count === unitCount"/>
      <circle8 class="spinner-center" v-else></circle8>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import MainView from './components/MainView'
import * as unit from './service/unit'
import {Circle8} from 'vue-loading-spinner'
import firestore from './config/firestore'
export default {
  name: 'App',
  components: {
    MainView, Circle8
  },
  async created() {
    document.title = 'AutoChess Assist'
    this.unitCount = unit.units.length;

    await this.loadImages();
    this.updateFirestoreUser() 

  },
  methods: {
    async loadImages() {
        const db = firestore.firestore();
        const unitDoc = db.collection('units').doc('66POe7sqFqFRX9Txv7GD')
        let tempData
        await unitDoc.get().then(doc => {
            if(doc.exists) {
                tempData = doc.data();
            }
        })
        .then(() => {
            Object.keys(tempData).forEach(ele => {
                this.count++;
                this.$store.commit('SET_IMAGE', { name: ele, url: tempData[ele].src })
            })

        })


        /* const storage = firestore.storage().ref();
        const unitAvatarRef = storage.child('images').child('unit_avatar')
        unit.units.forEach(unit => {
            let spaceRef = unitAvatarRef.child(unit.name + '.png')
            let path = spaceRef.fullPath
            let name = spaceRef.name

            spaceRef.getDownloadURL().then(url => {
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
                let blob = xhr.response
            } 
            xhr.open('GET', url)
            xhr.send();
            this.$store.commit('SET_IMAGE', {name: unit.name, url: url})
            this.count++;
            })
        }) */
      
    },
    updateFirestoreUser() {
      const db = firestore.firestore();
      let usersDoc = db.collection('users').doc('cSYvZsZPFh5eqC0RZyKI');

      let tempData;
      let currentData = (new Date()).getFullYear() + '-' + ((new Date()).getMonth() + 1) + '-' +  (new Date()).getDate() + ":" + (new Date()).getHours();
      usersDoc.get().then(doc => {
        if(doc.exists) {
          tempData = doc.data()
        }
      })
      .then(() => {
        if(tempData[currentData] == undefined) {
          tempData[currentData] = 1;
        } else {
          tempData[currentData]++
        }
        usersDoc.update({
          ...tempData
        })
      })
    }
  },
  data () {
    return {
        count: 0,
        unitCount: 0
    }
  }

}
</script>

<style scoped>
    .spinner-center{
        margin:auto;
        height:100% !important;
    }
</style>
