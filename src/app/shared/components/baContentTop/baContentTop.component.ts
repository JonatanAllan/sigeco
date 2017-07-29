import { Component } from '@angular/core';

import { GlobalState } from '../../../global.state';

@Component({
  selector: 'ba-content-top',
  styleUrls: ['./baContentTop.scss'],
  templateUrl: './baContentTop.html',
})
export class BaContentTop {

  public activePageTitle: string = '';
  private rotas: string[] = [];
  public activePages: object[] = [];

  constructor(private _state: GlobalState) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        
        this.activePageTitle = activeLink.title;
        this.activePages = [];
        this.rotas = activeLink.route.paths;
        let size = this.rotas.length;

        for (let i = 2; i < size; i++) {
          let page = {
            nome: activeLink.route.paths[i],
            url: gerarRotas(i, this.rotas),
            ativo: activeLink.title === activeLink.route.paths[i]
          }
          this.activePages.push(page);
        }
      }
    });

    let gerarRotas = function (indice: number, rotas: string[]) {
      let size = rotas.length;
      let url: string = '';

      for (let i = 2; i <= indice; i++) {
        url += rotas[i] + '/';
      }
      return url;
    }
  }
}
