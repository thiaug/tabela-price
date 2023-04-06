import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TabelaPriceComponent } from './tabela-price/tabela-price.component';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [TabelaPriceComponent],
  bootstrap: [TabelaPriceComponent],
})
export class AppModule {}
