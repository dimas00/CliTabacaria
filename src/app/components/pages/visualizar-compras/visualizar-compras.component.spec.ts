import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarComprasComponent } from './visualizar-compras.component';

describe('VisualizarComprasComponent', () => {
  let component: VisualizarComprasComponent;
  let fixture: ComponentFixture<VisualizarComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
