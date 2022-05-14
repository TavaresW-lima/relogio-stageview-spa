import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RelogioComponent } from './relogio.component';
import { TimeService } from '../../service/base/time/time.service';
import { BehaviorSubject } from 'rxjs';

describe('Relógio Component', () => {
    let timeServiceStub: Partial<TimeService>;

    let fixture: ComponentFixture<RelogioComponent>;
    let component: RelogioComponent;
    let timeService: TimeService;
    
    beforeEach(() => {
        timeServiceStub = {
            hora: new BehaviorSubject<Date>(new Date())
        }

        TestBed.configureTestingModule({
            declarations: [ RelogioComponent ],
            providers: [{provide: TimeService, useValue: timeServiceStub}]
        });
        fixture = TestBed.createComponent(RelogioComponent);
        component = fixture.componentInstance;
        timeService = fixture.debugElement.injector.get(TimeService);
    })

    it('should be empty before OnInit', () => {
      const relogioElement: HTMLElement = fixture.nativeElement;
      const relogio = relogioElement.querySelector("#relogio");
      const data = relogioElement.querySelector("#data");
      expect(relogio.textContent)
            .withContext("Relógio vazio ao carregar")
            .toEqual('');
      expect(data.textContent)
            .withContext("Data vazia ao carregar")
            .toEqual('');
    });
  });