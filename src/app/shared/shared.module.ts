import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscapeHtmlPipe } from './pipes/escape-html.pipe';
import { TransPipe } from './pipes/trans.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule],
  declarations: [EscapeHtmlPipe, TransPipe],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, EscapeHtmlPipe, TransPipe]
})
export class SharedModule {}
