import {isEmpty, isUndefined, isNumber} from 'lodash';
import {CheckVIN} from './CheckVIN';

export const validateInputDecoder = (data) => {
    let errors ={};
    let buttonControll = false;

    if(isNumber(data.modelyear)){
        errors.modelyear = 'Fill in the model year field';
    }


    if (isUndefined(data.vin)){
        errors.vin = 'Fill in the vin number field';
    }

    if (data.vin.length == 17){
        buttonControll = true;
    }

    return {
        errors,
        isValid: isEmpty(errors),
        button: buttonControll
    }
};