import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxMasonryModule } from './ngx-masonry/ngx-masonry.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		NgxMasonryModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
