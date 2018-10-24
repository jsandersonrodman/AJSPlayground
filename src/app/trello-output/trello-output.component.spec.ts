import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloOutputComponent } from './trello-output.component';

describe('TrelloOutputComponent', () => {
  let component: TrelloOutputComponent;
  let fixture: ComponentFixture<TrelloOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
