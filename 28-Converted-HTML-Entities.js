function convert(str) {
  // &colon;&rpar;
  return str.replace(/\&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&apos;");
}

convert('Dolce & Gabbana');