function a(name) {
  return 'Hello ' + name;
}
const b = function (name) {
  return 'Hello ' + name;
};
const c = (name) => {
  return 'Hello ' + name;
};
const d = (name) => 'Hello ' + name;

console.log(d('tom'));
