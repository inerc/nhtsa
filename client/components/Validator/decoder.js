import {isEmpty, isUndefined, isNumber} from 'lodash';
import {CheckVIN} from './CheckVIN';

export const validateInputDecoder = (data) => {
    debugger
    let errors ={};

    if(isNumber(data.modelyear)){
        errors.modelyear = 'Fill in the model year field';
    }


    if (isUndefined(data.vin)){
        errors.vin = 'Fill in the vin number field';
    }
    // else {
    //     let VIN = CheckVIN(data.vin);
    //     if(!VIN.status){
    //         debugger
    //         errors.vin = VIN.text;
    //     }
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}