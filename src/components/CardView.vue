<template>
    <v-layout>
        <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
                <v-layout>
                    <v-flex xs12>
                        <h4>Beast</h4>
                    </v-flex>
                </v-layout>
                <v-layout>
                    
                    <v-flex xs7>
                    <v-container class="field-container" fluid grid-list-sm>
                        <v-layout>
                            <v-flex x2 offset-xs2 style="color: white; font-size:20px; font-weight: bold;">
                                1등
                            </v-flex>
                            <v-flex x2 style="color: white; font-size:20px; font-weight: bold;">2등</v-flex>
                            <v-flex x2 style="color: white; font-size:20px; font-weight: bold;">3등</v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex xs2 style="color: white; font-size:20px; font-weight: bold;">hi</v-flex>
                            <v-flex xs2>
                                <!-- <Avatar :unit="unit" :isBadge="false" :isDropDown="false" :ClickMove="nonActive" :clickRight="nonActive" v-if="i < 5"/> -->
                                <button>hihi</button>
                            </v-flex>
                            <v-flex xs2>
                                <!-- <Avatar :unit="unit" :isBadge="false" :isDropDown="false" :ClickMove="nonActive" :clickRight="nonActive" v-if="i < 5"/> -->
                                <button>hihi</button>
                            </v-flex>
                            <v-flex xs2>
                                <!-- <Avatar :unit="unit" :isBadge="false" :isDropDown="false" :ClickMove="nonActive" :clickRight="nonActive" v-if="i < 5"/> -->
                                <button>hihi</button>
                            </v-flex>
                        </v-layout>
                        <v-divider dark></v-divider>
                        <CardView/>
                    </v-container>
                    </v-flex>

                    <v-flex xs5>
                        
                            <v-flex xs12>
                                1
                            </v-flex>
                            <v-flex xs12>
                                2
                            </v-flex>
                            <v-flex xs12>
                                3
                            </v-flex>
                        
                    </v-flex>
                </v-layout>
              
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        props: {
            unitData: {}
        }
    }
</script>

<style scoped>

</style>