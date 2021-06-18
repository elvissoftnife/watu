import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

let states: string[]= [];
for (let index = 0; index < 30; index++) {
  states.push("Programa " + (index + 1));
  
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [NgbTypeaheadConfig] // add NgbTypeaheadConfig to the component providers
})
export class SearchComponent {

  public model: any;

  constructor(config: NgbTypeaheadConfig) {
    // customize default values of typeaheads used by this component tree
    config.showHint = true;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : states.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10))
    )

}
