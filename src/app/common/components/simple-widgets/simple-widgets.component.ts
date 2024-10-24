import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Color } from '../../../core/models/types/colors.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-widgets',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './simple-widgets.component.html',
  styleUrl: './simple-widgets.component.css',
})
export class SimpleWidgetsComponent {
  @Input({ required: true }) icon = '';
  @Input({ required: true }) background_icon: Extract<Color, 'blue' | 'green' | 'orange' | 'pink'> = 'blue';

  get backgroundColorClass(): string {
    switch (this.background_icon) {
      case 'blue':
        return 'bg-gradient-to-tr from-blue-600 to-blue-400 shadow-blue-500/40';
      case 'green':
        return 'bg-gradient-to-tr from-green-600 to-green-400 shadow-green-500/40';
      case 'orange':
        return 'bg-gradient-to-tr from-orange-600 to-orange-400 shadow-orange-500/40';
      case 'pink':
        return 'bg-gradient-to-tr from-pink-600 to-pink-400 shadow-pink-500/40';
      default:
        return 'bg-gray-500';
    }
  }
}
