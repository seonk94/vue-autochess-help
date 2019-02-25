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

            fab
        >
            <v-avatar
            class="my-avater"
            :tile="false"
            :size="50"
            :color="unit.color"
            @click="ClickAvatar(unit)"
            >
                <img :src="unit.img" alt="avatar" width="100%" height="100%">
            </v-avatar>
            
        </v-btn>

        <v-list>
            <v-list-tile>
                <v-list-tile-title>down</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-title>delete</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-menu>
    <v-avatar v-else
    class="my-avater"
    :tile="false"
    :size="50"
    :color="unit.color"
    @click="ClickAvatar(unit)"
    >
        <img :src="unit.img" alt="avatar" width="100%" height="100%">
    </v-avatar>
</template>

<script>
    export default {
        props: {
            isBadge: Boolean,
            isDropDown: Boolean,
            unit: {},
            ClickAvatar: {}
        }, 
        methods: {

        }
    }
</script>

<style scoped>
    .my-avater {
        cursor: pointer;
    }
</style>