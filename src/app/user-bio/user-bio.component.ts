import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-bio',
  standalone: true,
  imports: [],
  templateUrl: './user-bio.component.html',
  styleUrl: './user-bio.component.css'
})
export class UserBioComponent {
  // Receive the current bio from the parent.
  bio = input('');
  
  // Send the edited bio to the parent as a string.
  bioSaved = output<string>();

  // Show a helpful message if the text area is empty.
  errorMessage = '';

  saveBio(editedBio: string): void {
    const trimmedBio = editedBio.trim();

    if (trimmedBio.length === 0) {
      this.errorMessage = 'Please enter a short bio before saving.';
      return;
    }

    this.errorMessage = '';
    this.bioSaved.emit(trimmedBio);
  }
}
