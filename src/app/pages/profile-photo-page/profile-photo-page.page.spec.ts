import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilePhotoPagePage } from './profile-photo-page.page';

describe('ProfilePhotoPagePage', () => {
  let component: ProfilePhotoPagePage;
  let fixture: ComponentFixture<ProfilePhotoPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilePhotoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
