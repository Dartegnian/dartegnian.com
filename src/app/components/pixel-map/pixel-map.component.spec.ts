import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelMapComponent } from './pixel-map.component';

describe('PixelMapComponent', () => {
  let component: PixelMapComponent;
  let fixture: ComponentFixture<PixelMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixelMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PixelMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
