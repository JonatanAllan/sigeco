import { Component, OnInit } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { RestClientService } from './../../../shared/services/restClient/restClient.service';
import { ApiConfigModel } from './../../../shared/models/ApiConfig.model';

@Component({
  selector: 'paginas-atendimento-abacos',
  templateUrl: './abacos.component.html',
  styleUrls: ['./abacos.component.scss']
})
export class AbacosComponent implements OnInit {

  private test: any;

  private config: ApiConfigModel = {
      Debug: false,
      Prefixo: "",
      UrlDebug: null,
      Segmento: ""
    };

  constructor(private _restClient: RestClientService) {
  }

  ngOnInit() {

    //this._restClient.get(this.config,).subscribe(retorno => this.test = retorno);
  }

  get listarTest() {
    return this.test;
  }

}
