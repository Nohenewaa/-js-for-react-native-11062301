let id = 1;

function createUserProfiles(names, modifiedNames) {
  return names.map(name => {
    const obj = {
      originalName: name,
      modifiedName: modifiedNames.shift(),
      id: id++
    };
    return obj;
  });
}
