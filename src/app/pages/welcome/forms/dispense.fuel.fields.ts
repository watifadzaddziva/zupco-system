import { FormlyFieldConfig } from '@ngx-formly/core';

export const dispenseFields = function get(fleet:Array<any>): FormlyFieldConfig[] {
    return [
  
      {
        key: 'fleetNumber',
        type: 'select',
        templateOptions: {
          label: 'Fleet Number',
          placeholder: 'Enter fleet number',
          required: true,
          options:fleet,
        }
      },
      
    ]
  }
  