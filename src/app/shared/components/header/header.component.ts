import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

/**
 * HeaderComponent represents the header section of the application.
 * It includes options for displaying a title and a back button.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  /**
   * Title to be displayed in the header.
   */
  @Input() title: string = '';

  /**
   * Flag to determine whether to show the back button in the header.
   */
  @Input() showBackButton: boolean = false;

  /**
   * Constructor for the HeaderComponent.
   * @param location Angular's Location service for interacting with the browser's URL.
   */
  constructor(private location: Location) {}

  /**
   * Navigates back in the browser's history using Angular's Location service.
   */
  goBack() {
    this.location.back();
  }
}

