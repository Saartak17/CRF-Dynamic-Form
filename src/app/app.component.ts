import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from './field.interface';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import {CriticalRiskFactorsConfig} from './crf-fields.interface'
import {DsService} from '../ds.service'
import {regConfigCRF} from './crf-ques-mock';
import {sicConfig} from './sic-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  crfQuesData = regConfigCRF;
  sicData = sicConfig;
  enteredSIC: string = '6512';
  filteredSICData = [];
  finalForm = [];
  regConfig: FieldConfig[] = [
    {
      type: 'childform',
      label: 'occupationalDisease',
      name: 'occupationalDisease',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'Occupational Disease',
            name: 'Occupational Disease',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [
         {
          type: 'textarea',
          inputType: 'text',
          label: 'What kind of occupational disease exposure do they have?',
          name: 'What kind of occupational disease exposure do they have?',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'This question is mandatory to answer',
            },
            {
              name: 'minlength',
              validator: Validators.minLength(5),
              message: 'Please enter atleast 5 characters',
            },
          ],
         },
         {
          type: 'button',
          label: 'Save',
        } 
        ],
      ]
    },
    {
      type: 'industryhygieneform',
      label: 'industryHygiene',
      name: 'industryHygiene',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'Industry Hygiene',
            name: 'Industry Hygiene',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [
          {
            type: 'radiobutton',
            label: 'Hygiene testing done?',
            name: 'Hygiene testing done?',
            options: ['Yes', 'No'],
            value: 'Yes',
          },
          {
            type: 'radiobutton',
            label: 'Risk Engineering Survey confirmed controlled?',
            name: 'Risk Engineering Survey confirmed controlled?',
            options: ['Yes', 'No'],
            value: 'Yes',
          },
          {
            type: 'multiselect',
            label: 'Equipments used',
            name: 'Equipments used',
            options: ['Presses', 
                      'Small Hand Tools',
                      'Lathes',
                      'Grinders',
                      'Forklifts',
                      'Drills',
                      'Assembly Line',
                      'Welders',
                      'Cranes',
                      'Cutters',
                      'CNC (Computer Numerical Control)'
                     ],
            value: '',
          },
         {
          type: 'button',
          label: 'Save',
        } 
        ],
      ]
    },
    {
      type: 'childform',
      label: 'emergingHazard',
      name: 'emergingHazard',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'Emerging Hazard',
            name: 'Emerging Hazard',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [
         {
          type: 'textarea',
          inputType: 'text',
          label: 'What kind of emerging hazard exposures to they have?',
          name: 'What kind of emerging hazard exposures to they have?',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'This question is mandatory to answer',
            },
            {
              name: 'minlength',
              validator: Validators.minLength(5),
              message: 'Please enter atleast 5 characters',
            },
          ],
         },
         {
          type: 'button',
          label: 'Save',
        } 
        ],
      ]
    }, 
    {
      type: 'childform',
      label: 'ownedAircraftOrInsustrialAid',
      name: 'ownedAircraftOrInsustrialAid',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'Owned Aircraft/ Industrial Aid',
            name: 'Owned Aircraft/ Industrial Aid',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [
         {
          type: 'textarea',
          inputType: 'text',
          label: 'What is the industrial aid exposure?',
          name: 'What is the industrial aid exposure?',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'This question is mandatory to answer',
            },
            {
              name: 'minlength',
              validator: Validators.minLength(5),
              message: 'Please enter atleast 5 characters',
            },
          ],
         },
         {
          type: 'button',
          label: 'Save',
        } 
        ],
      ]
    }, 
    {
      type: 'childform',
      label: 'internationalTravel',
      name: 'internationalTravel',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'International Travel',
            name: 'International Travel',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [
         {
          type: 'textarea',
          inputType: 'text',
          label: 'What kind of travel, are there any controls on it? Restrictions on senior management traveling together? Going to hazardous locations?',
          name: 'What kind of travel, are there any controls on it? Restrictions on senior management traveling together? Going to hazardous locations?',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'This question is mandatory to answer',
            },
            {
              name: 'minlength',
              validator: Validators.minLength(5),
              message: 'Please enter atleast 5 characters',
            },
          ],
         },
         {
          type: 'button',
          label: 'Save',
        } 
        ],
      ]
    },
    {
      type: 'childform',
      label: 'temporaryWorkersOrVolunteers',
      name: 'temporaryWorkersOrVolunteers',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'Temporary Workers / Volunteers',
            name: 'Temporary Workers / Volunteers',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [
         {
          type: 'textarea',
          inputType: 'text',
          label: 'In what capacity are they being used, how many? Are they being given safety training?',
          name: 'In what capacity are they being used, how many? Are they being given safety training?',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'This question is mandatory to answer',
            },
            {
              name: 'minlength',
              validator: Validators.minLength(5),
              message: 'Please enter atleast 5 characters',
            },
          ],
         },
         {
          type: 'button',
          label: 'Save',
        } 
        ],
      ]
    },
    {
      type: 'childform',
      label: 'usl&h',
      name: 'usl&h',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'USL&H',
            name: 'USL&H',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [
         {
          type: 'textarea',
          inputType: 'text',
          label: 'What kind of USL&H exposure do they have?',
          name: 'What kind of USL&H exposure do they have?',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'This question is mandatory to answer',
            },
            {
              name: 'minlength',
              validator: Validators.minLength(5),
              message: 'Please enter atleast 5 characters',
            },
          ],
         },
         {
          type: 'button',
          label: 'Save',
        } 
        ],
      ]
    },
    {
      type: 'childform',
      label: 'maritime',
      name: 'maritime',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'Maritime',
            name: 'Maritime',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [
         {
          type: 'textarea',
          inputType: 'text',
          label: 'What kind of Maritime exposure do they have?',
          name: 'What kind of Maritime exposure do they have?',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'This question is mandatory to answer',
            },
            {
              name: 'minlength',
              validator: Validators.minLength(5),
              message: 'Please enter atleast 5 characters',
            },
          ],
         },
         {
          type: 'button',
          label: 'Save',
        } 
        ],
      ]
    },
    {
      type: 'childform',
      label: 'continentalShelf',
      name: 'continentalShelf',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'Continental Shelf',
            name: 'Continental Shelf',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [
         {
          type: 'textarea',
          inputType: 'text',
          label: 'What kind of Continental Shelf exposure do they have?',
          name: 'What kind of Continental Shelf exposure do they have?',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'This question is mandatory to answer',
            },
            {
              name: 'minlength',
              validator: Validators.minLength(5),
              message: 'Please enter atleast 5 characters',
            },
          ],
         },
         {
          type: 'button',
          label: 'Save',
        } 
        ],
      ]
    },
    {
      type: 'childform',
      label: 'anyOtherUniqueExposures',
      name: 'anyOtherUniqueExposures',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'Any Other Unique Exposures',
            name: 'Any Other Unique Exposures',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [
         {
          type: 'textarea',
          inputType: 'text',
          label: 'Please describe other unique exposures:',
          name: 'Please describe other unique exposures:',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'This question is mandatory to answer',
            },
            {
              name: 'minlength',
              validator: Validators.minLength(5),
              message: 'Please enter atleast 5 characters',
            },
          ],
         },
         {
          type: 'button',
          label: 'Save',
        } 
        ],
      ]
    },                
    // {
    //   type: 'childform',
    //   label: 'Child Form',
    //   name: 'childForm',
    //   formArrays: [
    //     [
    //       {
    //         type: 'input',
    //         label: 'firstname',
    //         name: 'f  irstname',
    //         validations: [
    //           {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'First Name Required',
    //           },
    //           {
    //             name: 'pattern',
    //             validator: Validators.pattern('^[a-zA-Z]+$'),
    //             message: 'Accept only text',
    //           },
    //         ],
    //       },
    //       {
    //         type: 'input',
    //         label: 'lastname',
    //         name: 'lastname',
    //         validations: [
    //           {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'Last Name Required',
    //           },
    //           {
    //             name: 'pattern',
    //             validator: Validators.pattern('^[a-zA-Z]+$'),
    //             message: 'Accept only text',
    //           },
    //         ],
    //       },
    //     ],
    //     [
    //       {
    //         type: 'input',
    //         label: 'firstname',
    //         name: 'firstname',
    //         validations: [
    //           {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'First Name Required',
    //           },
    //           {
    //             name: 'pattern',
    //             validator: Validators.pattern('^[a-zA-Z]+$'),
    //             message: 'Accept only text',
    //           },
    //         ],
    //       },
    //       {
    //         type: 'input',
    //         label: 'lastname',
    //         name: 'lastname',
    //         validations: [
    //           {
    //             name: 'required',
    //             validator: Validators.required,
    //             message: 'Last Name Required',
    //           },
    //           {
    //             name: 'pattern',
    //             validator: Validators.pattern('^[a-zA-Z]+$'),
    //             message: 'Accept only text',
    //           },
    //         ],
    //       },
    //     ],
    //   ],
    //   validations: [],
    // },

    {
      type: 'commentbox',
      inputType: 'text',
      label: 'Additional Comments',
      name: 'Additional Comments',
      value: ''
    },
    
    {
      type: 'button',
      label: 'Save',
    },
  ];

  regConfigControls: FieldConfig[] = [
    {
      type: 'input',
      label: 'Most Recent Risk Engineering Visit',
      name: 'Most Recent Risk Engineering Visit',
      value: '04/01/2019'
    },
    {
      type: 'childform',
      label: 'outstandingCriticalRecommendations',
      name: 'outstandingCriticalRecommendations',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'Outstanding critical recommendations?',
            name: 'Outstanding critical recommendations?',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [
         {
          type: 'textarea',
          inputType: 'text',
          label: 'Corrective Action Taken',
          name: 'Corrective Action Taken',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'This question is mandatory to answer',
            },
            {
              name: 'minlength',
              validator: Validators.minLength(5),
              message: 'Please enter atleast 5 characters',
            },
          ],
         },
        ],
      ]
    },
    {
      type: 'childform',
      label: 'othercontrolsform',
      name: 'othercontrolsform',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'Do they have other controls worth noting?',
            name: 'Do they have other controls worth noting?',
            options: ['Yes', 'No'],
            value: 'Yes',
          },
        ],
        [
         {
          type: 'radiobutton',
          label: 'Written Safety Program',
          name: 'Written Safety Program',
          options: ['Yes', 'No'],
          value: 'Yes',
         },
         {
          type: 'radiobutton',
          label: 'Return to Work Program',
          name: 'Return to Work Program',
          options: ['Yes', 'No'],
          value: 'Yes',
         },
         {
          type: 'radiobutton',
          label: 'Accident Management',
          name: 'Accident Management',
          options: ['Yes', 'No'],
          value: 'Yes',
         },
         {
          type: 'commentbox',
          inputType: 'text',
          label: 'Other Controls/Controls Narrative',
          name: 'Other Controls/Controls Narrative',
          value: ''
         },
        ],
      ]
    },
    {
      type: 'commentbox',
      inputType: 'text',
      label: 'Management And Control Analysis',
      name: 'Management And Control Analysis',
      value: ''
     },
     {
      type: 'button',
      label: 'Save',
    },
  ]

  regConfigPricingAnalysis: FieldConfig[] = [
    {
      type: 'radiobutton',
      label: 'Are you crediting more than 25%?',
      name: 'Are you crediting more than 25%?',
      options: ['Yes', 'No'],
      value: 'No',
    },

    {
      type: 'radiobutton',
      label: 'Is the experience mod higher than 1.25 in any state?',
      name: 'Is the experience mod higher than 1.25 in any state?',
      options: ['Yes', 'No'],
      value: 'No',
    },

    {
      type: 'childform',
      label: 'deviatedCompany',
      name: 'deviatedCompany',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'Deviated Company?',
            name: 'Deviated Company?',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [
          {
            type: "select",
            label: "Which One",
            name: "Which One",
            value: "",
            options: ["Chubb National", "Great Northern", "Pacific Indemnity", "Chubb Indemnity"]
          },        
         {
          type: 'commentbox',
          inputType: 'text',
          label: 'Rationale for deviation:',
          name: 'Rationale for deviation:',
          value: ''
         },
        ],
      ]
    },

    {
      type: 'childform',
      label: 'dividend',
      name: 'dividend',
      formArrays:[
        [
          {
            type: 'radiobutton',
            label: 'Dividend?',
            name: 'Dividend?',
            options: ['Yes', 'No'],
            value: 'No',
          }
        ],
        [
          {
            type: 'childform',
            label: 'flat',
            name: 'flat',
            formArrays:[
              [  
               {
                  type: 'radiobutton',
                  label: 'Flat?',
                  name: 'Flat?',
                  options: ['Yes', 'No'],
                  value: 'No',
                },
              ],
              [
                {
                  type: "select",
                  label: "Select One",
                  name: "Select One",
                  value: "",
                  options: ["F06", "F08", "F10", "F15","F20","F25","F30"]
                },        
               {
                type: 'commentbox',
                inputType: 'text',
                label: 'Rationale for flat:',
                name: 'Rationale for flat:',
                value: ''
               },
              ],
            ]
          },
          {
            type: 'childform',
            label: 'slidingScale',
            name: 'slidingScale',
            formArrays:[
              [  
               {
                  type: 'radiobutton',
                  label: 'Sliding Scale?',
                  name: 'Sliding Scale?',
                  options: ['Yes', 'No'],
                  value: 'No',
                },
              ],
              [
                {
                  type: "select",
                  label: "Select One",
                  name: "Select One",
                  value: "",
                  options: ["SB", "SC", "SD", "SE"]
                },
                {
                  type: "select",
                  label: "Select One (if NY)",
                  name: "Select One (if NY)",
                  value: "",
                  options: ["T","U","X"]
                },        
               {
                type: 'commentbox',
                inputType: 'text',
                label: 'Rationale for sliding scale:',
                name: 'Rationale for sliding scale:',
                value: ''
               },
              ],
            ]
          },  
        ]
      ]
    },

    {
      type: 'childform',
      label: 'retention',
      name: 'retention',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'Retention?',
            name: 'Retention?',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [
          {
            type: "select",
            label: "Select One",
            name: "Select One",
            value: "",
            options: ["RH(89)", "RK", "RH(84)", "DT"]
          },        
         {
          type: 'commentbox',
          inputType: 'text',
          label: 'Rationale for retention:',
          name: 'Rationale for retention:',
          value: ''
         },
        ],
      ]
    },

    {
      type: 'childform',
      label: 'deductible',
      name: 'deductible',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'Deductible?',
            name: 'Deductible?',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [
          {
            type: "input",
            label: "Level of Deductible",
            name: "Level of Deductible",
            value: "",
          },        
         {
          type: 'commentbox',
          inputType: 'text',
          label: 'Rationale for deductible:',
          name: 'Rationale for deductible:',
          value: ''
         },
        ],
      ]
    },

    {
      type: 'childform',
      label: 'retrospective',
      name: 'retrospective',
      formArrays:[
        [  
         {
            type: 'radiobutton',
            label: 'Retrospective?',
            name: 'Retrospective?',
            options: ['Yes', 'No'],
            value: 'No',
          },
        ],
        [        
         {
          type: 'commentbox',
          inputType: 'text',
          label: 'Rationale for retrospective:',
          name: 'Rationale for retrospective:',
          value: ''
         },
        ],
      ]
    },

  ]

  // regConfigCRF: CriticalRiskFactorsConfig[] = [
  //   {
  //     type: 'radiobutton',
  //     label: 'Determine the Total Insured Value (TIV) for Construction',
  //     name: 'Determine the Total Insured Value (TIV) for Construction',
  //     options: ['Noncombustible or Better > = 90% of TIV', 'Noncombustible or Better, including Tilt Up between 80% and 90% of TIV?', 'All Other'],
  //     value: '',
  //     lob: 'Property, Package',
  //     crfQuestion: 'Construction',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'This question is mandatory to answer',
  //       }
  //     ]
  //   },

  //   {
  //     type: 'radiobutton',
  //     label: 'Determine the Total Insured Value (TIV) for Occupancy',
  //     name: 'Determine the Total Insured Value (TIV) for Occupancy',
  //     options: ['Office > = 90% of TIV', 'Office between 80% and 90% of TIV?', 'Habitational >20% of TIV or All Other'],
  //     value: '',
  //     lob: 'Property, Package',
  //     crfQuestion: 'Occupancy',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'This question is mandatory to answer',
  //       }
  //     ]
  //   },

  //   {
  //     type: 'radiobutton',
  //     label: 'Determine the Total Insured Value (TIV) for Private Protection',
  //     name: 'Determine the Total Insured Value (TIV) for Private Protection',
  //     options: ['> = 90% of TIV sprinklered with Central Station or Proprietary alarms', 'Between 75% and 90% of TIV sprinklered with Central Station or Proprietary alarms', 'All Other'],
  //     value: '',
  //     lob: 'Property, Package',
  //     crfQuestion: 'Private Protection',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'This question is mandatory to answer',
  //       }
  //     ]
  //   },

  //   {
  //     type: 'radiobutton',
  //     label: 'Determine the Total Insured Value (TIV) per Jurisdictional Consideration',
  //     name: 'Determine the Total Insured Value (TIV) per Jurisdictional Consideration',
  //     options: ['50% or more of TIV in: CA, CT, DC, DE, ME, NH, NV, OR, UT, VA', 'All Other', '50% or more of TIV in:  AL, AR, CO, FL, IA, IN, KS, LA, MA, MI, MN, MO, MS, NE, NM, OH, OK, SD, TX'],
  //     value: '',
  //     lob: 'Property, Package',
  //     crfQuestion: 'Jurisdictional Consideration',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'This question is mandatory to answer',
  //       }
  //     ]
  //   },

  //   {
  //     type: 'radiobutton',
  //     label: 'Determine the Total Insured Value (TIV) for locations in U.S. Wind Control Zone',
  //     name: 'Determine the Total Insured Value (TIV) for locations in U.S. Wind Control Zone',
  //     options: ['< = 10% of TIV', 'TIV is between 10% and 20%', 'TIV >= 20%'],
  //     value: '',
  //     lob: 'Property, Package',
  //     crfQuestion: 'U.S. Wind Control Zone ',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'This question is mandatory to answer',
  //       }
  //     ]
  //   },

  //   {
  //     type: 'radiobutton',
  //     label: 'Determine the Total Insured Value (TIV) for Vacancy (based on Total Sq. Footage)',
  //     name: 'Determine the Total Insured Value (TIV) for Vacancy (based on Total Sq. Footage)',
  //     options: ['Occupancy Rate  > 90%', 'Occupancy Rate between 80% and 90%', 'Occupancy Rate < 80%'],
  //     value: '',
  //     lob: 'Property, Package',
  //     crfQuestion: 'Vacancy Rate (based on Total Sq. Footage)',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'This question is mandatory to answer',
  //       }
  //     ]
  //   },

  //   {
  //     type: 'radiobutton',
  //     label: 'Determine buidling Valuation with respect to M&S',
  //     name: 'Determine buidling Valuation with respect to M&S',
  //     options: ['Valuation > 100% M&S', '90% M&S < Valuation < 100% M&S', 'Valuation < 90% M&S'],
  //     value: '',
  //     lob: 'Property, Package',
  //     crfQuestion: 'Valuation',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'This question is mandatory to answer',
  //       }
  //     ]
  //   },

  //   {
  //     type: 'radiobutton',
  //     label: "Determine the business's Financial Stress Score",
  //     name: "Determine the business's Financial Stress Score",
  //     options: ['70%  <= x < 100%', '30% <= x < 70% or Unknown', 'x < 30%'],
  //     value: '',
  //     lob: 'Property, Package',
  //     crfQuestion: 'Financial Stress Score',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'This question is mandatory to answer',
  //       }
  //     ]
  //   },

  //   {
  //     type: 'radiobutton',
  //     label: "Determine the Crime Index for each risk location",
  //     name: "Determine the Crime Index for each risk location",
  //     options: ['x < 40', '40 <= x < 300 or Unknown', 'x >= 300'],
  //     value: '',
  //     lob: 'Property, Package',
  //     crfQuestion: 'Crime Index',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'This question is mandatory to answer',
  //       }
  //     ]
  //   },

  //   {
  //     type: 'radiobutton',
  //     label: "Determine the Fiver Year Loss History",
  //     name: "Determine the Fiver Year Loss History",
  //     options: ['Five Year Property Keypunch LR < 25%', 'Five Year Property Keypunch LR is 25% to 40%', 'Five Year Property Keypunch LR > 40%'],
  //     value: '',
  //     lob: 'Property, Package',
  //     crfQuestion: 'Loss History',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'This question is mandatory to answer',
  //       }
  //     ]
  //   },

  //   {
  //     type: 'radiobutton',
  //     label: "Determine the Total Insured Value (TIV) for Occupancy",
  //     name: "Determine the Total Insured Value (TIV) for Occupancy",
  //     options: ['Office > 90% of Sq. Footage with < 10% medical office', 'Office and/or Light Industrial/Warehouse > 90% of Sq. Footage with < 10% medical office, retail, habitational', 'Office and/or Light Industrial/Warehouse > 80% of Sq. Footage with < 20% medical office, retail, habitational no more than 10%', 'All Other with no more than 15% habitational', '15% of Sq. Footage habitational'],
  //     value: '',
  //     lob: 'Liability, Package',
  //     crfQuestion: 'Occupancy',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'This question is mandatory to answer',
  //       }
  //     ]
  //   },

  //   {
  //     type: 'radiobutton',
  //     label: "Determine the Total Insured Value (TIV) per Jurisdictional Consideration",
  //     name: "Determine the Total Insured Value (TIV) per Jurisdictional Consideration",
  //     options: ['100% of exposure in AZ, CA, DC, MI, NC, OH, OR, VA, WA ', 
  //               '50% or more of exposure in AZ, CA, DC, MI, NC, OH, OR, VA, WA and less than 20% in CO, FL, IL, LA, NJ, NV and 0%', 
  //               'Exposure in all other states with less than 20% in CO, FL, IL, LA, NJ, NV and 0% NY',
  //               'Exposure in all other states with less than 20% in CO, FL, IL, LA, NJ, NV and no more than 10% NY',
  //               '20% or more exposure in CO, FL, IL, LA, NJ, NV, and / or > 10% NY'],
  //     value: '',
  //     lob: 'Liability, Package',
  //     crfQuestion: 'Jurisdictional Consideration',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'This question is mandatory to answer',
  //       }
  //     ]
  //   },

  //   {
  //     type: 'radiobutton',
  //     label: "Determine the business's Financial Stress Score",
  //     name: "Determine the business's Financial Stress Score",
  //     options: ['70%  <= x < 100%', '30% <= x < 70% or Unknown', 'x<30%'],
  //     value: '',
  //     lob: 'Liability, Package',
  //     crfQuestion: 'Financial Stress Score',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'This question is mandatory to answer',
  //       }
  //     ]
  //   },

  //   {
  //     type: 'radiobutton',
  //     label: "Determine the Fiver Year Loss History",
  //     name: "Determine the Fiver Year Loss History",
  //     options: ['Five Year GL Keypunch LR < 10%', 
  //               'Five Year GL Keypunch LR < 20%', 
  //               'Five Year GL Keypunch LR is < 30%',
  //               'Five Year GL Keypunch LR is between 31% - 45%',
  //               'Five Year GL Keypunch LR > 45%'],
  //     value: '',
  //     lob: 'Liability, Package',
  //     crfQuestion: 'Loss History',
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'This question is mandatory to answer',
  //       }
  //     ]
  //   },

  //   {
  //     type: 'button',
  //     label: 'Save',
  //   },
  // ]

  qData : any;
  expression : boolean = false;
  submit(value: any) {}
constructor(private dsService : DsService){

}

getJson(){
  this.dsService.getJson().subscribe(data=>{
    this.qData = data.data;
    console.log("qdaaaaaaaaaa",this.qData)
    // console.log("regConfigCRF",this.regConfigCRF)
    this.expression = true;
   });
}

ngOnInit() {

this.getJson();
// console.log(this.qData);

}


}
