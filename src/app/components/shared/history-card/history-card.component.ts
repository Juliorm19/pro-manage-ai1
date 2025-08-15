import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history-card',
  standalone: true,
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css']
})
export class HistoryCardComponent {
  @Input() title: string = '';
  @Input() time: string = '';
}