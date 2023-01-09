const setofNames = new Set();
setofNames.add("chetan");
setofNames.add("hitesh");
setofNames.add("pooja");
setofNames.add("komal");
setofNames.add("amit");
setofNames.add("varsha");
console.log(setofNames);
const length =setofNames.size;
console.log(`size of size${length}`);
setofNames.add("pooja");
console.log(setofNames);
const del =setofNames.delete("chetan tapkir");
console.log(del);
a