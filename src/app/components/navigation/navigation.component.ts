import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent {
  constructor(private router: Router) { }

  rmrNavigateToCategory(event: Event) {
    const rmrSelectElement = event.target as HTMLSelectElement;
    const rmrSelectedCategory = rmrSelectElement.value;
  
    // Debugging log to see if the method is called
    console.log("Dropdown Changed", rmrSelectedCategory);
  
    if (rmrSelectedCategory) {
      this.router.navigate(['/category', rmrSelectedCategory]).then(() => {
        // Additional log after navigation
        console.log("Navigated to category: " + rmrSelectedCategory);
      }).catch(err => {
        console.error("Navigation error: ", err);
      });
    }
  }
  
}


