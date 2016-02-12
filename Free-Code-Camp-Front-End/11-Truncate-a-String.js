function truncate(str, num) {
  // Clear out that junk in your trunk
  var result;
  if (str.length <= num)
    return str;
  else {
    result = str.slice(0, num-3) + "...";
  }
  return result;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);