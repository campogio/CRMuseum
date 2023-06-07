import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddcommentPage } from './addcomment.page';

describe('AddcommentPage', () => {
  let component: AddcommentPage;
  let fixture: ComponentFixture<AddcommentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddcommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
