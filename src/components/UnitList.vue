<template>
    <div class="text-xs-center">
        <span v-for="(unit, index) in units" :key="index">
            <Avatar :unit="unit" :isDropDown="false" :isBadge="false" :ClickNoBadge="avatarClick"/>
        </span>
    </div>
</template>

<script>
    import Avatar from './avatar/Avatar.vue'
    import { mapGetters } from 'vuex'
    export default {
        data: () => ({
            
        }),
        computed: {
            ...mapGetters({
                units: 'getUnits'
            })
        },
        methods: {
            avatarClick(unit) {
                this.$store.commit('INSERT_STORE_UNIT', unit)
            }
        },
        components: {
            Avatar
        }
    }
</script>

<style scoped>

</style>