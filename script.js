// ================= PART 1: THE DATA =================
// We define the data outside the function to prevent syntax errors

const fullDatabase = [
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
  { zoren: "ZRM1163016", oem: ["31110-C9000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Creta ix25 1.6L 2014-2018" },
  { zoren: "ZRM1164003", oem: ["31110-0U000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "VERNA 1.6L 2008" },
  { zoren: "ZRM1183004", oem: ["31110-2D030", "31110-2D000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "iX35 / Tucson 10-13 / Sportage 10" },
  { zoren: "ZRM1183007", oem: ["31110-4X000", "E10814M"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "KIA RIO MK3 1.4 2011-2017 / Accent 2010" },
  { zoren: "ZRM1183011", oem: ["31110-1G000", "31110-0M000", "31110-1E000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Accent III 1.4 2005-2011 / Rio 2005-2011" },
  { zoren: "ZRM1183012", oem: ["31110-3X000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "i30 GD 11-15 / Veloster / Avante MD / KIA K3" },
  { zoren: "ZRM1183013", oem: ["E8730M", "31110-1G500"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Hyundai Kia Accent Elantra Rio 06-11" },
  { zoren: "ZRM1183015", oem: ["31110-2C631", "E8529M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Tiburon 2.7L V6 2003-2008" },
  { zoren: "ZRM1183024", oem: ["31110-2F000"], name: "Fuel Pump", car_maker: "Kia", applications: "KIA CERATO Hatchback 2.0 2004-2009" },
  { zoren: "ZRM1183026", oem: ["31110-07150", "31110-07600", "31110-07000"], name: "Fuel Pump", car_maker: "Kia", applications: "Kia Morning / Picanto 1.0i/1.1i 2004-2017" },
  { zoren: "ZRM1183027", oem: ["31110-2B000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe CM 2.7 V6 2006-2012" },
  { zoren: "ZRM1183034", oem: ["31110-1R500", "31110-2V500", "31110-1W500"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Elantra 2014-15 / Veloster 12-15 / Kia Forte 14-15" },
  { zoren: "ZRM1183039", oem: ["31110-2K600", "E8995M", "31111-3L800"], name: "Fuel Pump", car_maker: "Kia", applications: "Kia Soul 1.6L 2.0 2012-2013" },
  { zoren: "ZRM1293055", oem: ["31110-3X500", "E9073M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Elantra 1.8L 2011-2015" },
  { zoren: "ZRM1293100", oem: ["31110-0W000", "31110-1U000", "31110-5U000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe 2.7L 3.3L 2007-2009" },
  { zoren: "ZRM1501010", oem: ["31110-C1200", "31110-D6000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Hyundai Sonata 5/6 / Kia Optima 2016-UP" },
  { zoren: "ZRM1501011", oem: ["31110-4Z500", "31110-4Z000", "E9217M"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Santa Fe Sport 2013-2017 / Kia Sorento 2014-2015" },
  { zoren: "ZRM1501021", oem: ["31110-4H500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai H-1 H1 MPV Wagon 2008-2018" },
  { zoren: "ZRM1183050", oem: ["31110-2V210", "31110-3X210", "31110-3X200"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Elantra E130 2011-2015 / KIA K3 Cerato 2013" },
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
  { zoren: "ZRM1501097", oem: ["31110-1D000"], name: "Fuel Pump", car_maker: "Kia", applications: "KIA Carens III 2.0 2006-2018" },
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
  { zoren: "ZRM1501176", oem: ["31112-C6200", "31110-C6200"], name: "Fuel Pump", car_maker: "Kia", applications: "Sorento 2.0L/2.4L/3.3L 2016-2020" },
  { zoren: "ZRM1501178", oem: ["31110-D3000"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Tucson 1.6T 15-20 / Sportage 1.6T 15-21" },
  { zoren: "ZRM1501180", oem: ["31110-C3500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Sonata 9th Gen 2.4L 1.6T 2015-2017" },
  { zoren: "ZRM1501169", oem: ["31110-AA000", "31112-AA000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Elantra 2.0L 2021-2023" },
  { zoren: "ZRM1163006", oem: ["31110-2P900"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Santa Fe 2009-2021 / Sorento Diesel" },
  { zoren: "ZRM1163022", oem: ["31110-2W900"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Santa Fe 12-15 / Sorento 12-18 Diesel" },
  { zoren: "ZRM1283012", oem: ["31110-A9900"], name: "Fuel Pump", car_maker: "Kia", applications: "KIA Carnival 2.2L DIESEL 2015-2023" },
  { zoren: "ZRM1183121", oem: ["31110-3J500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Veracruz 3.8L 2007-2012" },
  { zoren: "ZRM1083103", oem: ["F01R00S406"], name: "Fuel Pump", car_maker: "Bestune", applications: "BESTUNE X40/B30/SENIA R7" },
  { zoren: "ZRM1501185", oem: ["31110-26350"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Santa Fe 2.4L 3.5L 2002-2006" },
  { zoren: "ZRM1501186", oem: ["31110-4H000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "H-1 Travel 2.5 CRDI 2007-2015" },
  { zoren: "ZRM1123022", oem: ["31110-B1000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Genesis 2015-2016 / G80 2017-2020" },
  { zoren: "ZRM1283014", oem: ["31110-A9500"], name: "Fuel Pump", car_maker: "Kia", applications: "KIA SEDONA 2015-2021" },
  { zoren: "ZRM1433007", oem: ["31110-G3200", "31110-G3300"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Cerato 2018-2021" },
  { zoren: "ZRM1123008", oem: ["31110-3Q500", "E9036M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Sonata 2.4L 2011-2015" },
  { zoren: "ZRM15001193", oem: ["31110-B2500", "31111-B2000"], name: "Fuel Pump", car_maker: "Kia", applications: "Kia Soul 1.6L 2.0L 2014-2015" },
  { zoren: "ZRM1501194", oem: ["31110-4N000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "EON 2011-2018" },
  { zoren: "ZRM1501202", oem: ["31110-02500"], name: "Fuel Pump", car_maker: "Hyundai / Kia", applications: "Prime MX / VISTO / ATOS 2001-2012" },
  { zoren: "ZRM1501208", oem: ["31110-H9000", "31120-H9000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Yuena 1.4L 2016-2019" },
  { zoren: "ZRM1123021", oem: ["31110-3R800"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Azera 2011-2014" },

  // --- TOYOTA ---
  { zoren: "ZRM0973001", oem: ["E8937M", "77020-06121", "77020-06190", "77020-33200"], name: "Fuel Pump", car_maker: "Toyota", applications: "Camry 2007-2011 / Solara 2006-2008" },
  { zoren: "ZRM0973002", oem: ["77020-06220", "77020-06190"], name: "Fuel Pump", car_maker: "Toyota", applications: "Camry 2.5L 2007-2011" },
  { zoren: "ZRM0973003", oem: ["77020-06050"], name: "Fuel Pump", car_maker: "Toyota", applications: "Camry 2003-2005" },
  { zoren: "ZRM0973004", oem: ["77020-0D040", "77020-0D010"], name: "Fuel Pump", car_maker: "Toyota", applications: "Vios YARIS 1.0L-1.5L 1998-2005" },
  { zoren: "ZRM0973005", oem: ["77020-12460", "77020-02190"], name: "Fuel Pump", car_maker: "Toyota", applications: "Corolla Fielder/Runx 2001-2007" },
  { zoren: "ZRM1183001", oem: ["77020-02181", "77020-02291"], name: "Fuel Pump", car_maker: "Toyota", applications: "Corolla Matrix Vibe 2005-2011" },
  { zoren: "ZRM1183002", oem: ["77020-04061", "E8756M"], name: "Fuel Pump", car_maker: "Toyota", applications: "Tacoma 4.0L 2005-2015" },
  { zoren: "ZRM1183003", oem: ["77020-0K080"], name: "Fuel Pump", car_maker: "Toyota", applications: "Vigo 2TR-FE Champ 2004-2016" },
  { zoren: "ZRM1183020", oem: ["77020-60392", "77020-60340"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser 200 2007-2015" },
  { zoren: "ZRM1183031", oem: ["77020-0N010", "77020-0N011"], name: "Fuel Pump", car_maker: "Toyota", applications: "Reiz / Crown 2.5/3.0L 2005-2018" },
  { zoren: "ZRM1183032", oem: ["77020-0K390", "77020-0K380"], name: "Fuel Pump", car_maker: "Toyota", applications: "HILUX 2.7L 2016-2019" },
  { zoren: "ZRM1183033", oem: ["77020-60590", "77020-60490"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser 2007-2015 / Lexus LX570" },
  { zoren: "ZRM1183036", oem: ["77020-60440", "77020-60410"], name: "Fuel Pump", car_maker: "Toyota", applications: "4Runner / Prado / Lexus GX460 2009-2013" },
  { zoren: "ZRM1183037", oem: ["77020-35072", "77020-35092"], name: "Fuel Pump", car_maker: "Toyota", applications: "Hilux Surf / 4Runner / Prado 2002-2009" },
  { zoren: "ZRM1183041", oem: ["77020-60320", "77020-60490"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser 2007-2015 / Lexus LX570" },
  { zoren: "ZRM1183042", oem: ["23220-0V030", "77020-0E030"], name: "Fuel Pump", car_maker: "Toyota", applications: "Highlander 2.7L / Lexus RX350 2009-2015" },
  { zoren: "ZRM1183047", oem: ["77020-02630"], name: "Fuel Pump", car_maker: "Toyota", applications: "Corolla 2014-2019" },
  { zoren: "ZRM1183049", oem: ["77704-0D040", "23220-0M020"], name: "Fuel Pump", car_maker: "Toyota", applications: "Vios YARIS 1.5L 2008-2013" },
  { zoren: "ZRM1184007", oem: ["77020-0C120", "E9199M"], name: "Fuel Pump", car_maker: "Toyota", applications: "Sequoia / Tundra 5.7L 2012-2018" },
  { zoren: "ZRM1501001", oem: ["77020-0D180"], name: "Fuel Pump", car_maker: "Toyota", applications: "Yaris / Vios 2013-2021" },
  { zoren: "ZRM1501002", oem: ["77020-0C090"], name: "Fuel Pump", car_maker: "Toyota", applications: "Sequoia / Tundra 5.7L 2009-2012" },
  { zoren: "ZRM1501003", oem: ["77020-0R020", "77020-0R010"], name: "Fuel Pump", car_maker: "Toyota", applications: "RAV4 2.5L 3.5L 2009-2018" },
  { zoren: "ZRM1501005", oem: ["77020-0R030"], name: "Fuel Pump", car_maker: "Toyota", applications: "RAV4 2.0L 2.4L 2009-2013" },
  { zoren: "ZRM1501006", oem: ["77020-60202", "77020-60212"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser Prado 2002-2010 (GRJ120)" },
  { zoren: "ZRM1501007", oem: ["77020-02070", "77020-02080"], name: "Fuel Pump", car_maker: "Toyota", applications: "Avensis / Corolla 2003-2008" },
  { zoren: "ZRM1501014", oem: ["77020-48010", "E8840M"], name: "Fuel Pump", car_maker: "Toyota", applications: "Lexus RX330 RX350 2005-2008" },
  { zoren: "ZRM1183030", oem: ["77020-0C070", "77020-0C080"], name: "Fuel Pump", car_maker: "Toyota", applications: "Sequoia 08-09 / Tundra 07-14" },
  { zoren: "ZRM1501028", oem: ["77020-12700", "77020-02320"], name: "Fuel Pump", car_maker: "Toyota", applications: "Auris / Corolla 2003-2016" },
  { zoren: "ZRM1501035", oem: ["77020-0K150", "77020-0K070"], name: "Fuel Pump", car_maker: "Toyota", applications: "Fortuner / Hilux 2008-2016" },
  { zoren: "ZRM1183094", oem: ["77020-26031", "77020-26010"], name: "Fuel Pump", car_maker: "Toyota", applications: "Hiace 06-09 / Hilux 06-15" },
  { zoren: "ZRM1501039", oem: ["77020-60670", "77020-60470"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser Prado Diesel 2009-2017" },
  { zoren: "ZRM1501040", oem: ["77020-60650"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser Prado 2017-" },
  { zoren: "ZRM1501044", oem: ["77020-60430"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser Prado 2009-2017" },
  { zoren: "ZRM1501045", oem: ["77020-12650"], name: "Fuel Pump", car_maker: "Toyota", applications: "Corolla Fielder 2006-2012" },
  { zoren: "ZRM1501046", oem: ["77020-12670"], name: "Fuel Pump", car_maker: "Toyota", applications: "Blade 2006-2009" },
  { zoren: "ZRM1501047", oem: ["77020-58020", "77020-28110"], name: "Fuel Pump", car_maker: "Toyota", applications: "Alphard / Vellfire / Estima 2006-2019" },
  { zoren: "ZRM1501063", oem: ["77020-06300", "E8722M"], name: "Fuel Pump", car_maker: "Toyota", applications: "Lexus ES350 / Camry / Avalon 2012-2018" },
  { zoren: "ZRM1501074", oem: ["23210-87403", "23210-B1040"], name: "Fuel Pump", car_maker: "Toyota", applications: "Dahiatsu Terios 1.5L 2005-2012" },
  { zoren: "ZRM1501069", oem: ["1525.GE", "77020-0H010"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Aygo / Peugeot 107/108 / Citroen C1" },
  { zoren: "ZRM1501023", oem: ["23210-B1010", "101961-9421"], name: "Fuel Pump", car_maker: "Daihatsu", applications: "Toyota Passo / BB / Sirion 2004-2017" },
  { zoren: "ZRM1501088", oem: ["23210-97201"], name: "Fuel Pump", car_maker: "Daihatsu", applications: "Charade Copen Sirion YRV Cuore" },
  { zoren: "ZRM1501077", oem: ["77010-0K041"], name: "Fuel Pump", car_maker: "Toyota", applications: "Hilux 2KD 2004-2015" },
  { zoren: "ZRM1501089", oem: ["77020-08040", "77020-08060"], name: "Fuel Pump", car_maker: "Toyota", applications: "Sienna 2003-2009" },
  { zoren: "ZRM1183171", oem: ["77020-0R050", "77020-42230"], name: "Fuel Pump", car_maker: "Toyota", applications: "RAV4 2018-2020" },
  { zoren: "ZRM1183066", oem: ["77010-0K010", "77010-0K011"], name: "Fuel Pump", car_maker: "Toyota", applications: "Hilux Diesel 2004-2012" },
  { zoren: "ZRM1501104", oem: ["77020-0E130"], name: "Fuel Pump", car_maker: "Toyota", applications: "Lexus RX450h/350 / Highlander 2013-2019" },
  { zoren: "ZRM1501102", oem: ["77020-0K020"], name: "Fuel Pump", car_maker: "Toyota", applications: "Innova / Fortuner / Hilux 2004-2016" },
  { zoren: "ZRM1501113", oem: ["77020-33530", "77020-06520"], name: "Fuel Pump", car_maker: "Toyota", applications: "Camry 2.5L 2017-2021" },
  { zoren: "ZRM1501117", oem: ["77020-60550"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser / Lexus LX570 2007-2016" },
  { zoren: "ZRM1501118", oem: ["77020-04090"], name: "Fuel Pump", car_maker: "Toyota", applications: "Tacoma V6 3.5L 2015-2019" },
  { zoren: "ZRM1501119", oem: ["77020-60640"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser Prado 2017-" },
  { zoren: "ZRM1501103", oem: ["77020-60600", "77020-60601"], name: "Fuel Pump", car_maker: "Toyota", applications: "Land Cruiser Prado 2010-2020" },
  { zoren: "ZRM1501120", oem: ["77020-0T010", "77020-0T020"], name: "Fuel Pump", car_maker: "Toyota", applications: "Venza 2.7L 3.5L 2008-2016" },
  { zoren: "ZRM1183064", oem: ["77020-0E111", "E9192M"], name: "Fuel Pump", car_maker: "Toyota", applications: "Highlander 2.7L/3.5L 2013-2019" },
  { zoren: "ZRM1183074", oem: ["77020-0K420", "77020-0K470"], name: "Fuel Pump", car_maker: "Toyota", applications: "Fortuner 2.7L 2016-2021" },
  { zoren: "ZRM1183082", oem: ["77020-0D380", "77020-0D410"], name: "Fuel Pump", car_maker: "Toyota", applications: "Vios Yaris 2013-2020" },
  { zoren: "ZRM0973006", oem: ["77020-0K030"], name: "Fuel Pump", car_maker: "Toyota", applications: "Innova Avensis 2.0L 2.7L 2006-2010" },
  { zoren: "ZRM1501142", oem: ["77020-42010", "SP9038M"], name: "Fuel Pump", car_maker: "Toyota", applications: "RAV4 1994-2007" },
  { zoren: "ZRM1501162", oem: ["77020-35120", "77020-35121"], name: "Fuel Pump", car_maker: "Toyota", applications: "FJ Cruiser 4.0L 2007-2014" },
  { zoren: "ZRM1183111", oem: ["77020-30351", "77020-53073"], name: "Fuel Pump", car_maker: "Toyota", applications: "Lexus IS250/350 2005-2013" },
  { zoren: "ZRM1501159", oem: ["77020-33391", "77020-33380"], name: "Fuel Pump", car_maker: "Toyota", applications: "Lexus ES250 ES350 2012-2018" },
  { zoren: "ZRM1183063", oem: ["77020-0C061", "E8694M"], name: "Fuel Pump", car_maker: "Toyota", applications: "Tundra 99-06 / Sequoia 00-07" },
  { zoren: "ZRM1501163", oem: ["23210-BZ150"], name: "Fuel Pump", car_maker: "Toyota", applications: "Avanza 1.5L 2011-2015" },
  { zoren: "ZRM1501164", oem: ["77020-52231", "292010-0014"], name: "Fuel Pump", car_maker: "Toyota", applications: "Sienta 2005-" },
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
  { zoren: "ZRM1103005", oem: ["SP8025M", "17045-SWA-A01", "17045-SXS-A01"], name: "Fuel Pump", car_maker: "Honda", applications: "Honda CR-V 2007-2011" },
  { zoren: "ZRM1103008", oem: ["17045-S9A-000"], name: "Fuel Pump", car_maker: "Honda", applications: "SUV CRV 2003-2006" },
  { zoren: "ZRM1103009", oem: ["17045-SAA-H50"], name: "Fuel Pump", car_maker: "Honda", applications: "Jazz Fit 1.3L 1.5L 2003-2008" },
  { zoren: "ZRM1103010", oem: ["17045-TG5-000"], name: "Fuel Pump", car_maker: "Honda", applications: "Jazz Fit 1.3L 1.5L 2009-2014" },
  { zoren: "ZRM1353001", oem: ["17045-SNV-000", "17045-SNA-003"], name: "Fuel Pump", car_maker: "Honda", applications: "Civic FA1 1.3-2.0L 2006-2011" },
  { zoren: "ZRM1093066", oem: ["E8566M", "17045-S5A-A00", "17045-S5A-A30"], name: "Fuel Pump", car_maker: "Honda", applications: "Civic 2.0L 2002-2005" },
  { zoren: "ZRM1153016", oem: ["17045-T2A-A00", "E9145M"], name: "Fuel Pump", car_maker: "Honda", applications: "Honda Accord 13-17 / Acura TLX 16-19" },
  { zoren: "ZRM1501154", oem: ["17045-TBF-A00"], name: "Fuel Pump", car_maker: "Honda", applications: "Civic 1.5L 2.0L 2016-2020" },
  { zoren: "ZRM1501170", oem: ["17045-T9A-000"], name: "Fuel Pump", car_maker: "Honda", applications: "City 1.5L 2015-2019" },
  { zoren: "ZRM1303005", oem: ["17045-TR0-H00", "17045-TR0-A00"], name: "Fuel Pump", car_maker: "Honda", applications: "Civic 1.8L 2012-2015 / Acura ILX" },
  { zoren: "ZRM1153112", oem: ["17045-TLA-A02", "17045-TLA-A01"], name: "Fuel Pump", car_maker: "Honda", applications: "CR-V 2017-2024 / HR-V 2023-2024" },
  { zoren: "ZRM1103018", oem: ["17045-S3V-A00", "E8720M"], name: "Fuel Pump", car_maker: "Honda", applications: "Acura MDX 01-02 / Pilot 03-04" },
  { zoren: "ZRM0943191", oem: ["17708-S4K-000"], name: "Fuel Pump", car_maker: "Honda", applications: "Honda Accord 2003-2008" },
  { zoren: "ZRM1293552", oem: ["17045-TBA-A03", "FG2128"], name: "Fuel Pump", car_maker: "Honda", applications: "Honda Civic 2016-2021" },
  { zoren: "ZRM1501207", oem: ["17045-TA7-A01"], name: "Fuel Pump", car_maker: "Honda", applications: "Acura TLX 2015-2020" },
  { zoren: "ZRM1103013", oem: ["17045-T7J-H01"], name: "Fuel Pump", car_maker: "Honda", applications: "Honda HR-V 2016-2021" },
  { zoren: "ZRM1153113", oem: ["17045-TVC-A04", "17045-TVC-A01"], name: "Fuel Pump", car_maker: "Honda", applications: "Honda Accord 2018-2022" },
  { zoren: "ZRM1153114", oem: ["17045-TVA-A03", "P77524M"], name: "Fuel Pump", car_maker: "Honda", applications: "Honda Accord 2018-2022" },
  { zoren: "ZRM1143007", oem: ["17045-TZ5-A10", "P77029M"], name: "Fuel Pump", car_maker: "Honda", applications: "Acura RDX 2013-2018" },
  { zoren: "ZRM1103041", oem: ["17045-S3V-A01", "E8657M"], name: "Fuel Pump", car_maker: "Honda", applications: "Acura MDX 05-06 / Pilot 05-08" },

  // --- NISSAN ---
  { zoren: "ZRM1073125", oem: ["17040-8U002"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sentra 1.8L 2.0L 2.5L 2000-2006" },
  { zoren: "ZRM1073126", oem: ["17040-8N00B", "E8502M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sentra 1.8L 2.5L 2000-2004" },
  { zoren: "ZRM1080001", oem: ["25060-JE60D", "25060-JH70A"], name: "Fuel Pump", car_maker: "Nissan", applications: "X-Trail T31 2007-2013" },
  { zoren: "ZRM1082001", oem: ["17040-4BA2A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Trail T32 / Rogue 2014-2017" },
  { zoren: "ZRM1083004", oem: ["25060-VW00A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Urvan 2.4L 2008-2010" },
  { zoren: "ZRM1083029", oem: ["17040-2FJ0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Kai Chen D50/R50" },
  { zoren: "ZRM1083030", oem: ["17040-JE20D"], name: "Fuel Pump", car_maker: "Nissan", applications: "T31 X-Trail / J10 Qashqai 2WD 08-13" },
  { zoren: "ZRM1083031", oem: ["17040-JN00C", "17040-JN00A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Teana J32 2008-2012" },
  { zoren: "ZRM1083032", oem: ["17040-JE60D", "17040-JG00A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Qashqai 2.0L / X-Trail T31 2.5L" },
  { zoren: "ZRM1083033", oem: ["17040-JX30A", "17040-AX000"], name: "Fuel Pump", car_maker: "Nissan", applications: "Versa / NV200 / Tiida" },
  { zoren: "ZRM1083034", oem: ["17040-EW80C"], name: "Fuel Pump", car_maker: "Nissan", applications: "TIIDA Sylphy Livna 1.6L" },
  { zoren: "ZRM1083035", oem: ["17040-CH000", "17040-9EH0C"], name: "Fuel Pump", car_maker: "Nissan", applications: "Aprio / Tiida 1.8L 1.6L 2007-2012" },
  { zoren: "ZRM1083037", oem: ["17040-JD00A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Qashqai 2007-2014" },
  { zoren: "ZRM1083038", oem: ["E8496M", "170408J005"], name: "Fuel Pump", car_maker: "Nissan", applications: "Altima 2.5L 3.5L 2002-2003" },
  { zoren: "ZRM1083041", oem: ["17040-CG000", "17040-EV10A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti FX35 FX45 / 350Z" },
  { zoren: "ZRM1083042", oem: ["17040-1FE1C", "17040-AX01A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Tiida Versa Sylphy Bluebird Cube Note" },
  { zoren: "ZRM1083043", oem: ["17040-3TS0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "L33 Teana 2014-2017" },
  { zoren: "ZRM1083044", oem: ["17040-3DN0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Tiida Sunny March 2011-2016" },
  { zoren: "ZRM1083047", oem: ["17040-EE50C"], name: "Fuel Pump", car_maker: "Nissan", applications: "Tiida 1.8L SC11 Grand Livina" },
  { zoren: "ZRM1083062", oem: ["17040-KH40A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Navara D40T 2005-2007" },
  { zoren: "ZRM1083063", oem: ["17040-5M300"], name: "Fuel Pump", car_maker: "Nissan", applications: "Almera Pulsar Sentra 2000-" },
  { zoren: "ZRM1083067", oem: ["17040-4FN0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sentra Pulsar Tiida 2012-2016" },
  { zoren: "ZRM1083131", oem: ["17040-VZ00A"], name: "Fuel Pump", car_maker: "Nissan", applications: "E25 URVAN 2.5 2008-2012" },
  { zoren: "ZRM1153002", oem: ["17040-9EG0B", "E8855M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Versa Cube 2009-2014" },
  { zoren: "ZRM1153005", oem: ["17040-CA000", "E8536M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Murano 3.5L V6 2003-2014" },
  { zoren: "ZRM1153006", oem: ["17040-1HM0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sunny N17 / March K13 2011-2017" },
  { zoren: "ZRM1153008", oem: ["E8755M", "17040-9N00A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Maxima 2009-2014 / Altima 2007-2012" },
  { zoren: "ZRM1153010", oem: ["E8856M", "17040JM10C"], name: "Fuel Pump", car_maker: "Nissan", applications: "Rogue 2.5L 2008-2015" },
  { zoren: "ZRM1153011", oem: ["17040-1KA0A", "17040-9U01B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Juke March Note" },
  { zoren: "ZRM1153013", oem: ["17040-1KD0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Juke F15 2010-2014" },
  { zoren: "ZRM1153015", oem: ["17040-3SG0C", "E9213M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sentra 1.8L 2013-2018" },
  { zoren: "ZRM1163004", oem: ["17040-95F0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Almera I/II Altima" },
  { zoren: "ZRM1283145", oem: ["17040-ET00A", "E8752M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sentra 2007-2012" },
  { zoren: "ZRM1293004", oem: ["17040-EA000", "E8743M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Frontier Pathfinder Xterra" },
  { zoren: "ZRM1343018", oem: ["17040-ZQ60A", "17040-7S000"], name: "Fuel Pump", car_maker: "Nissan", applications: "Titan Armada Infiniti QX56" },
  { zoren: "ZRM1083069", oem: ["17040-EW80A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Tiida 2004-2012" },
  { zoren: "ZRM1501009", oem: ["17040-3XA0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Urvan Nv350 2012-2016" },
  { zoren: "ZRM1093027", oem: ["17040-8H31B"], name: "Fuel Pump", car_maker: "Nissan", applications: "X-Trail T30 QR25 2000-2007" },
  { zoren: "ZRM1093049", oem: ["17040-4M405"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sunny N16 2003-2010" },
  { zoren: "ZRM1153004", oem: ["E8545M", "170407Y000"], name: "Fuel Pump", car_maker: "Nissan", applications: "Maxima Altima Quest 2004-2009" },
  { zoren: "ZRM1501016", oem: ["17040-VK01A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan D22 KA24 2009-2014" },
  { zoren: "ZRM1501025", oem: ["17040-1CB0D"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti FX35 FX37 QX70" },
  { zoren: "ZRM1343046", oem: ["E8862M", "17040-ZH000"], name: "Fuel Pump", car_maker: "Nissan", applications: "Titan / Armada 5.6L" },
  { zoren: "ZRM1501026", oem: ["17040-3TA0C", "E9183M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Altima Teana Maxima 2013-2018" },
  { zoren: "ZRM1293198", oem: ["17040-EB80C"], name: "Fuel Pump", car_maker: "Nissan", applications: "Navara Pathfinder 4.0L" },
  { zoren: "ZRM1501057", oem: ["0580313101", "17040-AV710"], name: "Fuel Pump", car_maker: "Nissan", applications: "Primera 2002-2016" },
  { zoren: "ZRM1501049", oem: ["17040-ED80A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Tiida C11 SC11 2005-2011" },
  { zoren: "ZRM1501064", oem: ["17040-4BB1A"], name: "Fuel Pump", car_maker: "Nissan", applications: "X-Trail T32 1.6 2013-2018" },
  { zoren: "ZRM1501065", oem: ["17040-4ED0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Qashqai J11 1.2 2014-2018" },
  { zoren: "ZRM1501092", oem: ["17040-Y2900"], name: "Fuel Pump", car_maker: "Nissan", applications: "Pickup ZG24" },
  { zoren: "ZRM1501085", oem: ["17040-1LB3E"], name: "Fuel Pump", car_maker: "Nissan", applications: "Patrol Y62 / Infiniti QX56 QX80 (1 tube)" },
  { zoren: "ZRM1501086", oem: ["17040-1LB5D"], name: "Fuel Pump", car_maker: "Nissan", applications: "Patrol Y62 / Infiniti QX56 (2 tubes)" },
  { zoren: "ZRM1501087", oem: ["17040-1LK0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Patrol Y62 (3 tubes)" },
  { zoren: "ZRM1293297", oem: ["17040-3ZD0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti QX56 QX80 Armada 5.6L" },
  { zoren: "ZRM1083071", oem: ["17040-1KT0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Juke HR15DE 2011-2017" },
  { zoren: "ZRM1083106", oem: ["17040-JD01D"], name: "Fuel Pump", car_maker: "Nissan", applications: "Dualis Qashqai 2007-2013" },
  { zoren: "ZRM1073129", oem: ["17040-1VA0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Evalia M20 / Serena" },
  { zoren: "ZRM1293187", oem: ["17040-3AN0E", "E9100M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Micra Versa Note 2012-2019" },
  { zoren: "ZRM1501100", oem: ["17040-3KT1C", "17040-3JL0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Pathfinder Infiniti QX60 2013-2020" },
  { zoren: "ZRM1501136", oem: ["17040-1KH0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Frontier 2.5L D23X 2015-2018" },
  { zoren: "ZRM1083080", oem: ["17040-CG00B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti FX35 V6 2003-2008" },
  { zoren: "ZRM1501138", oem: ["17040-1EK0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan 370Z 2009-2015" },
  { zoren: "ZRM1501140", oem: ["17040-1CJ0C"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti FX35 FX50 QX70" },
  { zoren: "ZRM1501141", oem: ["17040-4BB2A"], name: "Fuel Pump", car_maker: "Nissan", applications: "X-Trail 2.5L Qashqai J11" },
  { zoren: "ZRM1501048", oem: ["17040-5RB0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Kicks March Versa 2017-2021" },
  { zoren: "ZRM1501174", oem: ["17040-1HK0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Micra Versa 2012-2019" },
  { zoren: "ZRM1501022", oem: ["17040-5M500"], name: "Fuel Pump", car_maker: "Nissan", applications: "Bluebird Sylphy G10 Sunny N16" },
  { zoren: "ZRM1293248", oem: ["17040-6CT0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Teana Altima 2019-2022" },
  { zoren: "ZRM1083191", oem: ["17040-1BA0A", "E8931M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti EX35 EX37 QX50" },
  { zoren: "ZRM1153122", oem: ["17040-1KM1A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Juke 1.5 2012-2016" },
  { zoren: "ZRM1083187", oem: ["17040-1MA0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti M37 Q50 Q70" },
  { zoren: "ZRM1501187", oem: ["17040-4BA0C"], name: "Fuel Pump", car_maker: "Nissan", applications: "Rogue 2.5L 2014-2020" },
  { zoren: "ZRM1501190", oem: ["17040-6LB0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Sentra 2020-2024" },
  { zoren: "ZRM1501192", oem: ["17040-1JA2A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Quest 3.5L 2011-2017" },
  { zoren: "ZRM1083163", oem: ["17040-1BB0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti EX35 EX37 2008-2013" },
  { zoren: "ZRM1083164", oem: ["17040-1NC0C"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti G25 G37 M35 Q40" },
  { zoren: "ZRM1501213", oem: ["17040-6AU0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti Q50 16-23 / Q60 17-22" },
  { zoren: "ZRM1501210", oem: ["17040-5RL0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Versa" },
  { zoren: "ZRM1501218", oem: ["17040-6HA0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Infiniti Q50 Q60 2015-2019" },

  // --- SUZUKI ---
  { zoren: "ZRM0873001", oem: ["15100-76A30"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Carry DB52" },
  { zoren: "ZRM1501038", oem: ["15100-74L00"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Swift 1.2 2012-2016" },
  { zoren: "ZRM1003003", oem: ["15100-78F21"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Aerio 2002-2007" },
  { zoren: "ZRM1183005", oem: ["15100-60K00"], name: "Fuel Pump", car_maker: "Suzuki", applications: "APV 2005-2016 1.5L" },
  { zoren: "ZRM1183009", oem: ["15100-65J02"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Grand Vitara II 2005-2015" },
  { zoren: "ZRM1183028", oem: ["15100-63811"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Swift 2004-2010" },
  { zoren: "ZRM1501017", oem: ["15100-80840"], name: "Fuel Pump", car_maker: "Suzuki", applications: "SX4 2.0L 2007-2013" },
  { zoren: "ZRM1501090", oem: ["15100-79J00"], name: "Fuel Pump", car_maker: "Suzuki", applications: "SX4 1.5L/1.6L 2009-2019" },
  { zoren: "ZRM1213021", oem: ["15100-78K00"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Grand Vitara 2.4L 2006-2014" },
  { zoren: "ZRM1143042", oem: ["15100-61M00"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Vitara 1.6L 2015-2022" },
  { zoren: "ZRM1501148", oem: ["15100-78R01"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Jimny 2019-2023" },
  { zoren: "ZRM1133019", oem: ["15100-71L00"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Swift 2012-2017" },
  { zoren: "ZRM1501179", oem: ["15100-68K01"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Alto Omni Wagon R 2000-2019" },
  { zoren: "ZRM1003023", oem: ["15100-81A13"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Jimny 1.3L" },

  // --- ISUZU ---
  { zoren: "ZRM0943095", oem: ["E8400M", "P76555M"], name: "Fuel Pump", car_maker: "Isuzu", applications: "Amigo Rodeo Sport 1998-2003" },

  // --- MITSUBISHI ---
  { zoren: "ZRM1501018", oem: ["1760A189", "1760A298"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Outlander 2007-2012" },
  { zoren: "ZRM1183055", oem: ["1760A321"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Lancer-EX 1992-2003" },
  { zoren: "ZRM1501019", oem: ["1760A156"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Outlander 2007-2012 2WD" },
  { zoren: "ZRM1501020", oem: ["1760A168"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "L200 Triton 2013-2018" },
  { zoren: "ZRM1501030", oem: ["1760A297"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Pajero Montero V93/V97" },
  { zoren: "ZRM1501060", oem: ["MR497413"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Lancer 2.0L 2002-2003" },
  { zoren: "ZRM1501037", oem: ["MR990881"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Pajero Montero V73 V75" },
  { zoren: "ZRM1501095", oem: ["1760A354"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Mirage / Space Star 2012-2022" },
  { zoren: "ZRM1183023", oem: ["1760A177"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Galant 06-11 / Eclipse 07-12" },
  { zoren: "ZRM1501106", oem: ["1760A318"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Pajero Sport 2008-2018" },
  { zoren: "ZRM1501143", oem: ["1760A058"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Outlander 2.4L 2005-2006" },
  { zoren: "ZRM1501158", oem: ["MR586031"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Montero Pinin Pajero iO 2005-" },
  { zoren: "ZRM1501156", oem: ["MN135192"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Lancer 2.0L 2004-2007" },
  { zoren: "ZRM1501059", oem: ["1760A096"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Outlander 2001-2006" },
  { zoren: "ZRM1501189", oem: ["1760A093"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Outlander 2.4L 2003-" },
  { zoren: "ZRM1183098", oem: ["1760A715"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Xpander 2018-2023" },
  { zoren: "ZRM1501191", oem: ["1760A094"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Outlander 2004-2006" },

  // --- GM (CHEVROLET / GMC / BUICK / CADILLAC) ---
  { zoren: "ZRM1293184", oem: ["E3818M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado 1500 / Sierra 2500 2009-2013" },
  { zoren: "ZRM0943012", oem: ["E3500M", "19153711"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500/2500/3500 1999-2004" },
  { zoren: "ZRM0943016", oem: ["E3966M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 1997-2002" },
  { zoren: "ZRM0943017", oem: ["E3965M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "P30 / P3500 5.7L 1998-1999" },
  { zoren: "ZRM0943020", oem: ["E3956M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "C3500 / K3500 1998-2000" },
  { zoren: "ZRM0943022", oem: ["E3929M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Blazer / Jimmy 1996" },
  { zoren: "ZRM0943036", oem: ["E3552M"], name: "Fuel Pump", car_maker: "Chevrolet / GM", applications: "Venture / Montana 2002-2005" },
  { zoren: "ZRM0943037", oem: ["E3972M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Escalade / Tahoe / Yukon 1998-2000" },
  { zoren: "ZRM0943047", oem: ["E3510M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Suburban 2500 / Yukon XL 2500 2000-2001" },
  { zoren: "ZRM0943051", oem: ["E3506M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Astro / Safari 2000-2005" },
  { zoren: "ZRM0943053", oem: ["E3369M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Camaro / Firebird 1999-2002" },
  { zoren: "ZRM0943056", oem: ["E3912M"], name: "Fuel Pump", car_maker: "Buick", applications: "Riviera / Aurora 1995-1996" },
  { zoren: "ZRM0943057", oem: ["E3930M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Tahoe / Yukon 1995" },
  { zoren: "ZRM0943062", oem: ["E3994M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Suburban C1500/C2500 1998-1999" },
  { zoren: "ZRM0943065", oem: ["E3920M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "S10 / Sonoma 1996" },
  { zoren: "ZRM0943067", oem: ["E3950M"], name: "Fuel Pump", car_maker: "Chevrolet / GM", applications: "Cavalier / Malibu 1998-2000" },
  { zoren: "ZRM0943070", oem: ["E3925M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Blazer / Jimmy 1996" },
  { zoren: "ZRM0943050", oem: ["E3556M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Avalanche 1500 2002-2003" },
  { zoren: "ZRM0943072", oem: ["E3978M"], name: "Fuel Pump", car_maker: "Pontiac", applications: "Grand Prix 1997" },
  { zoren: "ZRM0943074", oem: ["E3918M"], name: "Fuel Pump", car_maker: "Chevrolet / GM", applications: "Skylark / Beretta / Cavalier 1993-1995" },
  { zoren: "ZRM0943075", oem: ["E3919M"], name: "Fuel Pump", car_maker: "Chevrolet / GM", applications: "Cavalier / Sunfire 1996-1998" },
  { zoren: "ZRM0943080", oem: ["E3940M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Astro / Safari 1997-1999" },
  { zoren: "ZRM0943081", oem: ["E3508M", "MU1615"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Escalade / Tahoe / Yukon 2000-2003" },
  { zoren: "ZRM0943110", oem: ["E3584M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 2003" },
  { zoren: "ZRM0943117", oem: ["25324949"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Holden 1997-2002" },
  { zoren: "ZRM0944018", oem: ["E3549M", "88966952"], name: "Fuel Pump", car_maker: "Chevrolet / GM", applications: "Trailblazer / Envoy 2002-2004" },
  { zoren: "ZRM1292016", oem: ["13592486"], name: "Fuel Pump", car_maker: "Buick", applications: "Encore 14-UP" },
  { zoren: "ZRM1293034", oem: ["E3817M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 2009" },
  { zoren: "ZRM1293075", oem: ["92250121"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Holden Commodore 2006-2017" },
  { zoren: "ZRM1243003", oem: ["E3612M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Aveo 2004-2005" },
  { zoren: "ZRM1293002", oem: ["E3609M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 2004-2007" },
  { zoren: "ZRM1293041", oem: ["F00HK00470"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 2010-2016" },
  { zoren: "ZRM1293050", oem: ["E3750M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2007-2008" },
  { zoren: "ZRM1293060", oem: ["E3756M"], name: "Fuel Pump", car_maker: "Buick", applications: "LaCrosse / Grand Prix 2008-2009" },
  { zoren: "ZRM1293067", oem: ["E3675M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Avalanche / Suburban 2500 2004-2007" },
  { zoren: "ZRM1293069", oem: ["E3748M"], name: "Fuel Pump", car_maker: "GM", applications: "Enclave / Acadia 2007-2008" },
  { zoren: "ZRM0003004", oem: ["96449569"], name: "Fuel Pump", car_maker: "Daewoo / Chevrolet", applications: "Lanos / Lefeng 2005-2006" },
  { zoren: "ZRM0003025", oem: ["96344792"], name: "Fuel Pump", car_maker: "Daewoo", applications: "Lanos Saloon 1997-2002" },
  { zoren: "ZRM0943161", oem: ["P74928M"], name: "Fuel Pump", car_maker: "GM", applications: "Impala / Monte Carlo / Grand Prix 2000-2005" },
  { zoren: "ZRM0943058", oem: ["E3973M"], name: "Fuel Pump", car_maker: "Buick", applications: "Regal / Grand Prix 1998-2000" },
  { zoren: "ZRM1293072", oem: ["E3617M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 3500 2004-2007" },
  { zoren: "ZRM1293084", oem: ["E3815M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2009" },
  { zoren: "ZRM1293097", oem: ["E3747M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2007-2008" },
  { zoren: "ZRM1293104", oem: ["E3790M"], name: "Fuel Pump", car_maker: "GM", applications: "Enclave / Traverse / Acadia 2009-2017" },
  { zoren: "ZRM1293105", oem: ["E3610M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Escalade / Avalanche 2004-2007" },
  { zoren: "ZRM1293106", oem: ["E3581M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Tahoe / Yukon / Escalade 2004-2007" },
  { zoren: "ZRM1293107", oem: ["E3705M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Tahoe / Yukon 5.3L 2005-2007" },
  { zoren: "ZRM1293109", oem: ["E3684M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2004-2007" },
  { zoren: "ZRM1293125", oem: ["E3706M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Avalanche / Suburban 2005-2007" },
  { zoren: "ZRM0943090", oem: ["E3559M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Tahoe / Yukon 2002-2004" },
  { zoren: "ZRM1293166", oem: ["E3768M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Tahoe / Yukon / Escalade 2008-2014" },
  { zoren: "ZRM1294027", oem: ["E4037M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 3500 2010-2016" },
  { zoren: "ZRM1293155", oem: ["E4009M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2010-2013" },
  { zoren: "ZRM1293073", oem: ["96830394"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Captiva 2006-2016" },
  { zoren: "ZRM0944011", oem: ["92181830"], name: "Fuel Pump", car_maker: "Buick", applications: "Royaum Holden 2003-2007" },
  { zoren: "ZRM1294015", oem: ["E4042M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra HD 2011-2016" },
  { zoren: "ZRM1292015", oem: ["13592492"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "CHEVROLET" },
  { zoren: "ZRM1293056", oem: ["E3710M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Uplander / Montana 2006-2007" },
  { zoren: "ZRM1293070", oem: ["E3765M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Tahoe / Yukon / Escalade 2008-2013" },
  { zoren: "ZRM0944019", oem: ["E3614M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Colorado / Canyon 2004-2005" },
  { zoren: "ZRM1303001", oem: ["E3707M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Trailblazer / Envoy 2005-2007" },
  { zoren: "ZRM1293113", oem: ["92203241"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Holden VE 2009-2013" },
  { zoren: "ZRM0003155", oem: ["E3624S"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "S10 / Jimmy / Sonoma 1992-1994" },
  { zoren: "ZRM0944013", oem: ["92159902"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Holden Commodore 2002-2004" },
  { zoren: "ZRM1293086", oem: ["E4127M", "13582487"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2014-2017" },
  { zoren: "ZRM0943063", oem: ["E3932M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Tahoe / Yukon 1996-1997" },
  { zoren: "ZRM0943096", oem: ["E3953M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Blazer / Jimmy 1997-1998" },
  { zoren: "ZRM0943043", oem: ["E3967M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Suburban 1998-1999" },
  { zoren: "ZRM0943091", oem: ["E3560M"], name: "Fuel Pump", car_maker: "Buick", applications: "Riviera 1996" },
  { zoren: "ZRM1293026", oem: ["E3678M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 2004-2008" },
  { zoren: "ZRM1293033", oem: ["E3717M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Uplander / Montana 2005-2007" },
  { zoren: "ZRM1501033", oem: ["13586327"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Cruze 1.4 1.6 2006-2016" },
  { zoren: "ZRM1501096", oem: ["E4034M", "13321034"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Cruze / Verano 2011-2016" },
  { zoren: "ZRM1292021", oem: ["13582421"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Cruze 2015-" },
  { zoren: "ZRM1501126", oem: ["13584225"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Cruze 2010-2013" },
  { zoren: "ZRM1293061", oem: ["E3797M"], name: "Fuel Pump", car_maker: "Cadillac / Chevy", applications: "Escalade / Avalanche 2008-2014" },
  { zoren: "ZRM1293080", oem: ["E3777M", "13582487"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2014-2018" },
  { zoren: "ZRM1293071", oem: ["E3689M"], name: "Fuel Pump", car_maker: "GMC", applications: "Hummer H2 2004-2007" },
  { zoren: "ZRM1293065", oem: ["E3715M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "HHR 2006-2008" },
  { zoren: "ZRM1293062", oem: ["E3611M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Pontiac GTO 2004-2006" },
  { zoren: "ZRM1294018", oem: ["E4044M", "13585446"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra HD 2011-2016" },
  { zoren: "ZRM0943015", oem: ["E3501M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1999-2003" },
  { zoren: "ZRM1303004", oem: ["E3746M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Trailblazer / Envoy 2005-2006" },
  { zoren: "ZRM1501080", oem: ["654663731"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Epica 2.5L 2006-2011" },
  { zoren: "ZRM1293052", oem: ["E3834M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2007-2008" },
  { zoren: "ZRM1501034", oem: ["13503670"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Cruze 2010-2013" },
  { zoren: "ZRM1501204", oem: ["19420757"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 2010-2016" },
  { zoren: "ZRM1133012", oem: ["E3691M"], name: "Fuel Pump", car_maker: "Cadillac", applications: "CTS 2004-2007" },
  { zoren: "ZRM0943041", oem: ["E3974M"], name: "Fuel Pump", car_maker: "Cadillac", applications: "Deville / Eldorado 1998-2002" },
  { zoren: "ZRM0943059", oem: ["E3935M"], name: "Fuel Pump", car_maker: "Cadillac", applications: "Deville / Seville 1997" },
  { zoren: "ZRM1293237", oem: ["E4007M"], name: "Fuel Pump", car_maker: "Cadillac / Chevy", applications: "CTS / Camaro 2010-2014" },
  { zoren: "ZRM1293273", oem: ["E4002M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Camaro 3.6L 2010-2015" },
  { zoren: "ZRM1293143", oem: ["E4005M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2010-2013" },
  { zoren: "ZRM1501071", oem: ["13592601"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Spark 2011-2015" },
  { zoren: "ZRM1501073", oem: ["E4092M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Impala 2014-2019" },
  { zoren: "ZRM1293090", oem: ["E3837M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2009-2013" },
  { zoren: "ZRM1293489", oem: ["E4049M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 2010-2016" },
  { zoren: "ZRM1294094", oem: ["E4012M"], name: "Fuel Pump", car_maker: "Buick / Chevy", applications: "LaCrosse / Malibu 2010-2016" },
  { zoren: "ZRM1293508", oem: ["13512935", "M100221"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Escalade / Suburban 2017-2019" },
  { zoren: "ZRM1501183", oem: ["E4071M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Sonic 2013-2018" },
  { zoren: "ZRM1293548", oem: ["84715864"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2019-2020" },
  { zoren: "ZRM1293059", oem: ["E3752M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2007-2008" },
  { zoren: "ZRM1294107", oem: ["13510918"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Silverado / Sierra 1500 2016-2019" },
  { zoren: "ZRM1293162", oem: ["E3753M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Escalade / Avalanche 2008-2009" },
  { zoren: "ZRM0943018", oem: ["E3563M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Sonoma / S10 2002-2003" },
  { zoren: "ZRM1303002", oem: ["E3769M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Trailblazer / Envoy 2008-2009" },
  { zoren: "ZRM1293456", oem: ["E7275M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Ram 1500/2500 2011-2022" },
  { zoren: "ZRM0943111", oem: ["E3579M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "XLR / Corvette 2006" },
  { zoren: "ZRM1293079", oem: ["E3604M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Silverado / Sierra 2500/3500 2004-2007" },
  { zoren: "ZRM1501203", oem: ["E4066M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Encore / Trax 2013-2022" },
  { zoren: "ZRM1293051", oem: ["E4048M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Express / Savana 2010-2016" },
  { zoren: "ZRM1293469", oem: ["E4036M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Captiva Sport 2012-2015" },
  { zoren: "ZRM1293189", oem: ["E3709M"], name: "Fuel Pump", car_maker: "Buick", applications: "DTS / Lucerne 2006-2007" },
  { zoren: "ZRM1293217", oem: ["E3786M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Impala 3.5L 2008-2011" },
  { zoren: "ZRM1293098", oem: ["E3688M"], name: "Fuel Pump", car_maker: "Chevrolet / Isuzu", applications: "Colorado / Canyon 2006-2008" },
  { zoren: "ZRM1501105", oem: ["E4040M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Equinox / Terrain 2012-2014" },
  { zoren: "ZRM1501107", oem: ["E4104M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Escalade / Yukon 2015-2019" },
  { zoren: "ZRM1501116", oem: ["E3841M"], name: "Fuel Pump", car_maker: "GMC / Chevy", applications: "Terrain / Equinox 2010-2017" },
  { zoren: "ZRM1501145", oem: ["E4072M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Spark 1.2L 2013-2015" },
  { zoren: "ZRM1501149", oem: ["13579065"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Sonic / Aveo 2012-2017" },
  { zoren: "ZRM1093243", oem: ["96464637"], name: "Fuel Pump", car_maker: "Daewoo / Chevy", applications: "Matiz / Spark 2005-2021" },
  { zoren: "ZRM1293095", oem: ["E3831M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Silverado 1500 2004-2008" },
  { zoren: "ZRM1501150", oem: ["13598137"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Captiva / Antara 2007-2018" },
  { zoren: "ZRM1293333", oem: ["95382386"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Captiva Diesel 2006-2011" },
  { zoren: "ZRM1293448", oem: ["E3840M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Equinox / Terrain 2010-2017" },
  { zoren: "ZRM1294016", oem: ["E4030M"], name: "Fuel Pump", car_maker: "Chevrolet / Buick", applications: "LaCrosse / Malibu 2010-2016" },
  { zoren: "ZRM1293085", oem: ["E3719M"], name: "Fuel Pump", car_maker: "Pontiac", applications: "Solstice / Sky 2006-2007" },
  { zoren: "ZRM1293226", oem: ["E3724M"], name: "Fuel Pump", car_maker: "Hummer", applications: "Hummer H3 2006-2008" },
  { zoren: "ZRM0943026", oem: ["E3963M"], name: "Fuel Pump", car_maker: "Chevrolet / GMC", applications: "Suburban 1998-1999" },
  { zoren: "ZRM0943097", oem: ["E3558M"], name: "Fuel Pump", car_maker: "Hummer", applications: "Hummer H2 2003" },

  // --- FORD / MAZDA ---
  { zoren: "ZRM1173001", oem: ["E2360M"], name: "Fuel Pump", car_maker: "Ford", applications: "Expedition 2003-2004" },
  { zoren: "ZRM1203002", oem: ["97FB9H307"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus MK1 1998-2004" },
  { zoren: "ZRM1204004", oem: ["E10791M"], name: "Fuel Pump", car_maker: "Ford", applications: "S-Max / Mondeo 2006-2015" },
  { zoren: "ZRM1213009", oem: ["0580313186"], name: "Fuel Pump", car_maker: "Ford", applications: "Ranger 2.3L 2008-2012" },
  { zoren: "ZRM1293009", oem: ["DG939H307LG"], name: "Fuel Pump", car_maker: "Ford", applications: "Fusion / Mondeo 2017-2018" },
  { zoren: "ZRM1293010", oem: ["E2436M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 2004-2008" },
  { zoren: "ZRM0003124", oem: ["E2336S"], name: "Fuel Pump", car_maker: "Ford", applications: "Crown Victoria 2003-2004" },
  { zoren: "ZRM1263010", oem: ["E2383M"], name: "Fuel Pump", car_maker: "Ford", applications: "Freestar 2004-2005" },
  { zoren: "ZRM0003232", oem: ["E2469M"], name: "Fuel Pump", car_maker: "Ford", applications: "Mustang 2006-2009" },
  { zoren: "ZRM1293048", oem: ["E2527M"], name: "Fuel Pump", car_maker: "Ford", applications: "E-150 E-250 E-350 2009-2010" },
  { zoren: "ZRM1293124", oem: ["E2476M"], name: "Fuel Pump", car_maker: "Ford", applications: "Expedition 2007-2008" },
  { zoren: "ZRM1293154", oem: ["E2553M"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2009-2010" },
  { zoren: "ZRM1293082", oem: ["E2523M"], name: "Fuel Pump", car_maker: "Ford", applications: "Expedition 2009-2014" },
  { zoren: "ZRM1293016", oem: ["E2529M"], name: "Fuel Pump", car_maker: "Ford / Mazda", applications: "Escape / Tribute 2009-2010" },
  { zoren: "ZRM1293023", oem: ["E2479M"], name: "Fuel Pump", car_maker: "Ford", applications: "Edge / MKX 2007-2010" },
  { zoren: "ZRM1293031", oem: ["E2541M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 2009-2014" },
  { zoren: "ZRM1293013", oem: ["E2494M"], name: "Fuel Pump", car_maker: "Ford", applications: "Expedition 2007-2008" },
  { zoren: "ZRM1293032", oem: ["E2588M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 3.5L 2011-2014" },
  { zoren: "ZRM1293047", oem: ["E2545M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 2009-2014" },
  { zoren: "ZRM1293103", oem: ["E2454M"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2006-2009" },
  { zoren: "ZRM1501012", oem: ["E2610M"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2013-2017" },
  { zoren: "ZRM1214001", oem: ["AB39-9H307-AC"], name: "Fuel Pump", car_maker: "Ford", applications: "Ranger 2013-2015" },
  { zoren: "ZRM1293015", oem: ["E2561M"], name: "Fuel Pump", car_maker: "Ford", applications: "Fusion 2010-2012" },
  { zoren: "ZRM1293021", oem: ["E2458M"], name: "Fuel Pump", car_maker: "Ford", applications: "Fusion 2006-2009" },
  { zoren: "ZRM1203001", oem: ["E10545M"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus 2000-2007" },
  { zoren: "ZRM1203004", oem: ["DV61-9H307-ED"], name: "Fuel Pump", car_maker: "Ford", applications: "Kuga 1.5 2013-2014" },
  { zoren: "ZRM1213005", oem: ["3M519H307"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus 2004-2011" },
  { zoren: "ZRM1294021", oem: ["CR33-9H307-AD"], name: "Fuel Pump", car_maker: "Ford", applications: "Mustang 2011-2014" },
  { zoren: "ZRM1293037", oem: ["E2578M"], name: "Fuel Pump", car_maker: "Ford", applications: "Edge 2011-2014" },
  { zoren: "ZRM0002049", oem: ["E2064MN"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 / F-250 1990-1996" },
  { zoren: "ZRM1293148", oem: ["P76865M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-250 / F-350 2011-2016" },
  { zoren: "ZRM1501004", oem: ["AB399H307EC"], name: "Fuel Pump", car_maker: "Ford", applications: "Ranger TKE 3.2 2011-2019" },
  { zoren: "ZRM1204008", oem: ["AB39-9H307-EC"], name: "Fuel Pump", car_maker: "Ford", applications: "Ranger TKE 3.2 2011-2019" },
  { zoren: "ZRM1293208", oem: ["BV6Z-9H307-S"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus 2.0L 2012-2017" },
  { zoren: "ZRM1293049", oem: ["E2566M"], name: "Fuel Pump", car_maker: "Ford", applications: "Escape 2.5L 2010-2012" },
  { zoren: "ZRM0003195", oem: ["E2453M"], name: "Fuel Pump", car_maker: "Ford", applications: "Escape 2005-2007" },
  { zoren: "ZRM1501056", oem: ["E2598M"], name: "Fuel Pump", car_maker: "Ford", applications: "Escape 2013-2016" },
  { zoren: "ZRM0003047", oem: ["E2509M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-250 / F-350 2008-2010" },
  { zoren: "ZRM1173020", oem: ["E2352M"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2002-2003" },
  { zoren: "ZRM0003030", oem: ["E2301M"], name: "Fuel Pump", car_maker: "Ford", applications: "Mustang 2001-2004" },
  { zoren: "ZRM1293001", oem: ["E2357M"], name: "Fuel Pump", car_maker: "Ford", applications: "Ranger 2004-2006" },
  { zoren: "ZRM1501072", oem: ["F2G3-9H307RC"], name: "Fuel Pump", car_maker: "Ford", applications: "Edge 2.7L 2015-2016" },
  { zoren: "ZRM1501076", oem: ["6G91-9H307-EH"], name: "Fuel Pump", car_maker: "Ford", applications: "S-Max / Mondeo 2006-2015" },
  { zoren: "ZRM1293116", oem: ["E2443M"], name: "Fuel Pump", car_maker: "Ford", applications: "Expedition 2005-2006" },
  { zoren: "ZRM1294019", oem: ["E2605M"], name: "Fuel Pump", car_maker: "Ford", applications: "Lincoln MKT / Explorer 2013-2014" },
  { zoren: "ZRM0003261", oem: ["E2218M"], name: "Fuel Pump", car_maker: "Ford", applications: "Mustang 3.8L 1998" },
  { zoren: "ZRM0003123", oem: ["E2555M"], name: "Fuel Pump", car_maker: "Ford", applications: "Mustang 2010" },
  { zoren: "ZRM1203019", oem: ["C1B1-9H307-BB"], name: "Fuel Pump", car_maker: "Ford", applications: "Fiesta 2012-2017" },
  { zoren: "ZRM1294039", oem: ["E2613M"], name: "Fuel Pump", car_maker: "Ford", applications: "Taurus 3.5L 2013-2017" },
  { zoren: "ZRM1163017", oem: ["E2495M"], name: "Fuel Pump", car_maker: "Ford", applications: "Escape 2007-2008" },
  { zoren: "ZRM0003053", oem: ["E2244M"], name: "Fuel Pump", car_maker: "Ford", applications: "Mustang 1999-2000" },
  { zoren: "ZRM1294032", oem: ["FR3Z9H307B"], name: "Fuel Pump", car_maker: "Ford", applications: "Mustang 2015-2020" },
  { zoren: "ZRM1293209", oem: ["E2598M"], name: "Fuel Pump", car_maker: "Ford", applications: "Escape 2.0L 2013-2016" },
  { zoren: "ZRM1293204", oem: ["E2559M"], name: "Fuel Pump", car_maker: "Ford", applications: "Taurus 2010-2012" },
  { zoren: "ZRM1293108", oem: ["E2533M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 2004-2008" },
  { zoren: "ZRM1260001", oem: ["CC119H307AC"], name: "Fuel Pump", car_maker: "Ford", applications: "Transit 2011-2018 Diesel" },
  { zoren: "ZRM1203010", oem: ["PE20-13-35X"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 3 BM 2013-2019" },
  { zoren: "ZRM1203014", oem: ["PE1A-13-35X"], name: "Fuel Pump", car_maker: "Mazda", applications: "CX-5 2012-2018" },
  { zoren: "ZRM1213003", oem: ["ZY081335XF"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 3 BK 2004-2006" },
  { zoren: "ZRM1213004", oem: ["8V59-9H307-BD"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 2 / Fiesta 2009-2012" },
  { zoren: "ZRM1183022", oem: ["E8750M"], name: "Fuel Pump", car_maker: "Mazda", applications: "CX-7 2.3L 2007-2012" },
  { zoren: "ZRM1213002", oem: ["LF17-13-35ZA"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 6 2003-2008" },
  { zoren: "ZRM1203006", oem: ["LF6X-13-35XD"], name: "Fuel Pump", car_maker: "Mazda / Ford", applications: "Mazda 3 / Focus 2011-2020" },
  { zoren: "ZRM1213007", oem: ["LF17-13-35ZA"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 6 2003-2008" },
  { zoren: "ZRM1213020", oem: ["ZJ01-13-35XC"], name: "Fuel Pump", car_maker: "Mazda", applications: "Demio 2000-2003" },
  { zoren: "ZRM1293144", oem: ["E2554M"], name: "Fuel Pump", car_maker: "Ford / Mazda", applications: "Escape / Tribute 2010-2012" },
  { zoren: "ZRM1501062", oem: ["GY01-13-35Z"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 323 1999-2006" },
  { zoren: "ZRM1501041", oem: ["ZL05-13-ZE0"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 323 2.0L 2001-2004" },
  { zoren: "ZRM1501075", oem: ["LF5W-13-ZE0"], name: "Fuel Pump", car_maker: "Mazda", applications: "Mazda 5 2.0L 2005-2014" },
  { zoren: "ZRM1203013", oem: ["PE01-13-35X"], name: "Fuel Pump", car_maker: "Mazda", applications: "CX-5 2.0L 2013-2016" },
  { zoren: "ZRM1501160", oem: ["CA43-13-35Z"], name: "Fuel Pump", car_maker: "Mazda", applications: "CX-9 3.7L 2011-2015" },
  { zoren: "ZRM1501091", oem: ["AE8Z9A299A"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus 2009-2011" },
  { zoren: "ZRM1293121", oem: ["E2439M"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2004-2005" },
  { zoren: "ZRM1292032", oem: ["EB3G-9H307-DA"], name: "Fuel Pump", car_maker: "Ford", applications: "Ranger TKE 2.2L Diesel 2011-2021" },
  { zoren: "ZRM1203031", oem: ["BV619H307JC"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus 2012-2016" },
  { zoren: "ZRM1501147", oem: ["EB3G-9H307-DA"], name: "Fuel Pump", car_maker: "Ford", applications: "Ranger T6 Diesel 2014-2021" },
  { zoren: "ZRM1501153", oem: ["FL3Z9H307C"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 3.0L 2015-2018" },
  { zoren: "ZRM1203007", oem: ["BV61-9H307-RC"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus 2013-2016" },
  { zoren: "ZRM1263001", oem: ["E2291M"], name: "Fuel Pump", car_maker: "Ford", applications: "Escape 2001-2004" },
  { zoren: "ZRM1293078", oem: ["E2434M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 2004-2008" },
  { zoren: "ZRM1501055", oem: ["CN15-9H307-CB"], name: "Fuel Pump", car_maker: "Ford", applications: "Ecosport 2013-2016" },
  { zoren: "ZRM0003097", oem: ["E2516M"], name: "Fuel Pump", car_maker: "Ford", applications: "Focus 2.0L 2008" },
  { zoren: "ZRM1173030", oem: ["E2355M"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2004-" },
  { zoren: "ZRM1293219", oem: ["E2568M"], name: "Fuel Pump", car_maker: "Ford", applications: "Escape 2.5L 2009-2012" },
  { zoren: "ZRM1501173", oem: ["CV61-9H307-AD"], name: "Fuel Pump", car_maker: "Ford", applications: "Kuga II 2014-2019" },
  { zoren: "ZRM1293254", oem: ["E2577M"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 3.5L 2011-2012" },
  { zoren: "ZRM1292005", oem: ["E2579M"], name: "Fuel Pump", car_maker: "Ford", applications: "Edge 2011-2015" },
  { zoren: "ZRM1293094", oem: ["E2441M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-150 2005-2008" },
  { zoren: "ZRM1293500", oem: ["E2581M"], name: "Fuel Pump", car_maker: "Ford", applications: "E-350 2011-2019" },
  { zoren: "ZRM0003038", oem: ["E2235M"], name: "Fuel Pump", car_maker: "Ford", applications: "F-250 1999-2004" },
  { zoren: "ZRM1204003", oem: ["5S719H307CB"], name: "Fuel Pump", car_maker: "Ford", applications: "Mondeo" },
  { zoren: "ZRM0003185", oem: ["E2287M"], name: "Fuel Pump", car_maker: "Ford", applications: "Excursion 2000-2005" },
  { zoren: "ZRM1173003", oem: ["E2338M"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2001-2003" },
  { zoren: "ZRM1501209", oem: ["BB5-9H307-D"], name: "Fuel Pump", car_maker: "Ford", applications: "Explorer 2.0L 2012-" },
  { zoren: "ZRM1501211", oem: ["CK41-9H307-AC"], name: "Fuel Pump", car_maker: "Ford", applications: "Transit 150 250 2015-2019" },
  { zoren: "ZRM1183117", oem: ["L5T3-13-35Z"], name: "Fuel Pump", car_maker: "Mazda", applications: "Raptor 2009-2015" }
,
// --- EUROPEAN (MERCEDES, PEUGEOT, RENAULT, VW, BMW, LAND ROVER) ---
  { zoren: "ZRM1102002", oem: ["2034702394", "E8475M"], name: "Fuel Pump", car_maker: "Mercedes", applications: "C230 C240 W203" },
  { zoren: "ZRM1104002", oem: ["2114704194", "E8530M"], name: "Fuel Pump", car_maker: "Mercedes", applications: "E320 E350 W211" },
  { zoren: "ZRM1104001", oem: ["E8572M", "2114701794"], name: "Fuel Pump", car_maker: "Mercedes", applications: "E55 AMG 2003-2005" },
  { zoren: "ZRM0004016", oem: ["2214708494"], name: "Fuel Pump", car_maker: "Mercedes", applications: "S550 S500 W221 2006-2013" },
  { zoren: "ZRM1102001", oem: ["2034703594"], name: "Fuel Pump", car_maker: "Mercedes", applications: "C230 C240 2002" },
  { zoren: "ZRM1501068", oem: ["2184700394"], name: "Fuel Pump", car_maker: "Mercedes", applications: "W204 C300 W212 E-Class" },
  { zoren: "ZRM1501114", oem: ["2044700294"], name: "Fuel Pump", car_maker: "Mercedes", applications: "W204 C180/C200" },
  { zoren: "ZRM1501115", oem: ["2054701594"], name: "Fuel Pump", car_maker: "Mercedes", applications: "GLC X253 / C300 W205" },
  { zoren: "ZRM1501129", oem: ["2044700894"], name: "Fuel Pump", car_maker: "Mercedes", applications: "C350 C300 GLK350" },
  { zoren: "ZRM1501130", oem: ["2044701394"], name: "Fuel Pump", car_maker: "Mercedes", applications: "C250 E550 W204" },
  { zoren: "ZRM1501131", oem: ["2114704594"], name: "Fuel Pump", car_maker: "Mercedes", applications: "CLS55 AMG W211" },
  { zoren: "ZRM1501132", oem: ["1714700990"], name: "Fuel Pump", car_maker: "Mercedes", applications: "S550 W221" },
  { zoren: "ZRM1501133", oem: ["2114703994"], name: "Fuel Pump", car_maker: "Mercedes", applications: "E500 E320 W211" },
  { zoren: "ZRM1501134", oem: ["2114704094"], name: "Fuel Pump", car_maker: "Mercedes", applications: "E500 E320 CLK500" },
  { zoren: "ZRM1294037", oem: ["2044701394"], name: "Fuel Pump", car_maker: "Mercedes", applications: "C350 C300 GLK350" },
  { zoren: "ZRM1501144", oem: ["1664701794"], name: "Fuel Pump", car_maker: "Mercedes", applications: "ML350 ML550 GL550" },
  { zoren: "ZRM1294086", oem: ["A4474706500"], name: "Fuel Pump", car_maker: "Mercedes", applications: "Vito W447 Metris" },
  { zoren: "ZRM1293441", oem: ["A1664702994"], name: "Fuel Pump", car_maker: "Mercedes", applications: "W166 GLE Diesel" },
  { zoren: "ZRM1054013", oem: ["1525.77"], name: "Fuel Pump", car_maker: "Peugeot", applications: "Citroen Xantia / Peugeot 806" },
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
  { zoren: "ZRM1095001", oem: ["16146752499"], name: "Fuel Pump", car_maker: "BMW", applications: "E46 325i" },
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
  { zoren: "ZRM1294072", oem: ["LR038602"], name: "Fuel Pump", car_maker: "Land Rover", applications: "Freelander 2" },
  { zoren: "ZRM1501121", oem: ["LR065349"], name: "Fuel Pump", car_maker: "Land Rover", applications: "Discovery Sport" },
  { zoren: "ZRM0004060", oem: ["LR014998"], name: "Fuel Pump", car_maker: "Land Rover", applications: "LR3 / Range Rover Sport" },
  { zoren: "ZRM0004018", oem: ["LR015177"], name: "Fuel Pump", car_maker: "Land Rover", applications: "Range Rover III" },
  { zoren: "ZRM1104012", oem: ["31372882"], name: "Fuel Pump", car_maker: "Volvo", applications: "S80 XC60" },
  { zoren: "ZRM1501184", oem: ["BJ32-9A309-BB"], name: "Fuel Pump", car_maker: "Land Rover", applications: "Range Rover Sport 2014-2018" }
];
// ================= PART 2: THE LOGIC =================
// This block MUST come after the data block

document.addEventListener("DOMContentLoaded", function() {
    
    // We use the fullDatabase defined above
    const database = fullDatabase;
    
    let currentFilter = "all";

    // --- HELPER: HIGHLIGHT TEXT ---
    function highlightMatch(text, query) {
        if (!query || !text) return text;
        const strText = text.toString(); 
        const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${safeQuery})`, 'gi');
        return strText.replace(regex, '<span class="highlight">$1</span>');
    }

    // --- SEARCH LOGIC ---
    function searchParts(q) {
        q = q.toLowerCase().trim();

        return database.filter(item => {
            if (currentFilter !== "all") {
                if (!item.car_maker.toLowerCase().includes(currentFilter.toLowerCase())) {
                    return false;
                }
            }

            if (!q) return true; 

            const inOem = item.oem.some(o => o.toLowerCase().includes(q));
            const inZoren = item.zoren ? item.zoren.toLowerCase().includes(q) : false;
            const inName = item.name ? item.name.toLowerCase().includes(q) : false;
            const inApp = item.applications ? item.applications.toLowerCase().includes(q) : false;

            return inOem || inZoren || inName || inApp;
        });
    }

    // --- RENDER RESULTS ---
    function showResult(results, query) {
        const box = document.getElementById("result");
        const countBox = document.getElementById("resultCount");
        
        if (!box) return; 

        box.innerHTML = ""; 

        if(results.length > 0) {
            if(countBox) countBox.innerText = `Showing ${results.length} Result(s)`;
        } else {
            if(countBox) countBox.innerText = "";
        }

        if (results.length === 0) {
            box.innerHTML = "<h3 class='no-result'>No Products Found</h3>";
            return;
        }

        results.forEach(p => {
            let oemHtml = `<ul class="oem-list">`;
            p.oem.forEach(num => {
                const hNum = highlightMatch(num, query);
                oemHtml += `<li>${hNum}</li>`;
            });
            oemHtml += `</ul>`;

            const hName = highlightMatch(p.name, query);
            const hZoren = highlightMatch(p.zoren, query);
            const hMaker = highlightMatch(p.car_maker, query);
            const hApp = highlightMatch(p.applications, query);

            const cardHtml = `
                <div class="product-card">
                    <h3>${hName}</h3>
                    <div class="info-row">
                        <span class="label">Zoren P/N:</span>
                        <span class="value"><b>${hZoren}</b></span>
                    </div>
                    <div class="info-row">
                        <span class="label">Maker:</span>
                        <span class="value">${hMaker}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">Application:</span>
                        <span class="value">${hApp}</span>
                    </div>
                    <div class="info-row" style="margin-top:10px;">
                        <span class="label">OEM List:</span>
                        <span class="value">${oemHtml}</span>
                    </div>
                </div>
            `;
            box.innerHTML += cardHtml;
        });
    }

    // --- EVENT LISTENERS ---
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.getAttribute("data-filter");
            searchBtn.click();
        });
    });

    if (searchBtn && searchInput) {
        searchBtn.onclick = function () {
            const q = searchInput.value.trim();
            const results = searchParts(q);
            showResult(results, q);
        };

        searchInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                searchBtn.click();
            }
        });
        
        // Load all data initially
        searchBtn.click();
    }
});