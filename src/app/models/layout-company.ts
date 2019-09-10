import { TestComponentComponent } from "../components/test-component/test-component.component";
import { LayoutDefinition, RowDefinition, ColumnDefinition, FieldDefinition } from "./layout-definition";
import { Test2ComponentComponent } from '../components/test2-component/test2-component.component';

export class CompanyDefinition {

    static viewDefinition: any = {
        "title": "Company",
        name: "CompanyView",
        viewDefinition: [
          {
            name: "row_Header",
            containerType: "Standard",
            contentType: "Standard",
            isVisible: true,
            entity: "Company",
            "columns": [
              {
                name: "column_Column1_1",
                entity: "Company",
                isVisible: true,
                reserveLabelSpace: false,
                size: [
                  12,
                  -1,
                  8,
                  -1
                ],
                "offset": [
                  -1,
                  -1,
                  -1,
                  -1
                ],
                "fields": [
                  {
                    name: "companyKey",
                    id: "companyKey",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: true,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    fieldType: "Normal",
                    size: [
                      12,
                      -1,
                      6,
                      -1
                    ],
                    "isKey": true,
                    label: "Abbreviation",
                    fieldStyle: "Normal",
                    domainType: "ShortText",
                    isStopField: true
                  },
                  {
                    name: "name",
                    id: "name",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: true,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    fieldType: "Normal",
                    size: [
                      12,
                      -1,
                      6,
                      -1
                    ],
                    label: "Company Name",
                    fieldStyle: "Normal",
                    domainType: "LongText",
                    isStopField: false
                  },
                  {
                    name: "baseCurrency",
                    id: "baseCurrency",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: true,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    "tooltip": "The official currency of the country where the company is based",
                    fieldType: "Normal",
                    size: [
                      12,
                      -1,
                      6,
                      -1
                    ],
                    label: "Base Currency",
                    fieldStyle: "Normal",
                    domainType: "View",
                    "showDescription": true,
                    "drilldown": {
                      "create": "createcurrency",
                      "createOperationId": "039fe3a5-5a9f-09b5-6e47-59486a671409",
                      "update": "editcurrency",
                      "viewOperationId": "16a4dfa5-89e8-e182-bd14-ac68c4c596d3",
                      "entityList": "currencies",
                      "moduleList": "corePatterns",
                      "serviceList": "currencies",
                      lookupFilterType: "Contains",
                      "module": "corepatterns",
                      "service": "currencies"
                    },
                    isStopField: true
                  },
                  {
                    name: "country",
                    id: "country",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: true,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    "tooltip": "Choose the country where the company is located for tax purposes. Some of the system's behavior relies on this field, therefore if the company has postings this field is disabled.",
                    fieldType: "Normal",
                    size: [
                      12,
                      -1,
                      6,
                      -1
                    ],
                    label: "Country",
                    fieldStyle: "Normal",
                    domainType: "View",
                    "showDescription": true,
                    "drilldown": {
                      "create": "createcountry",
                      "createOperationId": "4379a292-8621-2948-d6b7-5e67be79a73c",
                      "update": "editcountry",
                      "viewOperationId": "fb18476a-f255-3521-cd65-df6730250156",
                      "entityList": "countries",
                      "moduleList": "corePatterns",
                      "serviceList": "countries",
                      lookupFilterType: "Contains",
                      "module": "corepatterns",
                      "service": "countries"
                    },
                    isStopField: true
                  },
                  {
                    name: "companyTaxID",
                    id: "companyTaxID",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: true,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    fieldType: "Normal",
                    size: [
                      12,
                      -1,
                      6,
                      -1
                    ],
                    label: "Company Tax ID",
                    fieldStyle: "Normal",
                    domainType: "ShortText",
                    isStopField: true
                  },
                  {
                    name: "equityCapital",
                    id: "equityCapital",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: false,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    visibilityClaims: "operation_companyregistrationdata",
                    fieldType: "Normal",
                    size: [
                      12,
                      -1,
                      6,
                      -1
                    ],
                    label: "Equity Capital",
                    fieldStyle: "Normal",
                    domainType: "Text",
                    isStopField: false
                  },
                  {
                    name: "registrationOffice",
                    id: "registrationOffice",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: false,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    visibilityClaims: "operation_companyregistrationdata",
                    fieldType: "Normal",
                    size: [
                      12,
                      -1,
                      6,
                      -1
                    ],
                    label: "Registration Office",
                    fieldStyle: "Normal",
                    domainType: "Text",
                    isStopField: false
                  },
                  {
                    name: "registrationNumber",
                    id: "registrationNumber",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: false,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    visibilityClaims: "operation_companyregistrationdata",
                    fieldType: "Normal",
                    size: [
                      12,
                      -1,
                      6,
                      -1
                    ],
                    label: "Registration Number",
                    fieldStyle: "Normal",
                    domainType: "Text",
                    isStopField: false
                  }
                ]
              },
              {
                name: "column_Column1_2",
                entity: "Company",
                isVisible: true,
                reserveLabelSpace: false,
                size: [
                  12,
                  -1,
                  4,
                  -1
                ],
                "offset": [
                  -1,
                  -1,
                  -1,
                  -1
                ],
                "fields": [
                  {
                    name: "logo",
                    id: "logo",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: false,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    fieldType: "Normal",
                    size: [
                      12,
                      -1,
                      -1,
                      -1
                    ],
                    label: "Logo",
                    fieldStyle: "Normal",
                    domainType: "Image",
                    "imageHeight": "264px",
                    isStopField: false
                  }
                ]
              }
            ]
          },
          {
            name: "row_AddressRow1",
            containerType: "Standard",
            contentType: "Standard",
            isVisible: true,
            entity: "Company",
            label: "Address",
            "columns": [
              {
                name: "column_Column6_1",
                entity: "Company",
                isVisible: true,
                reserveLabelSpace: false,
                size: [
                  12,
                  -1,
                  8,
                  -1
                ],
                "offset": [
                  -1,
                  -1,
                  -1,
                  -1
                ],
                "fields": [
                  {
                    name: "streetName",
                    id: "streetName",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: false,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    fieldType: "Normal",
                    size: [
                      12,
                      8,
                      -1,
                      -1
                    ],
                    label: "Street Name",
                    fieldStyle: "Normal",
                    domainType: "Text",
                    isStopField: false
                  },
                  {
                    name: "buildingNumber",
                    id: "buildingNumber",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: false,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    fieldType: "Normal",
                    size: [
                      12,
                      4,
                      -1,
                      -1
                    ],
                    label: "Building Number",
                    fieldStyle: "Normal",
                    domainType: "ShortText",
                    isStopField: false
                  },
                  {
                    name: "postalZone",
                    id: "postalZone",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: false,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    fieldType: "Normal",
                    size: [
                      12,
                      4,
                      -1,
                      -1
                    ],
                    label: "Postal Code",
                    fieldStyle: "Normal",
                    domainType: "ShortText",
                    isStopField: false
                  },
                  {
                    name: "cityName",
                    id: "cityName",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: false,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    fieldType: "Normal",
                    size: [
                      12,
                      8,
                      -1,
                      -1
                    ],
                    label: "City Name",
                    fieldStyle: "Normal",
                    domainType: "Text",
                    isStopField: false
                  }
                ]
              }
            ]
          },
          {
            name: "row_ContactRow1",
            containerType: "Standard",
            contentType: "Standard",
            isVisible: true,
            entity: "Company",
            label: "Contact",
            "columns": [
              {
                name: "column_Column9_1",
                entity: "Company",
                isVisible: true,
                reserveLabelSpace: false,
                size: [
                  12,
                  -1,
                  8,
                  -1
                ],
                "offset": [
                  -1,
                  -1,
                  -1,
                  -1
                ],
                "fields": [
                  {
                    name: "electronicMail",
                    id: "electronicMail",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: false,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    "tooltip": "Choose the main company email address. Emails from Jasmin are sent on behalf of this address.",
                    fieldType: "Normal",
                    size: [
                      12,
                      6,
                      -1,
                      -1
                    ],
                    label: "Email",
                    fieldStyle: "Normal",
                    domainType: "Email",
                    isStopField: false
                  },
                  {
                    name: "mobile",
                    id: "mobile",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: false,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    fieldType: "Normal",
                    size: [
                      12,
                      6,
                      -1,
                      -1
                    ],
                    label: "Mobile",
                    fieldStyle: "Normal",
                    domainType: "Phone",
                    isStopField: false
                  },
                  {
                    name: "telephone",
                    id: "telephone",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: false,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    fieldType: "Normal",
                    size: [
                      12,
                      6,
                      -1,
                      -1
                    ],
                    label: "Telephone",
                    fieldStyle: "Normal",
                    domainType: "Phone",
                    isStopField: false
                  },
                  {
                    name: "teleFax",
                    id: "teleFax",
                    isEnable: true,
                    isReadOnly: false,
                    isRequired: false,
                    isVisible: true,
                    reserveLabelSpace: true,
                    entity: "Company",
                    fieldType: "Normal",
                    size: [
                      12,
                      6,
                      -1,
                      -1
                    ],
                    label: "Fax",
                    fieldStyle: "Normal",
                    domainType: "ShortText",
                    isStopField: false
                  }
                ]
              }
            ]
          }
        ],
        "operationActions": {
          "mainAction": {
            name: "Save",
            label: "Save",
            "availableInEditMode": "true",
            "availableInViewMode": "false",
            "isDocumentReport": false,
            "serviceAction": "Update",
            "childrenActions": []
          },
          "secondaryAction": [],
          "contextActions": [],
          "configurationActions": [],
          "otherActions": {
            "edit": {
              name: "Edit",
              "availableInEditMode": "false",
              "availableInViewMode": "true",
              "editOperationId": "c3bf711b-e2a7-9155-0185-061bfc1776cb"
            },
            "cancel": {
              name: "Cancel",
              label: "Cancel",
              "availableInEditMode": "false",
              "availableInViewMode": "true",
              "deleteOperationId": "2465575f-07cd-dae1-874c-08bed599279b"
            },
            "reset": {
              name: "Reset",
              label: "Reset",
              "availableInEditMode": "true",
              "availableInViewMode": "false"
            }
          }
        },
        "entityInfo": {
          "description": name,
          "placeholder": "(Code, Company Name)",
          "service": "companies",
          "module": "corePatterns",
          entity: "companies",
          "defaultList": "Companies",
          "isCompanyDependent": false,
          "naturalKeys": "['companyKey']",
          lookupFilterType: "Contains"
        },
        metadata: {
          editRoute: "/corepatterns/companies/editcompany",
          createRoute: "/corepatterns/companies/createcompany"
        }
      };

