const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandList = document.querySelector("#bands");

function ignoreArticles(str) {
  return str.split(" ")
            .filter(word => {
              return word.toLowerCase() !== "a"
                  && word.toLowerCase() !== "an"
                  && word.toLowerCase() !== "the";
          }).join(" ");
}

bands.sort((band1, band2) => ignoreArticles(band1) < ignoreArticles(band2) ? -1: 1);

bandList.innerHTML = bands.map(band => `<li>${band}</li>`).join("");
