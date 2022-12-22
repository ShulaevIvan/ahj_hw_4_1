export default function validateCreditCard(value) {
    
      if (/[^0-9-\s]+/.test(value)) return false;

      let nCheck = 0; 
      let bEven = false;
      value = value.replace(/\D/g, "");
  
      for (let n = value.length - 1; n >= 0; n--) {
          let cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
  
          if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
  
          nCheck += nDigit;
          bEven = !bEven;
      }
  
      return (nCheck % 10) == 0;
}

export function validatePaySystem(strValue) {

    const regCardsTypes = {
        visaElectron : /^4[0-9][1-7][0-2][3-7]{12,}$|^417500[0-9]{10,}$/,
        maestro : /^5(0|8)[1-9][0-8][0-9]{12,15}$|^(0|6)[3-7][0-6][1-9][0-9]{12,15}$/,
        unionpay  : /^62[0-9]{14}$|^6223[0-9]{12}$|^6270[0-9]{12}$/,
        visa: /^4[0-9]{12,15}$/,
        diners :  /^30[0-5][0-9]{11}|^36[0-9]{12}$|^54[0-9]{14}/,
        mastercard : /^5[1-5][0-9]{14}$|^2[2-7]2[0-1][0-9][0-9]{10,}$/,
        americanExpress: /^34|^37[0-9]{13}$/,
        discover : /^6011[0-9]{12,15}$|^622[1-9]2[5-6][0-9]{10,13}$|^64[4-9][0-9]{13,16}$|^65[0-9]{15,18}$/,
        jcb : /^35[0-9][0-9][0-9]{12,15}$/,
        instapayment: /^63[7-9][0-9]{13}$/,
        mir : /^220[0-4][0-9]{12}$/,
    }

    for (let key in regCardsTypes) {
        if (regCardsTypes[key].test(strValue)) {
            return key;
        }
    }
}