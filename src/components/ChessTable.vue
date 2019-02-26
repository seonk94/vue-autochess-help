<template>
    <v-flex xs12>
        <div>
            <h3>ChessTable</h3>
        </div>
        
        <v-container class="field-container" fluid grid-list-sm>
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
                    <Avatar :unit="unit" :isBadge="true" :isDropDown="true" :ClickMove="GoStoreUnit" :ClickSell="SellFieldUnit" />
                </v-flex>
            </v-layout>
        </v-container>
        <v-divider></v-divider>
        <v-container class="store-container" fluid grid-list-sm>
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
                    <Avatar :unit="unit" :isBadge="true" :isDropDown="true" :ClickMove="GoFieldUnit" :ClickSell="SellStoreUnit" />
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
        methods: {
            GoStoreUnit(unit) {
                if(this.storeUnits.length !== 8) {
                    this.$store.commit('DELETE_FIELD_UNIT', unit);
                    this.$store.commit('INSERT_STORE_UNIT', unit);
                }
            },
            SellFieldUnit(unit) {
                this.$store.commit('DELETE_FIELD_UNIT', unit);
            },
            GoFieldUnit(unit) {
                if(this.fieldUnits.length !== 10) {
                    this.$store.commit('DELETE_STORE_UNIT', unit);
                    this.$store.commit('INSERT_FIELD_UNIT', unit);
                }
            },
            SellStoreUnit(unit) {
                this.$store.commit('DELETE_STORE_UNIT', unit);
            }
        },
        components: {
            Avatar
        }
    }
</script>

<style scoped>
    .field-container {
        height: 182px;
    }
    .store-container {
        height: 100px;
    }
</style>