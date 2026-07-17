import { msg } from "@lingui/core/macro";
import { i18n } from "@lingui/core";

const provinciae = [
  msg`Achaia`,
  msg`Aegyptus`,
  msg`Africa`,
  msg`Alpes Cottiae`,
  msg`Alpes Maritimae`,
  msg`Alpes Graiae`,
  msg`Alpes Poeninae`,
  msg`Arabia`,
  msg`Armenia`,
  msg`Asia`,
  msg`Assyria`,
  msg`Bithynia`,
  msg`Pontus`,
  msg`Britannia`,
  msg`Cappadocia`,
  msg`Cilicia`,
  msg`Corsica`,
  msg`Sardinia`,
  msg`Crete`,
  msg`Cyrenaica`,
  msg`Cyprus`,
  msg`Dacia`,
  msg`Dalmatia`,
  msg`Epirus`,
  msg`Galatia`,
  msg`Aquitania`,
  msg`Belgica`,
  msg`Lugdunensis`,
  msg`Narbonensis`,
  msg`Germania Inferior`,
  msg`Germania Superior`,
  msg`Baetica`,
  msg`Lusitania`,
  msg`Tarraconensis`,
  msg`Italia`,
  msg`Iudaea`,
  msg`Lycia`,
  msg`Pamphylia`,
  msg`Macedonia`,
  msg`Mauretania Caesariensis`,
  msg`Mauretania Tingitana`,
  msg`Mesopotamia`,
  msg`Moesia Inferior`,
  msg`Moesia Superior`,
  msg`Noricum`,
  msg`Pannonia Inferior`,
  msg`Pannonia Superior`,
  msg`Raetia`,
  msg`Sicilia`,
  msg`Syria`,
  msg`Thracia`,
];

export const CityNameGenerator = {
  getCityName(index: number): string {
    return i18n._(provinciae[index % provinciae.length]);
  },

  getRandomCityName(): string {
    const randomIndex = Math.floor(Math.random() * provinciae.length);
    return this.getCityName(randomIndex);
  },
};
