<template>

    <v-badge class="my-overlap-badge" overlap right v-if="isBadge === true">
        <span slot="badge">{{unit.level}}</span>
        <v-avatar
            :color="unit.color"
        >
            <v-tooltip top>
                <template #activator="data">
                    <img class="my-button-img" v-on="data.on" :src="unit.img" :alt="unit.name" v-if="unit.img" @click="ClickMove(unit)" @click.right="clickRight($event, unit)">
                    <img class="my-button-img" v-on="data.on" :src="require('../../assets/logo.svg')" :alt="unit.name" @click="ClickMove(unit)" @click.right="clickRight($event, unit)" v-else>
                </template>
                <span>{{unit.name}}</span>
            </v-tooltip>   
        </v-avatar>
            
    </v-badge>

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
            clickRight: Function
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
        width: 42px;
        height: 42px;
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
        transition: 0.1s
    }
</style>