const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandList = document.querySelector("#bands");

const noArticles = bands.map((band, i) => {
  if (band.split(" ")[0].toLowerCase() === "a" ||
      band.split(" ")[0].toLowerCase() === "an" ||
      band.split(" ")[0].toLowerCase() === "the") {
    return band.split(" ").slice(1,).join(" ") + ` ${i}`;
  } else {
    return band + ` ${i}`;
  }
})

const sorted = noArticles
                .sort()
                .map(item => {
                  const originalIndex = item.split(" ")[item.split(" ").length - 1];
                  bandList.innerHTML += `<li>${bands[originalIndex]}</li>`;
                  return bands[originalIndex];
                });

console.log(sorted);
