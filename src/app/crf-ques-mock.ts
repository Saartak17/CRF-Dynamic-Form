import {CriticalRiskFactorsConfig} from './crf-fields.interface';
import {Validators} from '@angular/forms';

export const regConfigCRF: CriticalRiskFactorsConfig[] = [
    {
      questionID: '1',
      name: 'Determine the Total Insured Value (TIV) for Construction',
      label: 'Determine the Total Insured Value (TIV) for Construction',
      type: 'textarea',
      options: ['Noncombustible or Better > = 90% of TIV', 'Noncombustible or Better, including Tilt Up between 80% and 90% of TIV?', 'All Other'],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      questionID: '2',
      name: 'Determine the Total Insured Value (TIV) for Occupancy',
      label: 'Determine the Total Insured Value (TIV) for Occupancy',
      type: 'checkbox',
      options: ['Office > = 90% of TIV', 'Office between 80% and 90% of TIV?', 'Habitational >20% of TIV or All Other'],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      questionID: '3',
      name: 'Determine the Total Insured Value (TIV) for Private Protection',
      label: 'Determine the Total Insured Value (TIV) for Private Protection',
      type: 'radiobutton',
      options: ['> = 90% of TIV sprinklered with Central Station or Proprietary alarms', 'Between 75% and 90% of TIV sprinklered with Central Station or Proprietary alarms', 'All Other'],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      questionID: '4',
      name: 'Determine the Total Insured Value (TIV) per Jurisdictional Consideration',
      label: 'Determine the Total Insured Value (TIV) per Jurisdictional Consideration',
      type: 'radiobutton',
      options: ['50% or more of TIV in: CA, CT, DC, DE, ME, NH, NV, OR, UT, VA', 'All Other', '50% or more of TIV in:  AL, AR, CO, FL, IA, IN, KS, LA, MA, MI, MN, MO, MS, NE, NM, OH, OK, SD, TX'],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      questionID: '5',
      name: 'Determine the Total Insured Value (TIV) for locations in U.S. Wind Control Zone',
      label: 'Determine the Total Insured Value (TIV) for locations in U.S. Wind Control Zone',
      type: 'radiobutton',
      options: ['< = 10% of TIV', 'TIV is between 10% and 20%', 'TIV >= 20%'],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      questionID: '6',
      name: 'Determine the Total Insured Value (TIV) for Vacancy (based on Total Sq. Footage)',
      label: 'Determine the Total Insured Value (TIV) for Vacancy (based on Total Sq. Footage)',
      type: 'radiobutton',
      options: ['Occupancy Rate  > 90%', 'Occupancy Rate between 80% and 90%', 'Occupancy Rate < 80%'],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      questionID: '7',
      name: 'Determine buidling Valuation with respect to M&S',
      label: 'Determine buidling Valuation with respect to M&S',
      type: 'radiobutton',
      options: ['Valuation > 100% M&S', '90% M&S < Valuation < 100% M&S', 'Valuation < 90% M&S'],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      questionID: '8',
      name: "Determine the business's Financial Stress Score",
      label: "Determine the business's Financial Stress Score",
      type: 'radiobutton',
      options: ['70%  <= x < 100%', '30% <= x < 70% or Unknown', 'x < 30%'],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      questionID: '9',
      name: "Determine the Crime Index for each risk location",
      label: "Determine the Crime Index for each risk location",
      type: 'radiobutton',
      options: ['x < 40', '40 <= x < 300 or Unknown', 'x >= 300'],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      questionID: '10',
      name: "Determine the Fiver Year Loss History",
      label: "Determine the Fiver Year Loss History",
      type: 'radiobutton',
      options: ['Five Year Property Keypunch LR < 25%', 'Five Year Property Keypunch LR is 25% to 40%', 'Five Year Property Keypunch LR > 40%'],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      questionID: '11',
      name: "Determine the Total Insured Value (TIV) for Occupancy(2)",
      label: "Determine the Total Insured Value (TIV) for Occupancy",
      type: 'radiobutton',
      options: ['Office > 90% of Sq. Footage with < 10% medical office', 'Office and/or Light Industrial/Warehouse > 90% of Sq. Footage with < 10% medical office, retail, habitational', 'Office and/or Light Industrial/Warehouse > 80% of Sq. Footage with < 20% medical office, retail, habitational no more than 10%', 'All Other with no more than 15% habitational', '15% of Sq. Footage habitational'],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      questionID: '12',
      name: "Determine the Total Insured Value (TIV) per Jurisdictional Consideration(2)",
      label: "Determine the Total Insured Value (TIV) per Jurisdictional Consideration",
      type: 'radiobutton',
      options: ['100% of exposure in AZ, CA, DC, MI, NC, OH, OR, VA, WA ', 
                '50% or more of exposure in AZ, CA, DC, MI, NC, OH, OR, VA, WA and less than 20% in CO, FL, IL, LA, NJ, NV and 0%', 
                'Exposure in all other states with less than 20% in CO, FL, IL, LA, NJ, NV and 0% NY',
                'Exposure in all other states with less than 20% in CO, FL, IL, LA, NJ, NV and no more than 10% NY',
                '20% or more exposure in CO, FL, IL, LA, NJ, NV, and / or > 10% NY'],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      questionID: '13',
      name: "Determine the business's Financial Stress Score(2)",
      label: "Determine the business's Financial Stress Score",
      type: 'radiobutton',
      options: ['70%  <= x < 100%', '30% <= x < 70% or Unknown', 'x<30%'],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      questionID: '14',
      name: "Determine the Fiver Year Loss History(2)",
      label: "Determine the Fiver Year Loss History",
      type: 'radiobutton',
      options: ['Five Year GL Keypunch LR < 10%', 
                'Five Year GL Keypunch LR < 20%', 
                'Five Year GL Keypunch LR is < 30%',
                'Five Year GL Keypunch LR is between 31% - 45%',
                'Five Year GL Keypunch LR > 45%'],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      questionID: '14',
      name: 'Determine the Total Insured Value (TIV) for Private Protection(2)',
      label: 'Determine the Total Insured Value (TIV) for Private Protection',
      type: 'radiobutton',
      options: ['> = 90% of TIV sprinklered with Central Station or Proprietary alarms', 'Between 75% and 90% of TIV sprinklered with Central Station or Proprietary alarms', 'All Other'],
      value: 'Between 75% and 90% of TIV sprinklered with Central Station or Proprietary alarms',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'This question is mandatory to answer',
        }
      ]
    },

    {
      type: 'button',
      label: 'Save',
    },
  ]