/* eslint-disable no-console */
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
                let tempUnit = { ...unit };
                tempUnit.id = randomString();

                state.storeUnits = [ ...state.storeUnits, tempUnit ]
            }
        },
        INSERT_FIELD_UNIT(state, unit) {
            if(state.fieldUnits.length !== 12) {
                state.fieldUnits = [ ...state.fieldUnits, unit ]
            }
        },
        DELETE_STORE_UNIT(state, unit) {
            state.storeUnits = state.storeUnits.filter(ele => ele.id !== unit.id )
        },
        DELETE_FIELD_UNIT(state, unit) {
            state.fieldUnits = state.fieldUnits.filter(ele => ele.id !== unit.id )
        },
        COMBINATION_FIELD_UNITS(state, arr) {
            let findUnit = state.fieldUnits.findIndex(ele => ele.id === arr[0].id)
            state.fieldUnits[findUnit].level = state.fieldUnits[findUnit].level+1
            let deleteUnit1 = state.fieldUnits.findIndex(ele => ele.id === arr[1].id)
            state.fieldUnits.splice(deleteUnit1, 1);
            let deleteUnit2 = state.fieldUnits.findIndex(ele => ele.id === arr[2].id);
            state.fieldUnits.splice(deleteUnit2, 1);
        }
    },
    actions: {

    }
})
