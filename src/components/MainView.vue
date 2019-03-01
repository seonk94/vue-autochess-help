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
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import ChessTable from './ChessTable';
    import SynergyTable from './SynergyTable';
    export default {
        components: {
            ChessTable, SynergyTable
        }
    }
</script>

<style scoped>

</style>