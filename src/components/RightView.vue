<template>
    <v-layout row wrap>
        <ChessTable/>
        <SynergyTable/>
    </v-layout>
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