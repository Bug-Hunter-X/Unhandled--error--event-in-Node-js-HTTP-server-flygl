# Unhandled 'error' event in Node.js HTTP server

This repository demonstrates a common error in Node.js HTTP servers where unhandled errors cause the server to crash without providing sufficient logging information.  The `bug.js` file showcases this issue, while `bugSolution.js` presents a corrected version.

## Problem

The original code lacks proper error handling. If an exception occurs during request processing, the server will terminate abruptly, providing minimal insights into the cause of the failure.  This makes debugging and maintaining the application significantly more challenging.

## Solution

The solution involves using the `error` event listener on the HTTP server to catch exceptions and log them appropriately. This ensures that the server doesn't crash unexpectedly and provides valuable debugging information.

## How to reproduce the bug:

1.  Run `bug.js` using `node bug.js`
2. Try to trigger an error (e.g., by accessing a non-existent file).
3. Observe that the server crashes without detailed error messages.

## How to test the solution:

1.  Run `bugSolution.js` using `node bugSolution.js`
2. Attempt to reproduce the error as before.
3. Observe that the server now logs the error message and continues running.