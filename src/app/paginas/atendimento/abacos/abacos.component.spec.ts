import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbacosComponent } from './abacos.component';

describe('AbacosComponent', () => {
  let component: AbacosComponent;
  let fixture: ComponentFixture<AbacosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbacosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
