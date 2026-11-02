import { Component, input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  // Require the parent component to supply a user object.
  user = input.required<User>();
}
