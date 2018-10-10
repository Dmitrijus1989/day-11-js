let countries = [
  ["Lithuania", 2797184, 65300],
  ["Great britain", 60800000, 209331],
  ["Germany", 82800000, 357386],
  ["Russia", 144526636, 17098246],
  ["Japan", 126672000, 377973.89],
];

for (var i = 0; i < countries.length; i++) {
    console.log(`Šalis: ${countries[i][0]}, joje gyvena ${(countries[i][1]/1000000).toFixed(2)} mln. gyventojų.
Valstybės plotas: ${countries[i][2]} km², plotas tenkantis vienam gyventojui: ${((countries[i][1]/countries[i][2])*1000000).toFixed(2)} m².`);
}
