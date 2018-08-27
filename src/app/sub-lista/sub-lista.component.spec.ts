import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubListaComponent } from './sub-lista.component';

describe('SubListaComponent', () => {
  let component: SubListaComponent;
  let fixture: ComponentFixture<SubListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
