let err = Error("fild to load data", {
    cause: "file error"
});
console.log(err.message,err.cause);
console.log(typeof(err));

let error = "";
try {
  // JSON parse failure
  JSON.parse("blablablabla");
} catch(err) {
  console.log (err.name + " " + err.message);
}
console.log(Error.isError(err))