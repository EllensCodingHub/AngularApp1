
import { Component } from '@angular/core';
import { User } from './user';
import { UserCardComponent } from './user-card/user-card.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { UserBioComponent } from './user-bio/user-bio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserCardComponent,
    UserStatusComponent,
    UserBioComponent
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Autor Profile Dashboard';

  // Store the profile shared by the three child components.
  user: User = {
    name: 'Ellen Boyd',
    age: 53,
    profilePicture: 'profile.jpg',
    role: 'Author and Web Development Student',
    isOnline: false,
    bio: 'I enjoy writing novels, developing story ideas, and learning to build websites.'
  };
  // Display feedback after the user changes the profile.
  message = '';

  // Respond to the event emitted by the status component.
  toggleStatus(): void {
    this.user = {
      ...this.user,
      isOnline: !this.user.isOnline
    };
    
    this.message = 'Thank you. Your status has been updated.';
  }
  // Receive the edited text emitted by teh bio component.
  updateBio(newBio: string): void {
    this.user = {
      ...this.user,
      bio: newBio
    };

    this.message = 'Thank you. Your bio has been saved.';
  }
}
