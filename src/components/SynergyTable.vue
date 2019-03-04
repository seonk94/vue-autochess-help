<template>
    <v-flex xs12>
        <v-layout row wrap class="my-background-color">

            <v-flex xs6 class="my-background-color">
                <v-list style="background: #343a40">
                    <v-list-tile
                        class="class-list"
                        v-for="item in specs"
                        :key="item.name"
                        :style="{ background: item.effective}"
                        avatar
                    >
                        <v-list-tile-content >
                            <v-tooltip top>
                                <template #activator="effect">
                                    <v-list-tile-title class="my-list-content" v-on="effect.on" v-text="item.name"></v-list-tile-title>
                                </template>
                                <span>{{item.effect}}</span>
                            </v-tooltip>
                        </v-list-tile-content>

                        <v-list-tile-avatar v-for="unit in item.img" class="class-list-avatar" :key="unit.name" :size="40">
                            <v-tooltip bottom>
                                <template #activator="data">
                                    <img v-on="data.on" :src="unit.img" class="unit-none" @click="clickUnitAvatar(unit.name)" v-if="unit.status === 'NONE'">
                                    <img v-on="data.on" :src="unit.img" class="unit-avaliable" @click="clickUnitAvatar(unit.name)" v-else-if="unit.status === 'AVALIABLE'">
                                    <img v-on="data.on" :src="unit.img" class="unit-active" @click="clickUnitAvatar(unit.name)" v-else-if="unit.status === 'USED'">
                                </template>
                                <span>{{unit.name}}</span>
                            </v-tooltip>
                        </v-list-tile-avatar>
                        
                    </v-list-tile>
                </v-list>
            </v-flex>
            <v-flex xs6 class="my-background-color">
                <v-list style="background: #343a40">
                    <v-list-tile
                        class="class-list"
                        v-for="item in classes"
                        :key="item.name"
                        :style="{ background: item.effective}"
                        avatar
                    >

                        <v-list-tile-content>
                            <v-tooltip top>
                                <template #activator="effect">
                                    <v-list-tile-title class="my-list-content" v-on="effect.on" v-text="item.name"></v-list-tile-title>
                                </template>
                                <span>{{item.effect}}</span>
                            </v-tooltip>
                        </v-list-tile-content>

                        <v-list-tile-avatar class="class-list-avatar" v-for="unit in item.img" :key="unit.name" :size="40">
                            <v-tooltip bottom>
                                <template #activator="data">
                                    <img v-on="data.on" :src="unit.img" class="unit-none" @click="clickUnitAvatar(unit.name)" v-if="unit.status === 'NONE'">
                                    <img v-on="data.on" :src="unit.img" class="unit-avaliable" @click="clickUnitAvatar(unit.name)" v-else-if="unit.status === 'AVALIABLE'">
                                    <img v-on="data.on" :src="unit.img" class="unit-active" @click="clickUnitAvatar(unit.name)" v-else-if="unit.status === 'USED'">
                                </template>
                                <span>{{unit.name}}</span>
                            </v-tooltip>
                        </v-list-tile-avatar>

                        
                    </v-list-tile>
                    <v-list-tile class="class-list my-background-color" avatar>
                        <v-list-tile-content>
                            <v-list-tile-title class="my-list-content" v-text="'색상설명'"></v-list-tile-title>
                        </v-list-tile-content>
                        <v-tooltip top>
                            <template #activator="data">
                                <v-list-tile-avatar v-on="data.on" class="class-list-avatar effect-one" :size="40">
                                    <span></span>
                                </v-list-tile-avatar>
                            </template>
                            <span>첫 시너지 효과</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template #activator="data">
                                <v-list-tile-avatar v-on="data.on" class="class-list-avatar effect-middle" :size="40">
                                    <span></span>
                                </v-list-tile-avatar>
                            </template>
                            <span>시너지 효과가 셋일 때 중간 효과 발동</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template #activator="data">
                                <v-list-tile-avatar v-on="data.on" class="class-list-avatar effect-finish" :size="40">
                                    <span></span>
                                </v-list-tile-avatar>
                            </template>
                            <span>시너지 조건 모두 만족</span>
                        </v-tooltip>

                    </v-list-tile>

                </v-list>
            </v-flex>
        </v-layout>
        
    </v-flex>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                units: 'getUnits',
                classes: 'getClasses',
                specs: 'getSpecs',
                init_length: 'getSynergysLength',
                synergys: 'getSynergys',
                fieldUnits: 'getFieldUnits'
            })
        },
        watch: {

        },
        data:() => ({
            isAdd: false,
            count: 0,
            lastClick: ''
        }),
        created() {
            this.$store.commit('INIT_STATUS', 'NONE');

            setInterval(() => {
                if(this.isAdd) {
                    this.$store.dispatch('UPDATE_FIREBASE')
                    this.isAdd = false;
                }
            }, 30000)
            setInterval(() => {
                let currentTime = (new Date()).getTime()
                if(this.fieldUnits.length >= 6 && (currentTime - this.lastClick) > 29999) {
                    this.$store.dispatch('UPDATE_SYNERGYS');
                    this.lastClick = currentTime + 99999999
                }
            }, 5000)
        },
        methods: {
            clickUnitAvatar(name) {
                this.lastClick = (new Date()).getTime();
                let unit = this.units.find(ele => ele.name === name)
                this.$store.commit('CLICK_UNIT', unit)
                this.$store.commit('INSERT_STORE_UNIT', unit)
                this.isAdd = true;
            }
        }
    }
</script>

<style>
    .class-list>div{
        height: 100% !important;
        font-size:10px !important;
    }
    .class-list-avatar {
        min-width:40px !important;
        width:40px !important;
    }
    .unit-avaliable {
        opacity: 1;
    }
    .unit-none {
        opacity: 0.45;
    }
    .unit-active {
        border: 3px solid yellow;
    }
    .effect-one {
        background: #91a7ff;
        border-radius: 50%;
    }
    .effect-middle {
        background: #63e6be;
        border-radius: 50%;
    }
    .effect-finish {
        background: #fd7e14;
        border-radius: 50%;
    }
    .my-list-content {
        color: white;
        font-weight: bold;
        font-size:13px;
    }
    .my-background-color {
        background: #343a40;
    }
</style>