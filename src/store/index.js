/* eslint-disable no-console */
import Vuex from 'vuex';
import Vue from 'vue';
import * as unit from '../service/unit'
import randomString from 'random-string'
import firestore from '../config/firestore'

Vue.use(Vuex);

const db = firestore.firestore();

export const store = new Vuex.Store({
    state: {
        units: unit.units,
        fieldUnits: [],
        storeUnits: [],
        costRank: [
            {cost: '1$', units: []},
            {cost: '2$', units: []},
            {cost: '3$', units: []},
            {cost: '4$', units: []},
            {cost: '5$', units: []}
        ],
        classes: [
            { name: 'Assassin', img: [], effective: '#343a40', effectIndex: [3, 6, 9], index: 0, effect: '+10% 확률로 암살자가 3 (3), 4 (6), 5 (9)배의 피해를 입습니다.'},
            { name: 'Demon Hunter', img: [], effective: '#343a40', effectIndex: [1, 2], index: 0, effect: '(1) 상대방이 악마 효과를 잃습니다.\n (2) 당신은 악마 효과를 절대 잃지 않습니다.'},
            { name: 'Druid', img: [], effective: '#343a40', effectIndex: [2, 4], index: 0, effect: '(2) 드루이드들은 2유닛들만으로 성이 될 수 있습니다.\n (4) 드루이드들은 2유닛들만으로 3성이 될 수 있습니다.'},
            { name: 'Hunter', img: [], effective: '#343a40', effectIndex: [3, 6], index: 0, effect: '모든 사냥꾼들에게 추가 공격력 +25%(3), +60%(6)'},
            { name: 'Knight', img: [], effective: '#343a40', effectIndex: [2, 4, 6], index: 0, effect: '+25% (2), +35%(4), +45%(6) 확률로 기사들에게 방어막이 생성됩니다.'},
            { name: 'Mage', img: [], effective: '#343a40', effectIndex: [3, 6], index: 0, effect: '모든 적군에게 마법 방어력 -50(3), -30(6) 부여'},
            { name: 'Mech', img: [], effective: '#343a40', effectIndex: [2, 4], index: 0, effect: '모든 아군 기계에게 10 (2), 20(4) HP 리젠'},
            { name: 'Shaman', img: [], effective: '#343a40', effectIndex: [2], index: 0, effect: '(2) 라운드가 시작 될 때 무작위 적군 1명에게 주술 시전'},
            { name: 'Warlock', img: [], effective: '#343a40', effectIndex: [3, 6], index: 0, effect: '모든 아군에게 흡혈 15% (3), 25% (6)'},
            { name: 'Warrior', img: [], effective: '#343a40', effectIndex: [3, 6, 9], index: 0, effect: '모든 아군 전사에게 추가 방어력 +6 (3), +8 (6), +10 (9)'}
        ],
        specs: [
            { name : 'Beast', img: [], effective: '#343a40', effectIndex: [2, 4, 6], index: 0, effect: '모든 아군에게 추가 공격력 +10% (2), +15% (4), +20% (6)'},
            { name : 'Demon', img: [], effective: '#343a40', effectIndex: [1], index: 0, effect: '아군에 한 종류의 악마만 있을경우 50% 추가 순수 데미지'},
            { name : 'Dwarf', img: [], effective: '#343a40', effectIndex: [2], index: 0, effect: '공격 범위 +300'},
            { name : 'Ogre', img: [], effective: '#343a40', effectIndex: [1], index: 0, effect: '+10% Max Hp'},
            { name : 'Dragon', img: [], effective: '#343a40', effectIndex: [3], index: 0, effect: '(3) 라운드가 시작 될 때 모든 아군 용이 마나 100을 가지고 시작'},
            { name : 'Elementals', img: [], effective: '#343a40', effectIndex: [2, 4], index: 0, effect: '모든 아군 원소 (2), 전체 (4) 를 공격하는 근접 적은 30% 확률로 돌이 됨'},
            { name : 'Elf', img: [], effective: '#343a40', effectIndex: [3, 6, 9], index: 0, effect: '모든 아군 엘프에게 회피 +25% (3), +25% (6), +25% (9)'},
            { name : 'Goblin', img: [], effective: '#343a40', effectIndex: [3, 6], index: 0, effect: '무작위 아군 1명 (3), 전체 아군 고블린 (6) 에게 +15 방어력과 10HP 리젠'},
            { name : 'Human', img: [], effective: '#343a40', effectIndex: [2, 4, 6], index: 0, effect: '모든 아군 인간은 곡격할 때 20% (2), 25% (4), 30% (6) 확률로 적을 잠시동안 무장 해제'},
            { name : 'Naga', img: [], effective: '#343a40', effectIndex: [2, 4], index: 0, effect: '모든 아군에게 마법 방어력 +30 (2), +30 (4)'},
            { name : 'Orc', img: [], effective: '#343a40', effectIndex: [2, 4], index: 0, effect: '모든 아군 오크에게 체력 +200 (2), +300 (4)'}, 
            { name : 'Troll', img: [], effective: '#343a40', effectIndex: [2, 4], index: 0, effect: '모든 아군 트롤 (2), 전체 (4) 에게 공격속도 35'},
            { name : 'Undead', img: [], effective: '#343a40', effectIndex: [2, 4], index: 0, effect: '모든 적군에게 방어력 -4 (2), -6 (4)'},
            { name : 'Satyr', img: [], effective: '#343a40', effectIndex: [1], index: 0, effect: '필드 유닛 은신'}
        ]
    },
    getters: {
        getUnits(state) {
            return state.units
        },
        getFieldUnits(state) {
            return state.fieldUnits
        },
        getStoreUnits(state) {
            return state.storeUnits
        },
        getClasses(state) {
            return state.classes
        },
        getSpecs(state) {
            return state.specs
        },
        getCostRank(state) {
            return state.costRank
        }
    },
    mutations: {
        INSERT_STORE_UNIT(state, unit) {
            if(state.storeUnits.length !== 8) {
                let tempUnit = { ...unit };
                if(tempUnit.id === undefined) tempUnit.id = randomString();

                state.storeUnits = [ ...state.storeUnits, tempUnit ]
            }
            if(state.fieldUnits.find(ele => ele.name === unit.name) === undefined) {
                if(Array.isArray(unit.spec)) {
                    unit.spec.forEach(ele => {
                        let spec = state.specs.find(temp => (temp.name) === (ele))
                        let specImg = spec.img.find(temp => (temp.name) === (unit.name));

                        specImg.status = 'AVALIABLE'
                    })
                } else {
                    let spec = state.specs.find(temp => (temp.name) === (unit.spec));
                    let specImg = spec.img.find(temp => temp.name === unit.name);

                    specImg.status = 'AVALIABLE';
                }

                let cls = state.classes.find(temp => (temp.name) === (unit.class));
                let clsImg = cls.img.find(temp => temp.name === unit.name);

                clsImg.status = 'AVALIABLE';
            }
        },
        INSERT_FIELD_UNIT(state, unit) {
            if(state.fieldUnits.length !== 12) {
                state.fieldUnits = [ ...state.fieldUnits, unit ]
            }
            if(Array.isArray(unit.spec)) {
                unit.spec.forEach(ele => {
                    let spec = state.specs.find(temp => (temp.name) === ele)
                    let specImg = spec.img.find(temp => (temp.name) === unit.name)

                    if(specImg.status === 'USED') {
                        // 똑같은게 이미 있다.
                    } else {
                        // 처음 들어온다.
                        specImg.status = 'USED'
                        spec.index++;
                        if(spec.effectIndex.length === 3) {
                            if(spec.index < spec.effectIndex[0]) spec.effective = '#343a40'
                            if(spec.index >= spec.effectIndex[0]) spec.effective = '#91a7ff';
                            if(spec.index >= spec.effectIndex[1]) spec.effective = '#63e6be';
                            if(spec.index >= spec.effectIndex[2]) spec.effective = '#fd7e14'
                        } else if(spec.effectIndex.length === 2) {
                            if(spec.index < spec.effectIndex[0]) spec.effective = '#343a40'
                            if(spec.index >= spec.effectIndex[0]) spec.effective = '#91a7ff';
                            if(spec.index >= spec.effectIndex[1]) spec.effective = '#fd7e14';
                        } else if(spec.effectIndex.length === 1) {
                            if(spec.index < spec.effectIndex[0]) spec.effective = '#343a40'
                            if(spec.index >= spec.effectIndex[0]) spec.effective = '#fd7e14';
                        } 
                    }

                })
            } else {
                let spec = state.specs.find(temp => (temp.name) === (unit.spec))
                let specImg = spec.img.find(temp => temp.name === unit.name);

                if(specImg.status === 'USED') {
                    // 이미 필드에 있다.
                } else {
                    // 처음 올라왔다.
                    specImg.status = 'USED'
                    spec.index++;
                    if(spec.effectIndex.length === 3) {
                        if(spec.index < spec.effectIndex[0]) spec.effective = '#343a40'
                        if(spec.index >= spec.effectIndex[0]) spec.effective = '#91a7ff';
                        if(spec.index >= spec.effectIndex[1]) spec.effective = '#63e6be';
                        if(spec.index >= spec.effectIndex[2]) spec.effective = '#fd7e14'
                    } else if(spec.effectIndex.length === 2) {
                        if(spec.index < spec.effectIndex[0]) spec.effective = '#343a40'
                        if(spec.index >= spec.effectIndex[0]) spec.effective = '#91a7ff';
                        if(spec.index >= spec.effectIndex[1]) spec.effective = '#fd7e14';
                    } else if(spec.effectIndex.length === 1) {
                        if(spec.index < spec.effectIndex[0]) spec.effective = '#343a40'
                        if(spec.index >= spec.effectIndex[0]) spec.effective = '#fd7e14';
                    } 
                }
            }

            let cls = state.classes.find(temp => temp.name === unit.class)
            let clsImg = cls.img.find(temp => temp.name === unit.name)

            if(clsImg.status === 'USED') {
                // 처음 들어온다.
            } else {
                clsImg.status = 'USED'
                cls.index++;
                if(cls.effectIndex.length === 3) {
                    if(cls.index < cls.effectIndex[0]) cls.effective = '#343a40'
                    if(cls.index >= cls.effectIndex[0]) cls.effective = '#91a7ff';
                    if(cls.index >= cls.effectIndex[1]) cls.effective = '#63e6be';
                    if(cls.index >= cls.effectIndex[2]) cls.effective = '#fd7e14'
                } else if(cls.effectIndex.length === 2) {
                    if(cls.index < cls.effectIndex[0]) cls.effective = '#343a40'
                    if(cls.index >= cls.effectIndex[0]) cls.effective = '#91a7ff';
                    if(cls.index >= cls.effectIndex[1]) cls.effective = '#fd7e14';
                } else if(cls.effectIndex.length === 1) {
                    if(cls.index < cls.effectIndex[0]) cls.effective = '#343a40'
                    if(cls.index >= cls.effectIndex[0]) cls.effective = '#fd7e14';
                } 
            }

        },
        DELETE_STORE_UNIT(state, unit) {
            state.storeUnits = state.storeUnits.filter(ele => ele.id !== unit.id )

            if(state.fieldUnits.find(ele => ele.name === unit.name) === undefined) {
                if(Array.isArray(unit.spec)) {
                    unit.spec.forEach(ele => {
                        let spec = state.specs.find(temp => (temp.name) === ele)
                        let specImg = spec.img.find(temp => (temp.name) === unit.name);

                        specImg.status = 'NONE'
                    })
                } else {
                    let spec = state.specs.find(temp => (temp.name) === (unit.spec));
                    let specImg = spec.img.find(temp => temp.name === unit.name);

                    specImg.status = 'NONE';
                }

                let cls = state.classes.find(temp => (temp.name) === (unit.class));
                let clsImg = cls.img.find(temp => temp.name === unit.name);

                clsImg.status = 'NONE';
            }
        },
        DELETE_FIELD_UNIT(state, unit) {
            state.fieldUnits = state.fieldUnits.filter(ele => ele.id !== unit.id )

            if(Array.isArray(unit.spec)) {
                unit.spec.forEach(ele => {
                    let spec = state.specs.find(temp => (temp.name) === ele)
                    let specImg = spec.img.find(temp => temp.name === unit.name)

                    if(state.fieldUnits.find(temp => temp.name === unit.name) !== undefined) {
                        //지웟는데 또 아직 남아있음.
                        //아무것도 안한다.
                    }  else {
                        if(state.storeUnits.find(temp => temp.name === unit.name) !== undefined) {
                            specImg.status = 'AVALIABLE'
                        } else {
                            specImg.status = 'NONE'
                        }
                        spec.index--;
                        if(spec.effectIndex.length === 3) {
                            if(spec.index < spec.effectIndex[0]) spec.effective = '#343a40'
                            if(spec.index >= spec.effectIndex[0]) spec.effective = '#91a7ff';
                            if(spec.index >= spec.effectIndex[1]) spec.effective = '#63e6be';
                            if(spec.index >= spec.effectIndex[2]) spec.effective = '#fd7e14'
                        } else if(spec.effectIndex.length === 2) {
                            if(spec.index < spec.effectIndex[0]) spec.effective = '#343a40'
                            if(spec.index >= spec.effectIndex[0]) spec.effective = '#91a7ff';
                            if(spec.index >= spec.effectIndex[1]) spec.effective = '#fd7e14';
                        } else if(spec.effectIndex.length === 1) {
                            if(spec.index < spec.effectIndex[0]) spec.effective = '#343a40'
                            if(spec.index >= spec.effectIndex[0]) spec.effective = '#fd7e14';
                        } 
                    }

                })
            } else {
                let spec = state.specs.find(temp => temp.name === unit.spec)
                let specImg = spec.img.find(temp => temp.name === unit.name)

                if(state.fieldUnits.find(temp => temp.name === unit.name) !== undefined) {
                    //지웟는데 또 아직 남아있음.
                    //아무것도 안한다.
                }  else {
                    if(state.storeUnits.find(temp => temp.name === unit.name) !== undefined) {
                        specImg.status = 'AVALIABLE'
                    } else {
                        specImg.status = 'NONE'
                    }
                    spec.index--;
                    if(spec.effectIndex.length === 3) {
                        if(spec.index < spec.effectIndex[0]) spec.effective = '#343a40'
                        if(spec.index >= spec.effectIndex[0]) spec.effective = '#91a7ff';
                        if(spec.index >= spec.effectIndex[1]) spec.effective = '#63e6be';
                        if(spec.index >= spec.effectIndex[2]) spec.effective = '#fd7e14'
                    } else if(spec.effectIndex.length === 2) {
                        if(spec.index < spec.effectIndex[0]) spec.effective = '#343a40'
                        if(spec.index >= spec.effectIndex[0]) spec.effective = '#91a7ff';
                        if(spec.index >= spec.effectIndex[1]) spec.effective = '#fd7e14';
                    } else if(spec.effectIndex.length === 1) {
                        if(spec.index < spec.effectIndex[0]) spec.effective = '#343a40'
                        if(spec.index >= spec.effectIndex[0]) spec.effective = '#fd7e14';
                    } 
                }
            }

            let cls = state.classes.find(temp => (temp.name).toLowerCase() === (unit.class).toLowerCase());
            let clsImg = cls.img.find(temp => temp.name === unit.name);

            if(state.fieldUnits.find(temp => temp.name === unit.name) !== undefined) {
                // 이미 남아있따..
            } else {
                if(state.storeUnits.find(temp => temp.name === unit.name) !== undefined) {
                    clsImg.status = 'AVALIABLE'
                } else {
                    clsImg.status = 'NONE'
                }
                cls.index--;
                if(cls.effectIndex.length === 3) {
                    if(cls.index < cls.effectIndex[0]) cls.effective = '#343a40'
                    if(cls.index >= cls.effectIndex[0]) cls.effective = '#91a7ff';
                    if(cls.index >= cls.effectIndex[1]) cls.effective = '#63e6be';
                    if(cls.index >= cls.effectIndex[2]) cls.effective = '#fd7e14'
                } else if(cls.effectIndex.length === 2) {
                    if(cls.index < cls.effectIndex[0]) cls.effective = '#343a40'
                    if(cls.index >= cls.effectIndex[0]) cls.effective = '#91a7ff';
                    if(cls.index >= cls.effectIndex[1]) cls.effective = '#fd7e14';
                } else if(cls.effectIndex.length === 1) {
                    if(cls.index < cls.effectIndex[0]) cls.effective = '#343a40'
                    if(cls.index >= cls.effectIndex[0]) cls.effective = '#fd7e14';
                } 
            }
            // status, index, effect 다 변경.
        },
        COMBINATION_FIELD_UNITS(state, arr) {
            let findUnit = state.fieldUnits.findIndex(ele => ele.id === arr[0].id)
            state.fieldUnits[findUnit].level = state.fieldUnits[findUnit].level+1
            let deleteUnit1 = state.fieldUnits.findIndex(ele => ele.id === arr[1].id)
            state.fieldUnits.splice(deleteUnit1, 1);
            let deleteUnit2 = state.fieldUnits.findIndex(ele => ele.id === arr[2].id);
            state.fieldUnits.splice(deleteUnit2, 1);
        },
        INIT_STATUS(state, status) {
            state.units.forEach(unit => {
                if(Array.isArray(unit.spec)) {

                    unit.spec.forEach(ele => {
                        let spec = state.specs.find(temp => (temp.name).toLowerCase() === ele.toLowerCase())
                        spec.img = [ ...spec.img, { name: unit.name, img: unit.img, status: status }]
                    })
                } else {
                    let spec = state.specs.find(temp => (temp.name).toLowerCase() === (unit.spec).toLowerCase())
                    spec.img = [ ...spec.img, { name: unit.name, img: unit.img, status: status }]
                }

                let cls = state.classes.find(temp => (temp.name).toLowerCase() === (unit.class).toLowerCase())
                cls.img = [ ...cls.img, { name: unit.name, img: unit.img, status: status }]
            })
        },
        CLICK_UNIT(state, unit) {
            let clickUnit = state.units.find(ele => ele.name === unit.name);
            if(clickUnit.reference < 10) {
                clickUnit.reference++;
            }
        },
        INIT_REFERENCE(state) {
            state.units.forEach(unit => {
                unit.reference = 0
            })
        },
        GET_REFERENCE(state, ref) {
            let sortRef = Object.keys(ref).sort((a, b) => { return ref[b].reference - ref[a].reference})
            sortRef.forEach(unit => {
                let tempUnit = state.units.find(ele => ele.name === unit)
                let tempCostRank = state.costRank.find(ele => ele.cost === tempUnit.cost);
                tempCostRank.units.push(tempUnit);
            })
        }
    },
    actions: {
        UPDATE_FIREBASE({state}) {
            let tempData;
            const unitDoc = db.collection('units').doc('66POe7sqFqFRX9Txv7GD')
            unitDoc.get().then(doc => {
                if(doc.exists) {
                    tempData = doc.data();
                }
            })
            .then(() => {
                state.units.forEach(unit => {
                    if(unit.reference !== 0) {
                        tempData[unit.name].reference += unit.reference
                    }
                })
            })
            .then(() => {
                unitDoc.update({
                    ...tempData
                })
            })
        },
        GET_REFERENCE({commit}) {
            const unitDoc = db.collection('units').doc('66POe7sqFqFRX9Txv7GD')
            unitDoc.get().then(doc => {
                commit('GET_REFERENCE', doc.data());
            })
        }
    }
})