    static mapViewDefinitionToLayoutDefinition(): LayoutDefinition {
        let result: LayoutDefinition = new LayoutDefinition();
        let view = CompanyDefinition.viewDefinition.viewDefinition;

        result.title = CompanyDefinition.viewDefinition.title;

        let rows: RowDefinition[] = [];
        view.forEach(r => {
            let columns: ColumnDefinition[] = [];
            r.columns.forEach(c => {
                let fields: FieldDefinition[] = [];
                c.fields.forEach(f => {
                    let sizeClassField = CompanyDefinition.bsColumnClass(f.size);

                    fields.push(new FieldDefinition(f.name, f.label, sizeClassField, f.domainType === "Image" ? Test2ComponentComponent : TestComponentComponent));
                });

                let sizeClass = CompanyDefinition.bsColumnClass(c.size);
                columns.push(new ColumnDefinition(fields, sizeClass));
            });

            rows.push(new RowDefinition(columns));
        });

        result.rows = rows;

        return result;
    }

    static mapLayoutDefinitionToViewDefinition(layout: LayoutDefinition): any {
        let view = CompanyDefinition.viewDefinition.viewDefinition;

        layout.rows.forEach((r, index) => {
            let rowView = view[index];
            r.columns.forEach((c, indexColumn) => {
                let columView = rowView.columns[indexColumn];
                c.fields.forEach((f, indexField) => {
                    let indexViewField: number = columView.fields.findIndex(o => {
                        return o.name === f.name;
                    });

                    if (index >= 0) {
                        CompanyDefinition.array_move(columView.fields, indexViewField, indexField);
                    } else {
                      let fView = rowView.columns.find(o => {
                        return o.fields.find(ff => {
                          return ff.name === f.name;
                      })});

                      if (fView) {
                        CompanyDefinition.array_move(columView.fields, indexViewField, indexField);
                      }
                    }
                });
            });
        });

        return CompanyDefinition.viewDefinition;
    }

    private static array_move(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            let k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr;
    };

    private static bsColumnClass(sizes: [number]): string {

        let sizebs = ['col-xs-', 'col-sm-', 'col-md-', 'col-lg-'];
        let localSizes: any = sizes || [12, 12, 12, 12];

        let className: string = localSizes.map((value, index, array) => {

            if (value > 0) {
                return sizebs[index].concat(value.toString());
            }

            if (value === 0) {
                return 'hidden-xs';
        }

            if (value === -1 && index > 0 && localSizes[index - 1] > 0) {

                localSizes[index] = localSizes[index - 1];

                return sizebs[index].concat(localSizes[index].toString());
            }

            return "";
        }).join(" ");

        return className;
      }
}
