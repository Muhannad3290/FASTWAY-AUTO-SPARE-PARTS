// ================= PART 1: ASIAN BRANDS =================
const part1 = [
  // --- HYUNDAI / KIA ---
  { zoren: "ZRM0003011", oem: ["31110-09000", "E8678M"], name: "Fuel Pump Assembly", car_maker: "Hyundai / Kia", applications: "HYUNDAI SONATA 2.0 / KIA OPTIMA 2001-2005" },
  { zoren: "ZRM0003012", oem: ["31110-3K300"], name: "Fuel Pump Module", car_maker: "Hyundai", applications: "HYUNDAI Sonata" },
  { zoren: "ZRM0003013", oem: ["31110-2E300", "31110-2E000"], name: "Fuel Pump Assembly", car_maker: "Hyundai / Kia", applications: "HYUNDAI TUCSON 2005-2009 / Kia Sportage" },
  { zoren: "ZRM0003027", oem: ["31110-17005"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Elantra Lavita 1.6L/1.8L / Matrix 1.6 2001-2010" },
  { zoren: "ZRM0003031", oem: ["31110-0S100", "31110-0S000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Kia Cerato 2005-2012" },
  { zoren: "ZRM0003036", oem: ["31110-26510", "E8663M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai SANTA FE 2001-2006" },
  { zoren: "ZRM0003052", oem: ["31110-2H000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Elantra 2.0L 2007-2012" },
  { zoren: "ZRM0003088", oem: ["31110-26500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe 2.4L 2.7L 2001-2005" },
  { zoren: "ZRM0003101", oem: ["31110-3A400"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Trajet 2.0 2004-2008" },
  { zoren: "ZRM1003004", oem: ["31110-1C000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Getz 1.1L/1.3L/1.6L 2002-2008" },
  { zoren: "ZRM1003007", oem: ["31110-25000", "31110-25010"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Accent 1.3L 1.5L 1994-2000" },
  { zoren: "ZRM1003008", oem: ["31110-25600"], name: "Fuel Pump", car_maker: "Hyundai", applications: "HYUNDAI ACCENT 1994-2000 / APMIRA 2000-2006" },
  { zoren: "ZRM1123001", oem: ["31110-4M000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Hyundai Sonata 8 / Kia K5" },
  { zoren: "ZRM1123002", oem: ["31110-3R000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Sonata / Optima Hybrid 2.4L 2011-2013" },
  { zoren: "ZRM1123003", oem: ["31110-3R100"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Sonata Azera / KIA OPTIMA 2010-2014" },
  { zoren: "ZRM1123004", oem: ["K30A-13-35ZB"], name: "Fuel Pump", car_maker: "Kia", applications: "Kia Rio Saloon 2000-2005" },
  { zoren: "ZRM1123006", oem: ["31110-3Q700", "31110-3Q600", "E9120M"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Kia Optima 11-15 / Sonata 11-14 2.4L" },
  { zoren: "ZRM1123007", oem: ["31110-4R500", "E9122M", "31110-3L800"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Hyundai Sonata & KIA Optima 2011-2013" },
  { zoren: "ZRM1153007", oem: ["31110-1H000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Hyundai i30 07-12 / KIA CEED 06-12" },
  { zoren: "ZRM1163001", oem: ["31110-0Q000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Elantra 2008-" },
  { zoren: "ZRM1163002", oem: ["31110-2Z100", "31110-2Q500"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Tucson iX35 2010-2013 / Sportage 10" },
  { zoren: "ZRM1163007", oem: ["31110-1J000", "31110-0X000", "31110-1P000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai i20 2009-2013 / i10 1.2L 2008-2015" },
  { zoren: "ZRM1163008", oem: ["31110-1M500", "31110-1M000", "31110-1M200"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Elantra i10 i20 2008-2015 / Kia Forte 2.0L 2010-2013" },
  { zoren: "ZRM1163010", oem: ["31110-B3000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Mistra" },
  { zoren: "ZRM1163011", oem: ["31110-2S200"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Tucson ix35 10-14 / Kia Sportage III 10-14" },
  { zoren: "ZRM1163012", oem: ["31110-2W400", "31110-2W200", "31110-2W300"], name: "Fuel Pump", car_maker: "Hyundai", applications: "SANTA FE ix45 2.4L 2006-2017" },
  { zoren: "ZRM1163013", oem: ["31110-2W700"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai New SantaFe IX45 2.0T" },
  { zoren: "ZRM1163014", oem: ["31110-2P000", "31110-2P400"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Tucson 2004-2010 / Sorento 2009-2014 / Sportage 2004-2014" },
  { zoren: "ZRM1163015", oem: ["31110-2S100"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Tucson ix35 2010-2014 / Kia Sportage 2010-2014" },
  { zoren: "ZRM1163016", oem: ["31110-C9000", "31110-A0000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Creta ix25 1.6L 2014-2018" },
  { zoren: "ZRM1164003", oem: ["31110-0U000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "VERNA 1.6L 2008" },
  { zoren: "ZRM1183004", oem: ["31110-2D030", "31110-2D000", "1000-110540"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "iX35 / Tucson 10-13 / Sportage 10" },
  { zoren: "ZRM1183007", oem: ["31110-4X000", "E10814M"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "KIA RIO MK3 1.4 2011-2017 / Accent 2010" },
  { zoren: "ZRM1183011", oem: ["31110-1G000", "31110-0M000", "31110-1E000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Accent III 1.4 2005-2011 / Rio 2005-2011" },
  { zoren: "ZRM1183012", oem: ["31110-3X000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "i30 GD 11-15 / Veloster / Avante MD / KIA K3" },
  { zoren: "ZRM1183013", oem: ["E8730M", "31110-1G500"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Hyundai Kia Accent Elantra Rio 06-11" },
  { zoren: "ZRM1183015", oem: ["31110-2C631", "E8529M", "69861", "P76527M", "FE0351", "FG0792", "SP3011M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Tiburon 2.7L V6 2003-2008" },
  { zoren: "ZRM1183024", oem: ["31110-2F000"], name: "Fuel Pump", car_maker: "Kia", applications: "KIA CERATO Hatchback 2.0 2004-2009" },
  { zoren: "ZRM1183026", oem: ["31110-07150", "31110-07600", "31110-07000"], name: "Fuel Pump", car_maker: "Kia", applications: "Kia Morning / Picanto 1.0i/1.1i 2004-2017" },
  { zoren: "ZRM1183027", oem: ["31110-2B000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe CM 2.7 V6 2006-2012" },
  { zoren: "ZRM1183034", oem: ["31110-1R500", "31110-2V500", "31110-1W500"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Elantra 2014-15 / Veloster 12-15 / Kia Forte 14-15" },
  { zoren: "ZRM1183039", oem: ["31110-2K600", "E8995M", "31111-3L800", "P77043M", "SP1392", "23010085", "FG1281", "P76753M", "SP3044M"], name: "Fuel Pump", car_maker: "Kia", applications: "Kia Soul 1.6L 2.0 2012-2013" },
  { zoren: "ZRM1293055", oem: ["31110-3X500", "E9073M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Elantra 1.8L 2011-2015" },
  { zoren: "ZRM1293100", oem: ["31110-0W000", "31110-1U000", "31110-5U000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe 2.7L 3.3L 2007-2009" },
  { zoren: "ZRM1501010", oem: ["31110-C1200", "31110-D6000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Hyundai Sonata 5/6 / Kia Optima 2016-UP" },
  { zoren: "ZRM1501011", oem: ["31110-4Z500", "31110-4Z000", "E9217M", "FG1904", "SP3085M", "A30491"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Santa Fe Sport 2013-2017 / Kia Sorento 2014-2015" },
  { zoren: "ZRM1501021", oem: ["31110-4H500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai H-1 H1 MPV Wagon 2008-2018" },
  { zoren: "ZRM1183050", oem: ["31110-2V210", "31110-3X210", "31110-3X200", "31110-A1450", "31110-A7250"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Elantra E130 2011-2015 / KIA K3 Cerato 2013" },
  { zoren: "ZRM1501027", oem: ["31110-F2100"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Elantra AD G4FG 1.6L 2015-2018" },
  { zoren: "ZRM1501036", oem: ["31110-C5000"], name: "Fuel Pump", car_maker: "Kia", applications: "KIA Sorento 2.4L 2014-2017" },
  { zoren: "ZRM1501032", oem: ["31110-1W000"], name: "Fuel Pump", car_maker: "Kia", applications: "KIA RIO III (UB) 1.25 CVVT 2011-2018" },
  { zoren: "ZRM1501042", oem: ["31110-B4000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Grand i10 15-16 / Grand Avega / Grand Santa Fe" },
  { zoren: "ZRM0003056", oem: ["31110-38200"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Optima 2001-02 / Sonata 2001-05" },
  { zoren: "ZRM1123012", oem: ["31110-2S510"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Tucson 2012-13 / Sportage 2012-13" },
  { zoren: "ZRM1183010", oem: ["31110-2G000", "31110-2G500", "31110-2G200"], name: "Fuel Pump", car_maker: "Kia", applications: "KIA Magentis 2.0L 2.7L 2005-2010" },
  { zoren: "ZRM1293163", oem: ["E8821M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "SANTA FE V6-2.7L/3.3L 2007-2009" },
  { zoren: "ZRM1183058", oem: ["31110-1R000", "31110-2R000", "31110-1R100"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "KIA RIO III 2011-2017 / Accent IV 2010-2017" },
  { zoren: "ZRM1501024", oem: ["31110-2B900"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe 2006-2012" },
  { zoren: "ZRM1501070", oem: ["31110-02000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Atos 1.0L 1998-2002" },
  { zoren: "ZRM1501084", oem: ["27510-31000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai SM3 1992-1996" },
  { zoren: "ZRM1501093", oem: ["31110-4D600"], name: "Fuel Pump", car_maker: "Kia", applications: "KIA Grand Carnival 2.7 3.5 3.8L 2005-2014" },
  { zoren: "ZRM1501094", oem: ["31110-2J400", "31110-2J600", "E9000M"], name: "Fuel Pump", car_maker: "Kia", applications: "Borrego Mohave 3.8L V6 2008-2012" },
  { zoren: "ZRM1163021", oem: ["31110-2S000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Sportage 2.0 Diesel 10-13 / Tucson 2.0 Diesel 09-13" },
  { zoren: "ZRM1183092", oem: ["31110-1R200"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Hyundai Accent / KIA Rio lll 2010-2017" },
  { zoren: "ZRM1501079", oem: ["31110-2E960", "31110-1F980"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Tucson Sportage 2004-2010 DIESEL" },
  { zoren: "ZRM1501099", oem: ["31110-4Z000", "31110-4Z500", "E9217M"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Santa Fe Sport 2.0T 13-17 / Sorento 3.3L 14-15" },
  { zoren: "ZRM1501108", oem: ["31110-3K600"], name: "Fuel Pump", car_maker: "Hyundai", applications: "ACCENT 2005-2008 / SONATA 1989-2015" },
  { zoren: "ZRM1501110", oem: ["31110-A0000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Creta 1.6L 2015-2018" },
  { zoren: "ZRM1501111", oem: ["31110-D3500"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Tucson 1.6L 15-16 / Sportage 2.4L 17-21" },
  { zoren: "ZRM1501112", oem: ["31110-D7100"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Sportage 2016-2020" },
  { zoren: "ZRM1501097", oem: ["31110-1D000", "2000-A81480"], name: "Fuel Pump", car_maker: "Kia", applications: "KIA Carens III 2.0 2006-2018" },
  { zoren: "ZRM1501125", oem: ["31110-C7000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai I20 ACTIVE 2015-2021" },
  { zoren: "ZRM1501123", oem: ["31110-F3500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Elantra Forte 1.4L 1.6L 2.0L 2017-2020" },
  { zoren: "ZRM1501124", oem: ["31110-J9500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Kona 1.6L/2.0L 2018-2020" },
  { zoren: "ZRM1501137", oem: ["31110-D7000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Sportage 1.6L 15-19 / Tucson 1.6L 15-20" },
  { zoren: "ZRM1501155", oem: ["31110-C2500", "31110-D5500"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Optima / Sonata 1.6L 2.0L 2.4L 2015-2020" },
  { zoren: "ZRM1293168", oem: ["31110-F9000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Yuena 1.4L 2016-2019" },
  { zoren: "ZRM1501122", oem: ["31110-3J000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "IX55 Veracruz 3.0L V6 Diesel 2006-2023" },
  { zoren: "ZRM1501139", oem: ["31110-D3100"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "TUCSON / SPORTAGE 2015-" },
  { zoren: "ZRM1501167", oem: ["31110-F0000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "ELANTRA 1.6L L4 2016-2022" },
  { zoren: "ZRM1501172", oem: ["31110-B8500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Santa Fe V6 3.3L 2013-2020" },
  { zoren: "ZRM1501175", oem: ["31120-H6000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Accent 2018-2021" },
  { zoren: "ZRM1501176", oem: ["31112-C6200", "31110-C6200", "DFG2311", "MM048", "809GE", "94460-C5000", "FHY21"], name: "Fuel Pump", car_maker: "Kia", applications: "Sorento 2.0L/2.4L/3.3L 2016-2020" },
  { zoren: "ZRM1501178", oem: ["31110-D3000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Tucson 1.6T 15-20 / Sportage 1.6T 15-21" },
  { zoren: "ZRM1501180", oem: ["31110-C3500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Sonata 9th Gen 2.4L 1.6T 2015-2017" },
  { zoren: "ZRM1501169", oem: ["31110-AA000", "31112-AA000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Elantra 2.0L 2021-2023" },
  { zoren: "ZRM1163006", oem: ["31110-2P900"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Santa Fe 2009-2021 / Sorento Diesel" },
  { zoren: "ZRM1163022", oem: ["31110-2W900"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Santa Fe 12-15 / Sorento 12-18 Diesel" },
  { zoren: "ZRM1283012", oem: ["31110-A9900"], name: "Fuel Pump", car_maker: "Kia", applications: "KIA Carnival 2.2L DIESEL 2015-2023" },
  { zoren: "ZRM1183121", oem: ["31110-3J500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Veracruz 3.8L 2007-2012" },
  { zoren: "ZRM1083103", oem: ["F01R00S406", "LRC181BA0-1335XG"], name: "Fuel Pump", car_maker: "Bestune", applications: "BESTUNE X40/B30/SENIA R7" },
  { zoren: "ZRM1501185", oem: ["31110-26350"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Santa Fe 2.4L 3.5L 2002-2006" },
  { zoren: "ZRM1501186", oem: ["31110-4H000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "H-1 Travel 2.5 CRDI 2007-2015" },
  { zoren: "ZRM1123022", oem: ["31110-B1000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Genesis 2015-2016 / G80 2017-2020" },
  { zoren: "ZRM1283014", oem: ["31110-A9500"], name: "Fuel Pump", car_maker: "Kia", applications: "KIA SEDONA 2015-2021" },
  { zoren: "ZRM1433007", oem: ["31110-G3200", "31110-G3300"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Cerato 2018-2021" },
  { zoren: "ZRM1123008", oem: ["31110-3Q500", "E9036M", "SP3037M", "8644M", "P77064M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Sonata 2.4L 2011-2015" },
  { zoren: "ZRM15001193", oem: ["31110-B2500", "31111-B2000", "94460-B2000", "003-11782", "FG1898", "SP3303M"], name: "Fuel Pump", car_maker: "Kia", applications: "Kia Soul 1.6L 2.0L 2014-2015" },
  { zoren: "ZRM1501194", oem: ["31110-4N000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "EON 2011-2018" },
  { zoren: "ZRM1501202", oem: ["31110-02500"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Prime MX / VISTO / ATOS 2001-2012" },
  { zoren: "ZRM1501208", oem: ["31110-H9000", "31120-H9000", "31110-F9000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Yuena 1.4L 2016-2019" },
  { zoren: "ZRM1123021", oem: ["31110-3R800"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Azera 2011-2014" },

  // --- TOYOTA ---
  { zoren: "ZRM0973001", oem: ["E8937M", "E8722M", "77020-06121", "77020-06190", "77020-06120", "77020-06401", "77020-06220", "77020-06321", "77020-33200", "77020-06191"], name: "Fuel Pump Assembly", car_maker: "Toyota", applications: "Toyota Camry 2007-2011 / Solara 2006-2008" },
  { zoren: "ZRM0973002", oem: ["77020-06220", "77020-06190", "P76820M", "E8722M", "FG1169", "SP9043M", "69932", "77020-06221"], name: "Fuel Pump", car_maker: "Toyota", applications: "Camry 2.5L 2007-2011 / Solara 07-08" },
  { zoren: "ZRM0973003", oem: ["77020-06050"], name: "Fuel Pump", car_maker: "Toyota", applications: "Camry 2003-2005" },
  { zoren: "ZRM0973004", oem: ["77020-0D040", "77020-0D010"], name: "Fuel Pump", car_maker: "Toyota", applications: "Vios YARIS 1.0L-1.5L 1998-2005" },
  { zoren: "ZRM0973005", oem: ["77020-12460", "77020-02190", "77020-12450"], name: "Fuel Pump", car_maker: "Toyota", applications: "Corolla Fielder/Runx/Allex 2001-2007" },
  { zoren: "ZRM1183001", oem: ["77020-02181", "77020-02291"], name: "Fuel Pump", car_maker: "Toyota", applications: "Corolla Matrix Vibe 2005-2011" },
  { zoren: "ZRM1183002", oem: ["77020-04061", "77020-04060", "E8756M", "E8757M", "77020-04071"], name: "Fuel Pump", car_maker: "Toyota", applications: "Tacoma 4.0L 2005-2015" },
  { zoren: "ZRM1183003", oem: ["77020-0K080"], name: "Fuel Pump", car_maker: "Toyota", applications: "Vigo 2TR-FE Champ 2004-2016" },
  { zoren: "ZRM1183020", oem: ["77020-60392", "77020-60340", "77020-60382", "77020-60372", "77020-60351", "77020-60352", "77020-60341", "77020-60362"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser 200 2007-2015" },
  { zoren: "ZRM1183031", oem: ["77020-0N010", "77020-0N011", "77020-0N040", "77020-30380"], name: "Fuel Pump", car_maker: "Toyota", applications: "Reiz / Crown 2.5/3.0L 2005-2018" },
  { zoren: "ZRM1183032", oem: ["77020-0K390", "77020-0K380", "77020-0K381", "77020-0K400"], name: "Fuel Pump", car_maker: "Toyota", applications: "HILUX 2.7L 2016-2019" },
  { zoren: "ZRM1183033", oem: ["77020-60590", "77020-60490", "77020-60580"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser 2007-2015 / Lexus LX570" },
  { zoren: "ZRM1183036", oem: ["77020-60440", "77020-60410", "77020-35151", "77020-35102", "77020-35170", "77020-35171", "77020-35150", "77020-60411", "77020-35130", "77020-35131", "77020-60441"], name: "Fuel Pump", car_maker: "Toyota", applications: "4Runner / Prado / Lexus GX460 2009-2013" },
  { zoren: "ZRM1183037", oem: ["77020-35072", "77020-35092", "77020-35112", "77020-35070", "77020-35090", "77020-35071", "77020-35170", "77020-60340", "77020-60382", "77020-35080", "77020-60342"], name: "Fuel Pump", car_maker: "Toyota", applications: "Hilux Surf / 4Runner / Prado 2002-2009" },
  { zoren: "ZRM1183041", oem: ["77020-60320", "77020-60490"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser 2007-2015 / Lexus LX570" },
  { zoren: "ZRM1183042", oem: ["23220-0V030", "77020-0E030"], name: "Fuel Pump", car_maker: "Toyota", applications: "Highlander 2.7L / Lexus RX350 2009-2015" },
  { zoren: "ZRM1183047", oem: ["77020-02630"], name: "Fuel Pump", car_maker: "Toyota", applications: "Corolla 2014-2019" },
  { zoren: "ZRM1183049", oem: ["77704-0D040", "77704-0D080", "23220-0M020", "77020-52330", "77020-0D120"], name: "Fuel Pump", car_maker: "Toyota", applications: "Vios YARIS 1.5L 2008-2013" },
  { zoren: "ZRM1184007", oem: ["77020-0C120", "77020-0C170", "E9199M", "P77054M", "FG1624", "SP9175M"], name: "Fuel Pump", car_maker: "Toyota", applications: "Sequoia / Tundra 5.7L 2012-2018" },
  { zoren: "ZRM1501001", oem: ["77020-0D180", "77020-0D190"], name: "Fuel Pump", car_maker: "Toyota", applications: "Yaris / Vios 2013-2021" },
  { zoren: "ZRM1501002", oem: ["77020-0C090"], name: "Fuel Pump", car_maker: "Toyota", applications: "Sequoia / Tundra 5.7L 2009-2012" },
  { zoren: "ZRM1501003", oem: ["77020-0R020", "77020-0R010"], name: "Fuel Pump", car_maker: "Toyota", applications: "RAV4 2.5L 3.5L 2009-2018" },
  { zoren: "ZRM1501005", oem: ["77020-0R030"], name: "Fuel Pump", car_maker: "Toyota", applications: "RAV4 2.0L 2.4L 2009-2013" },
  { zoren: "ZRM1501006", oem: ["77020-60202", "77020-60212", "77020-35060", "77020-60211"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser Prado 2002-2010 (GRJ120)" },
  { zoren: "ZRM1501007", oem: ["77020-02070", "77020-02080"], name: "Fuel Pump", car_maker: "Toyota", applications: "Avensis / Corolla 2003-2008" },
  { zoren: "ZRM1501014", oem: ["77020-48010", "77020-48051", "E8840M"], name: "Fuel Pump", car_maker: "Toyota", applications: "Lexus RX330 RX350 2005-2008" },
  { zoren: "ZRM1183030", oem: ["P76713M", "FG0932", "9500218", "9510020", "9530004", "77020-0C070", "77020-0C071", "77020-0C072", "77020-0C080", "77020-0C082"], name: "Fuel Pump", car_maker: "Toyota", applications: "Sequoia 08-09 / Tundra 07-14" },
  { zoren: "ZRM1501028", oem: ["77020-12700", "77020-12570", "77020-02320", "77020-12081", "77020-02220", "77020-02710", "77020-02680", "77020-12860"], name: "Fuel Pump", car_maker: "Toyota", applications: "Auris / Corolla 2003-2016" },
  { zoren: "ZRM1501035", oem: ["77020-0K150", "77020-0K070", "77020-0K140"], name: "Fuel Pump", car_maker: "Toyota", applications: "Fortuner / Hilux 2008-2016" },
  { zoren: "ZRM1183094", oem: ["77020-26031", "77020-26010"], name: "Fuel Pump", car_maker: "Toyota", applications: "Hiace 06-09 / Hilux 06-15" },
  { zoren: "ZRM1501039", oem: ["77020-60670", "77020-60470"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser Prado Diesel 2009-2017" },
  { zoren: "ZRM1501040", oem: ["77020-60650"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser Prado 2017-" },
  { zoren: "ZRM1501044", oem: ["77020-60430"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser Prado 2009-2017" },
  { zoren: "ZRM1501045", oem: ["77020-12650"], name: "Fuel Pump", car_maker: "Toyota", applications: "Corolla Fielder 2006-2012" },
  { zoren: "ZRM1501046", oem: ["77020-12670"], name: "Fuel Pump", car_maker: "Toyota", applications: "Blade 2006-2009" },
  { zoren: "ZRM1501047", oem: ["77020-58020", "77020-28110", "77020-58030", "23220-28300", "77020-28091", "77020-58050"], name: "Fuel Pump", car_maker: "Toyota", applications: "Alphard / Vellfire / Estima 2006-2019" },
  { zoren: "ZRM1501063", oem: ["77020-06300", "77020-06282", "77020-06285", "77020-06286", "P76754M", "FG1969", "SP9169M", "77020-33363"], name: "Fuel Pump", car_maker: "Toyota", applications: "Lexus ES350 / Camry / Avalon 2012-2018" },
  { zoren: "ZRM1501074", oem: ["23210-87403", "101961-6603", "23210-87Z03", "23210-B1040", "8223E", "23210-B1031"], name: "Fuel Pump", car_maker: "Toyota", applications: "Dahiatsu Terios 1.5L 2005-2012" },
  { zoren: "ZRM1501069", oem: ["1525.GE", "77020-0H010", "77240-0H010"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Aygo / Peugeot 107/108 / Citroen C1" },
  { zoren: "ZRM1501023", oem: ["23210-B1010", "101961-9421"], name: "Fuel Pump", car_maker: "Daihatsu", applications: "Toyota Passo / BB / Sirion 2004-2017" },
  { zoren: "ZRM1501088", oem: ["23210-97201"], name: "Fuel Pump", car_maker: "Daihatsu", applications: "Charade Copen Sirion YRV Cuore" },
  { zoren: "ZRM1501077", oem: ["77010-0K041"], name: "Fuel Pump", car_maker: "Toyota", applications: "Hilux 2KD 2004-2015" },
  { zoren: "ZRM1501089", oem: ["77020-08040", "77020-08060"], name: "Fuel Pump", car_maker: "Toyota", applications: "Sienna 2003-2009" },
  { zoren: "ZRM1183171", oem: ["77020-0R050", "77020-42230"], name: "Fuel Pump", car_maker: "Toyota", applications: "RAV4 2018-2020" },
  { zoren: "ZRM1183066", oem: ["77010-0K010", "77010-0K011"], name: "Fuel Pump", car_maker: "Toyota", applications: "Hilux Diesel 2004-2012" },
  { zoren: "ZRM1501104", oem: ["77020-0E130"], name: "Fuel Pump", car_maker: "Toyota", applications: "Lexus RX450h/350 / Highlander 2013-2019" },
  { zoren: "ZRM1501102", oem: ["77020-0K020"], name: "Fuel Pump", car_maker: "Toyota", applications: "Innova / Fortuner / Hilux 2004-2016" },
  { zoren: "ZRM1501113", oem: ["77020-33530", "77020-06520", "77020-06481"], name: "Fuel Pump", car_maker: "Toyota", applications: "Camry 2.5L 2017-2021" },
  { zoren: "ZRM1501117", oem: ["77020-60550"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser / Lexus LX570 2007-2016" },
  { zoren: "ZRM1501118", oem: ["77020-04090"], name: "Fuel Pump", car_maker: "Toyota", applications: "Tacoma V6 3.5L 2015-2019" },
  { zoren: "ZRM1501119", oem: ["77020-60640"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser Prado 2017-" },
  { zoren: "ZRM1501103", oem: ["77020-60600", "77020-60601"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser Prado 2010-2020" },
  { zoren: "ZRM1501120", oem: ["77020-0T010", "77020-0T020"], name: "Fuel Pump", car_maker: "Toyota", applications: "Venza 2.7L 3.5L 2008-2016" },
  { zoren: "ZRM1183064", oem: ["77020-0E111", "FG1992", "478GE", "A30507", "P77055M", "SP9177M", "SP8071M"], name: "Fuel Pump", car_maker: "Toyota", applications: "Highlander 2.7L/3.5L 2013-2019" },
  { zoren: "ZRM1183074", oem: ["77020-0K420", "77020-0K470"], name: "Fuel Pump", car_maker: "Toyota", applications: "Fortuner 2.7L 2016-2021" },
  { zoren: "ZRM1183082", oem: ["77020-0D380", "77020-0D410"], name: "Fuel Pump", car_maker: "Toyota", applications: "Vios Yaris 2013-2020" },
  { zoren: "ZRM0973006", oem: ["77020-0K030"], name: "Fuel Pump", car_maker: "Toyota", applications: "Innova Avensis 2.0L 2.7L 2006-2010" },
  { zoren: "ZRM1501142", oem: ["77020-42010", "SP9038M", "7717552020", "7724132060"], name: "Fuel Pump", car_maker: "Toyota", applications: "RAV4 1994-2007" },
  { zoren: "ZRM1501162", oem: ["77020-35120", "77020-35121"], name: "Fuel Pump", car_maker: "Toyota", applications: "FJ Cruiser 4.0L 2007-2014" },
  { zoren: "ZRM1183111", oem: ["77020-30351", "77020-53073", "77020-92010", "77020-50071", "77020-53083", "77020-53082", "77020-53081", "77020-53080", "SP9046M", "P76752M", "FG1174", "E8812M"], name: "Fuel Pump", car_maker: "Toyota", applications: "Lexus IS250/350 2005-2013" },
  { zoren: "ZRM1501159", oem: ["77020-33391", "77020-33380"], name: "Fuel Pump", car_maker: "Toyota", applications: "Lexus ES250 ES350 2012-2018" },
  { zoren: "ZRM1183063", oem: ["77020-0C061", "E8694M"], name: "Fuel Pump", car_maker: "Toyota", applications: "Tundra 99-06 / Sequoia 00-07" },
  { zoren: "ZRM1501163", oem: ["23210-BZ150"], name: "Fuel Pump", car_maker: "Toyota", applications: "Avanza 1.5L 2011-2015" },
  { zoren: "ZRM1501164", oem: ["77020-52231", "292010-0014", "292010-0013"], name: "Fuel Pump", car_maker: "Toyota", applications: "Sienta 2005-" },
  { zoren: "ZRM1501171", oem: ["77010-0K200", "77010-0K201"], name: "Fuel Pump", car_maker: "Toyota", applications: "Hilux 4Runner Diesel 2015-2020" },
  { zoren: "ZRM1501166", oem: ["77020-05080"], name: "Fuel Pump", car_maker: "Toyota", applications: "Avensis T22 1.8L 2000-2003" },
  { zoren: "ZRM1183068", oem: ["77020-47081", "77020-02C70"], name: "Fuel Pump", car_maker: "Toyota", applications: "Prius 2009-2015" },
  { zoren: "ZRM1183089", oem: ["77020-08070"], name: "Fuel Pump", car_maker: "Toyota", applications: "Sienna 2010-2020" },
  { zoren: "ZRM1203054", oem: ["0580313058", "77240-02050"], name: "Fuel Pump", car_maker: "Toyota", applications: "Corolla 1997-2001" },
  { zoren: "ZRM1183146", oem: ["77020-26080"], name: "Fuel Pump", car_maker: "Toyota", applications: "Hiace 2019-2021" },
  { zoren: "ZRM1183069", oem: ["77020-02270"], name: "Fuel Pump", car_maker: "Toyota", applications: "Matrix 2008-2014" },
  { zoren: "ZRM1183159", oem: ["77020-F4040"], name: "Fuel Pump", car_maker: "Toyota", applications: "C-HR 2017-2021" },
  { zoren: "ZRM1183167", oem: ["77020-02A00"], name: "Fuel Pump", car_maker: "Toyota", applications: "Corolla 2019-2022" },
  { zoren: "ZRM1203063", oem: ["PE11-12-35X", "77020-WB001"], name: "Fuel Pump", car_maker: "Toyota", applications: "Yaris 1.5L 2015-2019" },
  { zoren: "ZRM1501197", oem: ["77020-05111"], name: "Fuel Pump", car_maker: "Toyota", applications: "Avensis 2003-2008" },
  { zoren: "ZRM1501198", oem: ["77020-08031"], name: "Fuel Pump", car_maker: "Toyota", applications: "Sienna 2003-2009" },
  { zoren: "ZRM1073004", oem: ["23210-BZ130"], name: "Fuel Pump", car_maker: "Toyota", applications: "Avanza Rush" },
  { zoren: "ZRM1183095", oem: ["77020-60540"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser 2007-2015 / Lexus LX570" },
  { zoren: "ZRM1501199", oem: ["77020-42240"], name: "Fuel Pump", car_maker: "Toyota", applications: "Harrier / RAV4 2018-2020" },
  { zoren: "ZRM1501200", oem: ["77020-F4030"], name: "Fuel Pump", car_maker: "Toyota", applications: "Corolla / C-HR 2016-2020" },
  { zoren: "ZRM1501201", oem: ["77020-02C21"], name: "Fuel Pump", car_maker: "Toyota", applications: "Corolla 2019-2022 / C-HR" },
  { zoren: "ZRM1183178", oem: ["77020-0R060", "77020-0R061"], name: "Fuel Pump", car_maker: "Toyota", applications: "RAV4 2018-2020" },
  { zoren: "ZRM1501195", oem: ["77020-48040"], name: "Fuel Pump", car_maker: "Toyota", applications: "Lexus RX 1997-2003" },
  { zoren: "ZRM1183199", oem: ["77020-12A60"], name: "Fuel Pump", car_maker: "Toyota", applications: "Corolla 2019-2021 / Prius / C-HR" },
  { zoren: "ZRM1183165", oem: ["77020-0R070"], name: "Fuel Pump", car_maker: "Toyota", applications: "Harrier HEV / RAV4 2019-2022" },

  // --- HONDA ---
  { zoren: "ZRM1103003", oem: ["E8922M", "17045-TA0-A00"], name: "Fuel Pump", car_maker: "Honda", applications: "Acura TSX 2009-2014 / Accord Crosstour" },
  { zoren: "ZRM1103005", oem: ["SP8025M", "17045-SWA-A01", "17045-SXS-A01", "17045SWAA01", "17045SXSA01"], name: "Fuel Pump", car_maker: "Honda", applications: "Honda CR-V 2007-2011" },
  { zoren: "ZRM1103008", oem: ["17045-S9A-000"], name: "Fuel Pump", car_maker: "Honda", applications: "SUV CRV 2003-2006" },
  { zoren: "ZRM1103009", oem: ["17045-SAA-H50"], name: "Fuel Pump", car_maker: "Honda", applications: "Jazz Fit 1.3L 1.5L 2003-2008" },
  { zoren: "ZRM1103010", oem: ["17045-TG5-000"], name: "Fuel Pump", car_maker: "Honda", applications: "Jazz Fit 1.3L 1.5L 2009-2014" },
  { zoren: "ZRM1353001", oem: ["17045-SNV-000", "17045-SNA-003", "17045-SNV-010", "17045-SNV-020", "17708-SNA-003", "17708-SNA-000"], name: "Fuel Pump", car_maker: "Honda", applications: "Civic FA1 1.3-2.0L 2006-2011" },
  { zoren: "ZRM1093066", oem: ["E8566M", "17045-S5A-A00", "17045-S5A-A30", "150308", "17045-S5A-A31", "402-P8566M", "40655", "69961", "69962", "FG1394", "P76528M", "SP8011M", "118GE", "17045S5AA31", "535-2020", "F4577A"], name: "Fuel Pump", car_maker: "Honda", applications: "Civic 2.0L 2002-2005" },
  { zoren: "ZRM1153016", oem: ["17045-T2A-A00", "E9145M", "FG1544", "17045-T2A-A01", "SP8966M", "P76836M"], name: "Fuel Pump", car_maker: "Honda", applications: "Honda Accord 13-17 / Acura TLX 16-19" },
  { zoren: "ZRM1501154", oem: ["17045-TBF-A00"], name: "Fuel Pump", car_maker: "Honda", applications: "Civic 1.5L 2.0L 2016-2020" },
  { zoren: "ZRM1501170", oem: ["17045-T9A-000"], name: "Fuel Pump", car_maker: "Honda", applications: "City 1.5L 2015-2019" },
  { zoren: "ZRM1303005", oem: ["17045-TR0-H00", "17045-TR0-A00", "17045-TR0-G01", "17045-TR0-A50"], name: "Fuel Pump", car_maker: "Honda", applications: "Civic 1.8L 2012-2015 / Acura ILX" },
  { zoren: "ZRM1153112", oem: ["17045-TLA-A02", "17045-TLA-A01"], name: "Fuel Pump", car_maker: "Honda", applications: "CR-V 2017-2024 / HR-V 2023-2024" },
  { zoren: "ZRM1103018", oem: ["17045-S3V-A00", "E8720M", "17045-5S3-VA0", "SP8021M", "FG0957"], name: "Fuel Pump", car_maker: "Honda", applications: "Acura MDX 01-02 / Pilot 03-04" },
  { zoren: "ZRM0943191", oem: ["17708-S4K-000", "17708SDGH01M1", "16010-SDG-H00", "17708-SEA-E01"], name: "Fuel Pump", car_maker: "Honda", applications: "Honda Accord 2003-2008" },
  { zoren: "ZRM1293552", oem: ["17045-TBA-A03", "FG2128"], name: "Fuel Pump", car_maker: "Honda", applications: "Honda Civic 2016-2021" },
  { zoren: "ZRM1501207", oem: ["17045-TA7-A01", "17045-TZ7-A00", "KA292100-6353"], name: "Fuel Pump", car_maker: "Honda", applications: "Acura TLX 2015-2020" },
  { zoren: "ZRM1103013", oem: ["17045-T7J-H01", "17708-T7J-H02"], name: "Fuel Pump", car_maker: "Honda", applications: "Honda HR-V 2016-2021" },
  { zoren: "ZRM1153113", oem: ["17045-TVC-A04", "17045-TVC-A01", "17045-TVC-A03", "17045-TVC-A02", "P77570M"], name: "Fuel Pump", car_maker: "Honda", applications: "Honda Accord 2018-2022" },
  { zoren: "ZRM1153114", oem: ["17045-TVA-A03", "P77524M"], name: "Fuel Pump", car_maker: "Honda", applications: "Honda Accord 2018-2022" },
  { zoren: "ZRM1143007", oem: ["17045-TZ5-A10", "P77029M", "17045-TX4-A01"], name: "Fuel Pump", car_maker: "Honda", applications: "Acura RDX 2013-2018" },
  { zoren: "ZRM1103041", oem: ["17045-S3V-A01", "E8657M", "G0930", "17045-S9V-A00", "A27122", "AFS0943S", "P76306M"], name: "Fuel Pump", car_maker: "Honda", applications: "Acura MDX 05-06 / Pilot 05-08" },

  // --- NISSAN ---
  { zoren: "ZRM1073125", oem: ["17040-8U002"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sentra 1.8L 2.0L 2.5L 2000-2006" },
  { zoren: "ZRM1073126", oem: ["17040-8N00B", "E8502M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sentra 1.8L 2.5L 2000-2004" },
  { zoren: "ZRM1080001", oem: ["25060-JE60D", "25060-JH70A"], name: "Fuel Pump", car_maker: "Nissan", applications: "X-Trail T31 2007-2013" },
  { zoren: "ZRM1082001", oem: ["17040-4BA2A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Trail T32 / Rogue 2014-2017" },
  { zoren: "ZRM1083004", oem: ["25060-VW00A", "17042-BW0000"], name: "Fuel Pump", car_maker: "Nissan", applications: "Urvan 2.4L 2008-2010" },
  { zoren: "ZRM1083029", oem: ["17040-2FJ0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Kai Chen D50/R50" },
  { zoren: "ZRM1083030", oem: ["17040-JE20D"], name: "Fuel Pump", car_maker: "Nissan", applications: "T31 X-Trail / J10 Qashqai 2WD 08-13" },
  { zoren: "ZRM1083031", oem: ["17040-JN00C", "17040-JN00A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Teana J32 2008-2012" },
  { zoren: "ZRM1083032", oem: ["17040-JE60D", "17040-JG00A", "17020-4214R-0175", "17040-JY10A", "17040-JA10A", "17040-JD02A", "17040-3ZB0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Qashqai 2.0L / X-Trail T31 2.5L" },
  { zoren: "ZRM1083033", oem: ["17040-JX30A", "17040-AX000", "17040-1FE1A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Versa / NV200 / Tiida" },
  { zoren: "ZRM1083034", oem: ["17040-EW80C"], name: "Fuel Pump", car_maker: "Nissan", applications: "TIIDA Sylphy Livna 1.6L" },
  { zoren: "ZRM1083035", oem: ["17040-CH000", "17040-9EH0C", "E9547M", "17040-35H0E", "5203E", "AR0034488AC"], name: "Fuel Pump", car_maker: "Nissan", applications: "Aprio / Tiida 1.8L 1.6L 2007-2012" },
  { zoren: "ZRM1083037", oem: ["17040-JD00A", "0986580380"], name: "Fuel Pump", car_maker: "Nissan", applications: "Qashqai 2007-2014" },
  { zoren: "ZRM1083038", oem: ["E8496M", "170408J005", "67989", "67988", "P76171M", "FG0501", "P3386M", "170408J100", "170408J105"], name: "Fuel Pump", car_maker: "Nissan", applications: "Altima 2.5L 3.5L 2002-2003" },
  { zoren: "ZRM1083041", oem: ["17040-CG000", "17040-EV10A", "E8534M", "P76334M", "E8540M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti FX35 FX45 / 350Z" },
  { zoren: "ZRM1083042", oem: ["17040-1FE1C", "17040-AX01A", "17040-AX000", "17040-1FE1A", "17040-1FA0A", "17040-1V10A", "17040-9EG0C", "17040-1FA1A", "17040-JX00A", "17040-EE500"], name: "Fuel Pump", car_maker: "Nissan", applications: "Tiida Versa Sylphy Bluebird Cube Note" },
  { zoren: "ZRM1083043", oem: ["17040-3TS0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "L33 Teana 2014-2017" },
  { zoren: "ZRM1083044", oem: ["17040-3DN0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Tiida Sunny March 2011-2016" },
  { zoren: "ZRM1083047", oem: ["17040-EE50C"], name: "Fuel Pump", car_maker: "Nissan", applications: "Tiida 1.8L SC11 Grand Livina" },
  { zoren: "ZRM1083062", oem: ["17040-KH40A", "17040-JR40D", "17040-JR50A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Navara D40T 2005-2007" },
  { zoren: "ZRM1083063", oem: ["17040-5M300"], name: "Fuel Pump", car_maker: "Nissan", applications: "Almera Pulsar Sentra 2000-" },
  { zoren: "ZRM1083067", oem: ["17040-4FN0A", "17040-3RW0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sentra Pulsar Tiida 2012-2016" },
  { zoren: "ZRM1083131", oem: ["17040-VZ00A", "17040-VZ10A", "17040-VZ10B"], name: "Fuel Pump", car_maker: "Nissan", applications: "E25 URVAN 2.5 2008-2012" },
  { zoren: "ZRM1153002", oem: ["17040-9EG0B", "E8855M", "17040-9EG0C", "17040-1FC0B", "17040-EM30A", "17040-EM31A", "17040-ZR70B", "150314", "SP4099M", "SP4022M", "P77095M", "P76612M", "FG1149", "TU319", "40204"], name: "Fuel Pump", car_maker: "Nissan", applications: "Versa Cube 2009-2014" },
  { zoren: "ZRM1153005", oem: ["17040-CA000", "E8536M", "17040-1AA0B", "17040-1AA0C", "17040-1AA0A", "17040-CB00A", "17040-CB000"], name: "Fuel Pump", car_maker: "Nissan", applications: "Murano 3.5L V6 2003-2014" },
  { zoren: "ZRM1153006", oem: ["17040-1HM0A", "17040-1HJ0A", "17040-1HJ0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sunny N17 / March K13 2011-2017" },
  { zoren: "ZRM1153008", oem: ["E8755M", "17040-9N00A", "EH755M", "150331", "17040-JA00A", "17040-ZX01B", "17040-ZX00B", "17040-ZX00A", "17040-3NT0A", "17040-7Y000"], name: "Fuel Pump", car_maker: "Nissan", applications: "Maxima 2009-2014 / Altima 2007-2012" },
  { zoren: "ZRM1153010", oem: ["E8856M", "17040JM10C", "E8854M", "P76755M", "FG1147", "FG1148", "SP4061M", "SP4108M", "17040JM10A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Rogue 2.5L 2008-2015" },
  { zoren: "ZRM1153011", oem: ["17040-1KA0A", "17040-9U01B", "22571", "775043", "2250056", "17040-9U01C", "17040-AX000", "17040-AX010", "QFP903", "39095", "EFP409", "FP5148", "LFP199", "WG1778395", "WG1796706"], name: "Fuel Pump", car_maker: "Nissan", applications: "Juke March Note" },
  { zoren: "ZRM1153013", oem: ["17040-1KD0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Juke F15 2010-2014" },
  { zoren: "ZRM1153015", oem: ["17040-3SG0C", "E9213M", "17040-3SG0E", "FG1549", "SP4097M", "17040-3SG0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sentra 1.8L 2013-2018" },
  { zoren: "ZRM1163004", oem: ["17040-95F0B", "27510-31100"], name: "Fuel Pump", car_maker: "Nissan", applications: "Almera I/II Altima" },
  { zoren: "ZRM1283145", oem: ["17040-ET00A", "E8752M", "17040-9AA0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sentra 2007-2012" },
  { zoren: "ZRM1293004", oem: ["17040-EA000", "E8743M", "17040-ZS00A", "17040-ZZ00A", "17040-ZP00A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Frontier Pathfinder Xterra" },
  { zoren: "ZRM1343018", oem: ["17040-ZQ60A", "17040-7S000", "E8595M", "17040-7S00A", "17040-7S20A", "17040-ZE00A", "17040-ZE00B", "17040-ZQ60C", "17040-ZH000", "17040-ZH00A", "17040-ZQ40B", "17040-ZE40B", "P76654M", "SP4021M", "E8788M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Titan Armada Infiniti QX56" },
  { zoren: "ZRM1083069", oem: ["17040-EW80A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Tiida 2004-2012" },
  { zoren: "ZRM1501009", oem: ["17040-3XA0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Urvan Nv350 2012-2016" },
  { zoren: "ZRM1093027", oem: ["17040-8H31B"], name: "Fuel Pump", car_maker: "Nissan", applications: "X-Trail T30 QR25 2000-2007" },
  { zoren: "ZRM1093049", oem: ["17040-4M405"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sunny N16 2003-2010" },
  { zoren: "ZRM1153004", oem: ["E8545M", "170407Y000", "P76169M", "17040ZD80B", "17040ZB00A", "FG0987", "17040-9j400"], name: "Fuel Pump", car_maker: "Nissan", applications: "Maxima Altima Quest 2004-2009" },
  { zoren: "ZRM1501016", oem: ["17040-VK01A", "17040-1S40A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan D22 KA24 2009-2014" },
  { zoren: "ZRM1501025", oem: ["17040-1CB0D", "17040-1CJ0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti FX35 FX37 QX70" },
  { zoren: "ZRM1343046", oem: ["E8862M", "17040-ZH000", "150315", "17040-ZH00A", "17040-ZQ60B", "550-2120", "FG1277", "P76570M", "SP4023M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Titan / Armada 5.6L" },
  { zoren: "ZRM1501026", oem: ["17040-3TA0C", "E9183M", "17040-4RA0C", "P77017M", "17040-3TA0A", "17040-3TA0B", "17040-3TA0D", "17040-2790A", "SP4090M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Altima Teana Maxima 2013-2018" },
  { zoren: "ZRM1293198", oem: ["17040-EB80C", "17040-4KJ0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Navara Pathfinder 4.0L" },
  { zoren: "ZRM1501057", oem: ["0580313101", "17040-AV710", "CBA7617", "775635", "72617", "7507125", "77125", "320900443", "WG1013068", "WG1778897"], name: "Fuel Pump", car_maker: "Nissan", applications: "Primera 2002-2016" },
  { zoren: "ZRM1501049", oem: ["17040-ED80A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Tiida C11 SC11 2005-2011" },
  { zoren: "ZRM1501064", oem: ["17040-4BB1A", "17040-4BA2A", "17040-6FM0A", "17040-6FL0A", "17040-4EF1A", "17040-4BA1A"], name: "Fuel Pump", car_maker: "Nissan", applications: "X-Trail T32 1.6 2013-2018" },
  { zoren: "ZRM1501065", oem: ["17040-4ED0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Qashqai J11 1.2 2014-2018" },
  { zoren: "ZRM1501092", oem: ["17040-Y2900"], name: "Fuel Pump", car_maker: "Nissan", applications: "Pickup ZG24" },
  { zoren: "ZRM1501085", oem: ["17040-1LB3E", "17040-1LB1E", "17040-1LB1A", "17040-1LB4E", "17040-1LB1D", "17040-1LB0E", "17040-1LB7A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Patrol Y62 / Infiniti QX56 QX80 (1 tube)" },
  { zoren: "ZRM1501086", oem: ["17040-1LB5D", "17040-5ZP0A", "17040-1LB8A", "17040-1LB5C", "17040-1LB2D", "17040-1LB5B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Patrol Y62 / Infiniti QX56 (2 tubes)" },
  { zoren: "ZRM1501087", oem: ["17040-1LK0A", "17040-1LB2C", "17040-1LB0A", "17040-1LA0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Patrol Y62 (3 tubes)" },
  { zoren: "ZRM1293297", oem: ["17040-3ZD0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti QX56 QX80 Armada 5.6L" },
  { zoren: "ZRM1083071", oem: ["17040-1KT0B", "17040-1KT0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Juke HR15DE 2011-2017" },
  { zoren: "ZRM1083106", oem: ["17040-JD01D", "17040-JD01A", "17040-JD03A", "17040-JD01B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Dualis Qashqai 2007-2013" },
  { zoren: "ZRM1073129", oem: ["17040-1VA0A", "17040-3JY0A", "17040-3LT0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Evalia M20 / Serena" },
  { zoren: "ZRM1293187", oem: ["17040-3AN0E", "E9100M", "P77040M", "FG1538", "SP4094M", "17040-3AN0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Micra Versa Note 2012-2019" },
  { zoren: "ZRM1501100", oem: ["17040-3KT1C", "17040-3JL0A", "17040-3KT1A", "17040-3KT1B", "17040-3KT1D", "17040-3KT1E", "17040-3KA1C"], name: "Fuel Pump", car_maker: "Nissan", applications: "Pathfinder Infiniti QX60 2013-2020" },
  { zoren: "ZRM1501136", oem: ["17040-1KH0A", "17040-5JJ1A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Frontier 2.5L D23X 2015-2018" },
  { zoren: "ZRM1083080", oem: ["17040-CG00B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti FX35 V6 2003-2008" },
  { zoren: "ZRM1501138", oem: ["17040-1EK0B", "17040-1EK0A", "E9069M", "FG1648"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan 370Z 2009-2015" },
  { zoren: "ZRM1501140", oem: ["17040-1CJ0C", "17040-1CB0D", "17040-1CA0D", "17040-1CJ0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti FX35 FX50 QX70" },
  { zoren: "ZRM1501141", oem: ["17040-4BB2A"], name: "Fuel Pump", car_maker: "Nissan", applications: "X-Trail 2.5L Qashqai J11" },
  { zoren: "ZRM1501048", oem: ["17040-5RB0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Kicks March Versa 2017-2021" },
  { zoren: "ZRM1501174", oem: ["17040-1HK0A", "17040-1HK0B", "E9100M", "SP4199M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Micra Versa 2012-2019" },
  { zoren: "ZRM1501022", oem: ["17040-5M500"], name: "Fuel Pump", car_maker: "Nissan", applications: "Bluebird Sylphy G10 Sunny N16" },
  { zoren: "ZRM1293248", oem: ["17040-6CT0A", "17040-6CA0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Teana Altima 2019-2022" },
  { zoren: "ZRM1083191", oem: ["17040-1BA0A", "E8931M", "17040-1BA0B", "17040-1BA0C", "17040-1BB0C", "FG1630", "SP4140M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti EX35 EX37 QX50" },
  { zoren: "ZRM1153122", oem: ["17040-1KM1A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Juke 1.5 2012-2016" },
  { zoren: "ZRM1083187", oem: ["17040-1MA0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti M37 Q50 Q70" },
  { zoren: "ZRM1501187", oem: ["17040-4BA0C", "17040-4BA0B", "17040-4BA0A", "FG1932"], name: "Fuel Pump", car_maker: "Nissan", applications: "Rogue 2.5L 2014-2020" },
  { zoren: "ZRM1501190", oem: ["17040-6LB0B", "17040-6LB0A", "17040-6LB0C"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sentra 2020-2024" },
  { zoren: "ZRM1501192", oem: ["17040-1JA2A", "17040-1JA3A", "17040-1JA0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Quest 3.5L 2011-2017" },
  { zoren: "ZRM1083163", oem: ["17040-1BB0B", "17040-1BA0D", "17040-1BB0C", "25060-1BA1C"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti EX35 EX37 2008-2013" },
  { zoren: "ZRM1083164", oem: ["17040-1NC0C"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti G25 G37 M35 Q40" },
  { zoren: "ZRM1501213", oem: ["17040-6AU0A", "17040-4HK1A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti Q50 16-23 / Q60 17-22" },
  { zoren: "ZRM1501210", oem: ["17040-5RL0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Versa" },
  { zoren: "ZRM1501218", oem: ["17040-6HA0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti Q50 Q60 2015-2019" }
];
// ================= PART 2: SUZUKI, ISUZU, MITSUBISHI, GM, FORD =================
const part2 = [
  // --- SUZUKI ---
  { zoren: "ZRM0873001", oem: ["15100-76A30", "101961-5510"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Carry DB52" },
  { zoren: "ZRM1501038", oem: ["15100-74L00"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Swift 1.2 2012-2016" },
  { zoren: "ZRM1003003", oem: ["15100-78F21", "15100-78F00", "15100-78851"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Aerio 2002-2007" },
  { zoren: "ZRM1183005", oem: ["15100-60K00", "292010-0032", "15100-61J05", "292010-0871", "15100-60K01"], name: "Fuel Pump", car_maker: "Suzuki", applications: "APV 2005-2016 1.5L" },
  { zoren: "ZRM1183009", oem: ["15100-65J02", "15100-65842"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Grand Vitara II 2005-2015" },
  { zoren: "ZRM1183028", oem: ["15100-63811", "15100-63J02", "15100-63840", "15100-63J20", "101962-1880"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Swift 2004-2010" },
  { zoren: "ZRM1501017", oem: ["15100-80840", "15100-65MB0", "FG1161", "A25529", "E8773M"], name: "Fuel Pump", car_maker: "Suzuki", applications: "SX4 2.0L 2007-2013" },
  { zoren: "ZRM1501090", oem: ["15100-79J00"], name: "Fuel Pump", car_maker: "Suzuki", applications: "SX4 1.5L/1.6L 2009-2019" },
  { zoren: "ZRM1213021", oem: ["15100-78K00", "15100-79K00", "15100-78000"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Grand Vitara 2.4L 2006-2014" },
  { zoren: "ZRM1143042", oem: ["15100-61M00", "15100-60R00", "15100-68L00"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Vitara 1.6L 2015-2022" },
  { zoren: "ZRM1501148", oem: ["15100-78R01"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Jimny 2019-2023" },
  { zoren: "ZRM1133019", oem: ["15100-71L00", "15100-58M00", "15100-68P00"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Swift 2012-2017" },
  { zoren: "ZRM1501179", oem: ["15100-68K01", "15100-M68K01", "15410-M79F01", "15100-M79F02", "101961-5863"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Alto Omni Wagon R 2000-2019" },
  { zoren: "ZRM1003023", oem: ["15100-81A13", "15100-81A02"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Jimny 1.3L" },

  // --- ISUZU ---
  { zoren: "ZRM0943095", oem: ["E8400M", "P76555M", "SP4051M"], name: "Fuel Pump", car_maker: "Isuzu", applications: "Amigo Rodeo Sport 1998-2003" },
  {zoren: "ZRM0943026", 
    oem: ["E3963M", "67363", "323-00225", "953-5045", "530-2286", "SP6148M"], 
    name: "Fuel Pump", 
    car_maker: "Chevrolet / GMC", 
    applications: "CHEVROLET C1500/C2500/K1500/K2500 SUBURBAN 1998-1999, TAHOE 1998-1999, GMC C1500/C2500/K1500/K2500 SUBURBAN" 
  },
  {zoren: "ZRM0943097", 
    oem: ["E3558M", "FG0331", "19180102", "25348610", "K9142", "MU1145", "MU1737", "P76488M", "SP6617M", "19369923"], 
    name: "Fuel Pump", 
    car_maker: "Hummer", 
    applications: "HUMMER H2 2003" 
  },

  // --- MITSUBISHI ---
  { zoren: "ZRM1501018", oem: ["1760A189", "1760A298", "1760A385", "1760A250", "1770A250"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Outlander 2007-2012" },
  { zoren: "ZRM1183055", oem: ["1760A321", "1760A271", "1760A156", "1760A317"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Lancer-EX 1992-2003" },
  { zoren: "ZRM1501019", oem: ["1760A156"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Outlander 2007-2012 2WD" },
  { zoren: "ZRM1501020", oem: ["1760A168", "1760A221"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "L200 Triton 2013-2018" },
  { zoren: "ZRM1501030", oem: ["1760A297", "1760A227"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Pajero Montero V93/V97" },
  { zoren: "ZRM1501060", oem: ["MR497413"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Lancer 2.0L 2002-2003" },
  { zoren: "ZRM1501037", oem: ["MR990881", "MD367152", "MR990883", "MR990882", "MN161533"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Pajero Montero V73 V75" },
  { zoren: "ZRM1501095", oem: ["1760A354", "1760A408", "1760A576", "1760A573", "1760A418"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Mirage / Space Star 2012-2022" },
  { zoren: "ZRM1183023", oem: ["1760A177", "1760A176", "E8732M", "FG1265", "SP4055M", "SP4056M", "P76624M"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Galant 06-11 / Eclipse 07-12" },
  { zoren: "ZRM1501106", oem: ["1760A318", "1760A383", "1760A249"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Pajero Sport 2008-2018" },
  { zoren: "ZRM1501143", oem: ["1760A058", "SP4155M", "1760A095", "1760A097", "1760A059"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Outlander 2.4L 2005-2006" },
  { zoren: "ZRM1501158", oem: ["MR586031", "MR512042", "101961-6480"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Montero Pinin Pajero iO 2005-" },
  { zoren: "ZRM1501156", oem: ["MN135192", "E8547M"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Lancer 2.0L 2004-2007" },
  { zoren: "ZRM1501059", oem: ["1760A096", "1760A033", "SP4153M", "MR573235"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Outlander 2001-2006" },
  { zoren: "ZRM1501189", oem: ["1760A093", "MN133064", "E8541M", "SP4062M", "2920580", "P76390M", "FG2206"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Outlander 2.4L 2003-" },
  { zoren: "ZRM1183098", oem: ["1760A715", "1760A714"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Xpander 2018-2023" },
  { zoren: "ZRM1501191", oem: ["1760A094"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Outlander 2004-2006" },

  // --- GM (CHEVROLET / GMC / BUICK / CADILLAC) ---
  { zoren: "ZRM1293184", oem: ["E3818M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado 1500 / Sierra 2500 2009-2013" },
  { zoren: "ZRM0943012", oem: ["E3500M", "P86K", "402P3500M", "150003", "19153711", "F2511A", "2630311", "19121626", "25176865", "25345026", "AFS0550S", "SP6086M", "P74835M", "25179865", "67305", "9535103", "9530011", "25162874", "FG0270", "FG0407", "19177272", "25348344", "25376411", "66BOX0UCM", "8BOX0UCM", "FG0122", "P76223M", "402-P3500M", "5302020", "530-2020", "2202-12871", "220212871", "DELFG0053", "FP1355M", "402P3501M", "E3501M", "2630370", "19121627", "19121632", "19153712", "25314655", "25315817", "25345028", "150004", "FG407", "074GE", "74GE", "F2512A", "SP61090M", "P1541M", "P574M", "P1503M", "P1538M", "P75014M", "19153720", "P75017M", "67429", "MU86", "FG0271", "25383463", "9530028", "9535104", "1010060", "1010001", "BGV00251", "BGV00250", "F5212A", "F5211A", "19180108", "25326603", "88965373", "19331261", "19331263", "MU1614", "MU1090", "MU1333", "MU1511", "FG0053", "25326863", "MU1005", "15205623", "MU1613", "MU1089", "MU1516", "19369915"], name: "Fuel Pump Module", car_maker: "Chevrolet / GMC", applications: "Silverado 1500 1999-2004, Sierra 1500/2500/3500, Isuzu" },
  { zoren: "ZRM0943016", oem: ["E3966M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 1997-2002" },
  { zoren: "ZRM0943017", oem: ["E3965M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "P30 / P3500 5.7L 1998-1999" },
  { zoren: "ZRM0943020", oem: ["E3956M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "C3500 / K3500 1998-2000" },
  { zoren: "ZRM0943022", oem: ["E3929M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Blazer / Jimmy 1996" },
  { zoren: "ZRM0943036", oem: ["E3552M"], name: "Fuel Pump", car_maker: "Chevrolet / GM", applications: "Venture / Montana 2002-2005" },
  { zoren: "ZRM0943037", oem: ["E3972M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Escalade / Tahoe / Yukon 1998-2000" },
  { zoren: "ZRM0943047", oem: ["E3510M", "19331256", "19153718", "19369905", "5302238", "P74833M", "MU1620"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Suburban 2500 / Yukon XL 2500 2000-2001" },
  { zoren: "ZRM0943051", oem: ["E3506M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Astro / Safari 2000-2005" },
  { zoren: "ZRM0943053", oem: ["E3369M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Camaro / Firebird 1999-2002" },
  { zoren: "ZRM0943056", oem: ["E3912M"], name: "Fuel Pump", car_maker: "Buick", applications: "Riviera / Aurora 1995-1996" },
  { zoren: "ZRM0943057", oem: ["E3930M", "P74817M", "FG0038", "SP6028M", "MU1605", "MU28"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Tahoe / Yukon 1995" },
  { zoren: "ZRM0943062", oem: ["E3994M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Suburban C1500/C2500 1998-1999" },
  { zoren: "ZRM0943065", oem: ["E3920M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "S10 / Sonoma 1996" },
  { zoren: "ZRM0943067", oem: ["E3950M"], name: "Fuel Pump", car_maker: "Chevrolet / GM", applications: "Cavalier / Malibu 1998-2000" },
  { zoren: "ZRM0943070", oem: ["E3925M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Blazer / Jimmy 1996" },
  { zoren: "ZRM0943050", oem: ["E3556M", "19331260", "19180099", "19369909", "25345024", "P1245M", "P75023M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Avalanche 1500 2002-2003" },
  { zoren: "ZRM0943072", oem: ["E3978M"], name: "Fuel Pump", car_maker: "Pontiac", applications: "Grand Prix 1997" },
  { zoren: "ZRM0943074", oem: ["E3918M"], name: "Fuel Pump", car_maker: "Chevrolet / GM", applications: "Skylark / Beretta / Cavalier 1993-1995" },
  { zoren: "ZRM0943075", oem: ["E3919M"], name: "Fuel Pump", car_maker: "Chevrolet / GM", applications: "Cavalier / Sunfire 1996-1998" },
  { zoren: "ZRM0943080", oem: ["E3940M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Astro / Safari 1997-1999" },
  { zoren: "ZRM0943081", oem: ["E3508M", "MU1615", "MU1518", "MU1321", "MU170", "P74832M", "SP6170M", "FG0324", "67307", "15205627", "19121628"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Escalade / Tahoe / Yukon 2000-2003" },
  { zoren: "ZRM0943110", oem: ["E3584M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 2003" },
  { zoren: "ZRM0943117", oem: ["25324949", "BACT9350A", "BA9350A", "BA9350B", "BAC9350C", "BAT9350A", "92148190", "25324948", "25337050", "AUC9H307NB"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Holden 1997-2002" },
  { zoren: "ZRM0944018", oem: ["E3549M", "88966952", "SP3549M", "P75053M", "P1556M", "MU1837", "FG0387", "88966950", "88965822", "2202510465", "19206120", "19206122", "19206124", "F2550A", "15013514", "P1557M", "150093A", "USEP3549M", "19368752", "MU1835", "19368754", "FG0411", "SKEFP021", "GM0516860", "PN3030", "15050444", "8150504440", "88965820", "67415", "402P3549M", "15077623", "009GE", "1010014"], name: "Fuel Pump", car_maker: "Chevrolet / GM", applications: "Trailblazer / Envoy 2002-2004" },
  { zoren: "ZRM1292016", oem: ["13592486", "13592475"], name: "Fuel Pump", car_maker: "Buick", applications: "Encore 14-UP" },
  { zoren: "ZRM1293034", oem: ["E3817M", "19420737", "19206535", "19206536", "19368798", "19368800", "19206528", "19206529"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 2009" },
  { zoren: "ZRM1293075", oem: ["92250121", "92193776", "92159797", "EFP299"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Holden Commodore 2006-2017" },
  { zoren: "ZRM1243003", oem: ["E3612M", "P76251M", "96494164", "SP6608M", "MU1467", "1598cc"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Aveo 2004-2005" },
  { zoren: "ZRM1293002", oem: ["E3609M", "GM0517270", "19331937", "PN3040", "P76232M", "FG0340", "19331960", "MU1415"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 2004-2007" },
  { zoren: "ZRM1293041", oem: ["F00HK00470"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 2010-2016" },
  { zoren: "ZRM1293050", oem: ["E3750M", "P76511M", "19368762"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2007-2008" },
  { zoren: "ZRM1293060", oem: ["E3756M", "P76280M", "SP6032M"], name: "Fuel Pump", car_maker: "Buick", applications: "LaCrosse / Grand Prix 2008-2009" },
  { zoren: "ZRM1293067", oem: ["E3675M", "M10105", "MU1421", "TS1016", "A33053", "19167488", "19167489", "19303421", "19303422", "19332069", "19332070"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Avalanche / Suburban 2500 2004-2007" },
  { zoren: "ZRM1293069", oem: ["E3748M"], name: "Fuel Pump", car_maker: "GM", applications: "Enclave / Acadia 2007-2008" },
  { zoren: "ZRM0003004", oem: ["96449569"], name: "Fuel Pump", car_maker: "Daewoo / Chevrolet", applications: "Lanos / Lefeng 2005-2006" },
  { zoren: "ZRM0003025", oem: ["96344792"], name: "Fuel Pump", car_maker: "Daewoo", applications: "Lanos Saloon 1997-2002" },
  { zoren: "ZRM0943161", oem: ["P74928M"], name: "Fuel Pump", car_maker: "GM", applications: "Impala / Monte Carlo / Grand Prix 2000-2005" },
  { zoren: "ZRM0943058", oem: ["E3973M"], name: "Fuel Pump", car_maker: "Buick", applications: "Regal / Grand Prix 1998-2000" },
  { zoren: "ZRM1293072", oem: ["E3617M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 3500 2004-2007" },
  { zoren: "ZRM1293084", oem: ["E3815M", "P77023M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2009" },
  { zoren: "ZRM1293097", oem: ["E3747M", "19206532", "150232A", "PN3104", "F2758A", "P76298M", "19368776", "M10206", "FG1058", "19206582", "19370398", "5302175"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2007-2008" },
  { zoren: "ZRM1293104", oem: ["E3790M", "EP1031", "M100059", "M10059", "MU2114", "MU2209", "A30461", "A46024", "15969626", "19167429", "19329336", "19370465", "23240487", "22753589", "22783658", "22833390", "22957143", "84084766", "CFG1371", "SP6657M", "P76830M", "M3520868", "69787"], name: "Fuel Pump", car_maker: "GM", applications: "Enclave / Traverse / Acadia 2009-2017" },
  { zoren: "ZRM1293105", oem: ["E3610M", "MU1657", "FG0809-11B1", "P76262M", "FE10043", "122GE", "67567", "67517", "6239E", "39113", "19149059", "19207718", "19256622"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Escalade / Avalanche 2004-2007" },
  { zoren: "ZRM1293106", oem: ["E3581M", "P76262M", "19168127", "88965556", "19370394", "MU1639", "19149062", "19168126", "19207716"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Tahoe / Yukon / Escalade 2004-2007" },
  { zoren: "ZRM1293107", oem: ["E3705M", "19133546", "19168418", "19208960", "FG0816", "SP6087M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Tahoe / Yukon 5.3L 2005-2007" },
  { zoren: "ZRM1293109", oem: ["E3684M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2004-2007" },
  { zoren: "ZRM1293125", oem: ["E3706M", "M10107", "MU1474", "67544", "FG0815", "P76273M", "SP6603M", "19208962", "19208963"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Avalanche / Suburban 2005-2007" },
  { zoren: "ZRM0943090", oem: ["E3559M", "88966962", "25340156", "10355739"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Tahoe / Yukon 2002-2004" },
  { zoren: "ZRM1293166", oem: ["E3768M", "19299717", "1234773", "150234", "19179869", "19206650", "2920543", "530-2490", "A30011", "B11112100TG", "C0290M", "FG1054", "FP22052S", "M2496229", "MU1711", "SP6107M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Tahoe / Yukon / Escalade 2008-2014" },
  { zoren: "ZRM1294027", oem: ["E4037M", "19301236", "19352773", "19260077", "19211074", "MU2175", "MU2253", "M100071", "SP6684M", "P76852M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 3500 2010-2016" },
  { zoren: "ZRM1293155", oem: ["E4009M", "SP6646M", "P76851M", "19301219", "M10272", "67795", "19256387", "M10266", "19420763"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2010-2013" },
  { zoren: "ZRM1293073", oem: ["96830394", "20895923", "4817842", "4805901", "96629370", "4814207"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Captiva 2006-2016" },
  { zoren: "ZRM0944011", oem: ["92181830", "25369168", "92181807", "92183879", "92159903", "92181802"], name: "Fuel Pump", car_maker: "Buick", applications: "Royaum Holden 2003-2007" },
  { zoren: "ZRM1294015", oem: ["E4042M", "P77016M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra HD 2011-2016" },
  { zoren: "ZRM1292015", oem: ["13592492", "13592469", "13579886"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "CHEVROLET" },
  { zoren: "ZRM1293056", oem: ["E3710M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Uplander / Montana 2006-2007" },
  { zoren: "ZRM1293070", oem: ["E3765M", "M100058", "M100125", "M10191", "69451", "69977", "P76299M", "P76786M", "FG1153", "19181000", "19256376", "19259398", "19300964", "SP6050M", "F2776A", "13551499", "19368768", "PN3156"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Tahoe / Yukon / Escalade 2008-2013" },
  { zoren: "ZRM0944019", oem: ["E3614M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Colorado / Canyon 2004-2005" },
  { zoren: "ZRM1303001", oem: ["E3707M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Trailblazer / Envoy 2005-2007" },
  { zoren: "ZRM1293113", oem: ["92203241"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Holden VE 2009-2013" },
  { zoren: "ZRM0003155", oem: ["E3624S"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "S10 / Jimmy / Sonoma 1992-1994" },
  { zoren: "ZRM0944013", oem: ["92159902"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Holden Commodore 2002-2004" },
  { zoren: "ZRM1293086", oem: ["E4127M", "P76894M", "FG1831", "SP6711M", "M100265", "13582487"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2014-2017" },
  { zoren: "ZRM0943063", oem: ["E3932M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Tahoe / Yukon 1996-1997" },
  { zoren: "ZRM0943096", oem: ["E3953M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Blazer / Jimmy 1997-1998" },
  { zoren: "ZRM0943043", oem: ["E3967M", "MU1748", "MU152", "FG0092", "19177231", "25314341"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Suburban 1998-1999" },
  { zoren: "ZRM0943091", oem: ["E3560M", "88966963"], name: "Fuel Pump", car_maker: "Buick", applications: "Riviera 1996" },
  { zoren: "ZRM1293026", oem: ["E3678M", "19133519", "19303380", "19331939", "2920525", "530-2275", "66074", "830791", "88965414", "A30008", "C0246M", "M3480498", "MU1436", "RE0912S", "SP61435M", "TU466", "USEP3678M", "FG0402", "M10030", "P76088M", "19331946"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 2004-2008" },
  { zoren: "ZRM1293033", oem: ["E3717M", "19153049"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Uplander / Montana 2005-2007" },
  { zoren: "ZRM1501033", oem: ["13586327", "0580200039", "13577234", "0580200103", "F01R00S294", "13586317", "0580200045"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Cruze 1.4 1.6 2006-2016" },
  { zoren: "ZRM1501096", oem: ["E4034M", "13321034", "13579908", "13510671", "19421048", "FG1739"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Cruze / Verano 2011-2016" },
  { zoren: "ZRM1292021", oem: ["13582421", "13503108A", "13588158", "13583142"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Cruze 2015-" },
  { zoren: "ZRM1501126", oem: ["13584225", "13296120", "F01R00S296"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Cruze 2010-2013" },
  { zoren: "ZRM1293061", oem: ["E3797M", "P76699M", "19299715", "19206481", "19259394", "19168707", "5302905", "358301481", "M10133"], name: "Fuel Pump", car_maker: "Cadillac / Chevy", applications: "Escalade / Avalanche 2008-2014" },
  { zoren: "ZRM1293080", oem: ["E3777M", "P76893M", "M100100", "M100101", "MU2192", "MU2193", "A33221", "A33222", "13513408", "13513409", "13582487", "13582489", "SP6710M", "SP6711M", "P76894M", "M100266", "GM0516484", "M100265"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2014-2018" },
  { zoren: "ZRM1293071", oem: ["E3689M", "19167486", "P76147M", "SP6019M", "EC689M", "FG0393", "EC61", "19331948"], name: "Fuel Pump", car_maker: "GMC", applications: "Hummer H2 2004-2007" },
  { zoren: "ZRM1293065", oem: ["E3715M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "HHR 2006-2008" },
  { zoren: "ZRM1293062", oem: ["E3611M", "SP6615M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Pontiac GTO 2004-2006" },
  { zoren: "ZRM1294018", oem: ["E4044M", "P76868M", "F5055A", "M100106", "PN3214", "FG2020", "13585446"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra HD 2011-2016" },
  { zoren: "ZRM0943015", oem: ["E3501M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1999-2003" },
  { zoren: "ZRM1303004", oem: ["E3746M", "M10087", "P76218M", "P76217M", "FG0515", "FG0516", "67508", "SP6007M", "8191533740", "19153374", "M10167", "m100131", "19418261"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Trailblazer / Envoy 2005-2006" },
  { zoren: "ZRM1501080", oem: ["654663731", "GM8408", "4129"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Epica 2.5L 2006-2011" },
  { zoren: "ZRM1293052", oem: ["E3834M", "69965", "SP6629M", "19206584", "FG0908"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2007-2008" },
  { zoren: "ZRM1501034", oem: ["13503670", "13503671"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Cruze 2010-2013" },
  { zoren: "ZRM1501204", oem: ["19420757", "FG1093", "PN3125", "69792"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 2010-2016" },
  { zoren: "ZRM1133012", oem: ["E3691M", "P76253M", "SP6033M", "67511", "MU1679", "FG1940", "19206468", "19330300", "19330301", "88965811"], name: "Fuel Pump", car_maker: "Cadillac", applications: "CTS 2004-2007" },
  { zoren: "ZRM0943041", oem: ["E3974M"], name: "Fuel Pump", car_maker: "Cadillac", applications: "Deville / Eldorado 1998-2002" },
  { zoren: "ZRM0943059", oem: ["E3935M"], name: "Fuel Pump", car_maker: "Cadillac", applications: "Deville / Seville 1997" },
  { zoren: "ZRM1293237", oem: ["E4007M", "13584283", "13592334", "13592319", "13592337", "P76850M", "19303293", "13577471", "13585453", "13594059"], name: "Fuel Pump", car_maker: "Cadillac / Chevy", applications: "CTS / Camaro 2010-2014" },
  { zoren: "ZRM1293273", oem: ["E4002M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Camaro 3.6L 2010-2015" },
  { zoren: "ZRM1293143", oem: ["E4005M", "SP6619M", "FG1057", "19256389", "19257093", "15756457"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2010-2013" },
  { zoren: "ZRM1501071", oem: ["13592601", "13582544", "13582546", "13523335", "13506854"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Spark 2011-2015" },
  { zoren: "ZRM1501073", oem: ["E4092M", "13592646", "13589300", "13592648", "M100152"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Impala 2014-2019" },
  { zoren: "ZRM1293090", oem: ["E3837M", "P77024M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2009-2013" },
  { zoren: "ZRM1293489", oem: ["E4049M", "P77297M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 2010-2016" },
  { zoren: "ZRM1294094", oem: ["E4012M", "M100028", "M10250", "FG1288", "P76855M", "SP6644M", "13505204", "13578372"], name: "Fuel Pump", car_maker: "Buick / Chevy", applications: "LaCrosse / Malibu 2010-2016" },
  { zoren: "ZRM1293508", oem: ["13512935", "M100221", "P77363M", "FG2175", "13582497", "GM0516503", "FP22065S", "13535374", "13513343", "13551500"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Escalade / Suburban 2017-2019" },
  { zoren: "ZRM1501183", oem: ["E4071M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Sonic 2013-2018" },
  { zoren: "ZRM1293548", oem: ["84715864", "84631238", "M100313", "M100295", "832GE", "84505352", "84905876", "84988460", "85510279", "85623234"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2019-2020" },
  { zoren: "ZRM1293059", oem: ["E3752M", "P76286M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2007-2008" },
  { zoren: "ZRM1294107", oem: ["13510918", "FG2242", "86786609", "19367444", "MU2366"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2016-2019" },
  { zoren: "ZRM1293162", oem: ["E3753M", "FG1154", "SP6034M", "P76576M", "1010360", "19180801", "M10132"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Escalade / Avalanche 2008-2009" },
  { zoren: "ZRM0943018", oem: ["E3563M", "SP61029M", "25338726", "F2574A", "402-P3563M", "2202-12876-4"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Sonoma / S10 2002-2003" },
  { zoren: "ZRM1303002", oem: ["E3769M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Trailblazer / Envoy 2008-2009" },
  { zoren: "ZRM1293456", oem: ["E7275M", "68086502AA"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Ram 1500/2500 2011-2022" },
  { zoren: "ZRM0943111", oem: ["E3579M", "SP6094M", "P76274M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "XLR / Corvette 2006" },
  { zoren: "ZRM1293079", oem: ["E3604M", "P76739M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Silverado / Sierra 2500/3500 2004-2007" },
  { zoren: "ZRM1501203", oem: ["E4066M", "13516865", "13577460", "13577815", "M100091"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Encore / Trax 2013-2022" },
  { zoren: "ZRM1293051", oem: ["E4048M", "FG0933", "SP6626M", "P76722M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 2010-2016" },
  { zoren: "ZRM1293469", oem: ["E4036M", "13585191", "13585472", "13591799", "FG1716", "M100084", "M100149", "MU2130", "SP6720M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Captiva Sport 2012-2015" },
  { zoren: "ZRM1293189", oem: ["E3709M", "P76236M", "15263190", "19153051", "19153052", "19179796", "19331951", "SP6433M", "FG0433"], name: "Fuel Pump", car_maker: "Buick", applications: "DTS / Lucerne 2006-2007" },
  { zoren: "ZRM1293217", oem: ["E3786M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Impala 3.5L 2008-2011" },
  { zoren: "ZRM1293098", oem: ["E3688M"], name: "Fuel Pump", car_maker: "Chevrolet / Isuzu", applications: "Colorado / Canyon 2006-2008" },
  { zoren: "ZRM1501105", oem: ["E4040M", "100013", "13506689", "13586051", "13591556", "20965081", "FG1910", "M100013", "SP6715M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Equinox / Terrain 2012-2014" },
  { zoren: "ZRM1501107", oem: ["E4104M", "M100220", "19303782", "13512934", "13582493", "19354928", "SP6750M", "898GE", "P77336M", "FG2244", "MU2334", "M100235"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Escalade / Yukon 2015-2019" },
  { zoren: "ZRM1501116", oem: ["E3841M", "13506690", "13577831", "20818972", "20944910", "SP6658M", "FG1625", "19257060", "19332951", "20818966", "20965082", "13575898"], name: "Fuel Pump", car_maker: "GMC / Chevy", applications: "Terrain / Equinox 2010-2017" },
  { zoren: "ZRM1501145", oem: ["E4072M", "13589775", "13592419", "SP6749M", "P77089M", "FG1816", "MU2156", "825GE", "13585385", "M100122", "13575905", "13506856"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Spark 1.2L 2013-2015" },
  { zoren: "ZRM1501149", oem: ["13579065", "13586776", "13592132", "13515225", "13515199", "13592093"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Sonic / Aveo 2012-2017" },
  { zoren: "ZRM1093243", oem: ["96464637", "96591528", "965915280", "74242415"], name: "Fuel Pump", car_maker: "Daewoo / Chevy", applications: "Matiz / Spark 2005-2021" },
  { zoren: "ZRM1293095", oem: ["E3831M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Silverado 1500 2004-2008" },
  { zoren: "ZRM1501150", oem: ["13598137", "13594751", "13515690", "13575931", "13575993"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Captiva / Antara 2007-2018" },
  { zoren: "ZRM1293333", oem: ["95382386", "94831168", "96830395", "042345250", "04817837", "04805902", "04820814"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Captiva Diesel 2006-2011" },
  { zoren: "ZRM1293448", oem: ["E3840M", "SP6633", "SP6658M", "FG1295"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Equinox / Terrain 2010-2017" },
  { zoren: "ZRM1294016", oem: ["E4030M", "P76881M", "FG2033", "SP6742M", "13505208", "13578371", "13578374", "13578375", "13579893", "13594131", "E4045M", "FG1736", "FG1743", "M100052", "M100066", "SP6635M", "USEP4045M"], name: "Fuel Pump", car_maker: "Chevrolet / Buick", applications: "LaCrosse / Malibu 2010-2016" },
  { zoren: "ZRM1293085", oem: ["E3719M", "P76288M"], name: "Fuel Pump", car_maker: "Pontiac", applications: "Solstice / Sky 2006-2007" },
  { zoren: "ZRM1293226", oem: ["E3724M", "19133588", "FG1308", "SP6653M", "88963684", "19370178"], name: "Fuel Pump", car_maker: "Hummer", applications: "Hummer H3 2006-2008" },
  { zoren: "ZRM0943026", oem: ["E3963M", "67363", "323-00225", "953-5045", "530-2286", "SP6148M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Suburban 1998-1999" },
  { zoren: "ZRM0943097", oem: ["E3558M", "FG0331", "19180102", "25348610", "K9142", "MU1145", "MU1737", "P76488M", "SP6617M", "19369923"], name: "Fuel Pump", car_maker: "Hummer", applications: "Hummer H2 2003" },

  // --- FORD / MAZDA ---
  { zoren: "ZRM1173001", oem: ["E2360M", "2L1Z9H307BB", "2L1Z9H307BF"], name: "Fuel Pump", car_maker: "Ford", applications: "Expedition 2003-2004" },
  { zoren: "ZRM1203002", oem: ["97FB9H307", "98AP9H307", "9H3071460", "B0719483", "1388671"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus MK1 1998-2004" },
  { zoren: "ZRM1204004", oem: ["E10791M", "6G91-9H307-AF", "A2C53287860Z", "1506989"], name: "Fuel Pump", car_maker: "Ford", applications: "S-Max / Mondeo 2006-2015" },
  { zoren: "ZRM1213009", oem: ["0580313186"], name: "Fuel Pump", car_maker: "Ford", applications: "Ranger 2.3L 2008-2012" },
  { zoren: "ZRM1293009", oem: ["DG939H307LG", "DG939H307JD"], name: "Fuel Pump", car_maker: "Ford", applications: "Fusion / Mondeo 2017-2018" },
  { zoren: "ZRM1293010", oem: ["E2436M", "PFS496", "P76381M", "69189", "SP2436", "F1447A", "6L3Z9H307D", "7L3Z9H307D", "8L3Z9H307D", "FG0847", "150135"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 2004-2008" },
  { zoren: "ZRM0003124", oem: ["E2336S", "3W1Z9H307AA", "3W1Z9H307AB", "4W1Z9H307AA", "SP2336H", "67249", "F00E192470", "HP10233", "6W1Z-9H307-D"], name: "Fuel Pump", car_maker: "Ford", applications: "Crown Victoria 2003-2004" },
  { zoren: "ZRM1263010", oem: ["E2383M"], name: "Fuel Pump", car_maker: "Ford", applications: "Freestar 2004-2005" },
  { zoren: "ZRM0003232", oem: ["E2469M", "7R3Z9H307C"], name: "Fuel Pump", car_maker: "Ford", applications: "Mustang 2006-2009" },
  { zoren: "ZRM1293048", oem: ["E2527M"], name: "Fuel Pump", car_maker: "Ford", applications: "E-150 E-250 E-350 2009-2010" },
  { zoren: "ZRM1293124", oem: ["E2476M", "8L1Z9H307B"], name: "Fuel Pump", car_maker: "Ford", applications: "Expedition 2007-2008" },
  { zoren: "ZRM1293154", oem: ["E2553M", "SP2377M", "P76465M", "FG1343", "2920838", "M2496154", "PFS381", "AL2Z9H307-AA"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2009-2010" },
  { zoren: "ZRM1293082", oem: ["E2523M", "A30443", "9L1Z9A299-C", "9L1Z9H307-C", "9L1Z9H307-D", "AL1Z9A299-A", "DFG1319", "SP2496M", "P76463M", "PFS-552", "PS-399", "PS-414"], name: "Fuel Pump", car_maker: "Ford", applications: "Expedition 2009-2014" },
  { zoren: "ZRM1293016", oem: ["E2529M", "9L8Z-9H307C"], name: "Fuel Pump", car_maker: "Ford / Mazda", applications: "Escape / Tribute 2009-2010" },
  { zoren: "ZRM1293023", oem: ["E2479M"], name: "Fuel Pump", car_maker: "Ford", applications: "Edge / MKX 2007-2010" },
  { zoren: "ZRM1293031", oem: ["E2541M", "E2542M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 2009-2014" },
  { zoren: "ZRM1293013", oem: ["E2494M"], name: "Fuel Pump", car_maker: "Ford", applications: "Expedition 2007-2008" },
  { zoren: "ZRM1293032", oem: ["E2588M", "P76759M", "FG1482", "EL3Z9H307A"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 3.5L 2011-2014" },
  { zoren: "ZRM1293047", oem: ["E2545M", "9L3Z9H307E", "PFS490", "SP2096M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 2009-2014" },
  { zoren: "ZRM1293103", oem: ["E2454M", "69185", "6L2Z9H307A", "6L2Z9H307AA", "7L2Z9H307A", "PFS381", "P76118M", "PFS309", "PFS356", "200GE", "SP2108M"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2006-2009" },
  { zoren: "ZRM1501012", oem: ["E2610M", "DA8Z9H307K"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2013-2017" },
  { zoren: "ZRM1214001", oem: ["AB39-9H307-AC", "AB39-9H307-AD", "5230244"], name: "Fuel Pump", car_maker: "Ford", applications: "Ranger 2013-2015" },
  { zoren: "ZRM1293015", oem: ["E2561M", "AE5Z9H307F", "SP2097M", "PFS-594", "P76583M"], name: "Fuel Pump", car_maker: "Ford", applications: "Fusion 2010-2012" },
  { zoren: "ZRM1293021", oem: ["E2458M"], name: "Fuel Pump", car_maker: "Ford", applications: "Fusion 2006-2009" },
  { zoren: "ZRM1203001", oem: ["E10545M"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus 2000-2007" },
  { zoren: "ZRM1203004", oem: ["DV61-9H307-ED"], name: "Fuel Pump", car_maker: "Ford", applications: "Kuga 1.5 2013-2014" },
  { zoren: "ZRM1213005", oem: ["3M519H307", "3M51-9H307", "3N619H3071", "1602781"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus 2004-2011" },
  { zoren: "ZRM1294021", oem: ["CR33-9H307-AD", "P76856M", "BR3Z-9H307B", "CR3Z-9H307A", "CR3Z-9H307B"], name: "Fuel Pump", car_maker: "Ford", applications: "Mustang 2011-2014" },
  { zoren: "ZRM1293037", oem: ["E2578M"], name: "Fuel Pump", car_maker: "Ford", applications: "Edge 2011-2014" },
  { zoren: "ZRM0002049", oem: ["E2064MN", "FG0199", "FG0198", "E2059MN", "E2059M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 / F-250 1990-1996" },
  { zoren: "ZRM1293148", oem: ["P76865M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-250 / F-350 2011-2016" },
  { zoren: "ZRM1501004", oem: ["AB399H307EC", "UC2J-13-35XB", "MOD-199", "GE566", "UC2J1335XB"], name: "Fuel Pump", car_maker: "Ford", applications: "Ranger TKE 3.2 2011-2019" },
  { zoren: "ZRM1204008", oem: ["AB39-9H307-EC"], name: "Fuel Pump", car_maker: "Ford", applications: "Ranger TKE 3.2 2011-2019" },
  { zoren: "ZRM1293208", oem: ["BV6Z-9H307-S", "P76863M"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus 2.0L 2012-2017" },
  { zoren: "ZRM1293049", oem: ["E2566M"], name: "Fuel Pump", car_maker: "Ford", applications: "Escape 2.5L 2010-2012" },
  { zoren: "ZRM0003195", oem: ["E2453M", "150200", "SP2055M", "PFS403", "PFS349", "PFS323", "P76128M", "FG0842", "AFS0917S", "9534178", "7L8Z9H307B", "6L8Z9H307BA", "69168", "5L8Z9H307A", "5L849H307BF", "1AMFP00061", "TU259"], name: "Fuel Pump", car_maker: "Ford", applications: "Escape 2005-2007" },
  { zoren: "ZRM1501056", oem: ["E2598M", "CV61-9H307-BF", "CV6Z-9H307-H", "GV6Z-9H307-D", "F1509A", "PFS1197"], name: "Fuel Pump", car_maker: "Ford", applications: "Escape 2013-2016" },
  { zoren: "ZRM0003047", oem: ["E2509M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-250 / F-350 2008-2010" },
  { zoren: "ZRM1173020", oem: ["E2352M"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2002-2003" },
  { zoren: "ZRM0003030", oem: ["E2301M"], name: "Fuel Pump", car_maker: "Ford", applications: "Mustang 2001-2004" },
  { zoren: "ZRM1293001", oem: ["E2357M", "5L5Z-9H307-AA", "6L5Z-9H307-F"], name: "Fuel Pump", car_maker: "Ford", applications: "Ranger 2004-2006" },
  { zoren: "ZRM1501072", oem: ["F2G3-9H307RC", "DG939H307BD", "DG939H307BC"], name: "Fuel Pump", car_maker: "Ford", applications: "Edge 2.7L 2015-2016" },
  { zoren: "ZRM1501076", oem: ["6G91-9H307-EH", "775305", "1599836", "1769835", "1844410", "6G91-9H307-EG"], name: "Fuel Pump", car_maker: "Ford", applications: "S-Max / Mondeo 2006-2015" },
  { zoren: "ZRM1293116", oem: ["E2443M", "6L1Z9H307A"], name: "Fuel Pump", car_maker: "Ford", applications: "Expedition 2005-2006" },
  { zoren: "ZRM1294019", oem: ["E2605M", "DB53-9H307BG", "P76859M", "P77048M", "FG1551", "FG1756", "DA8Z-9H307J", "DB5Z-9A407A", "DB5Z-9H307C", "PFS-1027", "PFS-998", "MM014", "SP2509M", "SP2520M", "RFMF075", "RFMF081"], name: "Fuel Pump", car_maker: "Ford", applications: "Lincoln MKT / Explorer 2013-2014" },
  { zoren: "ZRM0003261", oem: ["E2218M", "PFS188", "EB218M", "F8ZZ9H307AE", "P74948M", "TU224", "FG0834", "SP2043M", "F8ZZ9H307AD", "MU2030", "P2006M", "67122", "EFP2218M", "TCA902"], name: "Fuel Pump", car_maker: "Ford", applications: "Mustang 3.8L 1998" },
  { zoren: "ZRM0003123", oem: ["E2555M", "F1566A", "P76594M", "FG1666", "66069", "AR3Z-9H307-A"], name: "Fuel Pump", car_maker: "Ford", applications: "Mustang 2010" },
  { zoren: "ZRM1203019", oem: ["C1B1-9H307-BB", "C1B1-9H307-BC", "C1B1-9H307-BD", "C1B1-9H307-BE", "2070055"], name: "Fuel Pump", car_maker: "Ford", applications: "Fiesta 2012-2017" },
  { zoren: "ZRM1294039", oem: ["E2613M", "F1624A", "PN3218", "DG1Z-9H307-R", "P77112M", "358301391", "PFS1032"], name: "Fuel Pump", car_maker: "Ford", applications: "Taurus 3.5L 2013-2017" },
  { zoren: "ZRM1163017", oem: ["E2495M", "FG0967", "SP2135M", "AFS0916S", "E2314", "E2386", "E16028", "A27099", "953-4047", "8L8Z9H307-C", "8L8Z9H307-D", "ZZC2-13-35X", "ZZC2-13-35XA", "SP1134", "P76103", "PFS-468", "69369"], name: "Fuel Pump", car_maker: "Ford", applications: "Escape 2007-2008" },
  { zoren: "ZRM0003053", oem: ["E2244M", "67142", "EB244M", "EFP2203", "EFP2244M", "FG0826", "MU2035", "P568M", "P74953M", "PFS-191", "SP2244M", "TU228", "USEP2244M", "XR3Z-9H307AD"], name: "Fuel Pump", car_maker: "Ford", applications: "Mustang 1999-2000" },
  { zoren: "ZRM1294032", oem: ["FR3Z9H307B", "FG1999", "E2664M", "SP2566M", "PFS1059", "FR3C9H307-BB", "FR3C9H307-BC", "FR3C9H307-BD", "FR3C9H307-BE", "FR3C9H307-BF"], name: "Fuel Pump", car_maker: "Ford", applications: "Mustang 2015-2020" },
  { zoren: "ZRM1293209", oem: ["E2598M", "CV61-9H307-BF", "CV6Z-9H307-H", "GV6Z-9H307-D", "F1509A", "PFS1197"], name: "Fuel Pump", car_maker: "Ford", applications: "Escape 2.0L 2013-2016" },
  { zoren: "ZRM1293204", oem: ["E2559M", "AG1Z9H307C", "SP2118M", "P76590M", "FG1144"], name: "Fuel Pump", car_maker: "Ford", applications: "Taurus 2010-2012" },
  { zoren: "ZRM1293108", oem: ["E2533M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 2004-2008" },
  { zoren: "ZRM1260001", oem: ["CC119H307AC", "1740070", "1812552", "39590"], name: "Fuel Pump", car_maker: "Ford", applications: "Transit 2011-2018 Diesel" },
  { zoren: "ZRM1203010", oem: ["PE20-13-35X", "PE11-13-35X"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 3 BM 2013-2019" },
  { zoren: "ZRM1203014", oem: ["PE1A-13-35X", "PE8C-13-35X"], name: "Fuel Pump", car_maker: "Mazda", applications: "CX-5 2012-2018" },
  { zoren: "ZRM1213003", oem: ["ZY081335XF", "Z605-13-35X"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 3 BK 2004-2006" },
  { zoren: "ZRM1213004", oem: ["8V59-9H307-BD", "ZYE9-13-35XB", "ZJ38-13-35XC", "C203-13-35X"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 2 / Fiesta 2009-2012" },
  { zoren: "ZRM1183022", oem: ["E8750M", "P76622M", "43138", "FG1269", "433GE", "L33L-13-35ZA", "SP4026M"], name: "Fuel Pump", car_maker: "Mazda", applications: "CX-7 2.3L 2007-2012" },
  { zoren: "ZRM1213002", oem: ["LF17-13-35ZA"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 6 2003-2008" },
  { zoren: "ZRM1203006", oem: ["LF6X-13-35XD", "LF6X-13-35XA", "LF6X-13-35XB", "LF6X-13-35XC", "8N61-9H307-LA", "AV619H307LF", "1851814", "1851739"], name: "Fuel Pump", car_maker: "Mazda / Ford", applications: "Mazda 3 / Focus 2011-2020" },
  { zoren: "ZRM1213007", oem: ["LF17-13-35ZA"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 6 2003-2008" },
  { zoren: "ZRM1213020", oem: ["ZJ01-13-35XC", "2S619H307CD"], name: "Fuel Pump", car_maker: "Mazda", applications: "Demio 2000-2003" },
  { zoren: "ZRM1293144", oem: ["E2554M"], name: "Fuel Pump", car_maker: "Ford / Mazda", applications: "Escape / Tribute 2010-2012" },
  { zoren: "ZRM1501062", oem: ["GY01-13-35Z", "ZL01-13-35Z"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 323 1999-2006" },
  { zoren: "ZRM1501041", oem: ["ZL05-13-ZE0"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 323 2.0L 2001-2004" },
  { zoren: "ZRM1501075", oem: ["LF5W-13-ZE0", "LFB6-13-35Z", "LF5W-13-35Z", "PE251335X"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 5 2.0L 2005-2014" },
  { zoren: "ZRM1203013", oem: ["PE01-13-35X", "E9209M", "SP4095M", "P77098M", "FG1651"], name: "Fuel Pump", car_maker: "Mazda", applications: "CX-5 2.0L 2013-2016" },
  { zoren: "ZRM1501160", oem: ["CA43-13-35Z", "E9024M", "CY03-13-35XA", "CA43-13-35Z", "CA41-13-35X"], name: "Fuel Pump", car_maker: "Mazda", applications: "CX-9 3.7L 2011-2015" },
  { zoren: "ZRM1501091", oem: ["AE8Z9A299A", "AE8Z9A299B", "AE8Z9H307C", "SP2479M", "PFS583", "E2593M", "P76891M", "66031"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus 2009-2011" },
  { zoren: "ZRM1293121", oem: ["E2439M"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2004-2005" },
  { zoren: "ZRM1292032", oem: ["EB3G-9H307-DA", "A2C85497400"], name: "Fuel Pump", car_maker: "Ford", applications: "Ranger TKE 2.2L Diesel 2011-2021" },
  { zoren: "ZRM1203031", oem: ["BV619H307JC", "FPE-805", "BV619H307JA", "BV619H307JB", "BV619H307JD", "05802000641686239", "1754929", "1847786", "31321091", "EM10344", "1779841", "1788061", "1839104", "BV61-9H307-DA", "BV61-9H307-DB", "BV61-9H307-DC", "BV61-9H307-DD"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus 2012-2016" },
  { zoren: "ZRM1501147", oem: ["EB3G-9H307-DA", "EB3G-9H307-DB", "A2C85497400"], name: "Fuel Pump", car_maker: "Ford", applications: "Ranger T6 Diesel 2014-2021" },
  { zoren: "ZRM1501153", oem: ["FL3Z9H307C", "E2655M", "P6583M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 3.0L 2015-2018" },
  { zoren: "ZRM1203007", oem: ["BV61-9H307-RC"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus 2013-2016" },
  { zoren: "ZRM1263001", oem: ["E2291M"], name: "Fuel Pump", car_maker: "Ford", applications: "Escape 2001-2004" },
  { zoren: "ZRM1293078", oem: ["E2434M", "PN3101", "FG0850", "PFS1399", "4L3Z9H307BF", "P76343M", "PN3123", "5252180", "F1544A"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 2004-2008" },
  { zoren: "ZRM1501055", oem: ["CN15-9H307-CB", "CN15-9H307-CD"], name: "Fuel Pump", car_maker: "Ford", applications: "Ecosport 2013-2016" },
  { zoren: "ZRM0003097", oem: ["E2516M", "69371", "P76647M", "FG1113", "SP2372M"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus 2.0L 2008" },
  { zoren: "ZRM1173030", oem: ["E2355M", "P76125M", "4L2Z9H307DA", "7L2Z9H307D", "FG0868", "SP2355M"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2004-" },
  { zoren: "ZRM1293219", oem: ["E2568M", "P76591M", "69373", "66028", "PFS532", "SP2516M", "SP2543M", "AL8Z9H307A", "ZZE21335X"], name: "Fuel Pump", car_maker: "Ford", applications: "Escape 2.5L 2009-2012" },
  { zoren: "ZRM1501173", oem: ["CV61-9H307-AD"], name: "Fuel Pump", car_maker: "Ford", applications: "Kuga II 2014-2019" },
  { zoren: "ZRM1293254", oem: ["E2577M", "P6599M", "PFS971", "BB5Z-9H307-A", "5199306", "PFS580", "BB53-9H307-BC", "FG1329"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 3.5L 2011-2012" },
  { zoren: "ZRM1292005", oem: ["E2579M", "BT439H307BB"], name: "Fuel Pump", car_maker: "Ford", applications: "Edge 2011-2015" },
  { zoren: "ZRM1293094", oem: ["E2441M", "AFM098", "69166", "69188", "69189", "P76337M", "P76344M", "199GE", "1AMFP00058", "5L3Z9H307CB", "6L3Z9H307C", "7L3Z9H307C", "525-2200", "8L3Z9H307C", "FG0850", "PFS-301", "PFS-334", "PFS-462", "PFS-495", "SP2005M", "USEP2441M", "SP2436M", "150113", "TU272", "8299-E", "1987580099", "PN3101", "1987580093"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 2005-2008" },
  { zoren: "ZRM1293500", oem: ["E2581M", "P77162M", "BC2Z-9H307A", "FG1478"], name: "Fuel Pump", car_maker: "Ford", applications: "E-350 2011-2019" },
  { zoren: "ZRM0003038", oem: ["E2235M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-250 1999-2004" },
  { zoren: "ZRM1204003", oem: ["5S719H307CB", "5S71-9H307-DB", "A2C53124742", "A2C53140363", "1987580014"], name: "Fuel Pump", car_maker: "Ford", applications: "Mondeo" },
  { zoren: "ZRM0003185", oem: ["E2287M"], name: "Fuel Pump", car_maker: "Ford", applications: "Excursion 2000-2005" },
  { zoren: "ZRM1173003", oem: ["E2338M"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2001-2003" },
  { zoren: "ZRM1501209", oem: ["BB5-9H307-D", "PFS-589", "USEP46256M"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2.0L 2012-" },
  { zoren: "ZRM1501211", oem: ["CK41-9H307-AC", "CK41-9H307-AD", "CK41-9H307-BD", "CK4Z-9H307-D", "PFS1219", "SP2562M", "E2649M", "FG1977", "CK4Z-9H307-A"], name: "Fuel Pump", car_maker: "Ford", applications: "Transit 150 250 2015-2019" },
  { zoren: "ZRM1183117", oem: ["L5T3-13-35Z"], name: "Fuel Pump", car_maker: "Mazda", applications: "Raptor 2009-2015" }
];
// ================= PART 3: CHRYSLER, DODGE, JEEP & EUROPEAN BRANDS =================
const balancedData = [
  // --- CHRYSLER / DODGE / JEEP / RAM ---
  { zoren: "ZRM1133005", oem: ["E7113M"], name: "Fuel Pump", car_maker: "Chrysler / Dodge", applications: "Cirrus / Stratus 1998-2000" },
  { zoren: "ZRM1133006", oem: ["E7144M"], name: "Fuel Pump", car_maker: "Chrysler / Dodge", applications: "Town & Country / Caravan 2001-2003" },
  { zoren: "ZRM1293003", oem: ["E7196M", "5139031AD"], name: "Fuel Pump", car_maker: "Chrysler / Dodge", applications: "Town & Country / Caravan 2005-2007" },
  { zoren: "ZRM1293011", oem: ["E7189M"], name: "Fuel Pump", car_maker: "Chrysler", applications: "PT Cruiser 2.4L 2004-2010" },
  { zoren: "ZRM1293117", oem: ["E7210M", "68004475AB"], name: "Fuel Pump", car_maker: "Chrysler / Dodge", applications: "Sebring / Avenger 2007-2014" },
  { zoren: "ZRM1293039", oem: ["E7253M"], name: "Fuel Pump", car_maker: "Chrysler / Dodge", applications: "200 / Sebring / Avenger 2008-2014" },
  { zoren: "ZRM1293455", oem: ["68405631AC", "68643777AA"], name: "Fuel Pump", car_maker: "Chrysler / Dodge", applications: "300 / Charger / Challenger 2020-2023" },
  { zoren: "ZRM1333005", oem: ["E7194M"], name: "Fuel Pump", car_maker: "Chrysler", applications: "Pacifica 2004-2006" },
  { zoren: "ZRM1304002", oem: ["E7241M", "5136021AE"], name: "Fuel Pump", car_maker: "Chrysler / Dodge", applications: "300 / Charger 2005-2010" },
  { zoren: "ZRM1304009", oem: ["E7192M", "05136022AG"], name: "Fuel Pump", car_maker: "Chrysler / Dodge", applications: "300 / Charger 2005-2017" },
  { zoren: "ZRM1304004", oem: ["E7184M", "5135549AA"], name: "Fuel Pump", car_maker: "Chrysler / Dodge", applications: "Aspen / Durango 2004-2007" },
  { zoren: "ZRM1304005", oem: ["E7264A", "04581410AB"], name: "Fuel Pump", car_maker: "Chrysler / Dodge", applications: "300C / Charger / Challenger 2005-2019" },
  
  { zoren: "ZRM1293046", oem: ["E7234M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Aspen / Durango 2008-2009" },
  { zoren: "ZRM1293157", oem: ["E7270M", "5145594AA"], name: "Fuel Pump", car_maker: "Dodge", applications: "Ram 1500 2011-2017" },
  { zoren: "ZRM1293027", oem: ["E7252M", "68050962AA"], name: "Fuel Pump", car_maker: "Dodge", applications: "Ram 1500 2009-2010" },
  { zoren: "ZRM1293038", oem: ["E7269M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Journey 3.6L 2011-2018" },
  { zoren: "ZRM1293042", oem: ["E7259M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Ram 1500 2008" },
  { zoren: "ZRM1293045", oem: ["E7255M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Journey 2008-2011" },
  { zoren: "ZRM1304003", oem: ["E7182M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Ram 1500/2500/3500 2004-2008" },
  { zoren: "ZRM1304007", oem: ["E7165M", "5104694AB"], name: "Fuel Pump", car_maker: "Dodge", applications: "Ram 1500 2004-2006" },
  { zoren: "ZRM1343009", oem: ["E7161M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Ram 1500 2002-2003" },
  { zoren: "ZRM1343010", oem: ["E7168M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Dakota 2003" },
  { zoren: "ZRM1343002", oem: ["E7117M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Durango 1998-2003" },
  { zoren: "ZRM1343029", oem: ["E7160M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Dakota 2003" },
  { zoren: "ZRM1343022", oem: ["E7116M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Dakota 1997-1999" },
  { zoren: "ZRM1293115", oem: ["E7280M", "68181986AB"], name: "Fuel Pump", car_maker: "Dodge / Jeep", applications: "Dart / Cherokee 2013-2016" },
  { zoren: "ZRM1293122", oem: ["E7219M", "68004095AB"], name: "Fuel Pump", car_maker: "Dodge / Jeep", applications: "Nitro / Liberty 2007-2012" },
  { zoren: "ZRM1304006", oem: ["E7271M", "05145583AA"], name: "Fuel Pump", car_maker: "Dodge / Jeep", applications: "Durango / Grand Cherokee 2011-2019" },
  { zoren: "ZRM1293035", oem: ["E7220M", "68060545AA"], name: "Fuel Pump", car_maker: "Dodge / Jeep", applications: "Caliber / Compass / Patriot 2007-2016" },
  { zoren: "ZRM1300001", oem: ["E7286A", "5145586AC"], name: "Fuel Pump", car_maker: "Dodge", applications: "Durango 3.6L 2011-2017" },
  { zoren: "ZRM1293030", oem: ["E7235M", "68030875AA"], name: "Fuel Pump", car_maker: "Dodge / Chrysler", applications: "Town & Country / Caravan 2008-2010" },
  { zoren: "ZRM1293040", oem: ["E7218M", "0510575AC"], name: "Fuel Pump", car_maker: "Dodge / Jeep", applications: "Caliber / Patriot 2007-2016" },
  { zoren: "ZRM1293036", oem: ["E7237M", "68027986AB"], name: "Fuel Pump", car_maker: "Dodge", applications: "Ram 1500 2009-2010" },
  { zoren: "ZRM1293044", oem: ["E7251M", "68039210AA"], name: "Fuel Pump", car_maker: "Dodge", applications: "Journey 2.4L 2009-2018" },
  { zoren: "ZRM1293194", oem: ["E7254M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Grand Caravan 3.3L 2008-2010" },
  { zoren: "ZRM1293205", oem: ["68197307AA"], name: "Fuel Pump", car_maker: "Ram", applications: "Ram 1500 3.6L/5.7L 2015-2017" },
  { zoren: "ZRM1293456", oem: ["E7275M", "68086502AA"], name: "Fuel Pump", car_maker: "Ram", applications: "Ram 1500/2500/3500 2011-2022" },
  { zoren: "ZRM1133001", oem: ["E7094M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Caravan / Voyager 1996-2000" },
  { zoren: "ZRM1133004", oem: ["E7172M"], name: "Fuel Pump", car_maker: "Dodge / Chrysler", applications: "Town & Country 2004-2006" },
  { zoren: "ZRM1133007", oem: ["E7146M"], name: "Fuel Pump", car_maker: "Dodge / Chrysler", applications: "Caravan 2001-2003" },
  { zoren: "ZRM1133011", oem: ["E7129M"], name: "Fuel Pump", car_maker: "Dodge / Chrysler", applications: "Caravan 1998-2000" },
  { zoren: "ZRM1133013", oem: ["E7223M"], name: "Fuel Pump", car_maker: "Dodge / Chrysler", applications: "Caravan 2005-2007" },
  { zoren: "ZRM1293150", oem: ["E7272M"], name: "Fuel Pump", car_maker: "Dodge / Chrysler", applications: "Town & Country / Caravan 2011-2019" },
  { zoren: "ZRM1293088", oem: ["E7217M"], name: "Fuel Pump", car_maker: "Dodge / Chrysler", applications: "200 / Avenger 2007-2014" },

  { zoren: "ZRM1293339", oem: ["52030306AB"], name: "Fuel Pump", car_maker: "Jeep", applications: "Wrangler 2.0L 2018-2023" },
  { zoren: "ZRM1293178", oem: ["E7360M", "68109894AE"], name: "Fuel Pump", car_maker: "Jeep", applications: "Cherokee 2014-2018" },
  { zoren: "ZRM1293024", oem: ["E2558M", "AE9Z9H307A"], name: "Fuel Pump", car_maker: "Jeep / Ford", applications: "Flex / MKT 2010-2012" },
  { zoren: "ZRM1293076", oem: ["E7197M", "5143579AI"], name: "Fuel Pump", car_maker: "Jeep", applications: "Grand Cherokee / Commander 2005-2010" },
  { zoren: "ZRM1293111", oem: ["E7265M", "68065575AB"], name: "Fuel Pump", car_maker: "Jeep", applications: "Wrangler 2009-2018" },
  { zoren: "ZRM1293112", oem: ["E7199M", "68011583AD"], name: "Fuel Pump", car_maker: "Jeep", applications: "Liberty 2005-2007" },
  { zoren: "ZRM1343007", oem: ["E7121MN", "5012953AB"], name: "Fuel Pump", car_maker: "Jeep", applications: "Cherokee 1997-2001" },
  { zoren: "ZRM1343016", oem: ["E7115MN", "5012952AC"], name: "Fuel Pump", car_maker: "Jeep", applications: "Wrangler TJ 1997-2002" },
  { zoren: "ZRM1293110", oem: ["E7200M", "5161335AB"], name: "Fuel Pump", car_maker: "Jeep", applications: "Wrangler 2005-2006" },
  { zoren: "ZRM1343021", oem: ["E7127MN", "52100425AE"], name: "Fuel Pump", car_maker: "Jeep", applications: "Grand Cherokee 1999-2004" },
  { zoren: "ZRM1293275", oem: ["E7243M", "68003339AB"], name: "Fuel Pump", car_maker: "Jeep", applications: "Wrangler 3.8L 2007-2008" },
  { zoren: "ZRM0003255", oem: ["E7162M", "5019862AB"], name: "Fuel Pump", car_maker: "Jeep", applications: "Liberty 2002-2003" },

  // --- MERCEDES BENZ ---
  { zoren: "ZRM1102002", oem: ["2034702394", "E8475M"], name: "Fuel Pump", car_maker: "Mercedes", applications: "C230 C240 W203" },
  { zoren: "ZRM1104002", oem: ["2114704194", "E8530M"], name: "Fuel Pump", car_maker: "Mercedes", applications: "E320 E350 W211" },
  { zoren: "ZRM1104001", oem: ["2114701794", "E8572M"], name: "Fuel Pump", car_maker: "Mercedes", applications: "E55 AMG 2003-2005" },
  { zoren: "ZRM0004016", oem: ["2214708494"], name: "Fuel Pump", car_maker: "Mercedes", applications: "S550 S500 W221 2006-2013" },
  { zoren: "ZRM1102001", oem: ["2034703594"], name: "Fuel Pump", car_maker: "Mercedes", applications: "C230 C240 2002" },
  { zoren: "ZRM1501068", oem: ["2184700394"], name: "Fuel Pump", car_maker: "Mercedes", applications: "W204 C300 / W212" },
  { zoren: "ZRM1501114", oem: ["2044700294"], name: "Fuel Pump", car_maker: "Mercedes", applications: "W204 C180/C200 2007-2014" },
  { zoren: "ZRM1501115", oem: ["2054701594"], name: "Fuel Pump", car_maker: "Mercedes", applications: "GLC X253 / C300 W205" },
  { zoren: "ZRM1501129", oem: ["2044700894"], name: "Fuel Pump", car_maker: "Mercedes", applications: "C350 C300 GLK350 2008-2012" },
  { zoren: "ZRM1501130", oem: ["2044701394"], name: "Fuel Pump", car_maker: "Mercedes", applications: "C250 E550 W204" },
  { zoren: "ZRM1501131", oem: ["2114704594"], name: "Fuel Pump", car_maker: "Mercedes", applications: "CLS55 AMG W211" },
  { zoren: "ZRM1501132", oem: ["1714700990"], name: "Fuel Pump", car_maker: "Mercedes", applications: "S550 W221" },
  { zoren: "ZRM1501133", oem: ["2114703994"], name: "Fuel Pump", car_maker: "Mercedes", applications: "E500 E320 W211" },
  { zoren: "ZRM1501134", oem: ["2114704094"], name: "Fuel Pump", car_maker: "Mercedes", applications: "E500 E320 CLK500" },
  { zoren: "ZRM1294037", oem: ["2044701394", "A2044701394"], name: "Fuel Pump", car_maker: "Mercedes", applications: "C350 C300 GLK350" },
  { zoren: "ZRM1501144", oem: ["1664701794"], name: "Fuel Pump", car_maker: "Mercedes", applications: "ML350 ML550 GL550" },
  { zoren: "ZRM1294086", oem: ["A4474706500"], name: "Fuel Pump", car_maker: "Mercedes", applications: "Vito W447 Metris" },
  { zoren: "ZRM1293441", oem: ["A1664702994"], name: "Fuel Pump", car_maker: "Mercedes", applications: "W166 GLE Diesel" },

  // --- PEUGEOT / RENAULT / VW / BMW / LAND ROVER / VOLVO ---
  { zoren: "ZRM1054013", oem: ["1525.77", "9631944080"], name: "Fuel Pump", car_maker: "Peugeot", applications: "Citroen Xantia / Peugeot 806" },
  { zoren: "ZRM1292001", oem: ["9737409900"], name: "Fuel Pump", car_maker: "Peugeot", applications: "Citroen C5 / Peugeot 508" },
  { zoren: "ZRM1292002", oem: ["9670251480"], name: "Fuel Pump", car_maker: "Peugeot", applications: "Peugeot 207 308 408" },
  { zoren: "ZRM1294046", oem: ["1525.Q7"], name: "Fuel Pump", car_maker: "Peugeot", applications: "Peugeot 406 1.6/1.8" },
  { zoren: "ZRM1293077", oem: ["1525.QA"], name: "Fuel Pump", car_maker: "Peugeot", applications: "Peugeot 207 / Citroen C3" },
  { zoren: "ZRM1501165", oem: ["1525.Y1"], name: "Fuel Pump", car_maker: "Peugeot", applications: "Peugeot 206" },
  { zoren: "ZRM1501135", oem: ["1525.HZ"], name: "Fuel Pump", car_maker: "Peugeot", applications: "Citroen C4 / Peugeot Partner" },

  { zoren: "ZRM1162001", oem: ["8200306918"], name: "Fuel Pump", car_maker: "Renault", applications: "Logan 2007-2009" },
  { zoren: "ZRM1162123", oem: ["8200683199"], name: "Fuel Pump", car_maker: "Renault", applications: "Clio II III" },
  { zoren: "ZRM1501146", oem: ["172025758R"], name: "Fuel Pump", car_maker: "Renault", applications: "Dacia Dokker Lodgy" },
  { zoren: "ZRM1163005", oem: ["8200130191"], name: "Fuel Pump", car_maker: "Renault", applications: "Megane MK II" },
  { zoren: "ZRM1163034", oem: ["8200307403"], name: "Fuel Pump", car_maker: "Renault", applications: "Logan / Duster" },
  { zoren: "ZRM1501015", oem: ["8200432671"], name: "Fuel Pump", car_maker: "Renault", applications: "Kangoo 1.6" },
  { zoren: "ZRM1163036", oem: ["172022047R"], name: "Fuel Pump", car_maker: "Renault", applications: "Sandero 2008-2019" },
  { zoren: "ZRM1501177", oem: ["172022377R"], name: "Fuel Pump", car_maker: "Renault", applications: "Sandero II / Logan II" },
  { zoren: "ZRM1203042", oem: ["8200432671"], name: "Fuel Pump", car_maker: "Renault", applications: "Kangoo Express" },
  { zoren: "ZRM1501205", oem: ["172020029R"], name: "Fuel Pump", car_maker: "Renault", applications: "Fluence / Megane" },
  { zoren: "ZRM1153104", oem: ["172021121R"], name: "Fuel Pump", car_maker: "Renault", applications: "Duster 2012-2016" },
  { zoren: "ZRM1163065", oem: ["172025272R"], name: "Fuel Pump", car_maker: "Renault", applications: "Duster 2012-2021" },

  { zoren: "ZRM0004013", oem: ["7L6919087F"], name: "Fuel Pump", car_maker: "VW", applications: "Touareg V6" },
  { zoren: "ZRM0004014", oem: ["7L6919087G"], name: "Fuel Pump", car_maker: "VW", applications: "Touareg V8" },
  { zoren: "ZRM0004015", oem: ["7L8919087B"], name: "Fuel Pump", car_maker: "VW", applications: "Audi Q7 / Touareg" },
  { zoren: "ZRM1074039", oem: ["1J0919087J"], name: "Fuel Pump", car_maker: "VW", applications: "Golf IV / Bora / Beetle" },
  { zoren: "ZRM1144012", oem: ["56D919051B"], name: "Fuel Pump", car_maker: "VW", applications: "Passat CC" },
  { zoren: "ZRM1144017", oem: ["8R0919051E"], name: "Fuel Pump", car_maker: "VW", applications: "Audi Q5 2.0L" },
  { zoren: "ZRM1184001", oem: ["4F0919051BA"], name: "Fuel Pump", car_maker: "VW", applications: "Audi A6 2.0L" },
  { zoren: "ZRM1144025", oem: ["8R0919051N"], name: "Fuel Pump", car_maker: "VW", applications: "Audi Q5" },

  { zoren: "ZRM1095001", oem: ["16146752499", "E8416M"], name: "Fuel Pump", car_maker: "BMW", applications: "E46 325i 330i" },
  { zoren: "ZRM1084007", oem: ["16141182842"], name: "Fuel Pump", car_maker: "BMW", applications: "E36 318i" },
  { zoren: "ZRM1084005", oem: ["16141183845"], name: "Fuel Pump", car_maker: "BMW", applications: "E46 320d" },
  { zoren: "ZRM1094002", oem: ["16116755046"], name: "Fuel Pump", car_maker: "BMW", applications: "X5 2000-2006" },
  { zoren: "ZRM1501066", oem: ["16117159604"], name: "Fuel Pump", car_maker: "BMW", applications: "X3 E83" },
  { zoren: "ZRM1501067", oem: ["E8389M", "1634702994"], name: "Fuel Pump", car_maker: "Mercedes", applications: "ML320 ML430" },
  { zoren: "ZRM1063004", oem: ["16117373503"], name: "Fuel Pump", car_maker: "BMW", applications: "5 Series E60" },
  { zoren: "ZRM1154002", oem: ["16117197076"], name: "Fuel Pump", car_maker: "BMW", applications: "3 Series 320i" },
  { zoren: "ZRM1154003", oem: ["16147163298"], name: "Fuel Pump", car_maker: "BMW", applications: "128i 135i 328i" },
  { zoren: "ZRM1501152", oem: ["16117212585"], name: "Fuel Pump", car_maker: "BMW", applications: "X5 E70 X6 E71" },

  { zoren: "ZRM1501081", oem: ["LR014995"], name: "Fuel Pump", car_maker: "Land Rover", applications: "Range Rover Sport 2009-2013" },
  { zoren: "ZRM1501082", oem: ["LR043155"], name: "Fuel Pump", car_maker: "Land Rover", applications: "Range Rover 2010-2012" },
  { zoren: "ZRM0004023", oem: ["LR043385"], name: "Fuel Pump", car_maker: "Land Rover", applications: "LR4 Discovery 4" },
  { zoren: "ZRM1501083", oem: ["LR038599"], name: "Fuel Pump", car_maker: "Land Rover", applications: "LR2 2008-2012" },
  { zoren: "ZRM1501101", oem: ["LR057235"], name: "Fuel Pump", car_maker: "Land Rover", applications: "Evoque 2012-2017" },
  { zoren: "ZRM1294072", oem: ["LR038602"], name: "Fuel Pump", car_maker: "Land Rover", applications: "Freelander 2 Diesel" },
  { zoren: "ZRM1501121", oem: ["LR065349"], name: "Fuel Pump", car_maker: "Land Rover", applications: "Discovery Sport" },
  { zoren: "ZRM0004060", oem: ["LR014998"], name: "Fuel Pump", car_maker: "Land Rover", applications: "LR3 / Range Rover Sport" },
  { zoren: "ZRM0004018", oem: ["LR015177"], name: "Fuel Pump", car_maker: "Land Rover", applications: "Range Rover III" },
  { zoren: "ZRM1104012", oem: ["31372882"], name: "Fuel Pump", car_maker: "Volvo", applications: "S80 XC60" },
  { zoren: "ZRM1501184", oem: ["BJ32-9A309-BB"], name: "Fuel Pump", car_maker: "Land Rover", applications: "Range Rover Sport 2014-2018" }
];
  // ================= PART 4: ISUZU PAGE SPECIFIC DATA =================
const isuzuPageData = [
  { 
    zoren: "ZRM0943095", 
    oem: ["E8400M", "P76555M", "SP4051M"], 
    name: "Fuel Pump", 
    car_maker: "Isuzu", 
    applications: "Isuzu Amigo Rodeo Sport 1998-2003" 
  },
  { 
    zoren: "ZRM0943026", 
    oem: ["E3963M", "67363", "323-00225", "953-5045", "530-2286", "SP6148M"], 
    name: "Fuel Pump", 
    car_maker: "Chevrolet / GMC", 
    applications: "CHEVROLET C1500/C2500/K1500/K2500 SUBURBAN 1998-1999, TAHOE 1998-1999" 
  },
  { 
    zoren: "ZRM0943097", 
    oem: ["E3558M", "FG0331", "19180102", "25348610", "K9142", "MU1145", "MU1737", "P76488M", "SP6617M", "19369923"], 
    name: "Fuel Pump", 
    car_maker: "Hummer", 
    applications: "HUMMER H2 2003" 
  }
];
// 1. IMPORT FIREBASE (MUST BE AT THE TOP)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, Timestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 2. CONFIGURE FIREBASE (YOUR KEYS)
const firebaseConfig = {
    apiKey: "AIzaSyBqkMI_VD9r1cZg9gXT4nfNRb-JMOKfydA",
    authDomain: "fastway-autospare-parts.firebaseapp.com",
    projectId: "fastway-autospare-parts",
    storageBucket: "fastway-autospare-parts.firebasestorage.app",
    messagingSenderId: "299025345282",
    appId: "1:299025345282:web:1f1d6c02742e7d62ffb01b",
    measurementId: "G-1LX779NZBE"
};

// Initialize Cloud Connection
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firebase Connected Successfully");

// ======================================================
// 3. YOUR STATIC DATA (PASTE YOUR HUGE LISTS HERE)
// ======================================================

// *** PASTE const part1 = [...] HERE ***

// *** PASTE const part2 = [...] HERE ***

// *** PASTE const balancedData = [...] HERE ***

// *** PASTE const isuzuPageData = [...] HERE ***


// COMBINE ALL STATIC DATA
// (Make sure you pasted the lists above, otherwise this line will break!)
const staticDatabase = [
    ...part1, 
    ...part2, 
    ...balancedData, 
    ...isuzuPageData
];

// ======================================================
// 4. THE LOGIC (CLOUD + SEARCH)
// ======================================================

let cloudData = []; // Stores new parts from internet

// A. LISTEN FOR NEW DATA FROM CLOUD
const q = query(collection(db, "inventory"), orderBy("createdAt", "desc"));
onSnapshot(q, (snapshot) => {
    cloudData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    console.log("New data received from cloud!", cloudData);
    
    // Refresh the display immediately
    const searchInput = document.getElementById("searchInput");
    if(searchInput) {
        const query = searchInput.value.trim();
        // Merge Cloud Data + Static Data
        const combined = [...cloudData, ...staticDatabase];
        renderResults(searchLogic(combined, query), query);
    }
});

// B. SAVE DATA TO CLOUD (The "Add" Button)
const saveBtn = document.getElementById("savePartBtn");
if(saveBtn) {
    saveBtn.addEventListener("click", async () => {
        const zoren = document.getElementById("inZoren").value;
        const oem = document.getElementById("inOem").value;
        const maker = document.getElementById("inMaker").value;
        const app = document.getElementById("inApp").value;

        if(!zoren || !maker) {
            alert("Please fill in Zoren Number and Car Maker!");
            return;
        }

        saveBtn.innerText = "Saving...";
        
        try {
            // Send to Google Cloud
            await addDoc(collection(db, "inventory"), {
                zoren: zoren,
                oem: oem.split(",").map(s => s.trim()), // Converts "123, 456" to List
                name: "Fuel Pump (New)",
                car_maker: maker,
                applications: app,
                createdAt: Timestamp.now()
            });

            alert("Saved Permanently to Website!");
            document.getElementById("addModal").style.display = "none";
            
            // Clear form
            document.getElementById("inZoren").value = "";
            document.getElementById("inOem").value = "";
            document.getElementById("inMaker").value = "";
            document.getElementById("inApp").value = "";

        } catch (e) {
            console.error("Error:", e);
            alert("Error saving. Check console.");
        }
        saveBtn.innerText = "Save Permanently";
    });
}

// C. SEARCH FUNCTION
function searchLogic(data, q) {
    q = q.toLowerCase().trim();
    return data.filter(item => {
        if (!q) return true; 
        
        // Safe Checks
        const inOem = item.oem ? item.oem.some(o => o.toLowerCase().includes(q)) : false;
        const inZoren = item.zoren ? item.zoren.toLowerCase().includes(q) : false;
        const inName = item.name ? item.name.toLowerCase().includes(q) : false;
        const inApp = item.applications ? item.applications.toLowerCase().includes(q) : false;
        const inMaker = item.car_maker ? item.car_maker.toLowerCase().includes(q) : false;

        return inOem || inZoren || inName || inApp || inMaker;
    });
}

// D. DISPLAY FUNCTION
function highlightMatch(text, query) {
    if (!query || !text) return text;
    const strText = text.toString(); 
    const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${safeQuery})`, 'gi');
    return strText.replace(regex, '<span class="highlight">$1</span>');
}

function renderResults(results, query) {
    const box = document.getElementById("result");
    const countBox = document.getElementById("resultCount");
    if (!box) return; 
    box.innerHTML = ""; 

    if(countBox) countBox.innerText = results.length > 0 ? `Showing ${results.length} Result(s)` : "";

    if (results.length === 0) {
        box.innerHTML = "<h3 class='no-result'>No Products Found</h3>";
        return;
    }

    results.forEach(p => {
        let oemHtml = `<ul class="oem-list">`;
        if(Array.isArray(p.oem)) {
            p.oem.forEach(num => oemHtml += `<li>${highlightMatch(num, query)}</li>`);
        }
        oemHtml += `</ul>`;

        const cardHtml = `
            <div class="product-card">
                <h3>${highlightMatch(p.name, query)}</h3>
                <div class="info-row"><span class="label">Zoren P/N:</span><span class="value"><b>${highlightMatch(p.zoren, query)}</b></span></div>
                <div class="info-row"><span class="label">Maker:</span><span class="value">${highlightMatch(p.car_maker, query)}</span></div>
                <div class="info-row"><span class="label">Application:</span><span class="value">${highlightMatch(p.applications, query)}</span></div>
                <div class="info-row" style="margin-top:10px;"><span class="label">OEM List:</span><span class="value">${oemHtml}</span></div>
            </div>
        `;
        box.innerHTML += cardHtml;
    });
}

// E. UI EVENTS (Modal & Search)
const modal = document.getElementById("addModal");
const openBtn = document.getElementById("openAddModal");
const closeBtn = document.getElementById("closeModalBtn");

if(openBtn) openBtn.onclick = () => modal.style.display = "block";
if(closeBtn) closeBtn.onclick = () => modal.style.display = "none";

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchInput) {
    searchBtn.onclick = function () {
        const q = searchInput.value.trim();
        const combined = [...cloudData, ...staticDatabase];
        renderResults(searchLogic(combined, q), q);
    };
    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") searchBtn.click();
    });
    searchBtn.click(); // Initial Load
}
