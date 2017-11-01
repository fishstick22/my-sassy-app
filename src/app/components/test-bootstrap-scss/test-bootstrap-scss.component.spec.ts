import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBootstrapScssComponent } from './test-bootstrap-scss.component';

describe('TestBootstrapScssComponent', () => {
  let component: TestBootstrapScssComponent;
  let fixture: ComponentFixture<TestBootstrapScssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBootstrapScssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBootstrapScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
