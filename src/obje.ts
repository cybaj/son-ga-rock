import { uuid_ts } from "./uid"

export class Obje {
    private uid : string
    private displayName : string

    getUid = () => this.uid;
    getDisplayName = () => this.displayName;

    constructor (displayName: string) {
        this.uid = uuid_ts()
        this.displayName = displayName
    }
}

