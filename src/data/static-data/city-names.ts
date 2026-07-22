import { msg } from "@lingui/core/macro";
import { i18n } from "@lingui/core";
import type { MessageDescriptor } from "@lingui/core";

const provinciae: { [nameId: string]: MessageDescriptor } = {
  "city-achaia": msg`Achaia`,
  "city-aegyptus": msg`Aegyptus`,
  "city-africa": msg`Africa`,
  "city-alpes-cottiae": msg`Alpes Cottiae`,
  "city-alpes-maritimae": msg`Alpes Maritimae`,
  "city-alpes-graiae": msg`Alpes Graiae`,
  "city-alpes-poeninae": msg`Alpes Poeninae`,
  "city-arabia": msg`Arabia`,
  "city-armenia": msg`Armenia`,
  "city-asia": msg`Asia`,
  "city-assyria": msg`Assyria`,
  "city-bithynia": msg`Bithynia`,
  "city-pontus": msg`Pontus`,
  "city-britannia": msg`Britannia`,
  "city-cappadocia": msg`Cappadocia`,
  "city-cilicia": msg`Cilicia`,
  "city-corsica": msg`Corsica`,
  "city-sardinia": msg`Sardinia`,
  "city-crete": msg`Crete`,
  "city-cyrenaica": msg`Cyrenaica`,
  "city-cyprus": msg`Cyprus`,
  "city-dacia": msg`Dacia`,
  "city-dalmatia": msg`Dalmatia`,
  "city-epirus": msg`Epirus`,
  "city-galatia": msg`Galatia`,
  "city-aquitania": msg`Aquitania`,
  "city-belgica": msg`Belgica`,
  "city-lugdunensis": msg`Lugdunensis`,
  "city-narbonensis": msg`Narbonensis`,
  "city-germania-inferior": msg`Germania Inferior`,
  "city-germania-superior": msg`Germania Superior`,
  "city-baetica": msg`Baetica`,
  "city-lusitania": msg`Lusitania`,
  "city-tarraconensis": msg`Tarraconensis`,
  "city-italia": msg`Italia`,
  "city-iudaea": msg`Iudaea`,
  "city-lycia": msg`Lycia`,
  "city-pamphylia": msg`Pamphylia`,
  "city-macedonia": msg`Macedonia`,
  "city-mauretania-caesariensis": msg`Mauretania Caesariensis`,
  "city-mauretania-tingitana": msg`Mauretania Tingitana`,
  "city-mesopotamia": msg`Mesopotamia`,
  "city-moesia-inferior": msg`Moesia Inferior`,
  "city-moesia-superior": msg`Moesia Superior`,
  "city-noricum": msg`Noricum`,
  "city-pannonia-inferior": msg`Pannonia Inferior`,
  "city-pannonia-superior": msg`Pannonia Superior`,
  "city-raetia": msg`Raetia`,
  "city-sicilia": msg`Sicilia`,
  "city-syria": msg`Syria`,
  "city-thracia": msg`Thracia`,
};

export const CityNameGenerator = {
  getCityName(index: string): string {
    if (!provinciae[index]) {
      console.error(i18n.t(msg`City name not found for index: ${index}`));
      return i18n._(provinciae["city-italia"]);
    }
    return i18n._(provinciae[index]);
  },

  getRandomCityName(): string {
    const keys = Object.keys(provinciae);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
  },
};
