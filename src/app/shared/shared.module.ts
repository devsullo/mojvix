import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscapeHtmlPipe } from './pipes/escape-html.pipe';
import { TransPipe } from './pipes/trans.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';

@NgModule({
  imports: [CommonModule],
  declarations: [EscapeHtmlPipe, TransPipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EscapeHtmlPipe,
    TransPipe,
    PasswordStrengthBarModule
  ]
})
export class SharedModule {}
