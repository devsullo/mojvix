import { Component, OnInit, Input } from '@angular/core';
import { TransPipe } from '../../shared/pipes/trans.pipe';

@Component({
  selector: 'app-form-error-box',
  templateUrl: './form-error-box.component.html',
  styleUrls: ['./form-error-box.component.scss']
})
export class FormErrorBoxComponent implements OnInit {
  errorBox = false;
  errorBoxMsg = '';
  constructor(private transPipe: TransPipe) {}

  ngOnInit() {}

  show(data: any) {
    setTimeout(() => {
      this.errorBox = true;
      console.log(data.error.error);
      this.errorBoxMsg = this.transPipe.transform(data.error.error, 'error');
    });
  }

  hide() {
    this.errorBox = false;
    this.errorBoxMsg = '';
  }
}
