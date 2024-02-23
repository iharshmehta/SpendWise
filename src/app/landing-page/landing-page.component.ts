import { Component } from '@angular/core';
import { SpendContainerComponent } from "../spend-container/spend-container.component";
import { SplitContainerComponent } from "../split-container/split-container.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [SpendContainerComponent, SplitContainerComponent]
})
export class LandingPageComponent {

}
