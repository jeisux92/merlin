import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './pipes/image.pipe';
import { UpperCasePipe } from './pipes/upper-case.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImagePipe,
    UpperCasePipe
  ]
})
export class SharedModule { }
