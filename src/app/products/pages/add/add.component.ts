import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  //wantedColor: string = '';

  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  hasError(field: string): boolean {
    return this.myForm.get(field)?.invalid || false;
  }

}
