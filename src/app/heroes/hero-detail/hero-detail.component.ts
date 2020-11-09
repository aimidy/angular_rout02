import { HeroService } from './../hero.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input() hero: Hero;
  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService,
  ) { }

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
       this.service.getHero(params.get('id')))
    );
  }

  gotoHeroes(hero: Hero): void{
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', {id: hero.id, foo: 'foo'}]);
  }
}
