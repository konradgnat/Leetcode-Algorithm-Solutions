/**
 * 921. Minimum Add to Make Parentheses Valid
Medium

Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

Formally, a parentheses string is valid if and only if:

It is the empty string, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

 

Example 1:

Input: "())"
Output: 1
Example 2:

Input: "((("
Output: 3
Example 3:

Input: "()"
Output: 0
Example 4:

Input: "()))(("
Output: 4
 */


 /**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  let count = 0;
  const stack = [];
  for(let i = 0, len = S.length; i < len; i++) {
    if (S[i] === '(') {
      stack.push('(');
    } else {
      if (stack.length === 0) {
        count++;
      } else {
        stack.pop();
      }
    }
  }
  return count += stack.length;
};

/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  let open = 0;
  let close = 0;
  for(let i = 0, len = S.length; i < len; i++) {
    if (S[i] === '(') {
      open++;
    } else {
      if (open > 0) {
        open--;
      } else {
        close++;
      }
    }
  }
  return open + close;
};