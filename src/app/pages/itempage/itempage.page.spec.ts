import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItempagePage } from './itempage.page';

describe('ItempagePage', () => {
  let component: ItempagePage;
  let fixture: ComponentFixture<ItempagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItempagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
