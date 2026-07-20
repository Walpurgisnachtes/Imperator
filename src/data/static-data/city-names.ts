import { msg } from "@lingui/core/macro";
import { i18n } from "@lingui/core";
import type { MessageDescriptor } from "@lingui/core";

const provinciae: { [nameId: string]: MessageDescriptor } = {
  "city-name-achaia": msg`Achaia`,
  "city-name-aegyptus": msg`Aegyptus`,
  "city-name-africa": msg`Africa`,
  "city-name-alpes-cottiae": msg`Alpes Cottiae`,
  "city-name-alpes-maritimae": msg`Alpes Maritimae`,
  "city-name-alpes-graiae": msg`Alpes Graiae`,
  "city-name-alpes-poeninae": msg`Alpes Poeninae`,
  "city-name-arabia": msg`Arabia`,
  "city-name-armenia": msg`Armenia`,
  "city-name-asia": msg`Asia`,
  "city-name-assyria": msg`Assyria`,
  "city-name-bithynia": msg`Bithynia`,
  "city-name-pontus": msg`Pontus`,
  "city-name-britannia": msg`Britannia`,
  "city-name-cappadocia": msg`Cappadocia`,
  "city-name-cilicia": msg`Cilicia`,
  "city-name-corsica": msg`Corsica`,
  "city-name-sardinia": msg`Sardinia`,
  "city-name-crete": msg`Crete`,
  "city-name-cyrenaica": msg`Cyrenaica`,
  "city-name-cyprus": msg`Cyprus`,
  "city-name-dacia": msg`Dacia`,
  "city-name-dalmatia": msg`Dalmatia`,
  "city-name-epirus": msg`Epirus`,
  "city-name-galatia": msg`Galatia`,
  "city-name-aquitania": msg`Aquitania`,
  "city-name-belgica": msg`Belgica`,
  "city-name-lugdunensis": msg`Lugdunensis`,
  "city-name-narbonensis": msg`Narbonensis`,
  "city-name-germania-inferior": msg`Germania Inferior`,
  "city-name-germania-superior": msg`Germania Superior`,
  "city-name-baetica": msg`Baetica`,
  "city-name-lusitania": msg`Lusitania`,
  "city-name-tarraconensis": msg`Tarraconensis`,
  "city-name-italia": msg`Italia`,
  "city-name-iudaea": msg`Iudaea`,
  "city-name-lycia": msg`Lycia`,
  "city-name-pamphylia": msg`Pamphylia`,
  "city-name-macedonia": msg`Macedonia`,
  "city-name-mauretania-caesariensis": msg`Mauretania Caesariensis`,
  "city-name-mauretania-tingitana": msg`Mauretania Tingitana`,
  "city-name-mesopotamia": msg`Mesopotamia`,
  "city-name-moesia-inferior": msg`Moesia Inferior`,
  "city-name-moesia-superior": msg`Moesia Superior`,
  "city-name-noricum": msg`Noricum`,
  "city-name-pannonia-inferior": msg`Pannonia Inferior`,
  "city-name-pannonia-superior": msg`Pannonia Superior`,
  "city-name-raetia": msg`Raetia`,
  "city-name-sicilia": msg`Sicilia`,
  "city-name-syria": msg`Syria`,
  "city-name-thracia": msg`Thracia`,
};

export const CityNameGenerator = {
  getCityName(index: string): string {
    if (!provinciae[index]) {
      console.error(i18n.t(msg`City name not found for index: ${index}`));
      return i18n._(provinciae["city-name-italia"]);
    }
    return i18n._(provinciae[index]);
  },

  getRandomCityName(): string {
    const keys = Object.keys(provinciae);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
  },
};
