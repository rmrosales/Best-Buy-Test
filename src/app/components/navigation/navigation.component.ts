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

  navigateToCategory(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedCategory = selectElement.value;
  
    // Debugging log to see if the method is called
    console.log("Dropdown Changed", selectedCategory);
  
    if (selectedCategory) {
      this.router.navigate(['/category', selectedCategory]).then(() => {
        // Additional log after navigation
        console.log("Navigated to category: " + selectedCategory);
      }).catch(err => {
        console.error("Navigation error: ", err);
      });
    }
  }
  
}


