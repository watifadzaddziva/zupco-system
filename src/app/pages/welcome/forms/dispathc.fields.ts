import { FormlyFieldConfig } from '@ngx-formly/core';

export const dispatchFields = function get(routes :Array<any>,fleet:Array<any>): FormlyFieldConfig[] {
    return [
      {
        key: 'routeId',
        type: 'select',
        templateOptions: {
          label: 'Route',
          placeholder: 'Enter name',
          required: true,
          options:routes
        }
      },
  
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
  