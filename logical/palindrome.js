/**
 * 
 * @param {number} x 
 * @returns 
 */

const isPalindrome = (x) => {
    if (x < 0) {
      return false;
    }
    
    const strX = String(x);
    for (let i = 0; i < Math.floor(strX.length / 2); i++) {
      if (strX[i] !== strX[strX.length - 1 - i]) {
        return false;
      }
    }
    
    return true;
  };