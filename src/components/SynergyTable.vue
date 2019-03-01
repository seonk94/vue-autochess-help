<template>
    <v-flex xs12>
        <v-layout row wrap>

            <v-flex xs6>
                <v-list>
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
                                    <v-list-tile-title v-on="effect.on" v-text="item.name"></v-list-tile-title>
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
            <v-flex xs6>
                <v-list>
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
                                    <v-list-tile-title v-on="effect.on" v-text="item.name"></v-list-tile-title>
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
                    <v-list-tile class="class-list" avatar>
                        <v-list-tile-content>
                            <v-list-tile-title v-text="'색상설명'"></v-list-tile-title>
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
                { name: 'Assassin', img: [], effective: '#fafafa', effectIndex: [3, 6, 9], index: 0, effect: '+10% 확률로 암살자가 3 (3), 4 (6), 5 (9)배의 피해를 입습니다.'},
                { name: 'Demon Hunter', img: [], effective: '#fafafa', effectIndex: [1, 2], index: 0, effect: '(1) 상대방이 악마 효과를 잃습니다.\n (2) 당신은 악마 효과를 절대 잃지 않습니다.'},
                { name: 'Druid', img: [], effective: '#fafafa', effectIndex: [2, 4], index: 0, effect: '(2) 드루이드들은 2유닛들만으로 성이 될 수 있습니다.\n (4) 드루이드들은 2유닛들만으로 3성이 될 수 있습니다.'},
                { name: 'Hunter', img: [], effective: '#fafafa', effectIndex: [3, 6], index: 0, effect: '모든 사냥꾼들에게 추가 공격력 +25%(3), +60%(6)'},
                { name: 'Knight', img: [], effective: '#fafafa', effectIndex: [2, 4, 6], index: 0, effect: '+25% (2), +35%(4), +45%(6) 확률로 기사들에게 방어막이 생성됩니다.'},
                { name: 'Mage', img: [], effective: '#fafafa', effectIndex: [3, 6], index: 0, effect: '모든 적군에게 마법 방어력 -50(3), -30(6) 부여'},
                { name: 'Mech', img: [], effective: '#fafafa', effectIndex: [2, 4], index: 0, effect: '모든 아군 기계에게 10 (2), 20(4) HP 리젠'},
                { name: 'Shaman', img: [], effective: '#fafafa', effectIndex: [2], index: 0, effect: '(2) 라운드가 시작 될 때 무작위 적군 1명에게 주술 시전'},
                { name: 'Warlock', img: [], effective: '#fafafa', effectIndex: [3, 6], index: 0, effect: '모든 아군에게 흡혈 15% (3), 25% (6)'},
                { name: 'Warrior', img: [], effective: '#fafafa', effectIndex: [3, 6, 9], index: 0, effect: '모든 아군 전사에게 추가 방어력 +6 (3), +8 (6), +10 (9)'}
            ],
            specs: [
                { name : 'Beast', img: [], effective: '#fafafa', effectIndex: [2, 4, 6], index: 0, effect: '모든 아군에게 추가 공격력 +10% (2), +15% (4), +20% (6)'},
                { name : 'Demon', img: [], effective: '#fafafa', effectIndex: [1], index: 0, effect: '아군에 한 종류의 악마만 있을경우 50% 추가 순수 데미지'},
                { name : 'Dwarf', img: [], effective: '#fafafa', effectIndex: [2], index: 0, effect: '공격 범위 +300'},
                { name : 'Ogre', img: [], effective: '#fafafa', effectIndex: [1], index: 0, effect: '+10% Max Hp'},
                { name : 'Dragon', img: [], effective: '#fafafa', effectIndex: [3], index: 0, effect: '(3) 라운드가 시작 될 때 모든 아군 용이 마나 100을 가지고 시작'},
                { name : 'Elementals', img: [], effective: '#fafafa', effectIndex: [2, 4], index: 0, effect: '모든 아군 원소 (2), 전체 (4) 를 공격하는 근접 적은 30% 확률로 돌이 됨'},
                { name : 'Elf', img: [], effective: '#fafafa', effectIndex: [3, 6, 9], index: 0, effect: '모든 아군 엘프에게 회피 +25% (3), +25% (6), +25% (9)'},
                { name : 'Goblin', img: [], effective: '#fafafa', effectIndex: [3, 6], index: 0, effect: '무작위 아군 1명 (3), 전체 아군 고블린 (6) 에게 +15 방어력과 10HP 리젠'},
                { name : 'Human', img: [], effective: '#fafafa', effectIndex: [2, 4, 6], index: 0, effect: '모든 아군 인간은 곡격할 때 20% (2), 25% (4), 30% (6) 확률로 적을 잠시동안 무장 해제'},
                { name : 'Naga', img: [], effective: '#fafafa', effectIndex: [2, 4], index: 0, effect: '모든 아군에게 마법 방어력 +30 (2), +30 (4)'},
                { name : 'Orc', img: [], effective: '#fafafa', effectIndex: [2, 4], index: 0, effect: '모든 아군 오크에게 체력 +200 (2), +300 (4)'}, 
                { name : 'Troll', img: [], effective: '#fafafa', effectIndex: [2, 4], index: 0, effect: '모든 아군 트롤 (2), 전체 (4) 에게 공격속도 35'},
                { name : 'Undead', img: [], effective: '#fafafa', effectIndex: [2, 4], index: 0, effect: '모든 적군에게 방어력 -4 (2), -6 (4)'},
                { name : 'Satyr', img: [], effective: '#fafafa', effectIndex: [1], index: 0, effect: '필드 유닛 은신'}
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
                cls.effective = '#fafafa'
                let clsImg = cls.img.find(ele => ele.name === unit.name);
                clsImg.status = status
                
                let usedIndex = 0;
                let spec
                let specImg
                if(Array.isArray(unit.spec)) {
                    unit.spec.forEach(tmp => {
                        usedIndex = 0;
                        spec = this.specs.find(ele => this.equalName(ele.name, tmp));
                        if(spec.name === 'Demon') console.log('배열임', spec)
                        spec.effective = '#fafafa'
                        specImg = spec.img.find(ele => ele.name === unit.name);
                        specImg.status = status
                        spec.img.forEach(ele => {
                            if(ele.status === 'USED') usedIndex++;
                        })
                        spec.index = usedIndex;
                        this.changeEffective(spec);

                    })
                } else {
                    usedIndex = 0;
                    spec = this.specs.find(ele => this.equalName(ele.name, unit.spec));
                    if(spec.name === 'Demon') console.log(spec)
                    spec.effective = '#fafafa'
                    specImg = spec.img.find(ele => ele.name === unit.name);
                    specImg.status = status
                    spec.img.forEach(ele => {
                        if(ele.status === 'USED') usedIndex++;
                    })
                    spec.index = usedIndex;
                    this.changeEffective(spec);

                }
                
                usedIndex = 0;
                cls.img.forEach(ele => {
                    if(ele.status === 'USED') usedIndex++;
                })
                cls.index = usedIndex;
                this.changeEffective(cls);

                
            },
            initNone(ele, status) {
                ele.img.forEach(img => {
                    img.status = status
                })
            },
            equalName(name1, name2) {
                return name1.toLowerCase() === name2.toLowerCase()
            },
            changeEffective(obj) {
                if(obj.effectIndex.length === 3) {
                    if(obj.index >= obj.effectIndex[0]) obj.effective = '#91a7ff';
                    if(obj.index >= obj.effectIndex[1]) obj.effective = '#63e6be';
                    if(obj.index >= obj.effectIndex[2]) obj.effective = '#fd7e14'
                } else if(obj.effectIndex.length === 2) {
                    if(obj.index >= obj.effectIndex[0]) obj.effective = '#91a7ff';
                    if(obj.index >= obj.effectIndex[1]) obj.effective = '#fd7e14';
                } else if(obj.effectIndex.length === 1) {
                    if(obj.index >= obj.effectIndex[0]) obj.effective = '#fd7e14';
                } 


            },
            clickUnitAvatar(name) {
                let unit = this.units.find(ele => ele.name === name)
                this.$store.commit('INSERT_STORE_UNIT', unit)
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
        opacity: 0.6;
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
</style>