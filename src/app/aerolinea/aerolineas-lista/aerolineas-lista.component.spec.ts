/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AerolineasListaComponent } from './aerolineas-lista.component';

describe('AerolineasListaComponent', () => {
  let component: AerolineasListaComponent;
  let fixture: ComponentFixture<AerolineasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerolineasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AerolineasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
