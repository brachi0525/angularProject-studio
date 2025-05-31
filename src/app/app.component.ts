import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { AgGridModule } from 'ag-grid-angular'; // Angular Data Grid Module
import { MatToolbarModule } from '@angular/material/toolbar'; // Angular Material Toolbar Module

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, AgGridModule,AgGridModule,MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studio';
}
