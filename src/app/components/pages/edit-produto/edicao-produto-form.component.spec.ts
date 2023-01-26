import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoProdutoFormComponent } from './edicao-produto-form.component';

describe('EdicaoProdutoFormComponent', () => {
  let component: EdicaoProdutoFormComponent;
  let fixture: ComponentFixture<EdicaoProdutoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoProdutoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoProdutoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
