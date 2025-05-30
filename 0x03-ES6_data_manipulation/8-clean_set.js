export default function cleanSet(set, startString) {
  if (!startString || !startString.length) {
    return '';
  }
  const result = [];
  for (const elem of set) {
    if (elem && elem.startsWith(startString)) {
      result.push(elem.slice(startString.length));
    }
  }

  return result.join('-');
}
