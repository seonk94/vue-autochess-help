<template>
    <v-container>
        <v-layout
        text-xs-center
        wrap
        row
        >
            <v-flex xs12>
                <div class="chess-title">
                    <h3>AutoChess</h3>
                </div>
                <v-divider dark></v-divider>
                <v-tabs
                v-model="active"
                class="tab-border"
                color="#343a40"
                dark
                slider-color="white"
                >
                    
                    <v-tab
                        ripple
                    >
                        Simulator
                    </v-tab>
                    <v-tab
                        ripple
                    >
                        Rank
                    </v-tab>
                    <v-tab-item>
                        <ChessTable/>
                        <SynergyTable/>
                    </v-tab-item>
                    <v-tab-item>
                        <RankingTable/>
                    </v-tab-item>
                </v-tabs>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import ChessTable from './ChessTable';
    import SynergyTable from './SynergyTable';
    import RankingTable from './RankingTable';
    export default {
        components: {
            ChessTable, SynergyTable, RankingTable
        },
        data() {
            return {
                active: null
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .chess-title >h3{
        padding-bottom:20px;
        color:white;
        font-weight: bold;
    }
    .tab-border>div>div {
        border-bottom: 1px solid rgba(255,255,255,0.12) !important;
    }
</style>