import { FormlyFieldConfig } from '@ngx-formly/core';

export const busFields = function get(employees:Array<any>): FormlyFieldConfig[] {
    return [
      {
        key: 'fleetNumber',
        type: 'string',
        templateOptions: {
          label: 'Fleet Number',
          placeholder: 'Enter fleet number',
          required: true,
        }
      },
      {
      key: 'driverId',
      type: 'select',
      templateOptions: {
        label: 'Driver',
        placeholder: 'Select name',
        required: true,
        options:employees
      }
    },
    
  
      {
        key: 'engineConsumptionRate',
        type: 'number',
        templateOptions: {
          label: 'Engine Consumption Rate',
          placeholder: 'Enter Engine Consumption rate',
          required: true,
        }
      },
      
    ]
  }
  