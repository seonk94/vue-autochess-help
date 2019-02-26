import Vuex from 'vuex';
import Vue from 'vue';
import * as unit from '../service/unit'
import randomString from 'random-string'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        units: unit.units,
        fieldUnits: [],
        storeUnits: []
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
        }
    },
    mutations: {
        INSERT_STORE_UNIT(state, unit) {
            if(state.storeUnits.length !== 8) {
                let _id = randomString();
                unit.id = _id;
                state.storeUnits = [ ...state.storeUnits, unit ]
            }
        },
        INSERT_FIELD_UNIT(state, unit) {
            if(state.fieldUnits.length !== 10) {
                state.fieldUnits = [ ...state.fieldUnits, unit ]
            }
        },
        DELETE_STORE_UNIT(state, unit) {
            state.storeUnits = state.storeUnits.filter(ele => ele.id !== unit.id )
        },
        DELETE_FIELD_UNIT(state, unit) {
            state.fieldUnits = state.fieldUnits.filter(ele => ele.id !== unit.id )
        },
        
    },
    actions: {

    }
})
