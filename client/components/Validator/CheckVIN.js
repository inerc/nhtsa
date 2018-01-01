const transliterate = (check) => {
    if(check == 'A' || check == 'J'){
        return 1;
    } else if(check == 'B' || check == 'K' || check == 'S'){
        return 2;
    } else if(check == 'C' || check == 'L' || check == 'T'){
        return 3;
    } else if(check == 'D' || check == 'M' || check == 'U'){
        return 4;
    } else if(check == 'E' || check == 'N' || check == 'V'){
        return 5;
    } else if(check == 'F' || check == 'W'){
        return 6;
    } else if(check == 'G' || check == 'P' || check == 'X'){
        return 7;
    } else if(check == 'H' || check == 'Y'){
        return 8;
    } else if(check == 'R' || check == 'Z'){
        return 9;
    }
    return -1;
};

export const CheckVIN = (vin) => {
debugger

    let values = [1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 0, 7, 0, 9, 2, 3, 4, 5, 6, 7, 8, 9];
    let weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

    let string = vin;
debugger
    string = string.replace("-", "");
    string = string.replace(" ", "");
    string = string.toUpperCase();

    debugger
    if (string.length != 17) {
        return {text: 'The length of the text does not match', status: false}
    }

    let sum = 0;

    for (let i = 0; i < 17; i++){
        let c = string[i];
        let value;
        let weight = weights[i];

        if (c >= 'A' && c <= 'Z'){
            value = values[c - 'A'];
            if(value == 0){
                return {text:'Illegal character: " ' + c, status: false }
            }
        }else if (c >= '0' && c<= '9') {
            value = c - '0';
        }else {
            return {text:'Illegal character: " ' + c, status: false }
        }

        sum = sum + weight * value;
    }


    sum = sum % 11;
    let check = string[8];

    if (sum == 10 && check == 'X'){
       return {text:'Valid',  status: true }
    }else if (sum == transliterate(check)) {
       return {text:'Valid',  status: true }
    }else {
        return {text:'Invalid',  status: false }
    }


};