import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateitem } from './updateitem';

describe('Updateitem', () => {
  let component: Updateitem;
  let fixture: ComponentFixture<Updateitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updateitem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateitem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
