module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const ten = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const str = number.toString();
  const arr = str.split('');
  const firstIndex = Number(arr[0]);
  const secondIndex = Number(arr[1]);
  const thirdIndex = Number(arr[2]);

  if (number < 10) {
      return units[number];
  } else if (number >=10 && number < 20) {
      return ten[number-10];
  } else if (number >=20 && number <100) {
      if (secondIndex === 0) {
          arr[0] = tens[firstIndex - 1];
          arr.pop();
          return arr.join(' ');
      } else {
          arr[0] = tens[firstIndex - 1];
          arr[1] = units[secondIndex];
          return arr.join(' ');
      }
  }  else if (number >=100 && number <1000) {
      if (thirdIndex === 0 && secondIndex !== 0) {
          arr[0] = units[firstIndex];
          arr[1] = 'hundred';
          arr[2] = tens[secondIndex-1];
          return arr.join(' ');
      } else if (secondIndex === 0 && thirdIndex !== 0) {
          arr[0] = units[firstIndex];
          arr[1] = 'hundred';
          arr[2] = units[thirdIndex];
          return arr.join(' ');
      } else if (secondIndex === 0 && thirdIndex === 0) {
          arr[0] = units[firstIndex];
          arr[1] = 'hundred';
          arr.pop();
          return arr.join(' ');
      } else if (secondIndex === 1) {
          arr[0] = units[firstIndex];
          arr[1] = 'hundred';
          arr[2] = ten[thirdIndex];
          return arr.join(' ');
      } else {
          arr[0] = units[firstIndex];
          arr[1] = 'hundred';
          arr[2] = tens[secondIndex-1];
          arr[3] = units[thirdIndex];
          return arr.join(' ');
      }
  }
}
