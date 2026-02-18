import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deleteitem } from './deleteitem';

describe('Deleteitem', () => {
  let component: Deleteitem;
  let fixture: ComponentFixture<Deleteitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deleteitem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deleteitem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
