//Poetry Club Door Policy

// Respond with the correct character, given the blurb, if this were said at the front door.
export function frontDoorResponse(blurb) {
   
    return blurb.charAt(0);
  }
  // Respond with the correct character, given the blurb, if this were said at the back door.
  export function backDoorResponse(blurb) {
   blurb = blurb.trimEnd();
   return blurb.charAt(blurb.length - 1);
  }
  // Capitalizes a word, meaning only the first character is a capital, and the remaining letters are lower case.
  function capitalize(word) {
   word.toLowerCase().slice(1)
    return word.toUpperCase().charAt(0) + word.toLowerCase().slice(1);
  }
  // Give the password for the front-door, given the responses.
  export function frontDoorPassword(responses) {
    return capitalize(responses);
  }
  // Give the password for the back-door, given the responses.ﬁ
  export function backDoorPassword(responses) {
   
    return capitalize(responses).concat(", please");
  }