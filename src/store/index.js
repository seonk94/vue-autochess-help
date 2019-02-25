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
                /* eslint-disable no-console */
                console.log(unit);
                state.storeUnits = [ ...state.storeUnits, unit ]
            }
        }
    },
    actions: {

    }
})
