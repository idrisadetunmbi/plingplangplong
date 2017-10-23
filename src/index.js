export default function rainDropSpeaks(arg) {
  // check for edge case
  if (!Number.isInteger(arg)) return 'Argument must be an integer';
  if (arg < 1) return 'Argument must be greater 0';

  let outputString = '';
  const primeFactors = {
    3: 'Pling',
    5: 'Plang',
    7: 'Plong',
  };

  Object.keys(primeFactors)
    .forEach((key) => {
      if (!(arg % key)) { // if input arg is divisible by the key
        outputString += primeFactors[key];
      }
    });

  return outputString || `${arg}`;
}
