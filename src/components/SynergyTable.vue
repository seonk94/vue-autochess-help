<template>
    <v-flex xs12>
        <v-layout row wrap>

            <v-flex xs6>
                <v-list>
                    <v-list-tile
                        class="class-list"
                        v-for="item in specs"
                        :key="item.name"
                        avatar
                    >

                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.name"></v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-avatar v-for="(img, i) in item.img" class="class-list-avatar" :key="i" :size="20">
                            <img :src="img">
                        </v-list-tile-avatar>
                        
                    </v-list-tile>
                </v-list>
            </v-flex>
            <v-flex xs6>
                <v-list>
                    <v-list-tile
                        class="class-list"
                        v-for="item in classes"
                        :key="item.name"
                        avatar
                    >

                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.name"></v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-avatar class="class-list-avatar" :size="20">
                            <img :src="require('../assets/logo.svg')">
                        </v-list-tile-avatar>
                        <v-list-tile-avatar class="class-list-avatar" :size="20">
                            <img :src="require('../assets/logo.svg')">
                        </v-list-tile-avatar>
                        <v-list-tile-avatar class="class-list-avatar" :size="20">
                            <img :src="require('../assets/logo.svg')">
                        </v-list-tile-avatar>
                        <v-list-tile-avatar class="class-list-avatar" :size="20">
                            <img :src="require('../assets/logo.svg')">
                        </v-list-tile-avatar>
                        <v-list-tile-avatar class="class-list-avatar" :size="20">
                            <img :src="require('../assets/logo.svg')">
                        </v-list-tile-avatar>
                        <v-list-tile-avatar class="class-list-avatar" :size="20">
                            <img :src="require('../assets/logo.svg')">
                        </v-list-tile-avatar>
                        <v-list-tile-avatar class="class-list-avatar" :size="20">
                            <img :src="require('../assets/logo.svg')">
                        </v-list-tile-avatar>
                        
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-layout>
        
    </v-flex>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                units: 'getUnits',
                fieldUnits: 'getFieldUnits',
                storeUnits: 'getStoreUnits'
            })
        },
        data:() => ({
            classes: [
                { name: 'Assassin', img: []},
                { name: 'Demon Hunter', img: []},
                { name: 'Druid', img: []},
                { name: 'Hunter', img: []},
                { name: 'Knight', img: []},
                { name: 'Mage', img: []},
                { name: 'Mech', img: []},
                { name: 'Shaman', img: []},
                { name: 'Warlock', img: []},
                { name: 'Warrior', img: []}
            ],
            specs: [
                { name : 'Beast', img: []},
                { name : 'Demon', img: []},
                { name : 'Dwarf', img: []},
                { name : 'Ogre', img: []},
                { name : 'Dragon', img: []},
                { name : 'Elementals', img: []},
                { name : 'Elf', img: []},
                { name : 'Goblin', img: []},
                { name : 'Human', img: []},
                { name : 'Naga', img: []},
                { name : 'Orc', img: []}, 
                { name : 'Troll', img: []},
                { name : 'Undead', img: []}
            ]
        }),
        mounted() {
            if(this.units.length > 1) {
                console.log(this.units)
                this.units.forEach(unit => {
                    let spec
                    if(Array.isArray(unit.spec)){
                        unit.spec.forEach(ele => {
                            console.log(ele);
                            spec = this.specs.find(tmp => (tmp.name).toLowerCase() === ele.toLowerCase());
                            console.log(spec)
                            spec.img = [...spec.img, unit.img]
                        })
                    } else {
                        spec = this.specs.find(ele => (ele.name).toLowerCase() === (unit.spec).toLowerCase());
                        spec.img = [...spec.img, unit.img]
                    }
                })
            }
        }
    }
</script>

<style>
    .class-list>div{
        height: 100% !important;
        font-size:10px !important;
    }
    .class-list-avatar {
        min-width:20px !important;
        width:20px !important;
    }
    
</style>