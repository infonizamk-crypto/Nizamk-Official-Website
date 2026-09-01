import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workpage } from './workpage';

describe('Workpage', () => {
  let component: Workpage;
  let fixture: ComponentFixture<Workpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workpage],
    }).compileComponents();

    fixture = TestBed.createComponent(Workpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
