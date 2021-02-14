const stack = new Stack();

function checker(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
    if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      if (i === 0) {
        stack.push(s[i]);
        break;
      }
      if (s[i] === ")") {
        if (stack.top() === "(") stack.pop();
      }
      if (s[i] === "}") {
        if (stack.top() === "{") stack.pop();
      }
      if (s[i] === "]") {
        if (stack.top() === "[") stack.pop();
      }
    }
  }
  if (stack.isEmpty()) return "Valid";
  else return "Invalid";
}
