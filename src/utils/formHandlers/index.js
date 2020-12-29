import React from 'react'
import produce from 'immer'
import { set, has } from 'lodash'

export function formReducer(state, updateArg) {
    if (updateArg.constructor === Function) {
        return { ...state, ...updateArg(state) };
    }

    if (updateArg.constructor === Object) {
        if (has(updateArg, '_path') && has(updateArg, '_value')) {
            const { _path, _value } = updateArg;

            return produce(state, draft => {
                set(draft, _path, _value);
            });
        } else {
            return { ...state, ...updateArg }
        }
    }
}

