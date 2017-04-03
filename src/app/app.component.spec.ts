import {
  TestBed,
  async,
  inject,
  ComponentFixture
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { NameService } from './common/name/name.service';

describe('AppComponent', () => {

  let nameService: NameService;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        NameService,
      ],
    }).compileComponents();
  }));

  beforeEach(inject([NameService], (service: NameService) => {
    nameService = service;
    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!' without detecting changes`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it(`should render right 'hello, buddy!' OnInit title in a h1 tag after detecting changes`, async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('hello, buddy!');
  }));
});
