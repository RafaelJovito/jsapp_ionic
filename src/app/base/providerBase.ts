import { HttpResulModel } from './../models/HttpResultModel';
import { HttpProvider } from './../../providers/http/http';

export abstract class ProviderBase<T> {
    constructor(
        public url: string,
        public http: HttpProvider){

    }

    get(): Promise<HttpResulModel>{
        return this.http.get(this.url);
    }

    getById(uid: string): Promise<HttpResulModel> {
        return this.http.get(`${this.url}/${uid}`);
    }

    // post(model T): Promise<HttpResulModel> {

    // }
}