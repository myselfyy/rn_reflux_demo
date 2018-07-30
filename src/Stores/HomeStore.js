import { Store } from 'reflux';
import Actions from '../Actions/HomeActions';

class HomeStore extends Store{
    constructor() {
        super();
        // this.state = { flag: 'OFFLINE' };
        // this.listenTo(statusUpdate, this.onStatusUpdate);  //listen to the statusUpdate action
        this.listenables = Actions;
    }
    onStatusUpdate(status) {
        let newFlag = status ? 'ONLINE' : 'OFFLINE';
        this.setState({
            flag: newFlag
        })
    }
    onStatusEdited() {
        //calls on Actions.statusEdited()
    }
    onStatusSave() {
        // calls on Actions.statusAction()
    }
}
export default HomeStore;
