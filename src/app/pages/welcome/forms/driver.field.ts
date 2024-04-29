import { FormlyFieldConfig } from '@ngx-formly/core';

export const driverFields = function get(): FormlyFieldConfig[] {
    return [
      {
        key: 'firstName',
        type: 'input',
        templateOptions: {
          label: 'First Name',
          placeholder: 'Enter first name',
          required: true,
        }
      },
      {
        key: 'lastName',
        type: 'input',
        templateOptions: {
          label: 'Last Name',
          placeholder: 'Enter last name',
          required: true,
        }
      },
      
    ]
  }
  