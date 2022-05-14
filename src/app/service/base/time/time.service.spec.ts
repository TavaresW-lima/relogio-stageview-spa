import { TimeService } from './time.service';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('TimeService testing',  () => {
    let timeService: TimeService;
    let httpClient: HttpClient;
    let httpController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TimeService]
        });

        httpClient = TestBed.inject(HttpClient);
        httpController = TestBed.inject(HttpTestingController);
        timeService = TestBed.inject(TimeService);
    })

    afterEach(() => {
        httpController.verify();
    })

    describe('#getRegionalAreaList',() => {
        let regioesEsperadas: string[];
        let rawRegion: string[] = [
            "Indian/Chagos",
            "Indian/Christmas",
            "Indian/Cocos",
            "Indian/Kerguelen",
            "Indian/Mahe",
            "Indian/Maldives",
            "Indian/Mauritius",
            "Indian/Reunion"
            ]
        let area = 'Indian';

        beforeEach(() => {
            timeService = TestBed.inject(TimeService);
            regioesEsperadas = [
                'Chagos', 'Christmas', 'Cocos', 'Kerguelen',
                'Mahe', 'Maldives', 'Mauritius', 'Reunion'
            ]
        })

        it('Deve retornar lista de regiões de uma área', () => {
            timeService.getRegionalAreaList(area).subscribe({
                next: regions => expect(regions)
                                .withContext(`Lista deve ser igual a lista de regiões de ${area}`)
                                .toEqual([
                                    'regiao1',
                                    'regiao2',
                                    'regiao3'
                                ]),
                error: fail
            });

            const request = httpController.expectOne(`${timeService.WORLD_TIME_API_URL}/timezones/${area}`);
            expect(request.request.method).toBe('GET');

            request.flush([
                "Teste/regiao1",
                "Teste/regiao2",
                "Teste/regiao3"
            ]);
        })

        it('Deve retornar a lista de regiões correspondentes a uma área', () => {
            timeService.getRegionalAreaList(area).subscribe({
                next: regions => expect(regions)
                                .withContext(`Lista deve ser igual a lista de regiões de ${area}`)
                                .toEqual(regioesEsperadas),
                error: fail
            });

            const request = httpController.expectOne(`${timeService.WORLD_TIME_API_URL}/timezones/${area}`);
            request.flush(rawRegion);
        })
    })
});