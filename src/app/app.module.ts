import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './first.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SecondComponent } from './second.component';
import { AppRoutingModule } from './appRouting.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, FirstComponent, SecondComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
