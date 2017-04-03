import {
  Component,
  OnInit
} from '@angular/core';
import { NameService } from './common/name/name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private name: NameService) {}

  public ngOnInit(): void {
    this.name.generate().subscribe(
      ok => this.title = ok
    );
  }
}
