import { createActions } from 'reflux';

// first type: creat one action
// let statusUpdate = Reflux.createAction();
// statusUpdate(data);// use it

// second type: create multiple actions
let Actions = createActions([
    "statusUpdate",
    "statusEdited",
    "statusSave"
])
// Actions.statusUpdate(data);// use it

export default Actions;