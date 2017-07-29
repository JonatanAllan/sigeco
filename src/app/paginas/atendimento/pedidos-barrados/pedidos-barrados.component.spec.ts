import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosBarradosComponent } from './pedidos-barrados.component';

describe('PedidosBarradosComponent', () => {
  let component: PedidosBarradosComponent;
  let fixture: ComponentFixture<PedidosBarradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosBarradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosBarradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
