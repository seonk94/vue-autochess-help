<template>
    <v-container>
        <v-layout
        text-xs-center
        wrap
        row
        >
            <v-flex xs12>
                <ChessTable/>
                <SynergyTable/>
                <RankingTable/>
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
        methods: {

        }
    }
</script>

<style scoped>

</style>