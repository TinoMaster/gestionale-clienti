import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SimpleWidgetsComponent } from '../../common/components/simple-widgets/simple-widgets.component';

@Component({
  selector: 'app-inizio',
  standalone: true,
  imports: [RouterLink, MatIconModule, SimpleWidgetsComponent],
  templateUrl: './inizio.component.html',
  styleUrl: './inizio.component.css',
})
export default class InizioComponent {}
