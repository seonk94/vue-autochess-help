<template>
    <v-menu bottom left v-if="isBadge === true">
        <!-- <v-badge  overlap :color="unit.color">
            <span slot="badge">{{unit.level}}</span>
            <v-avatar
            class="my-avater"
            :tile="false"
            :size="50"
            :color="unit.color"
            @click="clickAvatar(unit)"
            >
                <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" width="100%" height="100%">
            </v-avatar>
        </v-badge> -->

        <v-btn
            slot="activator"
            :color="unit.color"
            fab
        >
            <v-avatar
            class="my-avater"
            :tile="false"
            :size="50"
            :color="unit.color"
            >
                <img class="my-avatar-badge-img" :src="require('../../assets/logo.svg')" :alt="unit.name" width="90%" height="90%">
            </v-avatar>
            
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
    <v-avatar v-else
    class="my-avater"
    :tile="false"
    :size="50"
    :color="unit.color"
    >
        <img class="my-avatar-img" :src="require('../../assets/logo.svg')" @click="ClickNoBadge(unit)" :alt="unit.name">
    </v-avatar>
</template>

<script>
    export default {
        props: {
            isBadge: Boolean,
            isDropDown: Boolean,
            unit: {},
            ClickNoBadge: Function,
            ClickMove: {},
            ClickSell: {}
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
        height: 90%
    }
    .my-avatar-badge-img {
        width: 100%;
        height: 100%;
    }
</style>