import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardListComponent } from '../card-list/card-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legend',
  standalone: true,
  imports: [CardComponent, CardListComponent, CommonModule],
  templateUrl: './legend.component.html',
  styleUrl: './legend.component.scss',
})
export class LegendComponent {}
