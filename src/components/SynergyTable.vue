<template>
    <v-flex xs12>
        <v-layout row wrap>

            <v-flex xs6>
                <v-list>
                    <v-list-tile
                        class="class-list"
                        v-for="item in specs"
                        :key="item"
                        avatar
                    >

                        <v-list-tile-content>
                            <v-list-tile-title v-text="item"></v-list-tile-title>
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
            <v-flex xs6>
                <v-list>
                    <v-list-tile
                        class="class-list"
                        v-for="item in classes"
                        :key="item"
                        avatar
                    >

                        <v-list-tile-content>
                            <v-list-tile-title v-text="item"></v-list-tile-title>
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
            classes: ['Assassin', 'Demon Hunter', 'Druid', 'Hunter', 'Knight', 'Mage', 'Mech', 'Shaman', 'Warlock', 'Warrior'],
            specs: ['Beast', 'Demon', 'Dwarf', 'Ogre', 'Dragon', 'Elementals', 'Elf', 'Goblin', 'Human', 'Naga', 'Orc', 'Troll', 'Undead']
        }),
        created() {
            
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