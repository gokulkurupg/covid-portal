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
  @Output() onSave = new EventEmitter();
  editForm: FormGroup = new FormGroup({});
  editTitle: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeEditForm();
    this.editTitle = `Edit ${this.country}`;
  }

  initializeEditForm() {
    this.editForm = this.formBuilder.group({
      cases: [
        '',
        [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')],
      ],
      deaths: [
        '',
        [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')],
      ],
      recovered: [
        '',
        [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')],
      ],
      tests: [
        '',
        [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')],
      ],
    });
  }

  handleCancel() {
    this.onCancel.emit();
  }

  handleSave() {
    const formData = {
      id: this.id,
      cases: this.editForm.get('cases')?.value,
      deaths: this.editForm.get('deaths')?.value,
      recovered: this.editForm.get('cases')?.value,
      tests: this.editForm.get('cases')?.value,
    };
    this.onSave.emit(formData);
  }

  getError(control: string): string {
    if (this.editForm.get(control)?.hasError('pattern'))
      return 'Value must be numeric';
    return 'Value required';
  }
}
