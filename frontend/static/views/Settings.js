import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Settings');
    }

    async getHtml() {
        return `
            <h1>Hello Settings</h1>
        `

    }
}