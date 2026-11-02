import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [],
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.css'
})
export class UserStatusComponent {
  // Receive the current status from the parent.
  isOnline = input(false);

  // Notify the parent when the user requests a status change.
  statusToggled = output<void>();

  toggleStatus(): void {
    this.statusToggled.emit();
  }
}
