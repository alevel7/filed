import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { getShowProductCode } from '../form/state/user.reducer';
import { User } from '../user.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  nextPage = true;
  currentUser!: Observable<User>;
  constructor(private router: Router, private store: Store<any>) {
    this.currentUser = this.store.pipe(select(getShowProductCode));
   }

  ngOnInit(): void {
  }
  toNewPage(): void {
    this.router.navigate(['/', 'form']);
    this.nextPage = false;
  }
}
