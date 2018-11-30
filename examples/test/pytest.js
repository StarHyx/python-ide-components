const testCode1 =
`import turtle
t = turtle.Turtle()
for c in ['red', 'green', 'yellow', 'blue']:
    t.color(c)
    t.forward(75)
    t.left(90)
`;

const testCode2 =
`def gcd(x, y, depth=1):
    '''
    Find the greatest common divisor of x, y
    Pre:  x >= y,  y >= 0, both x and y are int
    '''
    result = x       # set provisional return value
    if y != 0:
        indent = "**" * depth
        print(("%s About to recursively call gcd(%d, %d)" % (indent, y, x%y)))
        result = gcd(y, x % y, depth+1)
        print(("%s result is %d" % (indent, result)))
    return result

def main():
    m = 77
    n = 28
    print(("Finding gcd(%d, %d)" % (m,n)))
    g = gcd(m, n)
    print(('Greatest common divisor of %d, %d = %d'
          % (m, n, g)))

main()
`;



// const testCode3 = `

// `;

export default {
  testCode1, testCode2
}
