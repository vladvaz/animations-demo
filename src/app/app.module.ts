import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleAnimComponent } from './simple-anim/simple-anim.component';
import { RouterAnimComponent } from './router-anim/router-anim.component';
import { AngularAnimComponent } from './angular-anim/angular-anim.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleAnimComponent,
    RouterAnimComponent,
    AngularAnimComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
