"use strict";
/*6- Stripping Names: Store a person’s name,
and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once.
 Print the name once, so the whitespace around the name is displayed.
  Then print the name after striping the white spaces.*/
const personName = "\t\n    shahid     \t\n";
console.log("persone's name with whitespace:", personName);
const strippingName = personName.trim();
console.log("persone's name after stripping:", strippingName);
