import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatProgressBarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFancyExample {}
