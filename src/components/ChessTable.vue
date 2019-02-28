<template>
    <v-flex xs12>
        <div>
            <h3 :class="{ warn: fieldUnits.length > 10  }">AutoChess</h3>
        </div>
        <v-container class="field-container" fluid grid-list-sm>
            <v-layout row wrap>
                <v-flex v-for="unit in fieldUnits" :key="unit.id" xs2>
                    <Avatar :unit="unit" :isBadge="true" :isDropDown="true" :ClickMove="GoStoreUnit" :clickRight="clickRightField"/>
                </v-flex>
            </v-layout>
        </v-container>
        <v-divider></v-divider>
        <v-container class="store-container" fluid grid-list-sm>
            <v-layout row wrap>
                <v-flex xs2></v-flex>
                <v-flex v-for="unit in storeUnits" :key="unit.id" xs1>
                    <Avatar :unit="unit" :isBadge="true" :isDropDown="true" :ClickMove="GoFieldUnit" :clickRight="clickRightStore"/>
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
                if(this.fieldUnits.length !== 12) {
                    this.$store.commit('DELETE_STORE_UNIT', unit);
                    this.$store.commit('INSERT_FIELD_UNIT', unit);

                    let arr = this.fieldUnits.filter(ele => ele.name === unit.name && ele.level === unit.level )
                    if(arr.length === 3 && unit.level !== 3) {
                        this.$store.commit('COMBINATION_FIELD_UNITS', arr);
                    }
                }
            },
            SellStoreUnit(unit) {
                this.$store.commit('DELETE_STORE_UNIT', unit);
            },
            clickRightStore(e, unit) {
                e.preventDefault();
                this.$store.commit('DELETE_STORE_UNIT', unit);
            },
            clickRightField(e, unit) {
                e.preventDefault();
                this.$store.commit('DELETE_FIELD_UNIT', unit);
            }
        },
        components: {
            Avatar
        },
    }
</script>

<style scoped>
    .field-container {
        height: 182px;
    }
    .store-container {
        height: 100px;
    }
    .warn {
        color: red;
    }
</style>