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

                        <v-list-tile-avatar v-for="unit in item.img" class="class-list-avatar" :key="unit.name" :size="20">
                            <img :src="unit.img" class="unit-none" v-if="unit.status === 'NONE'">
                            <img :src="unit.img" class="unit-avaliable" v-else-if="unit.status === 'AVALIABLE'">
                            <img :src="unit.img" v-else-if="unit.status === 'USED'">
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

                        <v-list-tile-avatar class="class-list-avatar" v-for="unit in item.img" :key="unit.name" :size="20">
                            <img :src="unit.img" class="unit-none" v-if="unit.status === 'NONE'">
                            <img :src="unit.img" class="unit-avaliable" v-else-if="unit.status === 'AVALIABLE'">
                            <img :src="unit.img" v-else-if="unit.status === 'USED'">
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
        watch: {
            storeUnits() {
                this.classes.forEach(ele => this.initNone(ele, 'NONE'))
                this.specs.forEach(ele => this.initNone(ele, 'NONE'))
                
                this.storeUnits.forEach(unit => this.moveUnit(unit, 'AVALIABLE'))
                this.fieldUnits.forEach(unit => this.moveUnit(unit, 'USED'))
            },
            fieldUnits() {
                this.classes.forEach(ele => this.initNone(ele, 'NONE'))
                this.specs.forEach(ele => this.initNone(ele, 'NONE'))
                
                this.storeUnits.forEach(unit => this.moveUnit(unit, 'AVALIABLE'))
                this.fieldUnits.forEach(unit => this.moveUnit(unit, 'USED'))
            }
        },
        data:() => ({
            classes: [
                { name: 'Assassin', img: [], index: 0},
                { name: 'Demon Hunter', img: [], index: 0},
                { name: 'Druid', img: [], index: 0},
                { name: 'Hunter', img: [], index: 0},
                { name: 'Knight', img: [], index: 0},
                { name: 'Mage', img: [], index: 0},
                { name: 'Mech', img: [], index: 0},
                { name: 'Shaman', img: [], index: 0},
                { name: 'Warlock', img: [], index: 0},
                { name: 'Warrior', img: [], index: 0}
            ],
            specs: [
                { name : 'Beast', img: [], index: 0},
                { name : 'Demon', img: [], index: 0},
                { name : 'Dwarf', img: [], index: 0},
                { name : 'Ogre', img: [], index: 0},
                { name : 'Dragon', img: [], index: 0},
                { name : 'Elementals', img: [], index: 0},
                { name : 'Elf', img: [], index: 0},
                { name : 'Goblin', img: [], index: 0},
                { name : 'Human', img: [], index: 0},
                { name : 'Naga', img: [], index: 0},
                { name : 'Orc', img: [], index: 0}, 
                { name : 'Troll', img: [], index: 0},
                { name : 'Undead', img: [], index: 0}
            ]
        }),
        mounted() {
            if(this.units.length > 1) {
                this.units.forEach(unit => {
                    let spec

                    if(Array.isArray(unit.spec)){
                        unit.spec.forEach(ele => {
                            spec = this.specs.find(tmp => this.equalName(tmp.name, ele));
                            spec.img = [...spec.img, {name: unit.name, img: unit.img, status: 'NONE'} ]
                        })
                    } else {
                        spec = this.specs.find(ele => this.equalName(ele.name, unit.spec));
                        spec.img = [...spec.img, {name: unit.name, img: unit.img, status: 'NONE'}]
                    }

                    let cls = this.classes.find(ele => this.equalName(ele.name, unit.class))
                    cls.img = [ ...cls.img, {name: unit.name, img: unit.img, status: 'NONE'} ]
                })
            }
        },
        methods: {
            moveUnit(unit, status) {
                let cls = this.classes.find(ele => this.equalName(ele.name, unit.class))
                let clsImg = cls.img.find(ele => ele.name === unit.name);
                clsImg.status = status

                let spec
                let specImg
                Array.isArray(unit.spec) 
                    ?   unit.spec.forEach(tmp => {
                            spec = this.specs.find(ele => this.equalName(ele.name, tmp));
                            specImg = spec.img.find(ele => ele.name === unit.name);
                            specImg.status = status
                        })
                    :   spec = this.specs.find(ele => this.equalName(ele.name, unit.spec));
                        specImg = spec.img.find(ele => ele.name === unit.name);
                        specImg.status = status
            },
            initNone(ele, status) {
                ele.img.forEach(img => {
                    img.status = status
                })
            },
            equalName(name1, name2) {
                return name1.toLowerCase() === name2.toLowerCase()
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
    .unit-avaliable {
        opacity: 0.55;
    }
    .unit-none {
        opacity: 0.15;
    }
</style>