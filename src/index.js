export default function rainDropSpeaks(arg) {
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
      if (!(arg % key)) {
        outputString += primeFactors[key];
      }
    });

  return outputString || `${arg}`;
}
