import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTanjiroComponent } from './skill-tanjiro.component';

describe('SkillTanjiroComponent', () => {
  let component: SkillTanjiroComponent;
  let fixture: ComponentFixture<SkillTanjiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillTanjiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTanjiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
