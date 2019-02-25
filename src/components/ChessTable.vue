<template>
    <v-flex xs12>
        <div>
            <h3>ChessTable</h3>
        </div>
        
        <v-container fluid grid-list-sm>
            <v-layout row wrap>
                <v-flex v-for="unit in fieldUnits" :key="unit.name" xs2>
                    <!-- <img :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`" class="image" alt="lorem" width="100%" height="100%"> -->
                    <!-- <v-badge overlap :color="unit.color">
                        <span slot="badge">{{unit.level}}</span>
                        <v-avatar
                        :tile="false"
                        :size="50"
                        :color="unit.color"
                        >
                            <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" width="100%" height="100%">
                        </v-avatar>
                    </v-badge> -->
                    <Avatar :unit="unit" :isBadge="true" :isDropDown="true" />
                </v-flex>
            </v-layout>
        </v-container>

        <v-container fluid grid-list-sm>
            <v-layout row wrap>
                <v-flex xs2></v-flex>
                <v-flex v-for="(unit, i) in storeUnits" :key="i" xs1>
                    <!-- <v-avatar
                    :tile="false"
                    :size="50"
                    :color="unit.color"
                    >
                        <img :src="unit.img" alt="avatar" width="100%" height="100%">
                    </v-avatar> -->
                    <Avatar :unit="unit" :isBadge="true" :isDropDown="true" />
                </v-flex>
            </v-layout>
        </v-container>




    </v-flex>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Avatar from './avatar/Avatar.vue'
    export default {
        computed: {
            ...mapGetters({
                fieldUnits: 'getFieldUnits',
                storeUnits: 'getStoreUnits'
            })
        },
        components: {
            Avatar
        }
    }
</script>

<style scoped>

</style>