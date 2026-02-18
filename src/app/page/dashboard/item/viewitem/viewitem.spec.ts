import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewitem } from './viewitem';

describe('Viewitem', () => {
  let component: Viewitem;
  let fixture: ComponentFixture<Viewitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewitem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewitem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
