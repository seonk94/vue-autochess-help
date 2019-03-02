<template>
    <v-flex xs12>
        <v-divider dark></v-divider>
        <div class="chess-title">
            <h3 style="color: white; font-size:20px; font-weight: bold; padding: 20px">적폐 순위</h3>
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
                    <Avatar :unit="unit" :isBadge="false" :isDropDown="false" :ClickMove="nonActive" :clickRight="nonActive" v-if="i < 5"/>
                </v-flex>
            </v-layout>
        </v-container>
        
    </v-flex>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Avatar from './avatar/Avatar'
    export default {
        computed: {
            ...mapGetters({
                units: 'getUnits',
                costRank: 'getCostRank'
            })
        },
        data() {
            return {

            }
        },
        created() {
            this.$store.dispatch('GET_REFERENCE')
        },
        methods: {
            nonActive() {

            }
        },
        components: {
            Avatar
        }
    }
</script>

<style scoped>

</style>