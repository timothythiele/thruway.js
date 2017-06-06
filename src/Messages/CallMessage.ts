import {Message} from './Message';
import {IRequestMessage} from './IRequestMessage';

export class CallMessage extends Message implements IRequestMessage {

    constructor(private _requestId: number, private _options: Object, private _procedure: string, private _args: Array<any> = [], private _argskw: Object = {}) {
        super(Message.MSG_CALL);
    }

    public wampifiedMsg() {
        const r = [this.msgCode, this.requestId, this.options, this.procedure];
        if (Object.keys(this._argskw).length !== 0) {
            r.push(this._args, this._argskw);
            return r;
        }
        if (this._args.length !== 0) {
            r.push(this._args);
        }
        return r;
    }

    get requestId(): number {
        return this._requestId;
    }

    get options(): Object {
        return this._options;
    }

    get procedure(): string {
        return this._procedure;
    }

    get args(): Array<any> {
        return this._args;
    }

    get argskw(): Object {
        return this._argskw;
    }

    get msgCode(): number {
        return Message.MSG_CALL;
    }
}
