import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransferCatalogComponent } from './transfer-catalog/transfer-catalog.component';

import { TransferService } from './transfer.service';
import { GetLogoUrlPipe } from './get-logo-url.pipe';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    TransferComponent,
    TransferCatalogComponent,
    GetLogoUrlPipe,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [TransferService],
  bootstrap: [AppComponent],
})
export class AppModule {}
