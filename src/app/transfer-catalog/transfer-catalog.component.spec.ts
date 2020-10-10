import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferCatalogComponent } from './transfer-catalog.component';

describe('TransferCatalogComponent', () => {
  let component: TransferCatalogComponent;
  let fixture: ComponentFixture<TransferCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
