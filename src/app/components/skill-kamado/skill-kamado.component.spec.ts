import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillKamadoComponent } from './skill-kamado.component';

describe('SkillKamadoComponent', () => {
  let component: SkillKamadoComponent;
  let fixture: ComponentFixture<SkillKamadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillKamadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillKamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
