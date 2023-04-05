// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function findMatching(drivers, driver) {
  const filteredDrivers = drivers.filter(
    (d) => d.toLowerCase() === driver.toLowerCase()
  );
  return filteredDrivers;
}
function fuzzyMatch(drivers, driver) {
  const matchedDrivers = drivers.filter(
    (d) => d.slice(0, 2) === driver.slice(0, 2)
  );
  return matchedDrivers;
}
  function matchName(drivers, name) {
    const matchedDrivers = drivers.filter((driver) => driver.name === name);
    return matchedDrivers;
  }