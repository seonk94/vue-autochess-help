<template>
    <v-container>
        <v-layout
        text-xs-center
        wrap
        >
            <v-flex xs4>
                <UnitList/>
            </v-flex>
            <v-flex xs8>
                <RightView/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import UnitList from './UnitList'
    import RightView from './RightView'
    export default {
        components: {
            UnitList,
            RightView
        },
    }
</script>

<style scoped>

</style>