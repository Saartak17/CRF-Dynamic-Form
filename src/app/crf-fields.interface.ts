export interface Validator {
    name: string;
    validator: any;
    message: string;
  }
  export interface CriticalRiskFactorsConfig {
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[];
    collections?: any;
    type: string;
    value?: any;
    validations?: Validator[];
    formArrays?:any[];
    lob?: string;
    crfQuestion?: string;
  }