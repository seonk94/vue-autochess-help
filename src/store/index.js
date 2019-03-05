/* eslint-disable no-console */
import Vuex from 'vuex';
import Vue from 'vue';
import * as unit from '../service/unit'
import randomString from 'random-string'
import firestore from '../config/firestore'

Vue.use(Vuex);

const db = firestore.firestore();

const changeEffective = (obj) => {
    if(obj.effectIndex.length === 3) {
        if(obj.index < obj.effectIndex[0]) obj.effective = '#343a40'
        if(obj.index >= obj.effectIndex[0]) obj.effective = '#91a7ff';
        if(obj.index >= obj.effectIndex[1]) obj.effective = '#63e6be';
        if(obj.index >= obj.effectIndex[2]) obj.effective = '#fd7e14'
    } else if(obj.effectIndex.length === 2) {
        if(obj.index < obj.effectIndex[0]) obj.effective = '#343a40'
        if(obj.index >= obj.effectIndex[0]) obj.effective = '#91a7ff';
        if(obj.index >= obj.effectIndex[1]) obj.effective = '#fd7e14';
    } else if(obj.effectIndex.length === 1) {
        if(obj.index < obj.effectIndex[0]) obj.effective = '#343a40'
        if(obj.index >= obj.effectIndex[0]) obj.effective = '#fd7e14';
    } 
}

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
        synergysRef: [
            { with: {}, units: {},name : 'Assassin', ref: 0 },
            { with: {}, units: {},name : 'Demon Hunter', ref: 0 },
            { with: {}, units: {},name : 'Druid', ref: 0 },
            { with: {}, units: {},name : 'Hunter', ref: 0 },
            { with: {}, units: {},name : 'Knight', ref: 0 },
            { with: {}, units: {},name : 'Mage', ref: 0 },
            { with: {}, units: {},name : 'Mech', ref: 0 },
            { with: {}, units: {},name : 'Shaman', ref: 0 },
            { with: {}, units: {},name : 'Warlock', ref: 0 },
            { with: {}, units: {},name : 'Warrior', ref: 0 },
            { with: {}, units: {},name : 'Beast', ref: 0 },
            { with: {}, units: {},name : 'Demon', ref: 0 },
            { with: {}, units: {},name : 'Dwarf', ref: 0 },
            { with: {}, units: {},name : 'Ogre', ref: 0 },
            { with: {}, units: {},name : 'Dragon', ref: 0 },
            { with: {}, units: {},name : 'Element', ref: 0 },
            { with: {}, units: {},name : 'Elf', ref: 0 },
            { with: {}, units: {},name : 'Goblin', ref: 0 },
            { with: {}, units: {},name : 'Human', ref: 0 },
            { with: {}, units: {},name : 'Naga', ref: 0 },
            { with: {}, units: {},name : 'Orc', ref: 0 },
            { with: {}, units: {},name : 'Troll', ref: 0 },
            { with: {}, units: {},name : 'Undead', ref: 0 },
            { with: {}, units: {},name : 'Satyr', ref: 0 },
        ],
        synergys: {},
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
            { name : 'Dwarf', img: [], effective: '#343a40', effectIndex: [1], index: 0, effect: '공격 범위 +300'},
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
        },
        getSynergys(state) {
            return state.synergys
        },
        getSynergysRef(state) {
            let sort = Object.keys(state.synergysRef).sort((a, b) => { return state.synergysRef[b].ref - state.synergysRef[a].ref})
            let list = [];
            let flag = false;
            let tempList = []
            for(let i=0; i<7; i++) {
                let name = state.synergysRef[sort[i]].name
                if(name !== 'Demon' && name !== 'Ogre' ) {
                    list = [ ...list, state.synergysRef[sort[i]]]
                }
            }
            if(list.length >= 6) {
                return null;
            }
            list.forEach(item => {
                
                Object.keys(state.synergys).forEach(ele => {
                    tempList = []
                    flag = false
                    Object.keys(state.synergys[ele]).forEach((tmp, i) => {
                        tempList = [ ...tempList, tmp];
                        if(tmp === item.name) {
                            flag = true;
                        }
                        if( i == Object.keys(state.synergys[ele]).length - 1 && flag) {
                            tempList.forEach(el => {
                                if(el !== 'id' && el !== item.name && el !== 'Demon' && el !== 'Ogre') {
                                    if(item.with[el] === undefined ) {
                                        let tempObj = {};
                                        tempObj[el] = 1;
                                        item.with = { ...item.with, ...tempObj}
                                    } else {
                                        item.with[el]++
                                    }
                                }
                            })
                        }
                    })
                })

            })
            return list;
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
                        changeEffective(spec)
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
                    changeEffective(spec)
                }
            }

            let cls = state.classes.find(temp => temp.name === unit.class)
            let clsImg = cls.img.find(temp => temp.name === unit.name)

            if(clsImg.status === 'USED') {
                // 처음 들어온다.
            } else {
                clsImg.status = 'USED'
                cls.index++;
                changeEffective(cls)

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
                        changeEffective(spec)
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
                    changeEffective(spec)
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
                changeEffective(cls)
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
        },
        GET_SYNERGYS(state, ref) {
            state.synergys = ref;
        },
        SET_IMAGE(state, obj) {
            let selectUnit = state.units.find(ele => ele.name === obj.name);
            selectUnit.img = obj.url
        }
    },
    actions: {
        UPDATE_FIREBASE({state}) {
            let tempData;
            const doc = (new Date()).getFullYear() + '' + ((new Date()).getMonth() + 1) + '' +  ~~((new Date()).getDate() / 7 + 1)
            const unitDoc = db.collection('units').doc(doc)
            unitDoc.get().then(doc => {
                tempData = doc.data();
            })
            .then(() => {
                if(tempData === undefined) {
                    tempData = {}
                    state.units.forEach(unit => {
                        tempData[unit.name] = { reference: unit.reference}
                    })
                    db.collection('units').doc(doc).set(tempData)
                } else {
                    state.units.forEach(unit => {
                        if(unit.reference !== 0) {
                            tempData[unit.name].reference += unit.reference
                        }
                    })
                }
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
        },
        GET_SYNERGYS({state, commit}, doc) {
            const syngDoc = db.collection('synergys').doc(doc)
            let syn;
            syngDoc.get().then(doc => {
                syn = doc.data();
                commit('GET_SYNERGYS', syn)
            })
            .then(() => {
                for(let i=0; i<syn.lastIndex; i++){
                    Object.keys(syn[i]).forEach(ele => {
                        state.synergysRef.forEach(temp => {
                            if(temp.name === ele) {
                                temp.ref++;
                                syn[i][ele].forEach(unit => {
                                    if(temp.units[unit] === undefined) {
                                        temp.units[unit] = 1
                                    } else {
                                        temp.units[unit]++;
                                    }
                                })
                            }
                        })
                    })
                }
            })
        },
        UPDATE_SYNERGYS({state}) {
            let effectSyn = {};
            
            state.classes.forEach(ele => {
                let units = [];
                if (ele.effective !== '#343a40') {
                    ele.img.forEach(unit => {
                        if(unit.status === 'USED') {
                            units = [ ...units, unit.name ]
                        }
                    })
                    effectSyn[ele.name] = units
                }
            })
            state.specs.forEach(ele => {
                let units = [];
                if (ele.effective !== '#343a40') {
                    ele.img.forEach(unit => {
                        if(unit.status === 'USED') {
                            units = [ ...units, unit.name ]
                        }
                    })
                    effectSyn[ele.name] = units
                }
            })

            const doc = (new Date()).getFullYear() + '' + ((new Date()).getMonth() + 1) + '' +  ~~((new Date()).getDate() / 7 + 1)
            const syngDoc = db.collection('synergys').doc(doc)
            let tempData;
            syngDoc.get().then(doc => {
                tempData = doc.data();
            })
            .then(() => {
                if(tempData === undefined) {
                    tempData = { lastIndex : 0 }
                    effectSyn.id = tempData.lastIndex
                    tempData[tempData.lastIndex] = effectSyn
                    db.collection('synergys').doc(doc).set(tempData);
                } else {
                    effectSyn.id = ++tempData.lastIndex
                    tempData[effectSyn.id] = effectSyn
                    syngDoc.update({
                        ...tempData
                    })
                }

            })
            
        },
        UPLOAD_IMAGE({state}) {
            let tempData;
            const unitDoc = db.collection('units').doc('66POe7sqFqFRX9Txv7GD')

            unitDoc.get().then(doc => {
                if(doc.exists) {
                    tempData = doc.data();
                }
            })
            .then(() => {
                state.units.forEach(unit => {
                    tempData[unit.name].src = unit.img
                })
            })
            .then(() => {
                unitDoc.update({
                    ...tempData
                }) 
            })
        }
    }
})
