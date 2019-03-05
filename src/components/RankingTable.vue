<template>
    <v-flex xs12>
        <v-divider dark></v-divider>
        <div class="chess-title">
            <h3 style="color: white; font-size:20px; font-weight: bold; padding: 20px">인기 유닛 순위</h3>
        </div>
        <v-container class="field-container" fluid grid-list-sm>
            <v-layout>
                <v-flex x2 offset-xs2 style="color: white; font-size:20px; font-weight: bold;">
                    1등
                </v-flex>
                <v-flex x2 style="color: white; font-size:20px; font-weight: bold;">2등</v-flex>
                <v-flex x2 style="color: white; font-size:20px; font-weight: bold;">3등</v-flex>
                <v-flex x2 style="color: white; font-size:20px; font-weight: bold;">4등</v-flex>
                <v-flex x2 style="color: white; font-size:20px; font-weight: bold;">5등</v-flex>
            </v-layout>
            <v-layout row wrap v-for="cost in costRank" :key="cost.cost">
                <v-flex xs2 style="color: white; font-size:20px; font-weight: bold;">{{cost.cost}}</v-flex>
                <v-flex v-for="(unit, i) in cost.units" :key="unit.name" xs2>
                    <Avatar :unit="unit" :isBadge="false" :isDropDown="false" v-if="i < 5"/>
                </v-flex>
            </v-layout>
            <v-divider dark></v-divider>
            <div class="chess-title">
                <h3 style="color: white; font-size:20px; font-weight: bold; padding: 20px">조합 순위</h3>
            </div>
            <letter-cube class="cube-spinner" v-if="flag === false"></letter-cube>
            <v-layout v-for="(data, i) in synergysRef" :key="i" v-else>
                <v-flex class="index-num" xs2>No.{{i + 1}}</v-flex>
                <v-flex xs10>
                    <CardView class="card-padding" :unitData="data"/>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Avatar from './avatar/Avatar'
    import CardView from './CardView'
    import {LetterCube} from 'vue-loading-spinner'
    export default {
        computed: {
            ...mapGetters({
                units: 'getUnits',
                costRank: 'getCostRank',
                synergys: 'getSynergys',
                synergysRef: 'getSynergysRef'
            })
        },
        watch: {
            synergysRef() {
                if(this.synergysRef.length > 2) this.flag = true 
            }
        },
        data() {
            return {
                flag : false
            }
        },
        created() {
            this.$store.dispatch('GET_REFERENCE')
            const doc = (new Date()).getFullYear() + '' + ((new Date()).getMonth() + 1) + '' +  ~~((new Date()).getDate() / 7 + 1)
            this.$store.dispatch('GET_SYNERGYS', doc)
        },
        methods: {
            nonActive() {

            }
        },
        components: {
            Avatar, CardView, LetterCube
        }
    }
</script>

<style scoped>
    .cube-spinner {
        margin: 30px auto;
    }
    .field-container{
        padding: 20px 0px;
    }
    .card-padding {
        padding: 20px 0px;
    }
    .index-num {
        margin: auto;
        color: white;
        font-size: 20px;
        font-weight: bold;
    }
</style>