import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare var $: JQueryStatic;

@Component({
  selector: 'paginas-atendimento-abacos-consulta-pedidos',
  templateUrl: './consulta-pedidos.component.html',
  styleUrls: ['./consulta-pedidos.component.scss']
})
export class ConsultaPedidosComponent implements OnInit {

  ignorarCancelados: boolean = false;
  items = ['Pizza', 'Pasta', 'Parmesan'];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('#tokenfield').tokenfield();
  }
}
