export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_EVENT = "UPDATE_EVENT";

export function toggleEditing() {
    return { type: TOGGLE_EDITING };
}

export const updateEvent = newEvent => {
    return { type: UPDATE_EVENT, payload: newEvent };
};