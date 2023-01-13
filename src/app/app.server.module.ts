import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
