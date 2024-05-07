import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./components/title/title.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, TitleComponent]
})
export class AppComponent {
  title = 'EmanuelLopezValdivia';
}
