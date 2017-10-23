export default function rainDropSpeaks(arg) {
  if (!Number.isInteger(arg)) return 'Argument must be an integer';
  if (arg < 1) return 'Argument must be greater 0';

  const pling = 'Pling';
  const plang = 'Plang';
  const plong = 'Plong';

  let outputString = '';

  if (!(arg % 3)) {
    outputString += pling;
  }

  if (!(arg % 5)) {
    outputString += plang;
  }

  if (!(arg % 7)) {
    outputString += plong;
  }

  return outputString || `${arg}`;
}
