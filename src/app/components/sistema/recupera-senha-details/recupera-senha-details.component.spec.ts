import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperaSenhaDetailsComponent } from './recupera-senha-details.component';

describe('RecuperaSenhaDetailsComponent', () => {
  let component: RecuperaSenhaDetailsComponent;
  let fixture: ComponentFixture<RecuperaSenhaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperaSenhaDetailsComponent]
    });
    fixture = TestBed.createComponent(RecuperaSenhaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
