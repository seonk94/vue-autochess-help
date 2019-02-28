<template>
    <v-flex xs12>
        <v-layout row wrap>

            <v-flex xs6>
                <v-list>
                    <v-list-tile
                        class="class-list"
                        v-for="item in specs"
                        :key="item.name"
                        avatar
                    >
                        <v-list-tile-content>
                            <v-tooltip top>
                                <template #activator="effect">
                                    <v-list-tile-title v-on="effect.on" v-text="item.name"></v-list-tile-title>
                                </template>
                                <span>{{item.effect}}</span>
                            </v-tooltip>
                        </v-list-tile-content>

                        <v-list-tile-avatar v-for="unit in item.img" class="class-list-avatar" :key="unit.name" :size="20">
                            <v-tooltip bottom>
                                <template #activator="data">
                                    <img v-on="data.on" :src="unit.img" class="unit-none" v-if="unit.status === 'NONE'">
                                    <img v-on="data.on" :src="unit.img" class="unit-avaliable" v-else-if="unit.status === 'AVALIABLE'">
                                    <img v-on="data.on" :src="unit.img" v-else-if="unit.status === 'USED'">
                                </template>
                                <span>{{unit.name}}</span>
                            </v-tooltip>
                        </v-list-tile-avatar>
                        
                    </v-list-tile>
                </v-list>
            </v-flex>
            <v-flex xs6>
                <v-list>
                    <v-list-tile
                        class="class-list"
                        v-for="item in classes"
                        :key="item.name"
                        avatar
                    >

                        <v-list-tile-content>
                            <v-tooltip top>
                                <template #activator="effect">
                                    <v-list-tile-title v-on="effect.on" v-text="item.name"></v-list-tile-title>
                                </template>
                                <span>{{item.effect}}</span>
                            </v-tooltip>
                        </v-list-tile-content>

                        <v-list-tile-avatar class="class-list-avatar" v-for="unit in item.img" :key="unit.name" :size="20">
                            <v-tooltip bottom>
                                <template #activator="data">
                                    <img v-on="data.on" :src="unit.img" class="unit-none" v-if="unit.status === 'NONE'">
                                    <img v-on="data.on" :src="unit.img" class="unit-avaliable" v-else-if="unit.status === 'AVALIABLE'">
                                    <img v-on="data.on" :src="unit.img" v-else-if="unit.status === 'USED'">
                                </template>
                                <span>{{unit.name}}</span>
                            </v-tooltip>
                        </v-list-tile-avatar>

                        
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
                fieldUnits: 'getFieldUnits',
                storeUnits: 'getStoreUnits'
            })
        },
        watch: {
            storeUnits() {
                this.classes.forEach(ele => this.initNone(ele, 'NONE'))
                this.specs.forEach(ele => this.initNone(ele, 'NONE'))
                
                this.storeUnits.forEach(unit => this.moveUnit(unit, 'AVALIABLE'))
                this.fieldUnits.forEach(unit => this.moveUnit(unit, 'USED'))
            },
            fieldUnits() {
                this.classes.forEach(ele => this.initNone(ele, 'NONE'))
                this.specs.forEach(ele => this.initNone(ele, 'NONE'))
                
                this.storeUnits.forEach(unit => this.moveUnit(unit, 'AVALIABLE'))
                this.fieldUnits.forEach(unit => this.moveUnit(unit, 'USED'))
            }
        },
        data:() => ({
            classes: [
                { name: 'Assassin', img: [], index: 0, effect: '+10% (3), +20% (6) 확률로 암살자가 4배의 피해를 입습니다.'},
                { name: 'Demon Hunter', img: [], index: 0, effect: '(1) 상대방이 악마 효과를 잃습니다.\n (2) 당신은 악마 효과를 절대 잃지 않습니다.'},
                { name: 'Druid', img: [], index: 0, effect: '(2) 드루이드들은 2유닛들만으로 성이 될 수 있습니다.\n (4) 드루이드들은 2유닛들만으로 3성이 될 수 있습니다.'},
                { name: 'Hunter', img: [], index: 0, effect: '모든 사냥꾼들에게 추가 공격력 +25%(3), +60%(6)'},
                { name: 'Knight', img: [], index: 0, effect: '+25% (2), +35%(4), +45%(6) 확률로 기사들에게 방어막이 생성됩니다.'},
                { name: 'Mage', img: [], index: 0, effect: '모든 적군에게 마법 방어력 -50(3), -30(6) 부여'},
                { name: 'Mech', img: [], index: 0, effect: '모든 아군 기계에게 10 (2), 20(4) HP 리젠'},
                { name: 'Shaman', img: [], index: 0, effect: '(2) 라운드가 시작 될 때 무작위 적군 1명에게 주술 시전'},
                { name: 'Warlock', img: [], index: 0, effect: '모든 아군에게 흡혈 15% (3), 25% (6)'},
                { name: 'Warrior', img: [], index: 0, effect: '모든 아군 전사에게 추가 방어력 +6 (3), +8 (6), +10 (9)'}
            ],
            specs: [
                { name : 'Beast', img: [], index: 0, effect: '모든 아군에게 추가 공격력 +10% (2), +15% (4), +20% (6)'},
                { name : 'Demon', img: [], index: 0, effect: '아군에 한 종류의 악마만 있을경우 50% 추가 순수 데미지'},
                { name : 'Dwarf', img: [], index: 0, effect: '공격 범위 +300'},
                { name : 'Ogre', img: [], index: 0, effect: '+10% Max Hp'},
                { name : 'Dragon', img: [], index: 0, effect: '(3) 라운드가 시작 될 때 모든 아군 용이 마나 100을 가지고 시작'},
                { name : 'Elementals', img: [], index: 0, effect: '모든 아군 원소 (2), 전체 (4) 를 공격하는 근접 적은 30% 확률로 돌이 됨'},
                { name : 'Elf', img: [], index: 0, effect: '모든 아군 엘프에게 회피 +25% (3), +25% (6)'},
                { name : 'Goblin', img: [], index: 0, effect: '무작위 아군 1명 (3), 전체 아군 고블린 (6) 에게 +15 방어력과 10HP 리젠'},
                { name : 'Human', img: [], index: 0, effect: '모든 아군 인간은 곡격할 때 20% (2), 25% (4), 30% (6) 확률로 적을 잠시동안 무장 해제'},
                { name : 'Naga', img: [], index: 0, effect: '모든 아군에게 마법 방어력 +20 (2), +40 (4)'},
                { name : 'Orc', img: [], index: 0, effect: '모든 아군 오크에게 체력 +250 (2), +350 (4)'}, 
                { name : 'Troll', img: [], index: 0, effect: '모든 아군 트롤 (2), 전체 (4) 에게 공격속도 35'},
                { name : 'Undead', img: [], index: 0, effect: '모든 적군에게 방어력 -5 (2), -7 (4)'},
                { name : 'Satyr', img: [], index: 0, effect: '필드 유닛 은신'}
            ]
        }),
        mounted() {
            if(this.units.length > 1) {
                this.units.forEach(unit => {
                    let spec
                    if(Array.isArray(unit.spec)){
                        unit.spec.forEach(ele => {
                            spec = this.specs.find(tmp => this.equalName(tmp.name, ele));
                            spec.img = [...spec.img, {name: unit.name, img: unit.img, status: 'NONE'} ]
                        })
                    } else {
                        spec = this.specs.find(ele => this.equalName(ele.name, unit.spec));
                        spec.img = [...spec.img, {name: unit.name, img: unit.img, status: 'NONE'}]
                    }

                    let cls = this.classes.find(ele => this.equalName(ele.name, unit.class))
                    cls.img = [ ...cls.img, {name: unit.name, img: unit.img, status: 'NONE'} ]
                })
            }
        },
        methods: {
            moveUnit(unit, status) {
                let cls = this.classes.find(ele => this.equalName(ele.name, unit.class))
                let clsImg = cls.img.find(ele => ele.name === unit.name);
                clsImg.status = status

                let spec
                let specImg
                Array.isArray(unit.spec) 
                    ?   unit.spec.forEach(tmp => {
                            spec = this.specs.find(ele => this.equalName(ele.name, tmp));
                            specImg = spec.img.find(ele => ele.name === unit.name);
                            specImg.status = status
                        })
                    :   spec = this.specs.find(ele => this.equalName(ele.name, unit.spec));
                        specImg = spec.img.find(ele => ele.name === unit.name);
                        specImg.status = status
            },
            initNone(ele, status) {
                ele.img.forEach(img => {
                    img.status = status
                })
            },
            equalName(name1, name2) {
                return name1.toLowerCase() === name2.toLowerCase()
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
        min-width:20px !important;
        width:20px !important;
    }
    .unit-avaliable {
        opacity: 0.55;
    }
    .unit-none {
        opacity: 0.15;
    }
</style>