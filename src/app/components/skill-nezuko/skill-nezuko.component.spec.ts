import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillNezukoComponent } from './skill-nezuko.component';

describe('SkillNezukoComponent', () => {
  let component: SkillNezukoComponent;
  let fixture: ComponentFixture<SkillNezukoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillNezukoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillNezukoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
