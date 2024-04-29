import { FormlyFieldConfig } from '@ngx-formly/core';

export const routeFields = function get(): FormlyFieldConfig[] {
    return [
      {
        key: 'from',
        type: 'input',
        templateOptions: {
          label: 'From',
          placeholder: 'Enter from',
          required: true,
        }
      },
      {
        key: 'to',
        type: 'input',
        templateOptions: {
          label: 'To',
          placeholder: 'Enter to',
          required: true,
        }
      },
  
      {
        key: 'distance',
        type: 'number',
        templateOptions: {
          label: 'Distance',
          placeholder: 'Enter distance',
          required: true,
        }
      },
      
    ]
  }
  