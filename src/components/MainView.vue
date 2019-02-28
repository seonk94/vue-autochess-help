<template>
    <v-container>
        <v-layout
        text-xs-center
        wrap
        >
            <!-- <v-flex xs12 md4>
                <UnitList/>
            </v-flex> -->
            <v-flex xs12>
                <RightView/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import RightView from './RightView'
    export default {
        components: {
            RightView
        },
    }
</script>

<style scoped>

</style>