import { Component, OnInit } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { RestClientService } from './../../../shared/services/restClient/restClient.service';
import { ApiConfigModel } from './../../../shared/models/ApiConfig.model';

@Component({
  selector: 'app-abacos',
  templateUrl: './abacos.component.html',
  styleUrls: ['./abacos.component.scss']
})
export class AbacosComponent implements OnInit {

  private test: any;

  constructor(private _restClient: RestClientService<any>) {

  }

  ngOnInit() {
    let config = new ApiConfigModel();

    config.Debug = false;
    config.Prefixo = "/sites/MLB/categories";
    config.UrlDebug = null;
    config.Segmento = "";

    let params = new URLSearchParams();
    params.set("category", "MLB5672");

     this._restClient.get(config).subscribe(data => this.test = data);
  }

 get listarTest() {
    return this.test;
  }

}
