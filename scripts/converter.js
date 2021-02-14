const stack = new Stack();

function pref(x) {
  if (x === "^") return 3;
  if (x === "*" || x === "/") return 2;
  if (x === "+" || x === "-") return 1;
  return -1;
}

function converter(s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
    if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      if (s[i] === ")") {
        while (stack.top() !== "(" && !stack.isEmpty()) {
          res = res + stack.top();
          stack.pop();
        }
        stack.pop();
      }
      if (s[i] === "}") {
        while (stack.top() !== "{" && !stack.isEmpty()) {
          res = res + stack.top();
          stack.pop();
        }
        stack.pop();
      }
      if (s[i] === "]") {
        while (stack.top() !== "[" && !stack.isEmpty()) {
          res = res + stack.top();
          stack.pop();
        }
        stack.pop();
      }
    }
    if (
      s[i] === "^" ||
      s[i] === "*" ||
      s[i] === "/" ||
      s[i] === "+" ||
      s[i] === "-"
    ) {
      while (!stack.isEmpty() && pref(stack.top()) >= pref(s[i])) {
        res = res + stack.top();
        stack.pop();
      }
      stack.push(s[i]);
    }
    if (
      (s[i] >= "a" && s[i] <= "z") ||
      (s[i] >= "A" && s[i] <= "Z") ||
      (s[i] >= "0" && s[i] <= "9")
    ) {
      res = res + s[i];
    }
  }
  while (!stack.isEmpty()) {
    res = res + stack.top();
    stack.pop();
  }
  return res;
}
