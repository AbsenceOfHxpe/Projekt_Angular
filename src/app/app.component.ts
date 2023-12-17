// app.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = '';

  constructor(private _router: Router) {}

  ngOnInit(): void {
    // Subskrybuj zdarzenie NavigationEnd, które jest wywoływane po zakończeniu nawigacji
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Pobierz bieżącą trasę
      let currentRoute = this._router.routerState.snapshot.root;

      // Rekurencyjnie szukaj danych w górę drzewa tras
      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
      }

      // Sprawdź, czy trasa zawiera dane 'pageTitle'
      if (currentRoute.data && currentRoute.data['pageTitle']) {
        this.title = currentRoute.data['pageTitle'];
      } else {
        this.title = 'Wypożyczalnia rowerowa'; // Domyślny tytuł, jeśli brak danych 'pageTitle'
      }
    });
  }
}