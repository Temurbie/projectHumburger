import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./core/components/nav/nav.component";
import { FooterComponent } from "./core/components/footer/footer.component";
import { MainContentComponent } from "./core/components/main-content/main-content.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavComponent, FooterComponent, MainContentComponent]
})
export class AppComponent {
  title = 'Weather';
}
