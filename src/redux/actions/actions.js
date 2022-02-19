import {
    INCREASE_COUNTER,
    DECREASE_COUNTER,
    RESET_COUNTER,
    INCREASE_MORE,
} from "../types/types";

export const increase = () => {
    return {
        type: INCREASE_COUNTER,
    };
};

export const reset = () => {
    return {
        type: RESET_COUNTER,
    };
};

export const decrease = () => {
    return {
        type: DECREASE_COUNTER,
    };
};

export const increaseMore = (payload) => {
    return {
        type: INCREASE_MORE,
        // payload: 25,
        payload: payload,
    };
};