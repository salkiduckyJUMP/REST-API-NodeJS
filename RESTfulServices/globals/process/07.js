buf = new Buffer(256);
len = buf.write("Simple, Easy Learning");

console.log("Octets written: " + len);

console.log(buf);

//1 character -> 1 byte
//binary information

//Deprecated way of using buffer

buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
// the pair of numbers after the type shows begin and end
console.log ( buf.toString('ascii'));
console.log( buf.toString('ascii', 0, 5));
//ascii only had 26 letters, but utf8 has many more
console.log( buf.toString('utf8', 0, 5));
console.log ( buf.toString(undefined,0,5));