import { Component } from '@angular/core';
import { HistoryCardComponent } from '../../components/shared/history-card/history-card.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [HistoryCardComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent { }