import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosthttpComponent } from './posthttp.component';

describe('PosthttpComponent', () => {
  let component: PosthttpComponent;
  let fixture: ComponentFixture<PosthttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosthttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosthttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
