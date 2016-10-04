export default ($node) => $node
  .text().split('\n')
  .map((line) => line.trim())
  .filter((line) => line);
