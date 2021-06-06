import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss'],
})
export class EditDetailsComponent implements OnInit {
  @Input() id!: number;
  @Input() country!: string;
  @Output() onCancel = new EventEmitter();
  editForm: FormGroup = new FormGroup({});
  editTitle: string = '';

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeEditForm();
    this.editTitle = `Edit ${this.country}`
  }

  initializeEditForm() {
    this.editForm = this.formBuilder.group({
      cases: ['', Validators.required],
      deaths: ['', Validators.required],
      recovered: ['', Validators.required],
      tests: ['', Validators.required],
    });
  }

  handleCancel() {
    this.onCancel.emit();
  }
}
