import html from '../core.js';
import { connect} from '../store.js'

const connecter = connect();    

function App({cars}) {
    return html`
        <ul>
             ${cars.map(car => `<li>${car}</li>`)}
        </ul>
        <button onclick="dispatch('ADD', 'Honda')">ADD CAR</button>
    `
}

export default connecter(App);