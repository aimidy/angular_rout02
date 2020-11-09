import { CRISES } from './mock-crisis';
import { Crisis } from './crisis';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

  constructor() { }

  getCrises(): Observable<Crisis[]> { return this.crises$; }
}
