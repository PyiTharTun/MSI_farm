import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RogisterComponent } from './rogister.component';

describe('RogisterComponent', () => {
  let component: RogisterComponent;
  let fixture: ComponentFixture<RogisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RogisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RogisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
