<template>
  <v-app style="background: #343a40;">
    <v-content>
      <MainView/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import MainView from './components/MainView'
import * as unit from './service/unit'
import firestore from './config/firestore'
export default {
  name: 'App',
  components: {
    MainView
  },
  created() {
    document.title = 'AutoChess Assist'
    this.$store.dispatch('GET_SYNERGYS')
    const storage = firestore.storage().ref();
    const unitAvatarRef = storage.child('images').child('unit_avatar')
    const db = firestore.firestore();

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

        this.images = [...this.imgaes, { name: unit.name, src: url }]
      })

    })

    console.log(this.images)

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

    
  },
  data () {
    return {
      images: []
    }
  }
}
</script>
