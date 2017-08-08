import { ApiConfigModel } from "./../../models/ApiConfig.model";
import { Http, Response, RequestOptions, Headers, URLSearchParams } from "@angular/http";
import { Router } from "@angular/router";
import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Rx";

import * as Constants from "../../shared.constants";

@Injectable()
export class RestClientService {
  private _headers = new Headers();

  constructor(private _http: Http, private _rota: Router) {
    this._headers.set("Content-Type", "application/json");
  }

  montarRequisicao(config: ApiConfigModel, headers: Map<string, string>) {
    if (headers != null)
      this.gerarHeaders(headers);

    if (config.Debug) {
      return config.UrlDebug + config.Segmento;
    }
    return Constants.API_BASE_URL + config.Prefixo + config.Segmento;
  }

  gerarHeaders(headers: Map<string, string>) {
    headers.forEach((value: string, key: string) => {
      this._headers.set(key, value);
    });
  }

  get(config: ApiConfigModel, params: URLSearchParams = null, headers: Map<string, string> = null){
    let url = this.montarRequisicao(config, headers);
    return this._http.get(url, { headers: this._headers, search: params })
      .map((res: Response) => res.json());
  }

  post(config: ApiConfigModel, body: any, params: URLSearchParams = null, headers: Map<string, string> = null) {
    let url = this.montarRequisicao(config, headers);
    return this._http.post(url, JSON.stringify(body), { headers: this._headers, search: params })
      .map((res: Response) => res.json());
  }

  put(config: ApiConfigModel, body: any, params: URLSearchParams = null, headers: Map<string, string> = null) {
    let url = this.montarRequisicao(config, headers);
    return this._http.put(url, JSON.stringify(body), { headers: this._headers, search: params })
      .map((res: Response) => res.json());
  }

  patch(config: ApiConfigModel, body: any, params: URLSearchParams = null, headers: Map<string, string> = null) {
    let url = this.montarRequisicao(config, headers);
    return this._http.patch(url, JSON.stringify(body), { headers: this._headers, search: params })
      .map((res: Response) => res.json());
  }

  delete(config: ApiConfigModel, params: URLSearchParams = null, headers: Map<string, string> = null) {
    let url = this.montarRequisicao(config, headers);
    return this._http.delete(url, { headers: this._headers, search: params })
      .map((res: Response) => res.json());
  }
}
