import { FormValues, FormProperty } from "../../../types/FormValues";
import { mapDefaultValue } from "../../../common/util/fileUtils";

///MARK: DataModel
export const createDataModelClass = (data: FormValues): string => {
  const dataModelClass = `export default class ${data.ObjectName}Data {
      ${createConstructor(data.Properties)}
      ${createGettersAndSetters(data.Properties)}
  }`;
  return dataModelClass;
};

export const createConstructor = (data: FormProperty[]): string => {
  var properties = "";
  const abbrv = "dt";
  for (const item of data) {
    const defVal = mapDefaultValue(item);
    console.log("defVal", defVal);
    properties += `this.${item.PropertyName} = Object.prototype.hasOwnProperty.call(${abbrv}, '${item.PropertyName}')
            ? ${abbrv}.${item.PropertyName}
            : ${defVal};
        `;
  }
  const dataModelConstructor = `constructor(${abbrv} = {}) {
        ${properties}
    }`;
  return dataModelConstructor;
};

export const createGettersAndSetters = (data: FormProperty[]): string => {
  var gettersAndSetters = "";

  const createGetter = (propertyName: string): string => {
    return `
    get${propertyName}() {
        return this.${propertyName};
    }`;
  };
  const createSetter = (propertyName: string): string => {
    return `
    set${propertyName}(${propertyName}) {
        this.${propertyName} = ${propertyName}
    }`;
  };

  for (const item of data) {
    gettersAndSetters += `
        ${createGetter(item.PropertyName)}
        ${createSetter(item.PropertyName)}
    `;
  }
  return gettersAndSetters;
};

///MARK: Controller
export const createDataModelController = (data: FormValues): string => {
  return `import ${data.ObjectName}Data from './${data.ObjectName}DataModel';
  
export const set${data.ObjectName}Data = (data) => new ${data.ObjectName}Data(data);
  `;
};
