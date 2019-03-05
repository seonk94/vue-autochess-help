<template>
    <v-layout>
        <v-flex xs12>
            <v-card color="#343a40" class="white--text">
                <v-layout>
                    <v-flex xs12>
                        <h4>{{unitData.name}}</h4>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs8>
                    <v-container class="field-container" fluid grid-list-sm>
                        <v-layout wrap>
                            <v-flex xs2 offset-xs3 style="color: white; font-size:20px; font-weight: bold;">
                                1등
                            </v-flex>
                            <v-flex xs2 style="color: white; font-size:20px; font-weight: bold;">2등</v-flex>
                            <v-flex xs2 style="color: white; font-size:20px; font-weight: bold;">3등</v-flex>
                            <v-flex xs2 style="color: white; font-size:20px; font-weight: bold;">4등</v-flex>
                        </v-layout>
                        <v-layout wrap>
                            <v-flex xs3 style="color: white; font-size:20px; font-weight: bold;">Rank</v-flex>
                            <v-flex xs2 v-for="(unit, i) in sortUnitList" :key="i" >
                                <v-avatar 
                                class="my-avater"
                                :tile="false"
                                :size="50"
                                :color="unitColor(unit)"
                                v-if="i<4"
                                >
                                    <v-tooltip top>
                                        <template #activator="data">
                                            <img class="my-button-img" v-on="data.on" :src="unitImg(unit)" :alt="unitName(unit)">
                                        </template>
                                        <span>{{unitName(unit)}}</span>
                                    </v-tooltip>   
                                </v-avatar>
                            </v-flex>
                        </v-layout>
                        
                    </v-container>
                    </v-flex>

                    <v-flex xs4>
                            <v-flex xs12> 같이 쓰는 조합</v-flex>
                            <v-flex xs12 v-for="(syn, i) in sortWithList" :key="syn">
                                <h4 v-if="i < 3">{{syn}}</h4>
                            </v-flex>
                        
                    </v-flex>
                </v-layout>
              
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Avatar from './avatar/Avatar'
    export default {
        props: {
            unitData: {}
        },
        computed: {
            sortUnitList() {
                return Object.keys(this.unitData.units).sort((a,b) => {return this.unitData.units[b] - this.unitData.units[a] })
            },
            sortWithList() {
                return Object.keys(this.unitData.with).sort((a,b) => { return this.unitData.with[b] - this.unitData.with[a] })
            }
        },
        methods: {
            unitColor(unit) {
                return this.$store.state.units.find(ele => ele.name === unit).color
            },
            unitImg(unit) {
                return this.$store.state.units.find(ele => ele.name === unit).img
            },
            unitName(unit) {
                return this.$store.state.units.find(ele => ele.name === unit).name
            },
        },
        components: {
            Avatar
        }
    }
</script>

<style scoped>

</style>