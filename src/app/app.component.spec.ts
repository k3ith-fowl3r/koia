import { TestBed, async} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { IconRegistrarService } from './shared/services';

describe('AppComponent', () => {

  let iconRegistrarService: IconRegistrarService;
  let app: AppComponent;

  beforeEach(async(() => {
    iconRegistrarService = <IconRegistrarService> {
      registerSvgIcons(): void {}
    }
    spyOn(iconRegistrarService, 'registerSvgIcons').and.callFake(() => null);
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ { provide: IconRegistrarService, useValue: iconRegistrarService } ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should register svg icons', () => {
    expect(iconRegistrarService.registerSvgIcons).toHaveBeenCalled();
  });
});
