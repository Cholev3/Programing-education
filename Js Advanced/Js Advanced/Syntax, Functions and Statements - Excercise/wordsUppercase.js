function wordsUppercase(str) {
  let pattern = /\w+/g;
  let match = str
    .match(pattern)
    .map((element) => element.toUpperCase())
    .join(", ");
  console.log(match);
}
wordsUppercase("Hi, how are you?");
