import { ApiConfigModel } from './../../models/ApiConfig.model';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import * as Constants from '../../shared.constants';

//https://stackoverflow.com/questions/44129817/typescript-generic-service

@Injectable()
export class RestClientService<T> {

    private _urlBase: string;

    private _headers = new Headers();

    constructor(private _http: Http, private _rota: Router) {
        this._headers.append('Content-Type', 'application/json');
    }

    montarUrl(config: ApiConfigModel) {
        if (config.Debug) {
            this._urlBase = config.UrlDebug;
            return;
        }
        this._urlBase = Constants.API_BASE_URL + config.Prefixo;
    }

    gerarHeaders(headers: Map<string, string>) {
        headers.forEach((value: string, key: string) => {
            this._headers.append(key, value);
        });
    }

    get(config: ApiConfigModel, params: URLSearchParams = null, headers: Map<string, string> = null): Observable<T[]> {
        if (headers != null) {
            this.gerarHeaders(headers);
        }
        this.montarUrl(config);

        return this._http.get(this._urlBase + config.Segmento, {
            headers: this._headers,
            search: params
        }).map((res: Response) => res.json());
    }

    emitters: {
        [nomeEvento: string]: EventEmitter<any>
    } = {}

    listaDeEventos(nomeEvento: string): EventEmitter<any> {
        if (!this.emitters[nomeEvento])
            this.emitters[nomeEvento] = new EventEmitter<any>();
        return this.emitters[nomeEvento];
    }
}
