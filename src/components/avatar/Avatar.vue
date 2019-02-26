<template>
    <v-layout row wrap v-if="isBadge === true">
        <v-flex xs12>
            <v-badge class="my-overlap-badge" overlap right>
                <span slot="badge">{{unit.level}}</span>
                <v-menu bottom left >                    
                        <v-btn
                            slot="activator"
                            :color="unit.color"
                            fab
                        >
                            <img class="my-button-img" :src="unit.img" :alt="unit.name" v-if="unit.img">
                            <img class="my-button-img" :src="require('../../assets/logo.svg')" :alt="unit.name" v-else>
                        </v-btn>
                    <v-list>
                        <v-list-tile @click="ClickMove(unit)">
                            <v-list-tile-title>move</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile @click="ClickSell(unit)">
                            <v-list-tile-title>sell</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                    
                </v-menu>
            </v-badge>
        </v-flex>
    </v-layout>
    <span v-else>
        <v-hover>
            <v-avatar 
            slot-scope="{hover}"
            class="my-avater"
            :tile="false"
            :size="50"
            :color="unit.color"
            >
                <v-img class="my-avatar-img" :src="unit.img" @click="ClickNoBadge(unit)" :alt="unit.name">
                    <v-expand-transition>
                        <div
                            v-if="hover"
                            class="my-hover"
                            :style="{background: unit.color}"
                        >
                            {{unit.name}}
                        </div>
                    </v-expand-transition>
                </v-img>
            </v-avatar>
        </v-hover>
    </span>
</template>

<script>
    export default {
        props: {
            isBadge: Boolean,
            isDropDown: Boolean,
            unit: {},
            ClickNoBadge: Function,
            ClickMove: Function,
            ClickSell: Function
        }, 
        computed: {
            
        },
        methods: {

        }
    }
</script>

<style scoped>
    .my-avater {
        cursor: pointer;
    }
    .my-avatar-img {
        width: 90%;
        height: 90%;
    }
    .my-button-img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .my-avatar-badge-img {
        width: 75%;
        height: 75%;
    }
    .my-overlap-badge >span {
        bottom: -8px;
        left: 8px;
        color:red;
    }
    .my-hover{
        height: 100%;
        width: 100%;
        padding: 4px;
        font-size: 12px;
        text-align: center;

    }
</style>