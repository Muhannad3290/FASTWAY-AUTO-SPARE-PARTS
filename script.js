// 1. PASTE YOUR FULL JSON DATA HERE INSIDE THE BRACKETS
const partsData = [
  // ... PASTE ALL JSON DATA FROM PREVIOUS MESSAGES HERE ...
  // Example format:

  {
    "zoren_no": "ZRM0003011",
    "oem_no": "31110-09000, E8678M",
    "car_maker": "Hyundai",
    "applications": "HYUNDAI SONATA 2.0 / KIA OPTIMA 2001-2005"
  },
  {
    "zoren_no": "ZRM0003012",
    "oem_no": "31110-3K300",
    "car_maker": "Hyundai",
    "applications": "HYUNDAI Sonata"
  },
  {
    "zoren_no": "ZRM0003013",
    "oem_no": "31110-2E300, 31110-2E000",
    "car_maker": "Hyundai",
    "applications": "HYUNDAI TUCSON 2005-2009, Kia Sportage"
  },
  {
    "zoren_no": "ZRM0003027",
    "oem_no": "31110-17005",
    "car_maker": "Hyundai",
    "applications": "Hyundai Elantra Lavita (FC) 1.6L/1.8L, Hyundai Matrix (FC) 1.6 2001-2010"
  },
  {
    "zoren_no": "ZRM0003031",
    "oem_no": "31110-0S100, 31110-05000",
    "car_maker": "Hyundai",
    "applications": "Hyundai Kia Cerato 2005-2012"
  },
  {
    "zoren_no": "ZRM0003036",
    "oem_no": "31110-26510, E8663M",
    "car_maker": "Hyundai",
    "applications": "Hyundai SANTA FE 2001-2006"
  },
  {
    "zoren_no": "ZRM0003052",
    "oem_no": "31110-2H000",
    "car_maker": "Hyundai",
    "applications": "Hyundai Elantra 2.0L 2007-2012"
  },
  {
    "zoren_no": "ZRM0003088",
    "oem_no": "31110-26500",
    "car_maker": "Hyundai",
    "applications": "Hyundai Santa Fe 2.4L 2.7L 2001-2005"
  },
  {
    "zoren_no": "ZRM0003101",
    "oem_no": "31110-3A400",
    "car_maker": "Hyundai",
    "applications": "Trajet 2.0 2004-2008"
  },
  {
    "zoren_no": "ZRM1003004",
    "oem_no": "31110-1C000",
    "car_maker": "Hyundai",
    "applications": "Hyundai Getz 1.1L/1.3L/1.6L 2002-2008"
  },
  {
    "zoren_no": "ZRM1003007",
    "oem_no": "31110-25000, 31110-25010",
    "car_maker": "Hyundai",
    "applications": "Hyundai Accent 1.3L 1.5L 1994-2000"
  },
  {
    "zoren_no": "ZRM1003008",
    "oem_no": "31110-25600",
    "car_maker": "Hyundai",
    "applications": "HYUNDAI ACCENT 1994-2000"
  },
  {
    "zoren_no": "ZRM1123001",
    "oem_no": "31110-4M000",
    "car_maker": "Hyundai",
    "applications": "APMIRA KASA 2000-2006"
  },
  {
    "zoren_no": "ZRM1123002",
    "oem_no": "31110-3R000",
    "car_maker": "Hyundai",
    "applications": "Hyundai Sonata 8 for KIA K5"
  },
  {
    "zoren_no": "ZRM1123003",
    "oem_no": "31110-3R100",
    "car_maker": "Hyundai",
    "applications": "Hyundai Sonata, KIA Optima Hybrid 2.4L 2011-2013"
  },
  {
    "zoren_no": "ZRM1123004",
    "oem_no": "K30A-13-35ZB",
    "car_maker": "Hyundai",
    "applications": "Sonata Azera, KIA OPTIMA 2010-2014, Kia Rio Saloon 2000-2005"
  },
  {
    "zoren_no": "ZRM1123006",
    "oem_no": "31110-3Q700, 31110-3Q600, E9120M",
    "car_maker": "Hyundai",
    "applications": "Kia Optima 11-15, Sonata 11-14 2.4 L4"
  },
  {
    "zoren_no": "ZRM1123007",
    "oem_no": "31110-4R500, E9122M, 31110-3L800",
    "car_maker": "Hyundai",
    "applications": "Hyundai Sonata & KIA Optima 2011-2013"
  },
  {
    "zoren_no": "ZRM1153007",
    "oem_no": "31110-1H000",
    "car_maker": "Hyundai",
    "applications": "Hyundai i30 07-12, KIA CEED 06-12"
  },
  {
    "zoren_no": "ZRM1163001",
    "oem_no": "31110-0Q000",
    "car_maker": "Hyundai",
    "applications": "HYUNDAI Elantra 2008-"
  },
  {
    "zoren_no": "ZRM1163002",
    "oem_no": "31110-2Z100, 31110-2Q500",
    "car_maker": "Hyundai",
    "applications": "HYUNDAI Tucson ix35 2010-2013, Sportage 10"
  },
  {
    "zoren_no": "ZRM1163007",
    "oem_no": "31110-1J000, 31110-0X000, 31110-1P000",
    "car_maker": "Hyundai",
    "applications": "Hyundai i20 Petrol 2009-2013, Hyundai i10 1.2L 2008-2015"
  },
  {
    "zoren_no": "ZRM1163008",
    "oem_no": "31110-1M500, 31110-1M000, 31110-1M200",
    "car_maker": "Hyundai",
    "applications": "Hyundai Elantra, i10, i20 2008-2015, Kia Forte 2.0L 2010-2013, i30, Kia Cerato, Sorento 2008"
  },
  {
    "zoren_no": "ZRM1163010",
    "oem_no": "31110-B3000",
    "car_maker": "Hyundai",
    "applications": "Hyundai Mistra"
  },
  {
    "zoren_no": "ZRM1163011",
    "oem_no": "31110-2S200",
    "car_maker": "Hyundai",
    "applications": "Hyundai Tucson ix35 10-14, Kia Sportage III 10-14"
  },
  {
    "zoren_no": "ZRM1163012",
    "oem_no": "31110-2W400, 31110-2W200, 31110-2W300",
    "car_maker": "Hyundai",
    "applications": "SANTA FE ix45 2.4L 2006-2017"
  },
  {
    "zoren_no": "ZRM1163013",
    "oem_no": "31110-2W700",
    "car_maker": "Hyundai",
    "applications": "Hyundai New SantaFe IX45 2.0T"
  },
  {
    "zoren_no": "ZRM1163014",
    "oem_no": "31110-2P000, 31110-2P400",
    "car_maker": "Hyundai",
    "applications": "Hyundai TUCSON (JM) 2.0L/2.7L 2004-2010, KIA SORENTO (XM) 2.4L 2009-2014, KIA Sportage 2.0L/2.7L 2004-2014"
  },
  {
    "zoren_no": "ZRM1163015",
    "oem_no": "31110-2S100",
    "car_maker": "Hyundai",
    "applications": "Hyundai Tucson ix35 2010-2014, Kia Sportage 2010-2014"
  },
  {
    "zoren_no": "ZRM1163016",
    "oem_no": "31110-C9000, 31110-A0000",
    "car_maker": "Hyundai",
    "applications": "Hyundai Creta ix25 Cantus 1.6L 2014-2018"
  },
  {
    "zoren_no": "ZRM1164003",
    "oem_no": "31110-0U000",
    "car_maker": "Hyundai",
    "applications": "VERNA 1.6L 2008"
  },
  {
    "zoren_no": "ZRM1183004",
    "oem_no": "31110-2D030, 31110-2D000",
    "car_maker": "Hyundai",
    "applications": "HYUNDAI IX35, Tucson 10-13, Sportage 10"
  },
  {
    "zoren_no": "ZRM1183007",
    "oem_no": "31110-4X000, E10814M",
    "car_maker": "Hyundai",
    "applications": "KIA RIO MK3 1.4 2011-2017, Hyundai Accent 2010, RIO LX UB 09/2011-on 4-D Hatch 1.4L G4FA"
  },
  {
    "zoren_no": "ZRM1183011",
    "oem_no": "31110-0M000, 31110-1E000",
    "car_maker": "Hyundai",
    "applications": "Hyundai Accent III 1.4gl 2005/2011, Rio 2005-2011"
  },
  {
    "zoren_no": "ZRM1183012",
    "oem_no": "31110-3X000",
    "car_maker": "Hyundai",
    "applications": "Hyundai i30 GD 2011-2015, Veloster 2011-2015, Avante MD 2010-2015, KIA K3 2012"
  },
  {
    "zoren_no": "ZRM1183013",
    "oem_no": "E8730M, 31110-1G500",
    "car_maker": "Hyundai",
    "applications": "Hyundai Kia Accent Elantra Rio Rio5 06-11"
  },
  {
    "zoren_no": "ZRM1183015",
    "oem_no": "31110-2C631, E8529M, 69861, P76527M, FE0351, FG0792, SP3011M",
    "car_maker": "Hyundai",
    "applications": "Hyundai Tiburon 2.7L V6 2003-2008"
  },
  {
    "zoren_no": "ZRM1183024",
    "oem_no": "31110-2F000",
    "car_maker": "Hyundai",
    "applications": "KIA CERATO Hatchback 2.0 2004-2009"
  },
  {
    "zoren_no": "ZRM1183026",
    "oem_no": "31110-07150, 31110-07600, 31110-07000",
    "car_maker": "Hyundai",
    "applications": "Kia Morning Picanto 1.0i/1.1i 2004-2017"
  },
  {
    "zoren_no": "ZRM1183027",
    "oem_no": "31110-2B000",
    "car_maker": "Hyundai",
    "applications": "Hyundai Santa Fe CM 2.7 V6 2006-2012"
  },
  {
    "zoren_no": "ZRM1183034",
    "oem_no": "31110-1R500, 31110-2V500, 31110-1W500",
    "car_maker": "Hyundai",
    "applications": "Hyundai Elantra 2014-2015, Elantra Coupe 2014, Elantra GT 2014, Veloster 2012-2015, Kia Forte 2014-2015"
  },
  {
    "zoren_no": "ZRM1183039",
    "oem_no": "31110-2K600, E8995M, P77043M, SP1392, 23010085, FG1281, 31111-3L800",
    "car_maker": "Hyundai",
    "applications": "Kia Soul 1.6L 2.0 2012-2013"
  },
  {
    "zoren_no": "ZRM1293055",
    "oem_no": "31110-3X500, E9073M",
    "car_maker": "Hyundai",
    "applications": "Hyundai Elantra 1.8L 2011-2015"
  },
  {
    "zoren_no": "ZRM1293100",
    "oem_no": "31110-0W000, 31110-1U000, 31110-5U000, E8821M",
    "car_maker": "Hyundai",
    "applications": "Hyundai Santa Fe 2.7L 3.3L 2007-2009"
  },
  {
    "zoren_no": "ZRM1501010",
    "oem_no": "31110-C1200, 31110-D6000",
    "car_maker": "Hyundai",
    "applications": "Hyundai Sonata 5, Sonata 6, Kia Optima 2016-UP"
  },
  {
    "zoren_no": "ZRM1501011",
    "oem_no": "31110-4Z000, 31110-4Z500, E8217M, FG1904, SP3085M, A30491",
    "car_maker": "Hyundai",
    "applications": "Hyundai Santa Fe Sport 2013-2017, Kia Sorento 2014-2015"
  },
  {
    "zoren_no": "ZRM1501021",
    "oem_no": "31110-4H500",
    "car_maker": "Hyundai",
    "applications": "Hyundai H-1 H1 MPV Wagon 2008-2018"
  },
  {
    "zoren_no": "ZRM1183050",
    "oem_no": "31110-3X210, 31110-A7250",
    "car_maker": "Hyundai",
    "applications": "Hyundai Elantra E130 2011-2015, KIA K3 Cerato 2013"
  },
  {
    "zoren_no": "ZRM1293163",
    "oem_no": "E8821M",
    "car_maker": "Hyundai",
    "applications": "HYUNDAI SANTA FE V6-2.7L V6-3.3L 2007-2009"
  },
  {
    "zoren_no": "ZRM1183058",
    "oem_no": "31110-1R000, 31110-2R000, 31110-1R100",
    "car_maker": "Hyundai Kia",
    "applications": "Kia RIO III 2011-2017, Hyundai Accent IV 2010-2017"
  },
  {
    "zoren_no": "ZRM1501024, ZRM1183091",
    "oem_no": "31110-2B900",
    "car_maker": "Hyundai",
    "applications": "Hyundai Santa Fe 2006-2012"
  },
  {
    "zoren_no": "ZRM1501070",
    "oem_no": "31110-02000",
    "car_maker": "Hyundai",
    "applications": "Hyundai Atos 1.0L 1998-2002"
  },
  {
    "zoren_no": "ZRM1501084",
    "oem_no": "27510-31000",
    "car_maker": "Hyundai",
    "applications": "Hyundai SM3 1992-1996"
  },
  {
    "zoren_no": "ZRM1501093",
    "oem_no": "31110-4D600",
    "car_maker": "KIA",
    "applications": "KIA Grand Carnival 2.7 3.5 3.8L 2005-2014"
  },
  {
    "zoren_no": "ZRM1501094, ZRM1183087",
    "oem_no": "31110-2J400, 31110-2J600, E9000M",
    "car_maker": "Hyundai",
    "applications": "Borrego Mohave 3.8L V6 2008-2012"
  },
  {
    "zoren_no": "ZRM1501027, ZRM1433005",
    "oem_no": "31110-F2100",
    "car_maker": "Hyundai",
    "applications": "Hyundai Elantra AD G4FG 1.6L 2015-2018"
  },
  {
    "zoren_no": "ZRM1501036",
    "oem_no": "31110-C5000",
    "car_maker": "Hyundai",
    "applications": "KIA Sorento 2.4L 2014-2017"
  },
  {
    "zoren_no": "ZRM1501032",
    "oem_no": "31110-1W000",
    "car_maker": "Hyundai",
    "applications": "KIA RIO III (UB) 1.25 CVVT 09/2011-2018"
  },
  {
    "zoren_no": "ZRM1501042, ZRM1163060",
    "oem_no": "31110-B4000",
    "car_maker": "Hyundai",
    "applications": "HYUNDAI grand i10 2015-2016, Grand Avega 2011-2016, Grand Santa Fe 2015-2016"
  },
  {
    "zoren_no": "ZRM0003056",
    "oem_no": "31110-38200",
    "car_maker": "Hyundai",
    "applications": "KIA Optima 2001-2002, Sonata 2001-2005 2.7L/2.4L"
  },
  {
    "zoren_no": "ZRM1123012",
    "oem_no": "31110-2S510",
    "car_maker": "Hyundai",
    "applications": "Hyundai Tucson 2012-2013 L4 2.0L/2.4L, KIA Sportage 2012-2013 L4 2.4L"
  },
  {
    "zoren_no": "ZRM1183010",
    "oem_no": "31110-2G000, 31110-2G500, 31110-2G200",
    "car_maker": "Hyundai",
    "applications": "KIA Magentis 2.0L 2.7L 2005-2010"
  },

  {
    "zoren_no": "ZRM1163021",
    "oem_no": "31110-2S000",
    "car_maker": "Hyundai",
    "applications": "Kia Sportage 2.0 Diesel 2010-2013, Hyundai Tucson 2.0 Diesel 2009-2013",
    "source": "28"
  },
  {
    "zoren_no": "ZRM1183092",
    "oem_no": "31110-1R200",
    "car_maker": "Hyundai",
    "applications": "Hyundai Accent, KIA Rio III 2010-2017",
    "source": "28"
  },
  {
    "zoren_no": "ZRM1501079",
    "oem_no": "31110-2E960, 31110-1F980",
    "car_maker": "Hyundai",
    "applications": "Hyundai Tucson Sportage 2004-2010 DIESEL",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1501099",
    "oem_no": "31110-4Z000, 31110-4Z500, E9217M",
    "car_maker": "Hyundai",
    "applications": "Hyundai Santa Fe Sport 2.0T 2013-2017, Kia Sorento 3.3L 2014-2015",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1293516",
    "oem_no": "WAITH SENSOR",
    "car_maker": "Hyundai",
    "applications": "ACCENT 2005-2008, SANATA 1989-2015",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1501108",
    "oem_no": "31110-3K600",
    "car_maker": "Hyundai",
    "applications": "Hyundai",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1501110",
    "oem_no": "31110-A0000",
    "car_maker": "Hyundai",
    "applications": "Hyundai Creta 1.6L 2015-2018",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1501111",
    "oem_no": "31110-D3500",
    "car_maker": "Hyundai",
    "applications": "Hyundai Tucson 1.6L 2015-2016",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1283007",
    "oem_no": "",
    "car_maker": "Hyundai",
    "applications": "Kia Sportage 2.4L 2017-2021",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1501112",
    "oem_no": "31110-D7100",
    "car_maker": "Hyundai",
    "applications": "Hyundai KIA Sportage / SEURPF116 / SEURPF119 2016-2020",
    "source": "30"
  },
  {
    "zoren_no": "ZRM1501097, ZRM1183084",
    "oem_no": "31110-1D000, 2000-A81480",
    "car_maker": "Hyundai",
    "applications": "KIA Carens III UN 2.0 2006-2010, KIA Carens III UN 2.0 CVVT 2009-2018",
    "source": "30"
  },
  {
    "zoren_no": "ZRM1501125",
    "oem_no": "31110-C7000",
    "car_maker": "Hyundai",
    "applications": "Hyundai i20 ACTIVE 2015-2021",
    "source": "30"
  },
  {
    "zoren_no": "ZRM1501123",
    "oem_no": "31110-F3500",
    "car_maker": "Hyundai",
    "applications": "Hyundai Elantra Forte 1.4L 1.6L 2.0L 2017-2020",
    "source": "30"
  },
  {
    "zoren_no": "ZRM1501124",
    "oem_no": "31110-J9500",
    "car_maker": "Hyundai",
    "applications": "Hyundai Kona 1.6L/2.0L 2018-2020",
    "source": "30"
  },
  {
    "zoren_no": "ZRM1501137",
    "oem_no": "31110-D7000",
    "car_maker": "Hyundai",
    "applications": "Kia Sportage 2015-2019 1.6L, Hyundai Tucson 2015/06 - 2020/12 1.6L 2WD",
    "source": "30"
  },
  {
    "zoren_no": "ZRM1501155",
    "oem_no": "31110-C2500, 31110-D5500",
    "car_maker": "Hyundai",
    "applications": "KIA Optima, Hyundai Sonata 1.6L 2.0L 2.4L 2015-2020",
    "source": "31"
  },
  {
    "zoren_no": "ZRM1293168",
    "oem_no": "31110-F9000",
    "car_maker": "Hyundai",
    "applications": "Hyundai Yuena 1.4L 2016-2019",
    "source": "31"
  },
  {
    "zoren_no": "ZRM1501122",
    "oem_no": "31110-3J000",
    "car_maker": "Hyundai",
    "applications": "IX55 Veracruz 3.0L 2006-2023 DIESEL V6 24V",
    "source": "31"
  },
  {
    "zoren_no": "ZRM1501139",
    "oem_no": "31110-D3100",
    "car_maker": "Hyundai",
    "applications": "Hyundai TUCSON, KIA SPORTAGE 2015-",
    "source": "31"
  },
  {
    "zoren_no": "ZRM1501167",
    "oem_no": "31110-F0000",
    "car_maker": "Hyundai",
    "applications": "Hyundai ELANTRA 1.6L L4 2016-2022",
    "source": "31"
  },
  {
    "zoren_no": "ZRM1501172",
    "oem_no": "31110-B8500",
    "car_maker": "Hyundai",
    "applications": "Hyundai Santa Fe V6 3.3L 2013-2020",
    "source": "31"
  },
  {
    "zoren_no": "ZRM1501175",
    "oem_no": "31120-H6000",
    "car_maker": "Hyundai",
    "applications": "Accent 2018-2021",
    "source": "32"
  },
  {
    "zoren_no": "ZRM1501176",
    "oem_no": "31120-C6200, 31112-C6200, 31110-C6200, DFG2311, MM048, 809GE, 94460-C5000, FHY21",
    "car_maker": "KIA",
    "applications": "Kia Sorento 2.0L/2.4L/3.3L 2016-2020",
    "source": "32"
  },
  {
    "zoren_no": "ZRM1501178",
    "oem_no": "31110-D3000",
    "car_maker": "Hyundai KIA",
    "applications": "Hyundai Tucson 1.6T 2015/06-2020/12, KIA Sportage 1.6T 2015/09-2021/12",
    "source": "32"
  },
  {
    "zoren_no": "ZRM1501180",
    "oem_no": "31110-C3500",
    "car_maker": "Hyundai",
    "applications": "Hyundai Sonata 9th Generation 2015-2017 2.4L 1.6T",
    "source": "32"
  },
  {
    "zoren_no": "ZRM1501169",
    "oem_no": "31110-AA000, 31112-AA000",
    "car_maker": "Hyundai",
    "applications": "Hyundai Elantra 2.0L 2021-2023",
    "source": "32"
  },
  {
    "zoren_no": "ZRM1163006",
    "oem_no": "31110-2P900",
    "car_maker": "Hyundai",
    "applications": "Hyundai Santa Fe 2009-2021, KIA Sorento 2009-2021 diesel",
    "source": "32"
  },
  {
    "zoren_no": "ZRM1163022",
    "oem_no": "31110-2W900",
    "car_maker": "Hyundai KIA",
    "applications": "Hyundai Santa Fe 2012-2015, Kia Sorento 2012-2018 Diesel",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1283012",
    "oem_no": "31110-A9900",
    "car_maker": "KIA",
    "applications": "KIA Carnival 2015-2023 2.2L DIESEL",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1183121",
    "oem_no": "31110-3J500",
    "car_maker": "Hyundai",
    "applications": "Hyundai Veracruz 3.8L 2007-2012",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1083103",
    "oem_no": "F01R00S406, LRC181BA0-1335XG",
    "car_maker": "BESTUNE",
    "applications": "BESTUNE X40/B30/SENIA R7/JUMPAL A70",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1501185",
    "oem_no": "31110-26350",
    "car_maker": "Hyundai",
    "applications": "Hyundai Santa Fe 2.4L 3.5L 2002-2006",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1501186",
    "oem_no": "31110-4H000",
    "car_maker": "Hyundai",
    "applications": "Hyundai (import) H-1 Travel (TQ) 2.5 CRDI 2007-2015",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1123022",
    "oem_no": "31110-B1000",
    "car_maker": "Hyundai",
    "applications": "Genesis 2015-2016, Genesis G80 2017-2020",
    "source": "36"
  },
  {
    "zoren_no": "ZRM1283014",
    "oem_no": "31110-A9500",
    "car_maker": "Hyundai",
    "applications": "KIA SEDONA 2015-2021",
    "source": "36"
  },
  {
    "zoren_no": "ZRM1433007",
    "oem_no": "31110-G3200, 31110-G3300",
    "car_maker": "Hyundai",
    "applications": "Hyundai KIA Cerato 2018-2021",
    "source": "36"
  },
  {
    "zoren_no": "ZRM1123008",
    "oem_no": "31110-3Q500, E9036M, SP3037M, 8644M, P77064M",
    "car_maker": "Hyundai",
    "applications": "Hyundai Sonata 2011-2015 2.4L",
    "source": "36"
  },
  {
    "zoren_no": "ZRM15001193",
    "oem_no": "31110-B2500, 31111-B2000, 94460-B2000, 003-11782, FG1898, SP3303M",
    "car_maker": "KIA",
    "applications": "Kia Soul 2014-2015 1.6L 2.0L",
    "source": "36"
  },
  {
    "zoren_no": "ZRM1501194",
    "oem_no": "31110-4N000",
    "car_maker": "Hyundai",
    "applications": "Hyundai EON 2011-2018",
    "source": "36"
  },
  {
    "zoren_no": "ZRM1501202",
    "oem_no": "31110-02500",
    "car_maker": "Hyundai",
    "applications": "Hyundai Prime MX, KIA VISTO, ATOS 2001-2012",
    "source": "37"
  },
  {
    "zoren_no": "ZRM1501208",
    "oem_no": "31110-H9000, 31120-H9000, 31110-F9000",
    "car_maker": "Hyundai",
    "applications": "Hyundai Yuena 1.4L 2016-2019",
    "source": "37"
  },
  {
    "zoren_no": "ZRM1123021",
    "oem_no": "31110-3R800",
    "car_maker": "Hyundai",
    "applications": "Hyundai Azera 14 2011-2014",
    "source": "37"
  },
  {
    "zoren_no": "ZRM0973001",
    "oem_no": "E8722M, 77020-06121, 77020-06190, 77020-06120, 77020-06401, 77020-06220, E8937M, 77020-06321",
    "car_maker": "Toyota",
    "applications": "Toyota Camry 2007-2011, Solara 2006-2008",
    "source": "39"
  },
  {
    "zoren_no": "ZRM0973002",
    "oem_no": "77020-06190, P76820M, E8722M, FG1169, SP9043M, P76820M, 69932, 77020-06221, 77023-06220",
    "car_maker": "Toyota",
    "applications": "Toyota Camry L4 2.5L 2007-2011, Solara 2007-2008 14 2.4L(2AZFE), Mongolyl4 2.5L (2ARFE)",
    "source": "39"
  },
  {
    "zoren_no": "ZRM0973003",
    "oem_no": "77020-06050",
    "car_maker": "Toyota",
    "applications": "Camry 2003-2005",
    "source": "39"
  },
  {
    "zoren_no": "ZRM0973004",
    "oem_no": "77020-0D040, 77020-0D010, 77029-00040, 77020-00010",
    "car_maker": "Toyota",
    "applications": "Toyota Vios YARIS 1.0L/1.5L 1998-2005, Toyota Allex NZE121, NZE124",
    "source": "41"
  },
  {
    "zoren_no": "ZRM0973005",
    "oem_no": "77020-12460, 77020-02190, 77020-12450",
    "car_maker": "Toyota",
    "applications": "Toyota Corolla Fielder/Runx (various models) 2001-2007",
    "source": "41"
  },
  {
    "zoren_no": "ZRM1183001",
    "oem_no": "77020-02181, 77020-02291",
    "car_maker": "Toyota",
    "applications": "TOYOTA COROLLA MATRIX VIBE 1.8L/2.4L 2005-2011",
    "source": "41"
  },
  {
    "zoren_no": "ZRM1183002",
    "oem_no": "77020-04061, 77020-04060, E8756M, E8757M, 77020-04071",
    "car_maker": "Toyota",
    "applications": "Toyota Tacoma 4.0L 2005-2015",
    "source": "41"
  },
  {
    "zoren_no": "ZRM1183003",
    "oem_no": "77020-0K080",
    "car_maker": "Toyota",
    "applications": "Toyota Vigo 2TR-FE Champ 2004-2016",
    "source": "41"
  },
  {
    "zoren_no": "ZRM1183020",
    "oem_no": "77020-60382, 77020-60372, 77020-60351, 77020-60392, 77020-60340, 77020-40183",
    "car_maker": "Toyota",
    "applications": "LAND CRUISER GRJ200, URJ20*, UZJ200, VDJ200 2007-2015",
    "source": "41"
  },
  {
    "zoren_no": "ZRM1183031",
    "oem_no": "77020-0N010, 77020-0N011, 77020-00040, 77020-30380, 77020-0N610",
    "car_maker": "Toyota",
    "applications": "2005-2017 Reiz 2.5/3.0L, 2005-2018 Crown 2.5/3.0L",
    "source": "43"
  },
  {
    "zoren_no": "ZRM1183032",
    "oem_no": "77020-0K390, 77020-0K380, 77020-0K381, 77020-0K400",
    "car_maker": "Toyota",
    "applications": "TOYOTA 2016-2019 HILUX 2.7L 1TRFE, 4Runner Truck",
    "source": "43"
  },
  {
    "zoren_no": "ZRM1183033",
    "oem_no": "77020-60490, 77020-60580, 77020-60590",
    "car_maker": "Toyota",
    "applications": "LEXUS LX450D/460/570 2007-2015, TOYOTA LAND CRUISER 2007-2015",
    "source": "43"
  },
  {
    "zoren_no": "ZRM1183036",
    "oem_no": "77020-60440, 77020-60410, 77020-35151, 77020-35102, 77020-35170, 77020-35171, 77020-35150, 77020-60411, 77020-60441, 77020-35130, 77020-35131",
    "car_maker": "Toyota",
    "applications": "4RUNNER 2009-2013, LAND CRUISER PRADO 2009-2013, LEXUS GX400/460 2009-2012",
    "source": "43"
  },
  {
    "zoren_no": "ZRM1183037",
    "oem_no": "77020-35072, 77020-35092, 77020-35112, 77020-35070, 77020-35090, 77020-35071, 77020-35170, 77020-60340, 77020-60382, 77020-35080, 77020-15072",
    "car_maker": "Toyota",
    "applications": "TOYOTA HILUX SURF 2002-2009, 4RUNNER 2002-2009, Land Cruiser Prado 2002-2009 GRJ120L",
    "source": "43"
  },
  {
    "zoren_no": "ZRM1183041",
    "oem_no": "77020-60342, 77020-60320, 77020-60490",
    "car_maker": "Toyota",
    "applications": "TOYOTA LAND CRUISER 2007-2015, LEXUS LX450D/460/570 2007-2011",
    "source": "43"
  },
  {
    "zoren_no": "ZRM1183042",
    "oem_no": "23220-0V030, 77020-0E030",
    "car_maker": "Toyota",
    "applications": "TOYOTA HIGHLANDER 2.7L 2009-2014, LEXUS RX350 2010-2015, Lexus Rx270 2009-",
    "source": "45"
  },
  {
    "zoren_no": "ZRM1183047",
    "oem_no": "77020-02630",
    "car_maker": "Toyota",
    "applications": "TOYOTA Corolla 2014-2019 1ZRFE",
    "source": "45"
  },
  {
    "zoren_no": "ZRM1183049",
    "oem_no": "77704-0D040, 77704-0D080, 23220-0M020, 77020-52330, 77020-0D120",
    "car_maker": "Toyota",
    "applications": "Toyota Vios YARIS 1.5L 2008-2013",
    "source": "45"
  },
  {
    "zoren_no": "ZRM1184007",
    "oem_no": "77020-0C120, 77020-00170, E9199M, P77054M, FG1624, SP9175M",
    "car_maker": "Toyota",
    "applications": "Toyota Sequoia/Tundra 2012-2018 V8 5.7L Flex",
    "source": "45"
  },
  {
    "zoren_no": "ZRM1501001, ZRM1183060",
    "oem_no": "77020-0D180, 77020-00190, 77620-00180",
    "car_maker": "Toyota",
    "applications": "Toyota Yaris NCP150 2014-2021, Vios NSP15 2013-2021, Toyota Yaris NSP15 2013-2021",
    "source": "45"
  },
  {
    "zoren_no": "ZRM1501002, ZRM1184011",
    "oem_no": "77020-00090",
    "car_maker": "Toyota",
    "applications": "TOYOTA SEQUOIA 5.7L V8 2009-2012, TOYOTA TUNDRA 5.7L V8 2009-2012",
    "source": "45"
  },
  {
    "zoren_no": "ZRM1501003, ZRM1183080",
    "oem_no": "77020-0R020, 77020-0R010, 77020-08020",
    "car_maker": "Toyota",
    "applications": "Toyota RAV4 L4-2.5L V6-3.5L 2009-2018",
    "source": "47"
  },
  {
    "zoren_no": "ZRM1501005, ZRM1183067",
    "oem_no": "77020-0R030, 77010-0R030",
    "car_maker": "Toyota",
    "applications": "RAV4 2.0L 2.4L 2009-2013",
    "source": "47"
  },
  {
    "zoren_no": "ZRM1501006",
    "oem_no": "77020-60202, 77020-60212, 77020-35060, 77020-60211, 73633-00430",
    "car_maker": "Toyota",
    "applications": "TOYOTA LAND CRUISER PRADO 09/2002-02/2010",
    "source": "47"
  },
  {
    "zoren_no": "ZRM1501007",
    "oem_no": "77020-02070, 77020-02080, 77020-02970, 77020-02980",
    "car_maker": "Toyota",
    "applications": "Toyota Avensis 2003-2008, Toyota Corolla 2003-2008",
    "source": "47"
  },
  {
    "zoren_no": "ZRM1501014",
    "oem_no": "77020-48010, 77020-48051, E8840M",
    "car_maker": "Toyota",
    "applications": "TOYOTA Lexus RX330 350 3.3L V6 2005-2008",
    "source": "47"
  },
  {
    "zoren_no": "ZRM1183030",
    "oem_no": "77020-0C070, 77020-0C071, 77020-0C072, 77020-0C080, 77020-0C082, P76713M",
    "car_maker": "Toyota",
    "applications": "TOYOTA SEQUOIA 2008-2009 V8-4.7L, TOYOTA TUNDRA 2007-2014 V6-4.0L V8-4.7L",
    "source": "47"
  },
  {
    "zoren_no": "ZRM1501028",
    "oem_no": "77020-12700, 77020-12570, 77020-02320, 77020-12081, 77020-02220, 77020-02710, 77020-02680, 77020-12860",
    "car_maker": "Toyota",
    "applications": "Toyota Auris ZRE151, Toyota Corolla ZRE151 2003-2016",
    "source": "47"
  },
  {
    "zoren_no": "ZRM1501035, ZRM1183094",
    "oem_no": "77020-0K150, 77020-0K070, 77020-0K140, 77020-26031, 77020-26010",
    "car_maker": "Toyota",
    "applications": "Toyota Fortuner 2008-2016 4.0 L, Toyota HILUX 2002-2004, TOYOTA HIACE 2006-2009, TOYOTA HILUX 2006-2015",
    "source": "48"
  },
  {
    "zoren_no": "ZRM1501039",
    "oem_no": "77020-60670, 77020-60470, 77030-40430",
    "car_maker": "Toyota",
    "applications": "TOYOTA LAND CRUISER PRADO 08/2009-07/2017 Diesel",
    "source": "48"
  },
  {
    "zoren_no": "ZRM1501040",
    "oem_no": "77020-60650, 73633-00430",
    "car_maker": "Toyota",
    "applications": "TOYOTA LAND CRUISER PRADO 2017-",
    "source": "48"
  },
  {
    "zoren_no": "ZRM1501044, ZRM1183100",
    "oem_no": "77020-60430",
    "car_maker": "Toyota",
    "applications": "TOYOTA LAND CRUISER PRADO 2009-2017 1GRFE",
    "source": "48"
  },
  {
    "zoren_no": "ZRM1501045",
    "oem_no": "77020-12650",
    "car_maker": "Toyota",
    "applications": "TOYOTA COROLLA FIELDER NZE141/144G 2006-2012",
    "source": "48"
  },
  {
    "zoren_no": "ZRM1501046",
    "oem_no": "77020-12670",
    "car_maker": "Toyota",
    "applications": "TOYOTA BLADE AZE156H 2006-2009",
    "source": "48"
  },
  {
    "zoren_no": "ZRM1501047",
    "oem_no": "77020-58030, 23220-28300, 77020-58020, 77020-28110, 77020-28091, 77020-58050",
    "car_maker": "Toyota",
    "applications": "01/2006-09/2019 TOYOTA ESTIMA, PREVIA, TARAGO, ALPHARD, VELLFIRE, HV",
    "source": "50"
  },
  {
    "zoren_no": "ZRM1501063",
    "oem_no": "77020-06300, 77020-06282, 77020-06285, 77020-06286, P76754M, FG1969, SP9169M, 77020-33363",
    "car_maker": "Toyota",
    "applications": "Lexus ES350 2016-2017, Camry 2012-2017, Toyota Avalon 2013-2018",
    "source": "50"
  },
  {
    "zoren_no": "ZRM1501074",
    "oem_no": "23210-87403, 23210-87203, 23210-81040, 8223E, 23210-81031",
    "car_maker": "Toyota",
    "applications": "Toyota Daihatsu Terios 1.5L 2005-2012",
    "source": "50"
  },
  {
    "zoren_no": "ZRM1501069",
    "oem_no": "1525.GE, 77020-0H010, 77240-0H010",
    "car_maker": "Toyota",
    "applications": "Toyota Aygo 2005-2014, Peugeot 107, Peugeot 108 2014-2021, Citroën C1",
    "source": "50"
  },
  {
    "zoren_no": "ZRM1501023",
    "oem_no": "23210-B1010, 101961-9421",
    "car_maker": "Daihatsu",
    "applications": "TOYOTA PASSO 2004-2016, TOYOTA BB, Daihatsu Sirion, Charade, Copen, Suzuki Jimny/Alto",
    "source": "50"
  },
  {
    "zoren_no": "ZRM1501088",
    "oem_no": "23210-97201",
    "car_maker": "Daihatsu",
    "applications": "Perodua Viva 2007-2011, Daihatsu YRV, Trevis, Cuore, TOYOTA DUET",
    "source": "50"
  },
  {
    "zoren_no": "ZRM1501077",
    "oem_no": "77010-0K041",
    "car_maker": "Toyota",
    "applications": "TOYOTA HILUX 2KD 2004-2015",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1501089, ZRM1183056",
    "oem_no": "77020-08040, 77020-08060",
    "car_maker": "Toyota",
    "applications": "TOYOTA SIENNA 01/2003-11/2009 2GRFE",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1183171",
    "oem_no": "77020-0R050, 77020-42230",
    "car_maker": "Toyota",
    "applications": "Toyota RAV4 2018-2020",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1183066",
    "oem_no": "77010-0K010, 77010-0K011",
    "car_maker": "Toyota",
    "applications": "TOYOTA HILUX 2004-2012 2KDFTV, 1KDFTV",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1501104, ZRM1183137",
    "oem_no": "77020-0E130",
    "car_maker": "Toyota",
    "applications": "TOYOTA LEXUS RX450H/350 2015-2019, HIGHLANDER 2013-2019, INNOVA 2004-2016, FORTUNER 2005-2012",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1501102",
    "oem_no": "77020-0K020",
    "car_maker": "Toyota",
    "applications": "08/2004-03/2012 TOYOTA HILUX",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1501113, ZRM1183106",
    "oem_no": "77020-33530, 77020-06520, 77020-06481",
    "car_maker": "Toyota",
    "applications": "TOYOTA CAMRY 2.5L 2017-2018, CAMRY (HYBRID) 2017-2021",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1501117",
    "oem_no": "77020-60550",
    "car_maker": "Toyota",
    "applications": "LEXUS LX450D/460/570 2007-2015, TOYOTA LAND CRUISER 2007-2016",
    "source": "53"
  },
  {
    "zoren_no": "ZRM1501118",
    "oem_no": "77020-04090",
    "car_maker": "Toyota",
    "applications": "Toyota Tacoma V6 3.5L 2015-2019",
    "source": "53"
  },
  {
    "zoren_no": "ZRM1501119",
    "oem_no": "77020-60640",
    "car_maker": "Toyota",
    "applications": "TOYOTA LAND CRUISER PRADO 08/2017-",
    "source": "53"
  },
  {
    "zoren_no": "ZRM1501103, ZRM1183102",
    "oem_no": "77020-60600, 77020-60601",
    "car_maker": "Toyota",
    "applications": "LAND CRUISER PRADO 05/2010-05/2020",
    "source": "53"
  },
  {
    "zoren_no": "ZRM1501120",
    "oem_no": "77020-0T010, 77020-0T020",
    "car_maker": "Toyota",
    "applications": "TOYOTA VENZA 2.7L 3.5L 2008-2016",
    "source": "53"
  },
  {
    "zoren_no": "ZRM1183064",
    "oem_no": "77020-0E111, FG1992, 478GE, A30507, P77055M, SP9177M, SP8071M",
    "car_maker": "Toyota",
    "applications": "TOYOTA HIGHLANDER 2.7L/3.5L 2013-2019",
    "source": "53"
  },
  {
    "zoren_no": "ZRM1501163",
    "oem_no": "23210-BZ150",
    "car_maker": "TOYOTA",
    "applications": "TOYOTA AVANZA 1.5L 2011-2015",
    "source": "56"
  },
  {
    "zoren_no": "ZR1501164",
    "oem_no": "77020-52231, 292010-0014, 292010-0013",
    "car_maker": "TOYOTA",
    "applications": "TOYOTA SIENTA 2005-",
    "source": "56"
  },
  {
    "zoren_no": "ZRM1501171",
    "oem_no": "77010-0K200, 77010-0K201",
    "car_maker": "TOYOTA",
    "applications": "TOYOTA HILUX 4Runner 2015-2020 DIESEL",
    "source": "56"
  },
  {
    "zoren_no": "ZRM1501166",
    "oem_no": "77020-05080",
    "car_maker": "TOYOTA",
    "applications": "Toyota Avensis T22 1.8L 2000-2003",
    "source": "56"
  },
  {
    "zoren_no": "ZRM1183068",
    "oem_no": "77020-47081, 77020-02C70",
    "car_maker": "TOYOTA",
    "applications": "PRIUS (PLUG-IN HYBRID) 2012-2015, PRIUS 2009-2015",
    "source": "56"
  },
  {
    "zoren_no": "ZRM1183089",
    "oem_no": "77020-08070",
    "car_maker": "TOYOTA",
    "applications": "SIENNA 2010-2020",
    "source": "56"
  },
  {
    "zoren_no": "ZRM1203054",
    "oem_no": "0580313058, 77240-02050",
    "car_maker": "TOYOTA",
    "applications": "COROLLA 1997-2001",
    "source": "56"
  },
  {
    "zoren_no": "ZRM1183074",
    "oem_no": "77020-0K420, 77020-0K470",
    "car_maker": "TOYOTA",
    "applications": "TOYOTA FORTUNER 2.7L 2016-2021",
    "source": "55"
  },
  {
    "zoren_no": "ZRM1183082",
    "oem_no": "77020-0D380, 77020-0D410",
    "car_maker": "TOYOTA",
    "applications": "TOYOTA VIOS 2013-2020, YARIS 2013-2017",
    "source": "55"
  },
  {
    "zoren_no": "ZRM0973006",
    "oem_no": "77020-0K030",
    "car_maker": "TOYOTA",
    "applications": "Toyota INNOVA, AVENSIS 2006-2010",
    "source": "55"
  },
  {
    "zoren_no": "ZRM1501142",
    "oem_no": "77020-42010, SP9038M, 7717552020, 7724132060",
    "car_maker": "TOYOTA",
    "applications": "RAV 4 1994-2007",
    "source": "55"
  },
  {
    "zoren_no": "ZRM1501162",
    "oem_no": "77020-35120, 77020-35121",
    "car_maker": "TOYOTA",
    "applications": "Toyota FJ Cruiser 4.0L 2007-2014",
    "source": "55"
  },
  {
    "zoren_no": "ZRM1183111",
    "oem_no": "77020-30351, 77020-53073, 77020-02010, 77020-50071, 77020-53083, 77020-53082, 77020-53081, 77020-53080, SP9046M, P76752M, FG1174, E8812M",
    "car_maker": "TOYOTA",
    "applications": "LEXUS IS250/350/2xxD/IS300/IS250C 2005-2015",
    "source": "55"
  },
  {
    "zoren_no": "ZRM1501159",
    "oem_no": "77020-33391, 77020-33380",
    "car_maker": "TOYOTA",
    "applications": "Lexus ES250 ES350 ES300h 2012-2018",
    "source": "55"
  },
  {
    "zoren_no": "ZRM1183063",
    "oem_no": "77020-0C061, E8694M",
    "car_maker": "TOYOTA",
    "applications": "1999-2006 TOYOTA TUNDRA, 2000-2007 TOYOTA SEQUOIA",
    "source": "55"
  },
  {
    "zoren_no": "ZRM1073004",
    "oem_no": "23210-BZ130",
    "car_maker": "TOYOTA",
    "applications": "Avanza F653 F654, TOYOTA Rush F700",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1183095",
    "oem_no": "77020-60540",
    "car_maker": "TOYOTA",
    "applications": "TOYOTA LAND CRUISER 2007-2015, LEXUS LX570 2015-, LEXUS LX450D/460/570 2007-2015",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1501199",
    "oem_no": "77020-42240",
    "car_maker": "TOYOTA",
    "applications": "TOYOTA RAV4 2018-2020 A25AFKS",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1501200",
    "oem_no": "77020-F4030",
    "car_maker": "TOYOTA",
    "applications": "TOYOTA C-HR 10/2016-2020 3ZRFA",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1501201",
    "oem_no": "77020-02C21",
    "car_maker": "TOYOTA",
    "applications": "TOYOTA COROLLA 1.8L 2019-2022, C-HR 2016-2019",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1183178",
    "oem_no": "77020-0R060, 77020-0R061",
    "car_maker": "TOYOTA",
    "applications": "TOYOTA RAV4 2018-2020 A25AFXS",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1501195",
    "oem_no": "77020-48040",
    "car_maker": "TOYOTA",
    "applications": "TOYOTA LEXUS RX 1 1997-2003",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1501098, ZRM1183165",
    "oem_no": "77020-0R070",
    "car_maker": "TOYOTA",
    "applications": "TOYOTA HARRIER HEV 2021-2022, TOYOTA RAV4 2019-2020",
    "source": "59"
  },


  {
    "zoren_no": "ZRM1103003",
    "oem_no": "E8922M, 17045-TA0-A00",
    "car_maker": "HONDA",
    "applications": "ACURA TSX 2009-2014, HONDA ACCORD CROSSTOUR 2008-2012",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1103005",
    "oem_no": "SP8025M, 17045-SWA-A01, 17045-SXS-A01",
    "car_maker": "HONDA",
    "applications": "Honda CR-V 2007-2011",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1103008",
    "oem_no": "17045-S9A-000, 57045-534-00",
    "car_maker": "HONDA",
    "applications": "SUV CRV 2003-2006",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1103009",
    "oem_no": "17045-SAA-H50",
    "car_maker": "HONDA",
    "applications": "JAZZ 1.3L 1.5L 2003-2008, FIT 2003-2008",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1103010",
    "oem_no": "17045-TG5-000",
    "car_maker": "HONDA",
    "applications": "JAZZ 1.3L 1.5L 2009-2014, FIT 2009-2014",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1353001",
    "oem_no": "17045-SNV-000, 17045-SNV-010, 17045-SNA-003, 17708-SNA-000",
    "car_maker": "HONDA",
    "applications": "Honda Civic FA1 1.3-2.0L 2006-2011",
    "source": "35"
  },
  {
    "zoren_no": "ZRM1093066, ZRM1153016",
    "oem_no": "17045-S5A-A00, 17045-T2A-A00, E9145M, SP8966M",
    "car_maker": "HONDA",
    "applications": "HONDA CIVIC L4-2.0L 2002-2005, Honda Accord 2.0L/2.4L/3.0L 2013-2017, Acura TLX 2016-2019",
    "source": "36"
  },
  {
    "zoren_no": "ZRM1501154",
    "oem_no": "17045-TBF-A00",
    "car_maker": "HONDA",
    "applications": "Honda Civic 1.5L 2.0L 2016-2020",
    "source": "36"
  },
  {
    "zoren_no": "ZRM1501170",
    "oem_no": "17045-T9A-000",
    "car_maker": "HONDA",
    "applications": "Honda City 1.5L 2015-2019",
    "source": "36"
  },
  {
    "zoren_no": "ZRM1303005",
    "oem_no": "17045-TR0-A00, 17045-TR0-G01, 17045-TR0-A50",
    "car_maker": "HONDA",
    "applications": "Civic 1.8L 2012-2015, Acura ILX 1.8 2.4L 2013-2022",
    "source": "36"
  },
  {
    "zoren_no": "ZRM1153112",
    "oem_no": "17045-TLA-A02, 17045-TLA-A01",
    "car_maker": "HONDA",
    "applications": "Honda CR-V 2017-2024, HR-V 2023-2024",
    "source": "36"
  },
  {
    "zoren_no": "ZRM1103018",
    "oem_no": "17045-S3V-A00, E8720M, SP8021M, FG0957",
    "car_maker": "HONDA",
    "applications": "Acura MDX 3.5L 2001-2002, Honda Pilot 3.5L 2003-2004",
    "source": "36"
  },
  {
    "zoren_no": "ZRM0943191",
    "oem_no": "17708-S4K-000, 17708SDGH01M1, 16010-SDG-H00, 17708-SEA-E01",
    "car_maker": "HONDA",
    "applications": "HONDA Accord 2003-2008",
    "source": "38"
  },
  {
    "zoren_no": "ZRM1293552",
    "oem_no": "17045-TBA-A03, FG2128",
    "car_maker": "HONDA",
    "applications": "HONDA CIVIC 2016-2021",
    "source": "38"
  },
  {
    "zoren_no": "ZRM1501207",
    "oem_no": "17045-TA7-A01, 17045-TZ7-A00",
    "car_maker": "HONDA",
    "applications": "Acura TLX 2015-2020",
    "source": "38"
  },
  {
    "zoren_no": "ZRM1103013",
    "oem_no": "17045-T7J-H01, 17708-T7J-H02",
    "car_maker": "HONDA",
    "applications": "Honda HR-V 2016-2021",
    "source": "38"
  },
  {
    "zoren_no": "ZRM1153113",
    "oem_no": "17045-TVC-A04, 17045-TVC-A01, 17045-TVC-A03",
    "car_maker": "HONDA",
    "applications": "HONDA ACCORD 2018-2022",
    "source": "38"
  },
  {
    "zoren_no": "ZRM1153114",
    "oem_no": "P77524M, 17045-TVA-A03",
    "car_maker": "HONDA",
    "applications": "HONDA ACCORD 2018-2022",
    "source": "38"
  },
  {
    "zoren_no": "ZRM1143007",
    "oem_no": "17045-TZ5-A10, P77029M, 17045-TX4-A01",
    "car_maker": "HONDA",
    "applications": "ACURA RDX 2013-2018",
    "source": "38"
  },
  {
    "zoren_no": "ZRM1103041",
    "oem_no": "17045-S3V-A01, 17045-S9V-A00, E8657M",
    "car_maker": "HONDA",
    "applications": "ACURA MDX 2005-2006, HONDA PILOT 2005-2008",
    "source": "39"
  },
  {
    "zoren_no": "ZRM1073125",
    "oem_no": "17040-8U002",
    "car_maker": "Nissan",
    "applications": "Nissan Sentra 2000-2006 1.8L 2.0L 2.5L",
    "source": "40"
  },
  {
    "zoren_no": "ZRM1073126",
    "oem_no": "17040-8N00B, E8502M",
    "car_maker": "Nissan",
    "applications": "NISSAN SENTRA 2000-2004 L4-1.8L L4-2.5L",
    "source": "40"
  },
  {
    "zoren_no": "ZRM1080001",
    "oem_no": "25060-JE60D, 25060-JH70A",
    "car_maker": "Nissan",
    "applications": "NISSAN X-TRAIL T31Z 2007-2013, Nissan Trail T32W S1 2015-",
    "source": "40"
  },
  {
    "zoren_no": "ZRM1082001",
    "oem_no": "17040-4BA2A",
    "car_maker": "Nissan",
    "applications": "Nissan Trail T32H L2 L3 class 2016/08-",
    "source": "40"
  },
  {
    "zoren_no": "ZRM1082002",
    "oem_no": "17040-4BA2A",
    "car_maker": "Nissan",
    "applications": "Nissan Trail / ROGUE T32 S1 Class 2014/08-",
    "source": "40"
  },
  {
    "zoren_no": "ZRM1083004",
    "oem_no": "25060-VW00A, 17042-BW0000",
    "car_maker": "Nissan",
    "applications": "NISSAN URVAN 2.4L 2008-2010",
    "source": "40"
  },
  {
    "zoren_no": "ZRM1083029",
    "oem_no": "17040-2FJ0A",
    "car_maker": "Nissan",
    "applications": "Nissan Kai Chen D50/R50",
    "source": "42"
  },
  {
    "zoren_no": "ZRM1083030",
    "oem_no": "17040-JE20D",
    "car_maker": "Nissan",
    "applications": "Nissan T31 X-Trail, J10 Qashqai 2WD 08-13",
    "source": "43"
  },
  {
    "zoren_no": "ZRM1083031",
    "oem_no": "17040-JN00C, 17040-JN00A",
    "car_maker": "Nissan",
    "applications": "2008-2012 Nissan J32 Teana 2.0 2.5 3.0L",
    "source": "43"
  },
  {
    "zoren_no": "ZRM1083032",
    "oem_no": "17040-JE60D, 17040-JG00A, 17040-JA10A, 17040-JD02A",
    "car_maker": "Nissan",
    "applications": "Nissan QASHQAI 4WD Gas 2.0L 2007-2016, Nissan X-Trail T31 Gas 2.5L 2007-2014",
    "source": "44"
  },
  {
    "zoren_no": "ZRM1083033",
    "oem_no": "17040-JX30A, 17040-AX000, 17040-1FE1A",
    "car_maker": "Nissan",
    "applications": "2007-2012 NISSAN VERSA, NISSAN NV200 1.6L 2009, TIIDA 2010",
    "source": "44"
  },
  {
    "zoren_no": "ZRM1083034",
    "oem_no": "17040-EW80C, 17040-EW800",
    "car_maker": "Nissan",
    "applications": "TIIDA Sylphy Livna 1.6L",
    "source": "44"
  },
  {
    "zoren_no": "ZRM1083035",
    "oem_no": "17040-CH000, 17040-3SH0E, E9547M",
    "car_maker": "Nissan",
    "applications": "Nissan Aprio 2008-2010, Tiida 1.8L 1.6L 2007-2012",
    "source": "44"
  },
  {
    "zoren_no": "ZRM1083037",
    "oem_no": "17040-JD00A",
    "car_maker": "Nissan",
    "applications": "NISSAN Qashqai 02.2007-12.2014",
    "source": "45"
  },
  {
    "zoren_no": "ZRM1083038",
    "oem_no": "E8496M, 17040-8J005, 17040-8J100",
    "car_maker": "Nissan",
    "applications": "2002-2003 Nissan Altima L4 2.5L / V6 3.5L",
    "source": "45"
  },
  {
    "zoren_no": "ZRM1083041",
    "oem_no": "17040-CG000, 17040-EV10A, E8534M",
    "car_maker": "Nissan",
    "applications": "Infiniti FX35 FX45 2003-2008, Nissan 350Z 2003-2009, Infiniti G35, M35, M45",
    "source": "45"
  },
  {
    "zoren_no": "ZRM1083042",
    "oem_no": "17040-1FE1C, 17040-1V10A, 17040-AX000, 17040-EE500",
    "car_maker": "Nissan",
    "applications": "TIIDA C11, VERSA SC11, SYLPHY, BLUEBIRD, WINGROAD, CUBE, NOTE, MICRA",
    "source": "45"
  },
  {
    "zoren_no": "ZRM1083043",
    "oem_no": "17040-3TS0B",
    "car_maker": "Nissan",
    "applications": "Nissan L33 Teana 2014-2017",
    "source": "45"
  },
  {
    "zoren_no": "ZRM1083044",
    "oem_no": "17040-3DN0B",
    "car_maker": "Nissan",
    "applications": "Nissan Tiida SUNNY, MARCH 2011-2016",
    "source": "45"
  },
  {
    "zoren_no": "ZRM1083047",
    "oem_no": "17040-EE50C",
    "car_maker": "Nissan",
    "applications": "NISSAN Tiida 1.8L SC11 C11 Grand Livina",
    "source": "47"
  },
  {
    "zoren_no": "ZRM1083062",
    "oem_no": "17040-KH40A, 17040-JR40D, 17040-JR50A",
    "car_maker": "Nissan",
    "applications": "NISSAN NAVARA D40T 2005-2007",
    "source": "47"
  },
  {
    "zoren_no": "ZRM1083063",
    "oem_no": "17040-5M300",
    "car_maker": "Nissan",
    "applications": "NISSAN Almera Pulsar Sentra 1.5-2.0L 2000-",
    "source": "47"
  },
  {
    "zoren_no": "ZRM1083067",
    "oem_no": "17040-4FN0A, 17040-3RW0A",
    "car_maker": "Nissan",
    "applications": "Nissan Sentra Pulsar Tiida 2012-2016",
    "source": "47"
  },
  {
    "zoren_no": "ZRM1083131",
    "oem_no": "17040-VZ00A, 17040-VZ10A",
    "car_maker": "Nissan",
    "applications": "NISSAN E25 URVAN 2.5 2008-2012",
    "source": "47"
  },
  {
    "zoren_no": "ZRM1153002",
    "oem_no": "17040-ZR70B, 17040-EM30A, 17040-1FC0B, E8855M",
    "car_maker": "Nissan",
    "applications": "Nissan Versa Cube 2009-2014, VERSA 1.6L/1.8L",
    "source": "48"
  },
  {
    "zoren_no": "ZRM1153005",
    "oem_no": "17040-CA000, 17040-1AA0B, 17040-CB00A",
    "car_maker": "Nissan",
    "applications": "MURANO 2003-2014",
    "source": "49"
  },
  {
    "zoren_no": "ZRM1153006",
    "oem_no": "17040-1HM0A, 17040-1HJ0A",
    "car_maker": "Nissan",
    "applications": "Nissan Sunny N17, NISSAN March K13 2011-2017",
    "source": "49"
  },
  {
    "zoren_no": "ZRM1153008",
    "oem_no": "17040-9N00A, 17040-JA00A, 17040-ZX01B",
    "car_maker": "Nissan",
    "applications": "NISSAN MAXIMA 3.5L 2009-2014, ALTIMA 2.5L/3.5L 2007-2012",
    "source": "49"
  },
  {
    "zoren_no": "ZRM1153010",
    "oem_no": "17040-7Y000, E8856M, 17040JM10C, SP4061M",
    "car_maker": "Nissan",
    "applications": "Nissan Rogue 2.5L 2008-2013, Rogue Select 2014-2015",
    "source": "49"
  },
  {
    "zoren_no": "ZRM1153011",
    "oem_no": "17040-9U01B, 17040-AX000, 17040-1KA0A",
    "car_maker": "Nissan",
    "applications": "NISSAN JUKE (F15) 1.6, NISSAN MARCH 1.2, NISSAN NOTE 1.4",
    "source": "49"
  },
  {
    "zoren_no": "ZRM1153013",
    "oem_no": "17040-1KD0B",
    "car_maker": "Nissan",
    "applications": "Nissan Juke F15 2010-2014",
    "source": "49"
  },
  {
    "zoren_no": "ZRM1153015",
    "oem_no": "17040-3SG0C, 17040-3SG0A, E9213M",
    "car_maker": "Nissan",
    "applications": "NISSAN Sentra 1.8L 2013-2018",
    "source": "51"
  },
  {
    "zoren_no": "ZRM1163004",
    "oem_no": "17040-95F0B, 27510-31100",
    "car_maker": "Nissan",
    "applications": "Almera II 2000-2016, ALTIMA 2001-2006",
    "source": "51"
  },
  {
    "zoren_no": "ZRM1283145",
    "oem_no": "17040-ET00A, E8752M",
    "car_maker": "Nissan",
    "applications": "Nissan Sentra 2007-2012",
    "source": "51"
  },
  {
    "zoren_no": "ZRM1293004",
    "oem_no": "17040-EA000, 17040-ZS00A, 17040-ZP00A",
    "car_maker": "Nissan",
    "applications": "Nissan Frontier 05-12, Pathfinder 06-07, Xterra 07-12, Suzuki Equator",
    "source": "51"
  },
  {
    "zoren_no": "ZRM1343018",
    "oem_no": "17040-ZQ60A, 17040-7S000, 17040-ZE00A",
    "car_maker": "Nissan",
    "applications": "NISSAN Titan 2004-2006, Infiniti QX56 2004-2006, Nissan Armada 2005-2006",
    "source": "51"
  },
  {
    "zoren_no": "ZRM1083069",
    "oem_no": "17040-EW80A",
    "car_maker": "Nissan",
    "applications": "Nissan TIIDA 2004-2012",
    "source": "51"
  },
  {
    "zoren_no": "ZRM1501009",
    "oem_no": "17040-3XA0A",
    "car_maker": "Nissan",
    "applications": "Nissan Urvan Nv350 2012-2016",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1093027",
    "oem_no": "17040-8H31B",
    "car_maker": "Nissan",
    "applications": "Nissan X-Trail T30 QR25 2000-2007",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1093049",
    "oem_no": "17040-4M405",
    "car_maker": "Nissan",
    "applications": "Nissan Sunny N16 2003-2010",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1153004",
    "oem_no": "E8545M, 170407Y000, 17040ZB00A",
    "car_maker": "Nissan",
    "applications": "Nissan Maxima, Altima, Quest 2.5L 3.5L 2004-2009",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1501016",
    "oem_no": "17040-VK01A",
    "car_maker": "Nissan",
    "applications": "Nissan D22 KA24 2009-2014",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1501025, ZRM1083188",
    "oem_no": "17040-1CB0D, 17040-1CJ0A",
    "car_maker": "Nissan",
    "applications": "NISSAN Infiniti FX35/FX37 2010-2013, QX70 2009-2017",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1343046",
    "oem_no": "E8862M, 17040-ZH000, 17040-ZQ60B",
    "car_maker": "Nissan",
    "applications": "NISSAN TITAN 5.6L 2005-2015, NISSAN ARMADA 5.6L 2007-2015",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1501026",
    "oem_no": "17040-3TA0C, 17040-3TA0A, 17040-4RA0C",
    "car_maker": "Nissan",
    "applications": "Nissan Altima 2.5L/3.5L 2013-2018, Nissan Teana 2019-2022, Maxima 2016-2023",
    "source": "54"
  },
  {
    "zoren_no": "ZRM1293198",
    "oem_no": "17040-EB80C, 17040-4KJ0A",
    "car_maker": "Nissan",
    "applications": "Navara 4.0L 2005-2011, Pathfinder 4.0L 2005-2010",
    "source": "54"
  },
  {
    "zoren_no": "ZRM1501057",
    "oem_no": "0580313101, 17040-AV710",
    "car_maker": "Nissan",
    "applications": "NISSAN PRIMERA 2002-2016",
    "source": "54"
  },
  {
    "zoren_no": "ZRM1501049",
    "oem_no": "17040-ED80A",
    "car_maker": "Nissan",
    "applications": "Nissan TIIDA C11 SC11 1.6 1.8L 2005-2011",
    "source": "54"
  },
  {
    "zoren_no": "ZRM1093084, ZRM1501064",
    "oem_no": "17040-4BB1A, 17040-4BA2A, 17040-4BA1A",
    "car_maker": "Nissan",
    "applications": "NISSAN X-trail MK3 T32 1.6 2013-2018",
    "source": "54"
  },
  {
    "zoren_no": "ZRM1501065",
    "oem_no": "17040-4ED0A",
    "car_maker": "Nissan",
    "applications": "NISSAN QASHQAI J11 1.2 2014-2018",
    "source": "54"
  },
  {
    "zoren_no": "ZRM1501092",
    "oem_no": "17040-Y2900",
    "car_maker": "Nissan",
    "applications": "Nissan Pickup ZG24",
    "source": "55"
  },
  {
    "zoren_no": "ZRM1501085, ZRM1293296, ZRM1501086, ZRM1293295",
    "oem_no": "17040-1LB3E, 17040-1LB1E, 17040-1LB4E, 17040-1LB5D",
    "car_maker": "Nissan",
    "applications": "Nissan Patrol 5.6L Y62 2015-2017, Infiniti QX56/QX80, Nissan PATROL 4.0L",
    "source": "55"
  },
  {
    "zoren_no": "ZRM1501087, ZRM1293294",
    "oem_no": "17040-1LK0A, 17040-1LB2C, 17040-1LA0B",
    "car_maker": "Nissan",
    "applications": "Nissan PATROL Y62/5.6L 2010-2016",
    "source": "55"
  },
  {
    "zoren_no": "ZRM1293297",
    "oem_no": "17040-3ZD0B",
    "car_maker": "Nissan",
    "applications": "Nissan Infiniti QX56 5.6L 2011-2013, QX80 2014-2019, Armada 2017-2022",
    "source": "55"
  },
  {
    "zoren_no": "ZRM1083071",
    "oem_no": "17040-1KT0B, 17040-1KT0A",
    "car_maker": "Nissan",
    "applications": "Nissan Juke HR15DE HR16DE 2011-2017",
    "source": "55"
  },
  {
    "zoren_no": "ZRM1083106",
    "oem_no": "17040-JD01D, 17040-JD01A",
    "car_maker": "Nissan",
    "applications": "Nissan Dualis Qashqai 1.6-2.0L 2007-2013",
    "source": "57"
  },
  {
    "zoren_no": "ZRM1073129",
    "oem_no": "17040-1VA0A, 17040-3JY0A",
    "car_maker": "Nissan",
    "applications": "Nissan Evalia M20 2013-, NISSAN Serena 2013-",
    "source": "57"
  },
  {
    "zoren_no": "ZRM1293187",
    "oem_no": "17040-3LT0A, 17040-3AN0E, E9100M",
    "car_maker": "Nissan",
    "applications": "Nissan Micra 18, Versa 2012-2019, Versa Note 2014-2019",
    "source": "57"
  },
  {
    "zoren_no": "ZRM1501100, ZRM1153081",
    "oem_no": "17040-3KT1C, 17040-3JL0A, 17040-3KA1C",
    "car_maker": "Nissan",
    "applications": "Nissan Pathfinder 2013-2020, Infiniti JX35 QX60 2013-2020",
    "source": "57"
  },
  {
    "zoren_no": "ZRM1501136",
    "oem_no": "17040-1KH0A, 17040-5JJ1A",
    "car_maker": "Nissan",
    "applications": "Nissan Frontier 2.5L D23X 2015-2018",
    "source": "57"
  },
  {
    "zoren_no": "ZRM1083080, ZRM1501138",
    "oem_no": "17040-CG00B, 17040-1EK0B",
    "car_maker": "Nissan",
    "applications": "NISSAN Infiniti FX35 V6 2003-2008, QX70 2015, Nissan 370Z 3.7L V6 2009-2015",
    "source": "57"
  },
  {
    "zoren_no": "ZRM1501140, ZRM1083188",
    "oem_no": "17040-1CB0D, 17040-1CJ0A",
    "car_maker": "Nissan",
    "applications": "infiniti FX35 2009-2013, FX37, FX50, QX70 2008-2017",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1501141",
    "oem_no": "17040-4BB2A",
    "car_maker": "Nissan",
    "applications": "Nissan X-Trail 2.5L 2014-2016, X-Trail T32 2014-2019, Qashqai J11 2015-2019",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1501048",
    "oem_no": "17040-5RB0A",
    "car_maker": "Nissan",
    "applications": "NISSAN KICKS 1.6L 2017-2020, MARCH 1.6L 2018-2020, VERSA 1.6L 2017-2021",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1501174",
    "oem_no": "17040-1HK0A, 17040-1HK0B",
    "car_maker": "Nissan",
    "applications": "Nissan Micra 2015-2017, Versa 1.6L 2012-2019",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1501022",
    "oem_no": "17040-5M500",
    "car_maker": "Nissan",
    "applications": "Nissan Bluebird Sylphy G10 2003-2005, Sunny N16",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1293248",
    "oem_no": "17040-6CT0A, 17040-6CA0A",
    "car_maker": "Nissan",
    "applications": "Nissan Teana Altima 2.0L 2.5L L34 2019-2022",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1083191",
    "oem_no": "17040-1BA0A, 17040-1BB0C, E8931M",
    "car_maker": "Nissan",
    "applications": "INFINITI EX35 2008-2012 3.5L, EX37 2013 3.5L, QX50 2014-2017 3.7L",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1153122",
    "oem_no": "17040-1KM1A",
    "car_maker": "Nissan",
    "applications": "Nissan Juke 1.5 F15 2012-2016",
    "source": "60"
  },
  {
    "zoren_no": "ZRM1083187",
    "oem_no": "17040-1MA0B",
    "car_maker": "Nissan",
    "applications": "INFINITI M37 Q50 Q70 2011-2017",
    "source": "60"
  },
  {
    "zoren_no": "ZRM1501187, ZRM1501190, ZRM1501192",
    "oem_no": "17040-4BA0C, 17040-6LB0B, 17040-1JA2A",
    "car_maker": "Nissan",
    "applications": "Nissan Rogue 2.5L 2014-2020, Sentra 2020-2024, NISSAN QUEST 3.5L 2011-2017",
    "source": "60"
  },
  {
    "zoren_no": "ZRM1083163",
    "oem_no": "17040-1BB0B, 17040-1BA0D",
    "car_maker": "NISSAN",
    "applications": "Infiniti EX35 EX37 3.5L 3.7L 2008-2013, INFINITI G25 2011-2012, G37 2008-2013",
    "source": "60"
  },
  {
    "zoren_no": "ZRM1083164",
    "oem_no": "17040-1NC0C",
    "car_maker": "NISSAN",
    "applications": "INFINITI M35 2009-2010, M45 2008-2010, Q40 2015, Q60 2014-2015",
    "source": "60"
  },
  {
    "zoren_no": "ZRM1501213",
    "oem_no": "17040-6AU0A, 17040-4HK1A",
    "car_maker": "NISSAN",
    "applications": "Infiniti Q50 2016-2023, Infiniti Q06 2017-2022",
    "source": "63"
  },
  {
    "zoren_no": "ZRM1501210",
    "oem_no": "17040-5RL0A",
    "car_maker": "NISSAN",
    "applications": "Nissan Versa",
    "source": "63"
  },
  {
    "zoren_no": "ZRM1501218",
    "oem_no": "17040-6HA0A",
    "car_maker": "NISSAN",
    "applications": "INFINITI Q50 2015-2019, INFINITI Q60 2017-2018",
    "source": "63"
  },
  {
    "zoren_no": "ZRM0873001",
    "oem_no": "15100-76A30, 101961-5510",
    "car_maker": "Suzuki",
    "applications": "Suzuki Carry Every DB52",
    "source": "62"
  },
  {
    "zoren_no": "ZRM1501038",
    "oem_no": "15100-74L00",
    "car_maker": "Suzuki",
    "applications": "SUZUKI SWIFT 1.2L 1.6L 2012-2016",
    "source": "62"
  },
  {
    "zoren_no": "ZRM1003003",
    "oem_no": "15100-78F21, 15100-78F00",
    "car_maker": "Suzuki",
    "applications": "Suzuki Aerio 2002-2007",
    "source": "62"
  },
  {
    "zoren_no": "ZRM1183005",
    "oem_no": "292010-0032, 15100-60K00",
    "car_maker": "Suzuki",
    "applications": "Suzuki APV 2005-2016 1.5L",
    "source": "64"
  },
  {
    "zoren_no": "ZRM1183009",
    "oem_no": "15100-65102, 15100-65J02, 15100-65842",
    "car_maker": "Suzuki",
    "applications": "Suzuki Grand Vitara II JT 2.0 AWD 2005-2015, SUZUKI SWIFT ZC11S 1.3L 2004-2010",
    "source": "64"
  },
  {
    "zoren_no": "ZRM1183028",
    "oem_no": "15100-63811, 15100-63J02",
    "car_maker": "Suzuki",
    "applications": "SUZUKI SWIFT ZD21S 1.5L, SWIFT SPORT 1.6L 2005-2011",
    "source": "64"
  },
  {
    "zoren_no": "ZRM1183057, ZRM1501017",
    "oem_no": "15100-80840, 15100-65MB0",
    "car_maker": "Suzuki",
    "applications": "Suzuki SX4 L4-2.0L 2007-2013",
    "source": "64"
  },
  {
    "zoren_no": "ZRM1501090",
    "oem_no": "15100-79J00",
    "car_maker": "Suzuki",
    "applications": "Suzuki SX4 1.5L/1.6L 2009-2019",
    "source": "64"
  },
  {
    "zoren_no": "ZRM1213021",
    "oem_no": "15100-78K00, 15100-79K00",
    "car_maker": "Suzuki",
    "applications": "SUZUKI GRAND VITARA 2.4L 2006-2014",
    "source": "64"
  },
  {
    "zoren_no": "ZRM1143042",
    "oem_no": "15100-61M00, 15100-60R00",
    "car_maker": "Suzuki",
    "applications": "Suzuki Vitara 1.6L 2015/02-2022/12",
    "source": "64"
  },
  {
    "zoren_no": "ZRM1501148, ZRM1133023",
    "oem_no": "15100-78R01",
    "car_maker": "Suzuki",
    "applications": "Suzuki jimny 2019-2023",
    "source": "66"
  },
  {
    "zoren_no": "ZRM1133019",
    "oem_no": "15100-71L00, 15100-58M00",
    "car_maker": "Suzuki",
    "applications": "Suzuki Swift 1.3L 1.5L 1.6L 2012-2017",
    "source": "66"
  },
  {
    "zoren_no": "ZRM1501179, ZRM1501188",
    "oem_no": "15100-68K01, 15100-M68K01",
    "car_maker": "Suzuki",
    "applications": "SUZUKI ALTO, OMNI, ZEN ESTILO, WAGON R",
    "source": "66"
  },
  {
    "zoren_no": "ZRM1003023",
    "oem_no": "15100-81A13, 15100-81A02",
    "car_maker": "Suzuki",
    "applications": "Suzuki Jimny 1.3L",
    "source": "66"
  },
  {
    "zoren_no": "ZRM0943095",
    "oem_no": "E8400M, P76555M",
    "car_maker": "Isuzu",
    "applications": "Isuzu Amigo Rodeo Sport 1998-2003",
    "source": "69"
  },
  {
    "zoren_no": "ZRM0943026",
    "oem_no": "323-00225, 953-5045, 530-2286",
    "car_maker": "CHEVROLET GMC",
    "applications": "CHEVROLET K2500 SUBURBAN 1998-1999, CHEVROLET TAHOE 1998-1999, GMC C1500/C2500 SUBURBAN 1998-1999",
    "source": "69"
  },
  {
    "zoren_no": "ZRM0943097",
    "oem_no": "25348610, K9142, MU1145, 19369923",
    "car_maker": "HUMMER",
    "applications": "HUMMER H2 2003",
    "source": "69"
  },


  {
    "zoren_no": "ZRM1501015",
    "oem_no": "1760A189",
    "car_maker": "Mitsubishi",
    "applications": "Mitsubishi",
    "source": "51"
  },
  {
    "zoren_no": "ZRM1501018, ZRM1183070, ZRM1183055",
    "oem_no": "1760A298, 1760A385, 1760A250, 1770A250, 1760A321, 1760A271, 1760A156, 1760A317",
    "car_maker": "Mitsubishi",
    "applications": "Outlander 2.0 2.4 4WD 2007-2012, Mitsubishi LANCER-EX 1992-2003",
    "source": "51"
  },
  {
    "zoren_no": "ZRM1501019",
    "oem_no": "1760A156",
    "car_maker": "Mitsubishi",
    "applications": "MITSUBISHI Outlander 2007-2012 2WD",
    "source": "51"
  },
  {
    "zoren_no": "ZRM1501020",
    "oem_no": "1760A168, 1760A221",
    "car_maker": "Mitsubishi",
    "applications": "Mitsubishi L200 Triton strada 2013-2018",
    "source": "51"
  },
  {
    "zoren_no": "ZRM1501030",
    "oem_no": "1760A297, 1760A227",
    "car_maker": "Mitsubishi",
    "applications": "Pajero montero V93 V95 V97 3.0L 3.5L 3.8L 2006-2014",
    "source": "51"
  },
  {
    "zoren_no": "ZRM1501060",
    "oem_no": "MR497413",
    "car_maker": "Mitsubishi",
    "applications": "Mitsubishi Lancer 2.0L L4 2002-2003",
    "source": "51"
  },
  {
    "zoren_no": "ZRM1501037, ZRM1501095",
    "oem_no": "MD367152, MR990883, MR990882, MN161533, 1760A354, 1760A408, 1760A576, 1760A573, 1760A418",
    "car_maker": "Mitsubishi",
    "applications": "Mitsubishi Pajero Montero V73 6G72 V75 6G74, MITSUBISHI MIRAGE/SPACE STAR 1.2L 2012-2022, MITSUBISHI ATTRAGE 2013-",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1183023",
    "oem_no": "1760A177, 1760A176, E8732M, FG1265, SP4055M, SP4056M, P76624M",
    "car_maker": "Mitsubishi",
    "applications": "2006-2011 Mitsubishi Galant, 2007-2012 Mitsubishi Eclipse 2.4L/3.8L",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1501106",
    "oem_no": "1760A318, 1760A383, 1760A249",
    "car_maker": "Mitsubishi",
    "applications": "Mitsubishi Pajero Sport 2008-2018, Mitsubishi Zinger 2.0L 2008-2015",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1501143",
    "oem_no": "1760A058, SP4155M, 1760A095, 1760A097, 1760A059",
    "car_maker": "Mitsubishi",
    "applications": "Mitsubishi para 2005-2006 Outlander 2.4L 4G69",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1501158",
    "oem_no": "MR586031, MR512042, 101961-6480",
    "car_maker": "Mitsubishi",
    "applications": "Mitsubishi Montero 2005-, Pinin 2005-, Pajero iO 2005- TA-H76W CFA6400 H76/H77",
    "source": "52"
  },
  {
    "zoren_no": "ZRM1293184",
    "oem_no": "E3818M",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET SILVERADO 1500 2009-2013, GMC SIERRA 2500 V8-6.0L 2009-2013",
    "source": "54"
  },
  {
    "zoren_no": "ZRM0943012",
    "oem_no": "E3500M, 19369915",
    "car_maker": "Chevrolet, GMC, ISUZU",
    "applications": "CHEVROLET SILVERADO 1500/2500/3500 (1999-2004), GMC SIERRA 1500/2500/3500 (1999-2004)",
    "source": "54"
  },
  {
    "zoren_no": "ZRM0943016",
    "oem_no": "E3966M",
    "car_maker": "Chevrolet, GMC",
    "applications": "Express/GMC Savana 1500/2500/3500 1997-2002",
    "source": "54"
  },
  {
    "zoren_no": "ZRM0943017",
    "oem_no": "E3965M",
    "car_maker": "Chevrolet, GMC",
    "applications": "1998-1999 Chevrolet P30 V8 5.7L, 1998-1999 GMC P3500 V8 5.7L, CHEVROLET C3500/K3500",
    "source": "54"
  },
  {
    "zoren_no": "ZRM0943020",
    "oem_no": "E3956M",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET K3500 PICKUP 1998-2000, GMC C3500 1998-2000, GMC K3500",
    "source": "54"
  },
  {
    "zoren_no": "ZRM0943022",
    "oem_no": "E3929M",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET BLAZER 1996 V6-4.3L, GMC JIMMY 1996 V6-4.3L",
    "source": "54"
  },
  {
    "zoren_no": "ZRM0943036, ZRM0943037",
    "oem_no": "E3552M, E3972M",
    "car_maker": "Chevrolet, GMC",
    "applications": "Chevrolet Venture 2002-2005, Oldsmobile Silhouette 2002-2004, Pontiac Montana 2002-2005, CADILLAC ESCALADE 1999-2000, CHEVROLET TAHOE 1998-2000, GMC YUKON 1998-2000",
    "source": "55"
  },
  {
    "zoren_no": "ZRM0943047",
    "oem_no": "E3510M, 19331256, 19153718, 19369905, 5302238, P74833M",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET SUBURBAN 2500 2000-2001, GMC YUKON XL 2500 2000-2001",
    "source": "55"
  },
  {
    "zoren_no": "ZRM0943051",
    "oem_no": "E3506M",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET ASTRO 2000-2005 V6-4.3L, GMC SAFARI 2000-2005 V6-4.3L",
    "source": "55"
  },
  {
    "zoren_no": "ZRM0943053, ZRM0943056",
    "oem_no": "E3369M, E3912M",
    "car_maker": "Chevrolet, GMC",
    "applications": "Chevrolet Camaro 1999-2002, Pontiac Firebird 1999-2002, Buick Riviera 1995-1996, Oldsmobile Aurora 1995-1996",
    "source": "55"
  },
  {
    "zoren_no": "ZRM0943057",
    "oem_no": "E3930M, P74817M, FG0038, SP6028M",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET TAHOE 1995 V8-5.7L, GMC YUKON 1995 V8-5.7L",
    "source": "56"
  },
  {
    "zoren_no": "ZRM0943062",
    "oem_no": "E3994M",
    "car_maker": "Chevrolet, GMC",
    "applications": "Chevrolet K2500 SUBURBAN 1998-1999, GMC C1500/C2500 SUBURBAN 1998-1999",
    "source": "56"
  },
  {
    "zoren_no": "ZRM0943065",
    "oem_no": "E3920M",
    "car_maker": "Chevrolet, GMC",
    "applications": "GMC K2500 SUBURBAN 1998-1999, CHEVROLET S10 1996, GMC SONAMA 1996",
    "source": "56"
  },
  {
    "zoren_no": "ZRM0943067",
    "oem_no": "E3950M",
    "car_maker": "Chevrolet",
    "applications": "Chevrolet Malibu 1998-1999, Oldsmobile Alero 1999, Oldsmobile Cutlass 1999, Pontiac Grand am 1999",
    "source": "56"
  },
  {
    "zoren_no": "ZRM0943070",
    "oem_no": "E3925M",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET BLAZER 1996, GMC JIMMY 1996, OLDSMOBILE BRAVADA 1996",
    "source": "56"
  },
  {
    "zoren_no": "ZRM0943050",
    "oem_no": "19180099, 19369909, 25345024, P1245M, P75023M",
    "car_maker": "Chevrolet",
    "applications": "Chevrolet Avalanche 1500 5.3L 2002-2003",
    "source": "56"
  },
  {
    "zoren_no": "ZRM0943072",
    "oem_no": "E3978M",
    "car_maker": "Chevrolet, GMC",
    "applications": "PONTIAC GRAND PRIX 1997 V6-3.1L/3.8L",
    "source": "56"
  },
  {
    "zoren_no": "ZRM0943074",
    "oem_no": "E3918M",
    "car_maker": "Chevrolet, GMC",
    "applications": "Chevrolet Cavalier 1993-1994, Chevrolet Corsica 1993-1995, Chevrolet Achieva 1993-1995",
    "source": "57"
  },
  {
    "zoren_no": "ZRM0943075",
    "oem_no": "E3919M",
    "car_maker": "Chevrolet",
    "applications": "Chevrolet Cavalier 1996-1998, Oldsmobile Achieva 1996-1998, Pontiac Grand am/Sunfire 1996-1998",
    "source": "57"
  },
  {
    "zoren_no": "ZRM0943080",
    "oem_no": "E3940M",
    "car_maker": "Chevrolet, GMC",
    "applications": "Chevrolet Astro 1997-1999 V6-4.3L, GMC Safari 1997-1999 V6-4.3L",
    "source": "57"
  },
  {
    "zoren_no": "ZRM0943081",
    "oem_no": "MU1615, MU1518, MU1321, MU170, E3508M, P74832M, SP6170M, FG0324, 67307, 15205627, 19121628",
    "car_maker": "Chevrolet, GMC",
    "applications": "CADILLAC ESCALADE 2002-2003, CHEVROLET TAHOE 2000-2003, GMC YUKON 2000-2003, Chevrolet Express 2003",
    "source": "57"
  },
  {
    "zoren_no": "ZRM0943110",
    "oem_no": "E3584M",
    "car_maker": "Chevrolet, GMC",
    "applications": "Chevrolet Express 3500 2003, GMC Savana 1500/2500/3500 2003",
    "source": "57"
  },
  {
    "zoren_no": "ZRM0943117",
    "oem_no": "25324949, BACT9350A, BA9350A, BA9350B, BAC9350C, BAT9350A, 92148190, 25324948, 25337050, AUC9H307NB",
    "car_maker": "Chevrolet",
    "applications": "Chevrolet Holden 1997-2002",
    "source": "58"
  },
  {
    "zoren_no": "ZRM0944018",
    "oem_no": "19206120, 15013514, P1556M, P1557M, 150093A, 88966950, 88966952, 19206122, 88965820, 67415, 19206124, F2550A",
    "car_maker": "BUICK",
    "applications": "BUICK RAINIER 2004, CHEVROLET SSR 2003-2004, CHEVROLET TRAILBLAZER 2002-2004, GMC ENVOY 2002-2004, ISUZU ASCENDER 2003-2004, OLDSMOBILE BRAVADA 2002-2004",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1292016",
    "oem_no": "13592486, 13592475, E3817M",
    "car_maker": "BUICK",
    "applications": "BUICK ENCORE 14-UP",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1293034",
    "oem_no": "19206536, 19368798, 19368800",
    "car_maker": "Chevrolet",
    "applications": "2009 Chevrolet Silverado 1500, 2009 GMC Sierra 1500",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1293075",
    "oem_no": "92250121, 92193776, 92159797, EFP299",
    "car_maker": "Chevrolet",
    "applications": "GM Holden Comodoro 2006-2017, Estadista 2006-2010",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1243003",
    "oem_no": "96494164, SP6608M, MU1467, E3612M",
    "car_maker": "Chevrolet",
    "applications": "Chevrolet Aveo 2004-2005 L4 1.6L, Pontiac 2005 L4 1.6L",
    "source": "58"
  },
  {
    "zoren_no": "ZRM1293041",
    "oem_no": "F 00H K00 470",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET EXPRESS 1500/2500/3500 2010-2016, GMC SAVANA 1500/2500/3500 2010-2016",
    "source": "59"
  },
  {
    "zoren_no": "ZRM1293050",
    "oem_no": "E3750M, P76511M, 19368762",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET SILVERADO 1500/2500HD/3500HD 2007-2008, GMC SIERRA 1500/2500HD/3500HD 2007-2008",
    "source": "59"
  },
  {
    "zoren_no": "ZRM1293060",
    "oem_no": "E3756M, P76280M, SP6032M",
    "car_maker": "BUICK",
    "applications": "Buick LaCrosse, Pontiac Grand Prix V8 5.3 2008-2009",
    "source": "59"
  },
  {
    "zoren_no": "ZRM1293067",
    "oem_no": "A33053, 19167488, 19167489, 19303421, E3675M, MU1421, TS1016",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET AVALANCHE 2500 2004-2006, SUBURBAN 2500 2004-2007, GMC YUKON XL 2500 2004-2007",
    "source": "59"
  },
  {
    "zoren_no": "ZRM1293069",
    "oem_no": "19303422, 19332069, 19332070, E3748M",
    "car_maker": "BUICK, GMC",
    "applications": "BUICK ENCLAVE 2008 V6-3.6L, GMC ACADIA 2007-2008 V6-3.6L, SATURN OUTLOOK V6-3.6L 2007-2008",
    "source": "59"
  },
  {
    "zoren_no": "ZRM0003004",
    "oem_no": "96449569",
    "car_maker": "DAEWOO",
    "applications": "Chevrolet Jingcheng Lefeng, Daewoo Lanos 2005-2006",
    "source": "60"
  },
  {
    "zoren_no": "ZRM0003025",
    "oem_no": "96344792",
    "car_maker": "DAEWOO",
    "applications": "DAEWOO Lanos Saloon 1.3 1.5 1.6 16V 1997-2002",
    "source": "60"
  },
  {
    "zoren_no": "ZRM0943161",
    "oem_no": "P74928M",
    "car_maker": "BUICK",
    "applications": "BUICK CENTURY 2000-2005, BUICK REGAL 2000-2004, CHEVROLET IMPALA 2000-2005, CHEVROLET MONTE CARLO 2000-2005, OLDSMOBILE INTRIGUE 2001-2002, PONTIAC GRAND PRIX 2001-2003",
    "source": "60"
  },
  {
    "zoren_no": "ZRM0943058",
    "oem_no": "E3973M",
    "car_maker": "BUICK",
    "applications": "BUICK REGAL 1998-1999 V6-3.8L, PONTIAC GRAND PRIX 1998-2000 V6-3.8L",
    "source": "60"
  },
  {
    "zoren_no": "ZRM1293072",
    "oem_no": "E3617M",
    "car_maker": "Chevrolet",
    "applications": "CHEVROLET SILVERADO 3500 2004-2006, G-MC SIERRA 3500 2004-2006",
    "source": "60"
  },
  {
    "zoren_no": "ZRM1293084",
    "oem_no": "E3815M, P77023M",
    "car_maker": "Chevrolet",
    "applications": "Chevrolet Silverado 1500 2009, GMC Sierra 1500 2009",
    "source": "60"
  },
  {
    "zoren_no": "ZRM1293097",
    "oem_no": "E3747M, F2758A, P76298M, 19368776, M10206, FG1058, 19206532, 19370398, 5302175",
    "car_maker": "Chevrolet, GMC",
    "applications": "2007-2008 Chevrolet Silverado 1500, GMC Sierra 1500 V8 Engine",
    "source": "61"
  },
  {
    "zoren_no": "ZRM1293104",
    "oem_no": "E3790M, EP1031, M100059, M10059, MU2114, MU2209, A30461, A46024, 15969626, 19167429, 19329336, 19370465, 23240487, 22753589",
    "car_maker": "GMC",
    "applications": "BUICK ENCLAVE, CHEVROLET TRAVERSE, GMC ACADIA 2009-2017 V6-3.6L",
    "source": "61"
  },
  {
    "zoren_no": "ZRM1293105",
    "oem_no": "P76262M, FE10043, MU1657, 122GE, E3610M, 67567, 67517, 6239E, 39113, 19149059, 19207718, 19256622",
    "car_maker": "Chevrolet, GMC",
    "applications": "Cadillac Escalade ESV 2004-2007, Cadillac Escalade EXT 2004-2007, Chevrolet Avalanche 2004-2007, Chevrolet Suburban 1500 2004-2007, GMC Yukon XL 1500 2004-2007",
    "source": "61"
  },
  {
    "zoren_no": "ZRM1293106",
    "oem_no": "19370394, MU1639, 19149062, E3581M, P76262M, 19168127, 88965556, 19168126, 19207716",
    "car_maker": "Chevrolet, GMC",
    "applications": "Cadillac Escalade 2004-2007, Chevrolet Tahoe 2004-2007, GMC Yukon 2004-2007",
    "source": "61"
  },
  {
    "zoren_no": "ZRM1293107",
    "oem_no": "E3705M, 19133546, 19168418, 19208960, FG0816, SP6087",
    "car_maker": "Chevrolet, GMC",
    "applications": "Chevrolet Tahoe 2005-2007 V8-5.3L, GMC Yukon 2005-2007 V8-5.3L",
    "source": "61"
  },
  {
    "zoren_no": "ZRM1293109",
    "oem_no": "E3684M",
    "car_maker": "GMC",
    "applications": "CHEVROLET SILVERADO 1500 2004-2006, GMC SIERRA 1500 2004-2006, GMC SIERRA 1500 CLASSIC 2007",
    "source": "61"
  },
  {
    "zoren_no": "ZRM1293111",
    "oem_no": "92203241",
    "car_maker": "Chevrolet, GMC",
    "applications": "Holden VE V6-3.0L 2009-2013",
    "source": "64"
  },
  {
    "zoren_no": "ZRM1293125",
    "oem_no": "E3706M, SP5603M, M10107, MU1474, 67544, FG0815, P76273M, SP6603M, 19208962, 19208963",
    "car_maker": "Chevrolet, GMC",
    "applications": "Chevrolet Avalanche 2005-2007, Chevrolet Suburban 1500 2005-2007, GMC Yukon XL 1500 2005-2007",
    "source": "62"
  },
  {
    "zoren_no": "ZRM0943090",
    "oem_no": "E3559M, 88966962, 25340156, 10355739",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET TAHOE 2002-2004 V8-5.3L, GMC YUKON 2002-2004 V8-5.3L",
    "source": "62"
  },
  {
    "zoren_no": "ZRM1293166",
    "oem_no": "E3768M, 19299717, 1234773, 150234, 19179869, 19206650, 2920543, 530-2490, A30011, B11112100TG, C0290M, FG1054, FP22052S, M2496229, MU1711, SP6107M",
    "car_maker": "Chevrolet, GMC",
    "applications": "Cadillac Escalade 2009-2014, Chevrolet Tahoe 2008-2014, GMC Yukon 2008-2014",
    "source": "62"
  },
  {
    "zoren_no": "ZRM1294027",
    "oem_no": "19301236, 19352773, 19260077, 19211074, E4037M, MU2175, MU2253, M100071, SP6684M, P76852M",
    "car_maker": "Chevrolet, GMC",
    "applications": "Chevrolet Express 3500 (2010-2016), GMC Savana 3500 (2010-2016)",
    "source": "62"
  },
  {
    "zoren_no": "ZRM1293155",
    "oem_no": "P76851M, 19301219, E4009M, M10272, 67795, 19256387, SP6646M",
    "car_maker": "Chevrolet, GMC",
    "applications": "Chevrolet Silverado 1500 (2010-2013), GMC Sierra 1500 (2010-2013)",
    "source": "62"
  },
  {
    "zoren_no": "ZRM1293073",
    "oem_no": "20895923, 4817842, 4805901, 96629370, 4814207, 96830394",
    "car_maker": "Chevrolet",
    "applications": "CHEVROLET CAPTIVA (C100, C140) 2006.06-/2016",
    "source": "62"
  },
  {
    "zoren_no": "ZRM1293039",
    "oem_no": "E7253M, 68405631AC, 68405631AD",
    "car_maker": "CHRYSLER",
    "applications": "CHRYSLER 200 L4-2.4L (2011-2014), CHRYSLER SEBRING L4-2.4L (2008-2010), DODGE AVENGER L4-2.4L (2008-2014)",
    "source": "63"
  },
  {
    "zoren_no": "ZRM1293455",
    "oem_no": "941GE, 68643777AA, 68494734AC, 68494734AB, 68494734AA, A2C18099702",
    "car_maker": "Chrysler, Dodge",
    "applications": "Chrysler 300 2020-2023, Dodge Challenger 2020-2022, Dodge Charger 2020-2023",
    "source": "63"
  },
  {
    "zoren_no": "ZRM1333005",
    "oem_no": "E7194M",
    "car_maker": "CHRYSLER",
    "applications": "CHRYSLER PACIFICA 2004-2006",
    "source": "63"
  },
  {
    "zoren_no": "ZRM0944011",
    "oem_no": "92181830, 25369168, 92181807, 92183879, 92159903, 92181802",
    "car_maker": "Buick",
    "applications": "Buick Royaum, Holden Commodore 2003-2007",
    "source": "63"
  },
  {
    "zoren_no": "ZRM1294015",
    "oem_no": "E4042M",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET SILVERADO 2500/3500 HD V8-6.0L 2011-2016, GMC SIERRA 2500/3500 HD V8-6.0L 2011-2016",
    "source": "63"
  },
  {
    "zoren_no": "ZRM1292015",
    "oem_no": "13592492, 13592469, 13579886, 15552445, 11578826",
    "car_maker": "Chevrolet",
    "applications": "CHEVROLET",
    "source": "63"
  },
  {
    "zoren_no": "ZRM1293056",
    "oem_no": "E3710M",
    "car_maker": "Chevrolet",
    "applications": "CHEVROLET UPLANDER 2006-2007, PONTIAC MONTANA 2007",
    "source": "64"
  },
  {
    "zoren_no": "ZRM1293070",
    "oem_no": "E3765M, M100058, M100125, M10191, 69451, 69977, P76299M, P76786M, FG1153, 19181000, 19256376, 19259398, 19300964, SP6050M, F2776A, 13551499, 19368768, PN3156",
    "car_maker": "Chevrolet, GMC",
    "applications": "Cadillac Escalade 2008-2012, Chevrolet Tahoe 2008-2011, GMC YUKON 2008-2013",
    "source": "64"
  },
  {
    "zoren_no": "ZRM0944019",
    "oem_no": "E3614M",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET COLORADO 2004-2005, GMC CANYON 2004-2005",
    "source": "64"
  },
  {
    "zoren_no": "ZRM1303001",
    "oem_no": "E3707M",
    "car_maker": "Chevrolet, GMC, Buick",
    "applications": "Chevrolet Trailblazer 05-07, GMC Envoy 05-07, Buick Rainier 05-07, Saab 9-7x 05-07, Isuzu Ascender 05-07, Chevrolet SSR 05-06",
    "source": "64"
  },
  {
    "zoren_no": "ZRM0003155",
    "oem_no": "E3624S",
    "car_maker": "Chevrolet, GMC",
    "applications": "Chevrolet S10 1992-1994, GMC Jimmy 1992-1994, GMC Sonoma 1992-1993, Oldsmobile Bravada 1992",
    "source": "64"
  },
  {
    "zoren_no": "ZRM1501033",
    "oem_no": "0580200039, 13586327, 13577234, 0580200103, F01R00S294, 13586317",
    "car_maker": "Chevrolet",
    "applications": "Chevrolet Cruze 1.4/1.6 2006-2016",
    "source": "66"
  },
  {
    "zoren_no": "ZRM1293026",
    "oem_no": "E3678M, 19133510, 19303380, 19331039, 2320525, 530-2275, 66074, 830791, 88965414, A30008, C0246M, M3480498, MU1436, RE09125, SP61435M, TU466, USEP3878M, FG0402, M10030, P76088M, 19331946",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET EXPRESS 1500/2500/3500 2004-2008, GMC SAVANA 1500/2500/3500 2004-2008",
    "source": "66"
  },
  {
    "zoren_no": "ZRM1293033",
    "oem_no": "E3717M, 19153049",
    "car_maker": "Chevrolet, PONTIAC, SATURN",
    "applications": "CHEVROLET UPLANDER 2005-2007, PONTIAC MONTANA 2005-2007, SATURN 2005-2007",
    "source": "66"
  },
  {
    "zoren_no": "ZRM1501096",
    "oem_no": "0580200039, 0580200045, E4034M, 13321034, 13579908, 13510671, 19421048, FG1739",
    "car_maker": "Chevrolet, Cruze",
    "applications": "Chevy Cruze L4 1.4L 1.8L 2011-2015, Buick Verano 2.0L/2.4L 2012-2016, Buick Cascada 2016-",
    "source": "66"
  },
  {
    "zoren_no": "ZRM1292021",
    "oem_no": "13582421, 13503108A, 13588158, 13583142",
    "car_maker": "Chevrolet, Cruze",
    "applications": "CHEVROLET CRUZ 2015-",
    "source": "66"
  },
  {
    "zoren_no": "ZRM1501126",
    "oem_no": "13584225, 13296120, F01R00S296",
    "car_maker": "Chevrolet",
    "applications": "Chevrolet Cruze 2010-2013",
    "source": "66"
  },
  {
    "zoren_no": "ZRM1293061",
    "oem_no": "E3797M, 19299715, 19206481, 19259394, 19168707, 5302905, 358301481, P76699M",
    "car_maker": "Cadillac, Chevrolet, GMC",
    "applications": "Cadillac Escalade ESV/EXT 2009-2014, CHEVROLET AVALANCHE 2008-2013, CHEVROLET SUBURBAN 1500 2008-2014, GMC YUKON XL 1500 2008-2014",
    "source": "67"
  },
  {
    "zoren_no": "ZRM1293080, ZRM1293071",
    "oem_no": "P76893M, M100100, M100101, MU2192, MU2193, A33221, A33222, 13513408, 13513409, 13582487, 13582489, SP6710M, SP6711M, P76894M, M100266, E3777M, GM0516484, M100265, E3689M, 19167486, P76147M, SP6019M, EC689M, FG0393, EC61, 19331948",
    "car_maker": "Chevrolet, GMC",
    "applications": "GMC Sierra 1500 2014-2018, Chevrolet Silverado 1500 2014-2018, Hummer H2 V8-6.0L 2004-2007",
    "source": "67"
  },
  {
    "zoren_no": "ZRM1293065",
    "oem_no": "E3715M",
    "car_maker": "CHEVROLET",
    "applications": "CHEVROLET HHR L4-2.2L/2.4L 2006-2008",
    "source": "67"
  },
  {
    "zoren_no": "ZRM1293062",
    "oem_no": "E3611M, SP6615M",
    "car_maker": "CHEVROLET",
    "applications": "PONTIAC GTO 2004-2006",
    "source": "67"
  },
  {
    "zoren_no": "ZRM1294015",
    "oem_no": "E4042M, P77016M",
    "car_maker": "CHEVROLET",
    "applications": "CHEVROLET SILVERADO 2500/3500 HD 2016-2011, GMC SIERRA 2500/3500 HD 2016-2011",
    "source": "67"
  },
  {
    "zoren_no": "ZRM1133012",
    "oem_no": "E3691M, P76253M, SP6033M, 67511, MU1675, 761943, 182064SE, 13330300, 19310301, 30045811, MU1679, FG1940, 19206468, 88965811",
    "car_maker": "Cadillac",
    "applications": "Cadillac CTS 2004-2007, STS",
    "source": "69"
  },
  {
    "zoren_no": "ZRM0943041",
    "oem_no": "E3974M",
    "car_maker": "Cadillac",
    "applications": "CADILLAC DEVILLE 1997-1999, CADILLAC ELDORADO 1997-2002, Seville 1997",
    "source": "69"
  },
  {
    "zoren_no": "ZRM0943059",
    "oem_no": "E3935M",
    "car_maker": "Cadillac",
    "applications": "CTS 2010-2013, Camaro 2010-2014",
    "source": "69"
  },
  {
    "zoren_no": "ZRM1293571, ZRM1293237",
    "oem_no": "13584283, 13592334, 13592319, E4007M, 13592337, P76850M, 19303293, 13577471, 13585453, 13594059",
    "car_maker": "Cadillac, Chevrolet",
    "applications": "Chevrolet Camaro V6 3.6L 2010-2015",
    "source": "69"
  },
  {
    "zoren_no": "ZRM1293273",
    "oem_no": "E4002M, 19420757, FG1093, PN3125, 69792",
    "car_maker": "Chevrolet",
    "applications": "CHEVROLET EXPRESS 1500/2500/3500 2010-2016, GMC SAVANA 1500/2500/3500 2010-2016",
    "source": "69"
  },
  {
    "zoren_no": "ZRM1133005",
    "oem_no": "E7113M",
    "car_maker": "Chrysler",
    "applications": "Chrysler Cirrus 1998-2000, Chrysler Sebring 1999-2000, Dodge Stratus 1998-2000",
    "source": "70"
  },
  {
    "zoren_no": "ZRM1133006",
    "oem_no": "E7144M",
    "car_maker": "Chrysler, Dodge",
    "applications": "Plymouth Breeze 1998-2000, Chrysler Town&Country 2001-2003, Chrysler Voyager 2001-2003, Dodge Caravan 2001-2003, Dodge Grand Caravan 2001-2003",
    "source": "70"
  },
  {
    "zoren_no": "ZRM1293003",
    "oem_no": "E7196M, 5139031AD",
    "car_maker": "Chrysler, Dodge",
    "applications": "CHRYSLER TOWN & COUNTRY 2005-2007, DODGE CARAVAN 2005-2007, DODGE GRAND CARAVAN 2005-2007",
    "source": "70"
  },
  {
    "zoren_no": "ZRM1293011",
    "oem_no": "E7189M",
    "car_maker": "Chrysler",
    "applications": "CHRYSLER PT CRUISER L4-2.4L 2004-2010",
    "source": "70"
  },
  {
    "zoren_no": "ZRM1293117",
    "oem_no": "E7210M, 68004475AB, RL004475AB",
    "car_maker": "Chrysler, DODGE",
    "applications": "CHRYSLER 200 2011-2014, CHRYSLER SEBRING 2007-2010, DODGE AVENGER 2008-2014",
    "source": "70"
  },
  {
    "zoren_no": "ZRM1293046",
    "oem_no": "E7234M",
    "car_maker": "Chrysler, Dodge",
    "applications": "Chrysler Aspen 2008-2009, DODGE Durango 2008-2009",
    "source": "70"
  },
  {
    "zoren_no": "ZRM0944013",
    "oem_no": "92159902",
    "car_maker": "Chevrolet, GMC",
    "applications": "Holden WK caprice V6 2003-2004, Holden COMMODORE V6 2002-2004",
    "source": "68"
  },
  {
    "zoren_no": "ZRM1293086",
    "oem_no": "P76894M, FG1831, SP6711M, M100265, E4127M, 13582487",
    "car_maker": "Chevrolet, GMC",
    "applications": "GMC Sierra 1500 2014-2017, Chevrolet Silverado 1500 2014-2017",
    "source": "68"
  },
  {
    "zoren_no": "ZRM0943063",
    "oem_no": "E3932M",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET TAHOE V8-5.7L 1996-1997, GMC YUKON V8-5.7L 1996-1997",
    "source": "68"
  },
  {
    "zoren_no": "ZRM0943096",
    "oem_no": "E3953M",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET BLAZER 1997-1998, GMC JIMMY 1997-1998, OLDSMOBILE BRAVADA 1997-1998",
    "source": "65"
  },
  {
    "zoren_no": "ZRM0943043",
    "oem_no": "E3967M, MU1748, MU152, FG0092, 19177231, 25314341",
    "car_maker": "Chevrolet, GMC",
    "applications": "CHEVROLET C1500/C2500/K1500/K2500 SUBURBAN 1998-1999, GMC C1500/C2500/K1500/K2500 SUBURBAN 1998-1999",
    "source": "65"
  },
  {
    "zoren_no": "ZRM0943091",
    "oem_no": "E3560M, 88966963",
    "car_maker": "BUICK",
    "applications": "BUICK RIVIERA V6-3.8L 1996",
    "source": "65"
  },
  {
    "zoren_no": "ZRM1303004",
    "oem_no": "E3746M, M10087, P76218M, P76217M, FG0515, FG0516, 67508, SP6007M, 8191533740, 19153374, M10167, 100131, 19418261",
    "car_maker": "CHEVROLET, GMC, ISUZU",
    "applications": "CHEVROLET TRAILBLAZER EXT 2005-2006, GMC ENVOY 2005-2006, ISUZU ASCENDER 2005-2006",
    "source": "68"
  },
  {
    "zoren_no": "ZRM1501080",
    "oem_no": "654663731, GM8408, 4129",
    "car_maker": "Chevrolet",
    "applications": "Chevrolet EPICA 2.5L 2006-2011",
    "source": "68"
  },
  {
    "zoren_no": "ZRM1501034",
    "oem_no": "13503670, 13503671",
    "car_maker": "CHEVROLET",
    "applications": "Chevrolet Cruze 2010-2013 1.4L/1.8L",
    "source": "68"
  },


  {
    "zoren_no": "ZRM1293143",
    "oem_no": "E4005M, SP6619M, FG1057, 19256389, 19257093, 15756457",
    "car_maker": "CHEVROLET, GMC",
    "applications": "CHEVROLET SILVERADO 1500 V8-4.8L/5.3L/6.2L 2010-2013, GMC SIERRA 1500 V8-4.8L/5.3L/6.2L 2010-2013",
    "source": "155"
  },
  {
    "zoren_no": "ZRM1501071",
    "oem_no": "13592601, 13582544, 13582546",
    "car_maker": "CHEVROLET",
    "applications": "Chevrolet Spark 2011-2015",
    "source": "155"
  },
  {
    "zoren_no": "ZRM1501073",
    "oem_no": "13523335, 13506854, 13592646, E4092M, 13589300, 13592648, M100152",
    "car_maker": "CHEVROLET",
    "applications": "Chevrolet Impala 2014-2019",
    "source": "155"
  },
  {
    "zoren_no": "ZRM1501135",
    "oem_no": "1525.HZ, 1613305280, 9657601480, 9684994480, 775530, 72467, QFP995, 347127, WG1407889",
    "car_maker": "PEUGEOT, CITROEN",
    "applications": "CITROEN C4 Grand Picasso 1.6L 2008-2013, PEUGEOT PARTNER 1.6L 2008-2010, PEUGEOT PARTNER Tepee 2008-2010",
    "source": "156"
  },
  {
    "zoren_no": "ZRM1293090",
    "oem_no": "E3837M, P77024M",
    "car_maker": "CHEVROLET, GMC",
    "applications": "CHEVROLET SILVERADO 1500 V8-4.8L/5.3L, GMC SIERRA 1500 V8-4.8L/5.3L, GMC Sierra 2500/3500 6.0L 2009-2013",
    "source": "156"
  },
  {
    "zoren_no": "ZRM1293489",
    "oem_no": "E4049M, P77297M",
    "car_maker": "CHEVROLET, GMC",
    "applications": "CHEVROLET EXPRESS 1500 2010-2014, EXPRESS 2500/3500 2010-2016, GMC SAVANA 1500 2010-2014, SAVANA 2500/3500 2010-2016",
    "source": "156"
  },
  {
    "zoren_no": "ZRM1304002",
    "oem_no": "5136021AE, 5136021AD, 5136021AF, E7241M",
    "car_maker": "Chrysler, Dodge",
    "applications": "Chrysler 300 2005-2010, Dodge Challenger 2009-2010, Dodge Charger 2006-2010, Dodge Magnum 2005-2008",
    "source": "158"
  },
  {
    "zoren_no": "ZRM1304009",
    "oem_no": "E7192M, 05136022AG",
    "car_maker": "Chrysler, DODGE",
    "applications": "CHRYSLER 300 2005-2017, DODGE CHALLENGER 2008-2017, DODGE CHARGER 2006-2016, DODGE MAGNUM 2005-2008",
    "source": "158"
  },
  {
    "zoren_no": "ZRM1304004",
    "oem_no": "E7184M, P76264M, P7184M, P832M, P76267M, FG1082, EG184M, 5135549AA, SP7037M",
    "car_maker": "Chrysler, Dodge",
    "applications": "DODGE MAGNUM 2006-2008 V8-6.1L, Chrysler Aspen 2007, Dodge Durango 2004-2007",
    "source": "158"
  },
  {
    "zoren_no": "ZRM1304005",
    "oem_no": "04581410AB, E7264A, 5136023AA, 5136023AB, 5136023AC",
    "car_maker": "Chrysler, Dodge",
    "applications": "Chrysler 300C 2005-2019, Dodge Challenger 2008-2019, Dodge Charger 2006-2019, Dodge Magnum 2005-2008",
    "source": "158"
  },
  {
    "zoren_no": "ZRM1294094",
    "oem_no": "E4012M, M100028, M10250, FG1288, P76855M, SP6644M, 13505204, 13578372",
    "car_maker": "Buick, Chevrolet, Cadillac",
    "applications": "Buick LaCrosse 2010-2011, Buick Allure 2010-2015, Chevrolet Malibu 2014-2015, Cadillac XTS 3.6L 2014-2018, Buick Regal 2.0L 2014-2017",
    "source": "158"
  },
  {
    "zoren_no": "ZRM1293339",
    "oem_no": "52030306AB",
    "car_maker": "JEEP",
    "applications": "Jeep Wrangler 2.0L 2018-2023",
    "source": "158"
  },
  {
    "zoren_no": "ZRM1293157, ZRM1293027",
    "oem_no": "E7270M, 5145594AA, 6819307M, 68197317AA, SP7118M, RL145594AA, P76702, FG1354, E7252M, 68050948AA",
    "car_maker": "DODGE",
    "applications": "DODGE RAM 1500 2009-2017 (V6-3.6L, V6-3.7L, V8-4.7L, V8-5.7L)",
    "source": "161"
  },
  {
    "zoren_no": "ZRM1293038",
    "oem_no": "E7269M",
    "car_maker": "Dodge",
    "applications": "Dodge Journey V6-3.6L 2011-2018",
    "source": "161"
  },
  {
    "zoren_no": "ZRM1293042",
    "oem_no": "E7259M",
    "car_maker": "Dodge",
    "applications": "Dodge Ram 1500 V8-4.7L 2008",
    "source": "161"
  },
  {
    "zoren_no": "ZRM1293045",
    "oem_no": "E7255M",
    "car_maker": "Dodge",
    "applications": "Dodge Journey 2008-2011 V6-3.5L/3.6L",
    "source": "161"
  },
  {
    "zoren_no": "ZRM1304003, ZRM1304007",
    "oem_no": "E7182M, FG0817, 5202340, P76259M, PN3036",
    "car_maker": "Dodge",
    "applications": "DODGE RAM 1500 2004-2008, RAM 2500/3500 2005-2009",
    "source": "161"
  },
  {
    "zoren_no": "ZRM1343009, ZRM1343010",
    "oem_no": "E7161M, E7168M",
    "car_maker": "Dodge",
    "applications": "DODGE RAM 1500 2002-2003, DODGE DAKOTA 2003",
    "source": "164"
  },
  {
    "zoren_no": "ZRM1343002",
    "oem_no": "E7117M",
    "car_maker": "DODGE",
    "applications": "DODGE DURANGO V8-4.7L 2000-2003, V8-5.2L 1998-2000, V8-5.9L 1998-2003",
    "source": "164"
  },
  {
    "zoren_no": "ZRM1343029",
    "oem_no": "E7160M",
    "car_maker": "DODGE",
    "applications": "DODGE DAKOTA V6-3.9L/V8-4.7L/V8-5.9L 2003",
    "source": "164"
  },
  {
    "zoren_no": "ZRM1343022",
    "oem_no": "E7116M",
    "car_maker": "DODGE",
    "applications": "DODGE DAKOTA 1997-1999 (2.5L, 3.9L, 5.2L, 5.9L)",
    "source": "164"
  },
  {
    "zoren_no": "ZRM1293150",
    "oem_no": "E7272M, P76743M",
    "car_maker": "GMC, CHRYSLER",
    "applications": "CHRYSLER TOWN & COUNTRY 2011-2016, DODGE GRAND CARAVAN 2011-2019, RAM C/V 2012-2015, VW ROUTAN 2011-2014",
    "source": "175"
  },
  {
    "zoren_no": "ZRM1293036",
    "oem_no": "E7237M, P76765M, P77093M, SP7061M, 68027986AB, 68027917AC",
    "car_maker": "DODGE",
    "applications": "DODGE RAM 1500 V6-3.7L, V8-4.7L, V8-5.7L",
    "source": "175"
  },
  {
    "zoren_no": "ZRM1501145",
    "oem_no": "13589775, 13592419, SP6749M, P77089M, E4072M, FG1816, 13585385",
    "car_maker": "Chevrolet",
    "applications": "Chevrolet Spark 2013-2015 1.2L",
    "source": "175"
  },
  {
    "zoren_no": "ZRM1501149",
    "oem_no": "13579065, 13586776, 13592132, 13515225, 13515199, 13592093",
    "car_maker": "CHEVROLET",
    "applications": "CHEVROLET SONIC L4-1.6L 2012-2017, Aveo T300 2011-2018, Cruze 2013-",
    "source": "175"
  },
  {
    "zoren_no": "ZRM1501151, ZRM1093243",
    "oem_no": "96464637, 96591528, 965915280, 74242415",
    "car_maker": "Daewoo, Chevrolet",
    "applications": "Daewoo Matiz 2005-2021, Chevrolet Spark 2005-2021",
    "source": "175"
  },
  {
    "zoren_no": "ZRM1293088",
    "oem_no": "E7217M",
    "car_maker": "CHRYSLER, DODGE",
    "applications": "CHRYSLER 200 2011-2014, CHRYSLER SEBRING 2007-2010, DODGE AVENGER 2008-2014",
    "source": "175"
  },
  {
    "zoren_no": "ZRM1293115",
    "oem_no": "P77057M, SP7224M, 68181986AB, 68166589AC",
    "car_maker": "DODGE, JEEP, CHRYSLER",
    "applications": "DODGE DART L4-2.0L/2.4L 2013-2016, JEEP CHEROKEE L4-2.4L 2014-2016",
    "source": "167"
  },
  {
    "zoren_no": "ZRM1293051",
    "oem_no": "E4048M, FG0933, SP6626M, P76722M",
    "car_maker": "CHEVROLET, GMC",
    "applications": "CHEVROLET EXPRESS 1500/2500/3500 2010-2016, GMC SAVANA 1500/2500/3500 2010-2016",
    "source": "167"
  },
  {
    "zoren_no": "ZRM1293469",
    "oem_no": "13585472, 13591799, FG1716, M100084, M100149, MU2130, SP6720M, E4036M",
    "car_maker": "Chevrolet",
    "applications": "Chevrolet Captiva Sport 2012-2015 L4-2.4L V6-3.0L",
    "source": "167"
  },
  {
    "zoren_no": "ZRM1293178",
    "oem_no": "P77025M, P77545M, 68109894AE, 68217192AE, C0796M, E7360M, FG1863, M635722, SP7247M",
    "car_maker": "JEEP",
    "applications": "JEEP CHEROKEE 2014-2018",
    "source": "167"
  },
  {
    "zoren_no": "ZRM1293122",
    "oem_no": "E7219M, 68004095AB, EG219M",
    "car_maker": "Dodge, JEEP",
    "applications": "DODGE NITRO 2007-2011, JEEP LIBERTY 2008-2012",
    "source": "168"
  },
  {
    "zoren_no": "ZRM1304006",
    "oem_no": "E7271M, 05145583AA, 5145585AD, 68154305AB, SP7108M, 68304617AA",
    "car_maker": "Dodge, JEEP",
    "applications": "DODGE DURANGO 2011-2019, JEEP GRAND CHEROKEE 2011-2018",
    "source": "168"
  },
  {
    "zoren_no": "ZRM1293035",
    "oem_no": "E7220M, 68060545AA, P76268M, SP7040M, 04766013A3, 05085719AC, 5183201AB, 05183202AC",
    "car_maker": "DODGE, JEEP",
    "applications": "DODGE CALIBER 2007-2011, JEEP COMPASS 2007-2016, JEEP PATRIOT 2007-2016",
    "source": "170"
  },
  {
    "zoren_no": "ZRM1300001",
    "oem_no": "P76517, E7286A, SP7109M, FG291A, FG272A, 5145586AC",
    "car_maker": "DODGE",
    "applications": "Dodge Durango 3.6L-V6 2011-2017",
    "source": "170"
  },
  {
    "zoren_no": "ZRM1293030",
    "oem_no": "E7235M, 68030875AA, 68060507AB",
    "car_maker": "CHRYSLER, DODGE, VOLKSWAGEN",
    "applications": "CHRYSLER TOWN & COUNTRY 2008-2010, DODGE GRAND CARAVAN 2008-2010, VOLKSWAGEN ROUTAN 2009-2010",
    "source": "170"
  },
  {
    "zoren_no": "ZRM1293120",
    "oem_no": "E4123M, 13513407, 13581619, 13582491, 13589992, 19367780, FG1832",
    "car_maker": "CHEVROLET, CHRYSLER",
    "applications": "Chevrolet Silverado 1500 2014-2018, Chevrolet Silverado 2500 2014-2017",
    "source": "170"
  },
  {
    "zoren_no": "ZRM1293085",
    "oem_no": "M100264, MU2194, MU2370, P76892M, SP6714M, E3719M, P76288M",
    "car_maker": "GMC, PONTIAC, SATURN",
    "applications": "Chevrolet Silverado 1500 2017-2018, GMC Sierra 1500 2014-2018, PONTIAC SOLSTICE 2006-2007, SATURN SKY 2007",
    "source": "170"
  },
  {
    "zoren_no": "ZRM1293226",
    "oem_no": "E3724M, 19133588, FG1308, SP6653M, 88963684, 19370178",
    "car_maker": "Hummer",
    "applications": "Hummer H3 L5-3.5L/3.7L, V8-5.3L 2006-2008",
    "source": "170"
  },
  {
    "zoren_no": "ZRM1293189",
    "oem_no": "E3709M, P76236M, 15263190, 19153051, 19153052, 19179796, 19331951, SP6433M, FG0433",
    "car_maker": "Buick",
    "applications": "2006-2007 Cadillac DTS 4.6L, 2006-2007 Buick Lucerne 4.6L/3.8L",
    "source": "172"
  },
  {
    "zoren_no": "ZRM1293194",
    "oem_no": "E7254M, FG0890, SP7055M, P76703M",
    "car_maker": "Chrysler",
    "applications": "Dodge Grand Caravan 3.3L, Chrysler Town & Country 3.3L 2008-2010",
    "source": "172"
  },
  {
    "zoren_no": "ZRM1293217",
    "oem_no": "E3786M",
    "car_maker": "Chrysler",
    "applications": "Chevrolet Impala 3.5L/3.9L 2008-2011",
    "source": "172"
  },
  {
    "zoren_no": "ZRM1293098",
    "oem_no": "E3688M",
    "car_maker": "CHEVROLET, ISUZU, GMC",
    "applications": "CHEVROLET COLORADO 2006-2008, GMC CANYON 2006-2008, ISUZU I280/I290/I350/I370 2006-2008",
    "source": "172"
  },
  {
    "zoren_no": "ZRM1501105",
    "oem_no": "E4040M, 13506689, 13586051, 13591556, 20965081, FG1910, SP6715M",
    "car_maker": "CHEVROLET, GMC",
    "applications": "Chevrolet Equinox 2012-2014 2.4L, GMC Terrain 2012-2014 2.4L",
    "source": "172"
  },
  {
    "zoren_no": "ZRM1501107",
    "oem_no": "E4104M, M100220, 19303782, 13512934, 13582493, 19354928, SP6750M, P77336M, FG2244, MU2334",
    "car_maker": "CHEVROLET, GMC",
    "applications": "Chevrolet Escalade, GMC Yukon, Cadillac Escalade 2015-2019",
    "source": "172"
  },
  {
    "zoren_no": "ZRM1133001",
    "oem_no": "E7094M",
    "car_maker": "DODGE, CHRYSLER, PLYMOUTH",
    "applications": "PLYMOUTH GRAND VOYAGER 1996-2000, CHRYSLER TOWN & COUNTRY 1996-2000, DODGE CARAVAN/VOYAGER 1996-2000",
    "source": "174"
  },
  {
    "zoren_no": "ZRM1133004, ZRM1133007",
    "oem_no": "E7172M, 5127562AA, 5127562AD, E7146M",
    "car_maker": "DODGE, CHRYSLER",
    "applications": "CHRYSLER TOWN & COUNTRY 2004-2006, DODGE GRAND CARAVAN 2004-2006, CHRYSLER VOYAGER 2001-2003, DODGE CARAVAN 2001-2003",
    "source": "174"
  },
  {
    "zoren_no": "ZRM1133011, ZRM1133013",
    "oem_no": "E7129M, 4897424AD, E7223M",
    "car_maker": "DODGE, CHRYSLER, PLYMOUTH",
    "applications": "CHRYSLER TOWN & COUNTRY 1998-2007, DODGE CARAVAN 1998-2007, PLYMOUTH VOYAGER 1998-2000",
    "source": "174"
  },
  {
    "zoren_no": "ZRM1293092",
    "oem_no": "E3767M",
    "car_maker": "GMC, CHRYSLER",
    "applications": "CHEVROLET SILVERADO 1500 V8-5.3L 2006-2007, GMC SIERRA 1500 2006-2007",
    "source": "174"
  },
  {
    "zoren_no": "ZRM1501116",
    "oem_no": "13506690, 13577831, 20818972, 20944910, SP6658M, E3841M, FG1625, 19257060, 19332951, 20818966, 20965082, 13575898",
    "car_maker": "GMC, CHRYSLER",
    "applications": "2010-2017 GMC Terrain 3.6L/3.0L, 2010-2017 Chevrolet Equinox 3.6L/3.0L",
    "source": "174"
  },
  {
    "zoren_no": "ZRM1293095",
    "oem_no": "E3831M",
    "car_maker": "CHEVROLET",
    "applications": "CHEVROLET SILVERADO 1500/2500/3500 2004-2008, GMC SIERRA 1500/2500/3500 2004-2008",
    "source": "177"
  },
  {
    "zoren_no": "ZRM1293044",
    "oem_no": "E7251M, 366GE, 68039210AA, 68039210AB, FG1962, P76782M",
    "car_maker": "DODGE",
    "applications": "DODGE JOURNEY 2009-2018 V6-3.5L/L4-2.4L",
    "source": "177"
  },
  {
    "zoren_no": "ZRM1501157, ZRM1501150",
    "oem_no": "13598137, 13594751, 13515690, 13575931, 13575993",
    "car_maker": "Chevrolet",
    "applications": "Chevrolet Captiva 2011-2018, Opel ANTARA 2007-2017",
    "source": "177"
  },
  {
    "zoren_no": "ZRM1293333",
    "oem_no": "95382386, 94831168, 96830395, 042345250, 04817837, 04805902, 04820814",
    "car_maker": "Chevrolet",
    "applications": "Chevrolet Captiva C100, C140 2.0L 2.2L Diesel 2006-2011",
    "source": "177"
  },
  {
    "zoren_no": "ZRM1293448",
    "oem_no": "E3840M, SP6633, SP6658M, FG1295",
    "car_maker": "Chevrolet",
    "applications": "2010-2017 Chevrolet Equinox L4 2.4L, 2010-2017 GMC Terrain L4 2.4L",
    "source": "177"
  },
  {
    "zoren_no": "ZRM1293205",
    "oem_no": "P77085M, 68197307AA, 68253232AA, 68116734AA, 48339001AC, 68320505AA, 68316734AB, ALC1153870, A2C19043200",
    "car_maker": "DODGE",
    "applications": "Ram 1500 3.6L/5.7L 2015-2017",
    "source": "177"
  },
  {
    "zoren_no": "ZRM1294016",
    "oem_no": "E4030M, P76881M, FG2033, SP6742M, 13505208, 13578371, 13579893, 13594131, E4045M, FG1736, M100052, SP6635M",
    "car_maker": "Chevrolet, BUICK",
    "applications": "BUICK LACROSSE 2011-2016, BUICK REGAL 2012, CADILLAC XTS 2014-2015, CHEVROLET MALIBU 2013-2015",
    "source": "177"
  },
  {
    "zoren_no": "ZRM1293508",
    "oem_no": "M100221, 13512935, P77363M, FG2175, 13582497, GM0516503, 13535374, 13513343, 13551500",
    "car_maker": "CHEVROLET",
    "applications": "CADILLAC ESCALADE 2017-2019, CHEVROLET SUBURBAN 2017-2019, GMC YUKON XL 2017-2019",
    "source": "177"
  },
  {
    "zoren_no": "ZRM1501183",
    "oem_no": "E4071M",
    "car_maker": "CHEVROLET",
    "applications": "CHEVROLET SONIC 2013-2018",
    "source": "178"
  },
  {
    "zoren_no": "ZRM1293548, ZRM1293059",
    "oem_no": "84715864, 84631238, M100313, 832GE, 84505352, 34905876, 84988460, 85510279, 85623234, E3752M, P76286M",
    "car_maker": "CHEVROLET",
    "applications": "Chevrolet Silverado 1500 2019-2020, GMC Sierra 1500 2019-2020, CHEVROLET SILVERADO 1500 2007-2008, GMC SIERRA 1500 2007-2008",
    "source": "178"
  },
  {
    "zoren_no": "ZRM1294107",
    "oem_no": "FG2242, 13510918, 86786609, 19367444, MU2366",
    "car_maker": "CHEVROLET",
    "applications": "CHEVROLET SILVERADO 1500 2016-2019, GMC SIERRA 1500 2016-2019",
    "source": "178"
  },
  {
    "zoren_no": "ZRM1293162",
    "oem_no": "E3753M, FG1154, SP6034M, P76576M, 1010360, 19180801, M10132",
    "car_maker": "CHEVROLET",
    "applications": "CADILLAC ESCALADE 2008, CHEVROLET AVALANCHE 2008-2009, CHEVROLET SUBURBAN 1500 2008-2009, GMC YUKON XL 1500 2008-2009",
    "source": "178"
  },
  {
    "zoren_no": "ZRM0943018",
    "oem_no": "E3563M, SP61029M, 25338726, F2574A, 402-P3563M, 2202-12876-4",
    "car_maker": "CHEVROLET",
    "applications": "GMC Sonoma 2002-2003, Chevrolet S10 2002-2003",
    "source": "178"
  },
  {
    "zoren_no": "ZRM1303002",
    "oem_no": "E3769M",
    "car_maker": "CHEVROLET",
    "applications": "CHEVROLET TRAILBLAZER 2008-2009, GMC ENVOY 2008-2009, ISUZU ASCENDER 2008, SAAB 9-7X 2008-2009",
    "source": "178"
  },
  {
    "zoren_no": "ZRM1173001",
    "oem_no": "E2360M, 2L1Z9H307BB, 2L1Z9H307BF",
    "car_maker": "FORD",
    "applications": "FORD EXPEDITION 2003-2004 V8-5.4L",
    "source": "182"
  },
  {
    "zoren_no": "ZRM1203002",
    "oem_no": "97FB9H307, 98AP9H307, 9H3071460, B0719483, 1388671",
    "car_maker": "FORD",
    "applications": "Ford Focus MK1 1.4i 1.6i 1.8i 2.0i 16V 1998-2004",
    "source": "182"
  },
  {
    "zoren_no": "ZRM1204004",
    "oem_no": "6G91-9H307-AF, A2C53287860Z, 1506989, E10791M",
    "car_maker": "FORD",
    "applications": "Ford S-Max 2006-2014, Ford Mondeo 2007-2015, Ford Galaxy 2006-2015",
    "source": "182"
  },
  {
    "zoren_no": "ZRM1213009",
    "oem_no": "0580313186",
    "car_maker": "FORD",
    "applications": "FORD RANGER 2.3L/2.5L 2008-2012",
    "source": "184"
  },
  {
    "zoren_no": "ZRM1293009",
    "oem_no": "DG939H307LG, DG939H307JD",
    "car_maker": "FORD",
    "applications": "Ford FUSION Mondeo 2017-2018",
    "source": "185"
  },
  {
    "zoren_no": "ZRM1293010",
    "oem_no": "E2436M, PFS496, P76381M, 69189, SP2436, F1447A, 6L3Z9H307D, 7L3Z9H307D, 8L3Z9H307D, FG0847, 150135",
    "car_maker": "FORD",
    "applications": "FORD F-150 2004-2008 V6-4.2L/4.6L/5.4L, LINCOLN MARKLT 2007-2008 V8-5.4L",
    "source": "185"
  },
  {
    "zoren_no": "ZRM0003124",
    "oem_no": "E23365, 3W1Z9H307AA, 4W1Z9H307AA, SP2336H, F00E192470, 6W1Z-9H307-D",
    "car_maker": "FORD",
    "applications": "FORD CROWN VICTORIA 2003-2004, LINCOLN TOWN CAR 2003-2004, MERCURY GRAND MARQUIS 2003-2004",
    "source": "185"
  },
  {
    "zoren_no": "ZRM1263010",
    "oem_no": "E2383M",
    "car_maker": "FORD",
    "applications": "Ford Freestar 2004-2005 V6-3.9L/4.2L, Mercury Monterey 2004-2005",
    "source": "185"
  },
  {
    "zoren_no": "ZRM0003232",
    "oem_no": "E2469M, 7R3Z9H307C",
    "car_maker": "FORD",
    "applications": "Mustang V6-4.0L/V8-4.6L (2006-2009)",
    "source": "185"
  },
  {
    "zoren_no": "ZRM1293048",
    "oem_no": "E2527M",
    "car_maker": "FORD",
    "applications": "FORD E-150/E-250/E-350/E-450 2009-2010",
    "source": "185"
  },
  {
    "zoren_no": "ZRM1293124",
    "oem_no": "E2476M, 8L1Z9H307B",
    "car_maker": "FORD",
    "applications": "FORD EXPEDITION V8-5.4L 2007-2008, LINCOLN NAVIGATOR V8-5.4L 2007-2008",
    "source": "187"
  },
  {
    "zoren_no": "ZRM1293154",
    "oem_no": "E2553M, SP2377M, P76465M, FG1343, 2920838, M2496154, PFS381, AL2Z 9H307-AA",
    "car_maker": "FORD",
    "applications": "FORD EXPLORER 2009-2010, FORD EXPLORER SPORT TRAC 2010, MERCURY MOUNTAINEER 2009-2010",
    "source": "187"
  },
  {
    "zoren_no": "ZRM1293082",
    "oem_no": "E2523M, A30443, 9L1Z 9A299-C, 9L1Z 9H307-C, AL1Z 9A299-A, DFG1319, SP2496M, P76463M",
    "car_maker": "FORD",
    "applications": "FORD EXPEDITION 2009-2014 V8-5.4L, LINCOLN NAVIGATOR 2009-2014 V8-5.4L",
    "source": "187"
  },
  {
    "zoren_no": "ZRM1293016",
    "oem_no": "E2529M, 9L8Z-9H307C",
    "car_maker": "FORD, MAZDA",
    "applications": "FORD ESCAPE 2009-2010, MAZDA TRIBUTE 2009, MERCURY MARINER 2009-2010",
    "source": "187"
  },
  {
    "zoren_no": "ZRM1293023",
    "oem_no": "E2479M",
    "car_maker": "FORD",
    "applications": "Ford Edge 2007-2010 V6-3.5L, Lincoln MKX 2007-2010 V6-3.5L",
    "source": "187"
  },
  {
    "zoren_no": "ZRM1293031",
    "oem_no": "E2541M",
    "car_maker": "FORD",
    "applications": "FORD F-150 2009-2014 (V6-3.7L, V8-4.6L, V8-5.0L, V8-5.4L)",
    "source": "187"
  },
  {
    "zoren_no": "ZRM1293013",
    "oem_no": "E2494M",
    "car_maker": "FORD",
    "applications": "FORD EXPEDITION V8-5.4L 2007-2008, LINCOLN NAVIGATOR V8-5.4L 2007-2008",
    "source": "191"
  },
  {
    "zoren_no": "ZRM1293032",
    "oem_no": "E2588M, P76759M, FG1482, EL3Z9H307A",
    "car_maker": "FORD",
    "applications": "FORD F-150 V6-3.5L 2011-2014",
    "source": "191"
  },
  {
    "zoren_no": "ZRM1293047",
    "oem_no": "9L3Z9H307E, E2545M, PFS490, SP2096M",
    "car_maker": "FORD",
    "applications": "FORD F-150 2009-2014 (V6-3.7L, V8-4.6L, V8-5.0L, V8-5.4L, V8-6.2L)",
    "source": "191"
  },
  {
    "zoren_no": "ZRM1293103",
    "oem_no": "E2454M, 69185, 6L2Z9H307A, 7L2Z9H307A, PFS381, P76118M, SP2108M",
    "car_maker": "FORD",
    "applications": "FORD EXPLORER 2006-2009, FORD EXPLORER SPORT TRAC 2007-2009, MERCURY MOUNTAINEER 2006-2009",
    "source": "191"
  },
  {
    "zoren_no": "ZRM1501012",
    "oem_no": "DA8Z9H307K, E2610M",
    "car_maker": "FORD",
    "applications": "Ford Explorer (2013-2017), Ford Flex (2013-2017), Ford Police Interceptor Utility (2014-2017), Lincoln MKT (2013-2017)",
    "source": "191"
  },
  {
    "zoren_no": "ZRM1214001",
    "oem_no": "AB39-9H307-AC, AB39-9H307-AD, 5230244",
    "car_maker": "FORD",
    "applications": "Ford 205i Ranger 2013-2015",
    "source": "191"
  },
  {
    "zoren_no": "ZRM1293015",
    "oem_no": "E2561M, AE5Z9H307F, SP2097M, PFS-594, P76583M",
    "car_maker": "FORD",
    "applications": "Ford Fusion 2010-2012 L4-2.5L, Lincoln MKZ 2011-2012, Mercury Milan 2010-2011",
    "source": "193"
  },
  {
    "zoren_no": "ZRM1293021",
    "oem_no": "E2458M",
    "car_maker": "FORD",
    "applications": "Ford Fusion 2006-2012, Lincoln MKZ 2007-2012, Lincoln ZEPHYR 2006",
    "source": "193"
  },
  {
    "zoren_no": "ZRM1203001",
    "oem_no": "E10545M",
    "car_maker": "FORD",
    "applications": "Ford Fiesta FOCUS 2000-2007, Ford Mondeo 2.5 V6 24V",
    "source": "193"
  },
  {
    "zoren_no": "ZRM1203004",
    "oem_no": "DV61-9H307-ED",
    "car_maker": "FORD",
    "applications": "FORD KUGA 2013-2014 1.5 ECOBOOST",
    "source": "193"
  },
  {
    "zoren_no": "ZRM1213005",
    "oem_no": "3M519H307, 3M51-9H307, 3N619H3071, 1602781",
    "car_maker": "FORD",
    "applications": "FORD FOCUS 2004-2011",
    "source": "193"
  },
  {
    "zoren_no": "ZRM1294021",
    "oem_no": "P76856M, CR33-9H307-AD, BR3Z-9H307B, CR3Z-9H307A, CR3Z-9H307B, 9758141, 832-03078",
    "car_maker": "FORD",
    "applications": "Ford Mustang 2011-2014 V6-3.7L/V8-5.0L",
    "source": "193"
  },
  {
    "zoren_no": "ZRM1293049, ZRM0003195",
    "oem_no": "E2566M, E2453M, 150200, SP2055M, PFS403, PFS349, P76128M, FG0842, AFS09175, 7L8Z9H307B, 6L8Z9H307BA, 5L8Z9H307A, 5L849H307BF",
    "car_maker": "FORD, MERCURY",
    "applications": "Ford Escape 2.5L 2010-2012, FORD ESCAPE L4-2.3L/V6-3.0L 2005-2007, MERCURY MARINER 2005-2007",
    "source": "195"
  },
  {
    "zoren_no": "ZRM1501056",
    "oem_no": "E2598M, CV61-9H307-BF, CV6Z-9H307-H, GV6Z-9H307-D, F1509A, PFS1197",
    "car_maker": "FORD",
    "applications": "Ford Escape 1.6/L4 2013-2016, LINCOIN MKC 2.0L 2015-2016",
    "source": "195"
  },
  {
    "zoren_no": "ZRM0003047",
    "oem_no": "E2509M",
    "car_maker": "FORD",
    "applications": "FORD F-250/F-350/F-450 SUPER DUTY V10-6.8L/V8-5.4L 2008-2010",
    "source": "195"
  },
  {
    "zoren_no": "ZRM1173020",
    "oem_no": "E2352M",
    "car_maker": "FORD",
    "applications": "FORD EXPLORER V6-4.0L 2002-2003, MOUNTAINEER V6-4.0L 2002-2003, FORD F-350 SUPER DUTY V10-6.8L",
    "source": "195"
  },
  {
    "zoren_no": "ZRM0003030",
    "oem_no": "E2301M",
    "car_maker": "FORD",
    "applications": "FORD MUSTANG V6-3.8L/3.9L 2001-2004, FORD MUSTANG V8-4.6L 2001-2004",
    "source": "195"
  },
  {
    "zoren_no": "ZRM1293037",
    "oem_no": "E2578M",
    "car_maker": "FORD",
    "applications": "FORD EDGE 2011-2014 V6-3.5L/3.7L, LINCOLN MKX 2011-2015 V6-3.7L",
    "source": "194"
  },
  {
    "zoren_no": "ZRM0002049",
    "oem_no": "E2064MN, FG0199, FG0198, E2059MN, E2059M",
    "car_maker": "FORD",
    "applications": "1990-1996 Ford F-150, 1990-1996 Ford F-250, 1990-1997 Ford F-350 (Various Engines)",
    "source": "194"
  },
  {
    "zoren_no": "ZRM1293148",
    "oem_no": "P76865M",
    "car_maker": "FORD",
    "applications": "FORD F-250 SUPER DUTY 2011-2016 V8-6.2L, FORD F-350 SUPER DUTY 2011-2016 V8-6.2L",
    "source": "194"
  },
  {
    "zoren_no": "ZRM1501004",
    "oem_no": "AB399H307EC, UC2J-13-35XB, MOD-199, GE566",
    "car_maker": "FORD",
    "applications": "Ford Ranger TKE 3.2 TDCi 4x4 2011-2019 DIESEL",
    "source": "194"
  },
  {
    "zoren_no": "ZRM1501034, ZRM1204008",
    "oem_no": "BV6Z-54307-S, AB39-9H307-EC",
    "car_maker": "FORD",
    "applications": "Ford Ranger TKE 3.2 TDCi 4x4 2011-2019 DIESEL",
    "source": "194"
  },
  {
    "zoren_no": "ZRM1293208",
    "oem_no": "BV6Z-9H307-S",
    "car_maker": "FORD",
    "applications": "Ford Focus 2.0L FLEX 2012-2017",
    "source": "194"
  },
  {
    "zoren_no": "ZRM1293001",
    "oem_no": "E2357M, 5L5Z-9H307-AA, 6L5Z-9H307-F",
    "car_maker": "FORD",
    "applications": "2004-2004 Mazda B4000, 2004-2006 Ford Ranger, 2005-2005 Mazda B3000 3.0L",
    "source": "197"
  },
  {
    "zoren_no": "ZRM1501072",
    "oem_no": "F2G3-9H307RC, DG939H307BD, DG939H307BC",
    "car_maker": "FORD",
    "applications": "Ford EDGE 2.7L 2015-2016 4W",
    "source": "197"
  },
  {
    "zoren_no": "ZRM1501076",
    "oem_no": "6G91-9H307-EH, 775305, 1599836, 1769835, 1844410, 6G91-9H307-EG",
    "car_maker": "FORD",
    "applications": "Ford S-Max 2006-2014, Ford Mondeo IV 2009-2015, Ford Galaxy 2006-2015",
    "source": "197"
  },
  {
    "zoren_no": "ZRM1293116",
    "oem_no": "E2443M, 6L1Z9H307A",
    "car_maker": "FORD",
    "applications": "FORD EXPEDITION V8-5.4L 2005-2006, LINCOLN NAVIGATOR V8-5.4L 2005-2006",
    "source": "197"
  },
  {
    "zoren_no": "ZRM1294019",
    "oem_no": "DB53-9H307BG, E2605M, P76859M, P77048M, FG1551, FG1756, DA8Z-9H307J, DB5Z-9A407A, DB5Z-9H307C, PFS-1027, SP2509M, SP2520M",
    "car_maker": "FORD",
    "applications": "Lincoln MKT 3.7L 2013-2014, Ford Police Interceptor Utility 3.7L 2013-2014, Ford Flex 3.5L 2013-2014, Ford Explorer 3.5L 2013-2014",
    "source": "197"
  },
  {
    "zoren_no": "ZRM0003261",
    "oem_no": "E2218M, PFS180, EB218M, F1ZZ9H307AE, P74948M, TU224, FG0834, SP2043M, F8ZZ9H307AD, MU2030, P2066M, 67122, EFP2218M, TCA902",
    "car_maker": "FORD",
    "applications": "Ford Mustang 3.8L 1998",
    "source": "197"
  },
  {
    "zoren_no": "ZRM0003123",
    "oem_no": "E2555M, F1566A, P76594M, FG1666, 66069, AR3Z-9H307-A",
    "car_maker": "FORD",
    "applications": "FORD MUSTANG 2010 V6-4.0L V8-4.6L",
    "source": "197"
  },
  {
    "zoren_no": "ZRM1293456",
    "oem_no": "E7275M, 68086502AA",
    "car_maker": "CHEVROLET",
    "applications": "RAM 1500 2012, RAM 2500 2011-2022, RAM 3500 2013-2022",
    "source": "180"
  },
  {
    "zoren_no": "ZRM0943111",
    "oem_no": "SP6094M, P76274M, E3579M",
    "car_maker": "CHEVROLET",
    "applications": "CADILLAC XLR 2006, CHEVROLET CORVETTE 2006",
    "source": "180"
  },
  {
    "zoren_no": "ZRM1293079",
    "oem_no": "E3604M, P76739M",
    "car_maker": "CHEVROLET",
    "applications": "CHEVROLET SILVERADO 3500 CLASSIC 2007, GMC SIERRA 2500 2004-2007, GMC SIERRA 3500 2004-2007",
    "source": "180"
  },
  {
    "zoren_no": "ZRM1501203",
    "oem_no": "13516865, 13577460, 13577815, E4066M, M100091",
    "car_maker": "CHEVROLET",
    "applications": "BUICK ENCORE 2013-2022, CHEVROLET TRAX 2013-2022",
    "source": "180"
  },

  {
    "zoren_no": "ZRM1501152",
    "oem_no": "16117212585, 7212585",
    "car_maker": "BMW",
    "applications": "X5 E70 (07/2008-06/2013), X5 E70 LCI (04/2009-06/2013), X5 F15 (08/2012-06/2018), X5 M F85 (04/2013-06/2018), X6 E71 (01/2007-06/2014), X6 E72 Hybrid (10/2008-0/2011), X6 F16 (09/2013-03/2019), X6 M F86 (10/2013-03/2019)",
    "source": "Image 1"
  },
  {
    "zoren_no": "ZRM1501081",
    "oem_no": "LR014995, LR043154",
    "car_maker": "LAND ROVER",
    "applications": "LAND ROVER Range Rover III 5.0L V8 2009-2012, Range Rover Sport 5.0L V8 2004-2013, Range Rover L322",
    "source": "Image 1"
  },
  {
    "zoren_no": "ZRM1501082, ZRM0004017",
    "oem_no": "LR043155, LR018276, LR011090, A2C53279539, AH42-9H307, A2C53279539Z",
    "car_maker": "LAND ROVER",
    "applications": "RANGE ROVER 2010 - 2012 5.0L / V8",
    "source": "Image 1"
  },
  {
    "zoren_no": "ZRM0004023",
    "oem_no": "LR043385, GACC582N, 775583, 72738, 7507357, LR014997, 22904, 77357, 320900630, WG1013244",
    "car_maker": "LAND ROVER",
    "applications": "LR4 / Discovery 4 V8 5.0 Liter | 2010 - 2013, LR4 / Discovery 4 V6 3.0 Liter | 2014 - 2016, Range Rover Sport | 2010 - 2013, Range Rover Sport Supercharged | 2010 - 2013",
    "source": "Image 1"
  },
  {
    "zoren_no": "ZRM1501083, ZRM1294048",
    "oem_no": "LR038599, LR038601",
    "car_maker": "LAND ROVER",
    "applications": "Land Rover LR2 3.2L 2.0L 2008 - 2012",
    "source": "Image 1"
  },
  {
    "zoren_no": "ZRM1501101, ZRM0004049",
    "oem_no": "LR057235, LR044427",
    "car_maker": "LAND ROVER",
    "applications": "RANGE ROVER EVOQUE 2.0L 16V 2012-2017",
    "source": "Image 1"
  },
  {
    "zoren_no": "ZRM1294072",
    "oem_no": "LR038602, LR005622, LR010434, LR029280, 77542, LR010432, LR003782, LR00557",
    "car_maker": "LAND ROVER",
    "applications": "LAND ROVER FREELANDER 2 Diesel 2.2L 2006 - 2014",
    "source": "Image 1"
  },
  {
    "zoren_no": "ZRM1501121",
    "oem_no": "LR065349, FK72-9H307-BB, J9C3-9H307-BA",
    "car_maker": "LAND ROVER",
    "applications": "LAND ROVER DISCOVERY SPORT 2.0L L4 2015-2018",
    "source": "Image 2"
  },
  {
    "zoren_no": "ZRM0004060",
    "oem_no": "LR014998, LR042717",
    "car_maker": "Land Rover",
    "applications": "Land Rover LR3 2005-2009, Land Rover Range Rover Sport 2006-2011, Land Rover LR4 2011- Diesel",
    "source": "Image 2"
  },
  {
    "zoren_no": "ZRM0004018",
    "oem_no": "LR015177, 6H42-9H307-AB, WGS500150, A2C53341992, A2C53341992Z",
    "car_maker": "Land Rover",
    "applications": "LAND ROVER Range Rover III SUV 4.2 4x4 2002-2012, RANGE ROVER L322 4.2L V8 2006-2009",
    "source": "Image 2"
  },
  {
    "zoren_no": "ZRM1104012",
    "oem_no": "31372882, 31261007, 31274618, 30766473, A2C87255401",
    "car_maker": "VOLVO",
    "applications": "VOLVO S80 XC60 V70 XC70 2.0L 2015-2016",
    "source": "Image 2"
  },
  {
    "zoren_no": "ZRM1501184",
    "oem_no": "BJ32-9A309-BB",
    "car_maker": "Range Rover",
    "applications": "Range Rover Sport 3.0 SD V6 2014-2018 4WD, LAND ROVER Range Rover Evoque L538 2011-2020",
    "source": "Image 2"
  },

  {
    "zoren_no": "ZRM1293208",
    "oem_no": "P76863M, BV6Z-9H307-S",
    "car_maker": "FORD",
    "applications": "Ford Focus 2.0L FLEX 2012-2017",
    "source": "1"
  },
  {
    "zoren_no": "ZRM1203019",
    "oem_no": "C1B1-9H307-BB, C1B1-9H307-BC, C1B1-9H307-BD, C1B1-9H307-BE, 2070055",
    "car_maker": "FORD",
    "applications": "FORD FIESTA 1.25/1.4/1.6 2012-2017",
    "source": "1"
  },
  {
    "zoren_no": "ZRM1294039",
    "oem_no": "E2613M, F1624A, PN3218, DG1Z-9H307-R, P77112M, 358301391",
    "car_maker": "FORD",
    "applications": "Ford Taurus 3.5L 2013-2017",
    "source": "1"
  },
  {
    "zoren_no": "ZRM1163017, ZRM0003053",
    "oem_no": "E2495M, FG0967, SP2135M, E2244M, 67142, E8244M, EFP2203, EFP2244M, FG0826, MU2035, P568M, P74953M, PFS-191, SP2244M, TU228, USEP2244M, XR3Z-9H307AD, AF809165, E2314, E2386, E2405M, E16021, A27099, E16028, 953-4047, 8L8Z 9H307-C, BL8Z9H307-C, BL8Z9H307-D, 8L8Z9H307-D, ZZC2-13-35X, ZZC2-13-35XA, DFG0967, SP1134, SP2135M, P76103, PFS-468, 69365",
    "car_maker": "FORD, MAZDA, MERCURY",
    "applications": "FORD ESCAPE V4-2.3L 2007-2008, FORD ESCAPE V6-3.0L 2007-2008, MAZDA TRIBUTE L4-2.3L 2008, MAZDA TRIBUTE V6-3.0L 2008, MERCURY MARINER L4-2.3L 2007-2008, MERCURY MARINER V6-3.0L 2007-2008, FORD MUSTANG V6-3.8L 1999-2000, FORD MUSTANG V8-4.6L 1999-2000",
    "source": "1"
  },
  {
    "zoren_no": "ZRM1294032",
    "oem_no": "FR3Z9H307B, FG1999, E2664M, SP2566M, PFS1059, FR3C 9H307-BB, FR3C 9H307-BC, FR3C 9H307-BD, FR3C 9H307-BE, FR3C 9H307-BF",
    "car_maker": "FORD",
    "applications": "FORD Mustang 3.7L 5.0L 2015-2020",
    "source": "1"
  },
  {
    "zoren_no": "ZRM1293209",
    "oem_no": "E2598M, CV61-9H307-BF, CV6Z-9H307-H, GV6Z-9H307-D, F1509A, PFS1197",
    "car_maker": "FORD",
    "applications": "Ford Escape 2.0L 2013-2016, Lincoln MKC 2.0L 2015-2016",
    "source": "1"
  },
  {
    "zoren_no": "ZRM1293204",
    "oem_no": "E2559M, AG1Z9H307C, SP2118M, P76590M, FG1144",
    "car_maker": "FORD",
    "applications": "Lincoln MKS 3.7L 2010-2012, Ford Taurus 3.5L 2010-2012",
    "source": "1"
  },
  {
    "zoren_no": "ZRM1293108, ZRM1260001, ZRM1203010",
    "oem_no": "E2533M, CC119H307AC, 1740070, 1812552, 39590, PE20-13-35X, PE11-13-35X",
    "car_maker": "FORD, LINCOLN, Mazda",
    "applications": "FORD F-150 V8-4.6L 2005-2008, F-150 V8-5.4L 2004-2008, LINCOLN MARK LT V8-5.4L 2006-2008, FORD Transit 2011-2018 Diesel 2.2 TDCi 2.4 TDCi, Mazda 3 BM, BN 2.0 2013-2019",
    "source": "3"
  },
  {
    "zoren_no": "ZRM1203014",
    "oem_no": "PE1A-13-35X, PE8C-13-35X",
    "car_maker": "Mazda",
    "applications": "Mazda CX-5 2.0 2.4L 4WD 2012-2018",
    "source": "3"
  },
  {
    "zoren_no": "ZRM1213003",
    "oem_no": "ZY081335XF, 2605-13-35X",
    "car_maker": "Mazda",
    "applications": "Mazda 3 BK 14 2.0L 2004 2005 2006",
    "source": "3"
  },
  {
    "zoren_no": "ZRM1213004",
    "oem_no": "8V59-9H307-BD, ZYE9-13-35XB, ZJ38-13-35XC, C203-13-35X",
    "car_maker": "Mazda",
    "applications": "Mazda 2 1.3i 1.5i 2007-2015, ford fiesta 2009-2012",
    "source": "3"
  },
  {
    "zoren_no": "ZRM1183022",
    "oem_no": "E8750M, P76622M, 43138, FG1269, 433GE, L33L-13-35ZA, SP4026M",
    "car_maker": "MAZDA",
    "applications": "MAZDA CX-7 L4-2.3L 2007-2012",
    "source": "3"
  },
  {
    "zoren_no": "ZRM1213002",
    "oem_no": "LF17-13-35ZA",
    "car_maker": "MAZDA",
    "applications": "Mazda 6 2.0\\2.3L 2003-2008",
    "source": "4"
  },
  {
    "zoren_no": "ZRM1203006",
    "oem_no": "LF6X-13-35XB, LF6X-13-35XC, 8N61-9H307-LA, AV619H307LF, 1851814, 1851739",
    "car_maker": "Mazda, FORD",
    "applications": "MAZDA 3 Saloon 1.6 MZR 2.0 DISI 08-14, FORD C-MAX 2010-2020, FORD FOCUS 2011-2020, FORD TURNIER 2011-2020",
    "source": "4"
  },
  {
    "zoren_no": "ZRM1213007, ZRM1213020",
    "oem_no": "LF17-13-35ZA, ZJ01-13-35XC, 2S619H307CD",
    "car_maker": "Mazda",
    "applications": "Mazda 6 2.0\\2.3L 2003-2008, 2000-2003 Mazda Demio 1.5 16V, 2004-2016 Mazda Verisa 1.5",
    "source": "4"
  },
  {
    "zoren_no": "ZRM1293144",
    "oem_no": "E2554M",
    "car_maker": "FORD, MAZDA, MERCURY",
    "applications": "FORD ESCAPE V6-3.0L 2010-2012, MAZDA TRIBUTE V6-3.0L 2010-2011, MERCURY MARINER V6-3.0L 2010-2011",
    "source": "4"
  },
  {
    "zoren_no": "ZRM1501062",
    "oem_no": "GY01-13-35Z, ZL01-13-35Z",
    "car_maker": "Mazda",
    "applications": "Mazda 323 2.0L 2.3L 2.5L V6 1999/09-2006/02",
    "source": "4"
  },
  {
    "zoren_no": "ZRM1501041",
    "oem_no": "ZL05-13-ZEO",
    "car_maker": "Mazda",
    "applications": "Mazda 323 2.0L F VI 2001/01-2004/05",
    "source": "6"
  },
  {
    "zoren_no": "ZRM1501075",
    "oem_no": "LF5W-13-ZEO, LFB6-13-35Z, LF5W-13-35Z, PE251335X",
    "car_maker": "Mazda",
    "applications": "Mazda 5 2.0L 2005-2014",
    "source": "6"
  },
  {
    "zoren_no": "ZRM1203013",
    "oem_no": "PE01-13-35X, E9209M, SP4095M, P77098M, FG1651",
    "car_maker": "Mazda",
    "applications": "Mazda CX-5 2.0L 2013-2016",
    "source": "6"
  },
  {
    "zoren_no": "ZRM1501160",
    "oem_no": "CA43-13-35Z, E9024M, CY03-13-35XA, CA43-13-35Z, CA41-13-35X",
    "car_maker": "Mazda",
    "applications": "Mazda CX-9 3.7L V6 2011-2015",
    "source": "6"
  },
  {
    "zoren_no": "ZRM1501091",
    "oem_no": "AE8Z9A299A, AE8Z9A299B, AE8Z9H307C, SP2479M, PFS583, E2593M, P76891M, 66031",
    "car_maker": "Ford",
    "applications": "2009-2011 Ford Focus 2.0L, 2011-2013 Ford Fiesta 1.6L",
    "source": "6"
  },
  {
    "zoren_no": "ZRM1293121",
    "oem_no": "E2439M",
    "car_maker": "Ford",
    "applications": "FORD EXPLORER V6-4.0L 2004-2005, MERCURY MOUNTAINEER V6-4.0L 2004-2005",
    "source": "6"
  },
  {
    "zoren_no": "ZRM1293078",
    "oem_no": "E2434M, PN3101, FG0850, PFS1399, 4L3Z9H307BF, P76343M, PN3123, 5252180, F1544A",
    "car_maker": "FORD",
    "applications": "FORD F-150 V6-4.2L 2005-2008, FORD F-150 V8-4.6L/V8-5.4L 2004-2008",
    "source": "8"
  },
  {
    "zoren_no": "ZRM1501055",
    "oem_no": "CN15-9H307-CB, CN15-9H307-CD",
    "car_maker": "FORD",
    "applications": "Ford Ecosport 1.5L GRAND C-MAX 2013-2016",
    "source": "8"
  },
  {
    "zoren_no": "ZRM0003097",
    "oem_no": "E2516M, 69371, P76647M, FG1113, SP2372M",
    "car_maker": "FORD",
    "applications": "FORD Focus L4 2.0L 2008",
    "source": "8"
  },
  {
    "zoren_no": "ZRM1173030",
    "oem_no": "E2355M, P76125M, 4L2Z9H307DA, 7L2Z9H3070, FG0868, SP2355M",
    "car_maker": "FORD",
    "applications": "Ford Explorer V6-4.0L 2004-, Mercury Mountaineer V6-4.0L 2004-",
    "source": "8"
  },
  {
    "zoren_no": "ZRM1293219",
    "oem_no": "E2568M, P76591M, 69373, 66028, PFS532, SP2516M, SP2543M, AL8Z9H307A, ZZE21335X",
    "car_maker": "FORD",
    "applications": "2009-2012 Ford Escape 2.5L, 2010-2011 Mazda Tribute 2.5L, 2009-2011 Mercury Mariner 2.5L",
    "source": "8"
  },
  {
    "zoren_no": "ZRM1501173",
    "oem_no": "CV61-9H307-AD",
    "car_maker": "FORD",
    "applications": "FORD KUGA II EcoBoost 2014-2019",
    "source": "8"
  },
  {
    "zoren_no": "ZRM1293254",
    "oem_no": "E2577M, P6599M, PFS971, BB5Z-9H307-A, 5199306, PFS580, BB53-9H307-BC, FG1329",
    "car_maker": "FORD",
    "applications": "FORD EXPLORER 3.5L 2011-2012",
    "source": "9"
  },
  {
    "zoren_no": "ZRM1292005",
    "oem_no": "E2579M, BT439H307BB",
    "car_maker": "FORD",
    "applications": "FORD EDGE 2011-2015, LINCOLN MKX 2011-2015",
    "source": "9"
  },
  {
    "zoren_no": "ZRM1293094",
    "oem_no": "E2441M, AFM098, 09166, 69188, 69189, P76337M, P76344M, 199GE, 1AMFP00058, FL3Z9H307DB, BL3Z9H307C, 7L3Z9H307C, 525-2200, FG0850, PFS-301, PFS-334, PFS-462, PFS-495, PFS301, PFS334, PFS412, PFS495, SP2005M, USEP2441M, SP2436M, 5L3Z-9H307CB, 6L3Z-9H307C, 7L3Z-9H307C, 8L3Z9H307C, 150113, TU272, 8299-1867580099, PN2101, 1987580093",
    "car_maker": "Ford, Lincoln",
    "applications": "Ford F-150 2005-2008, Lincoln Mark LT 2005-2008",
    "source": "9"
  },
  {
    "zoren_no": "ZRM1293500",
    "oem_no": "E2581M, P77162M, BC2Z-9H307A, FG1478",
    "car_maker": "FORD",
    "applications": "FORD E-150 2011-2014, FORD E-250 2011-2014, FORD E-350 2011-2019, FORD E-450 2010-2019",
    "source": "9"
  },
  {
    "zoren_no": "ZRM0003038",
    "oem_no": "E2235M",
    "car_maker": "FORD",
    "applications": "FORD F-250 SUPER DUTY 1999-2004, FORD F-350 SUPER DUTY 1999-2004",
    "source": "9"
  },
  {
    "zoren_no": "ZRM1204003",
    "oem_no": "55719H307CB, 5571-9H307-DB, A2C53124742, A2C53140363, 1987580014",
    "car_maker": "FORD",
    "applications": "Ford Mondeo",
    "source": "9"
  },
  {
    "zoren_no": "ZRM1292032",
    "oem_no": "EB3G-9H307-DA, A2C85497400",
    "car_maker": "Ford",
    "applications": "RANGER TKE 2.2L DIESEL 2011-2021",
    "source": "7"
  },
  {
    "zoren_no": "ZRM1203031",
    "oem_no": "BV619H307JC, FPE-805, BV619H307JA, BV619H307JB, BV619H307J0, 0580200064, 1666239, 1754929, 1847786, 31321091, EM10344, 1779841, 1788061, 1839104, BV61-9H307-DA, BV61-9H307-DB, BV61-9H307-DC, BV61-9H307-DD",
    "car_maker": "Ford",
    "applications": "FORD, Ssangyong Korando 2015-2023, Porsche Cayenne 2003-2007, Nissan Vanette Cargo 1994-2001, Peugeot Rifter 2018-2024, Ford Focus 2012-2016",
    "source": "7"
  },
  {
    "zoren_no": "ZRM1501147",
    "oem_no": "EB3G-9H307-DA, EB3G-9H307-DB, A2C85497400",
    "car_maker": "Ford",
    "applications": "Ford Ranger T6 2014-2021 DIESEL",
    "source": "7"
  },
  {
    "zoren_no": "ZRM1501153",
    "oem_no": "FL3Z9H307C, E2655M, P6583M",
    "car_maker": "Ford",
    "applications": "FORD F-150 3.0L V6 2015-2018",
    "source": "7"
  },
  {
    "zoren_no": "ZRM1203007",
    "oem_no": "BV61-9H307-RC",
    "car_maker": "Ford",
    "applications": "Ford Focus 1.0L 2.0L 2013-2016",
    "source": "7"
  },
  {
    "zoren_no": "ZRM1263001",
    "oem_no": "E2291M",
    "car_maker": "FORD, MAZDA",
    "applications": "FORD ESCAPE L4-2.0L 2001-2004, FORD ESCAPE V6-3.0L 2001-2004, MAZDA TRIBUTE L4-2.0L 2001-2004, MAZDA TRIBUTE V6-3.0L 2001-2004",
    "source": "7"
  },
  {
    "zoren_no": "ZRM0003185",
    "oem_no": "E2287M",
    "car_maker": "FORD",
    "applications": "FORD EXCURSION 5.4 6.8L 2000-2005",
    "source": "10"
  },
  {
    "zoren_no": "ZRM1173003",
    "oem_no": "E2338M",
    "car_maker": "FORD",
    "applications": "FORD EXPLORER 2001-2003, MERCURY MOUNTAINEER 2001-2003",
    "source": "10"
  },
  {
    "zoren_no": "ZRM1501209",
    "oem_no": "BB5-9H307-D, PFS-589, USEP46256M",
    "car_maker": "FORD",
    "applications": "FORD EXPLORER 2.0L L4 2012-",
    "source": "10"
  },
  {
    "zoren_no": "ZRM1501211",
    "oem_no": "CK41-9H307-AC, CK41-9H307-AD, CK41-9H307-BD, CK4Z-9H307-D, PFS1219, SP2562M, E2649M, FG1977, CK4Z-9H307-A",
    "car_maker": "FORD",
    "applications": "FORD Transit 150 250 350 3.7L 2015-2019",
    "source": "10"
  },
  {
    "zoren_no": "ZRM1183117",
    "oem_no": "L5T3-13-35Z",
    "car_maker": "MAZDA",
    "applications": "Raptor 2.0/2.5L 2009-2015",
    "source": "10"
  },
  {
    "zoren_no": "ZRM1102001",
    "oem_no": "0986580184, 2034702394, E10277M, E8475M, 2034702254, 2034703594, 2034702894, E8474M",
    "car_maker": "Mercedes, Benz",
    "applications": "Mercedes-Benz C230 2003-2005 L4-1.8L, Mercedes-Benz C230 2002 L4-2.3L, Mercedes-Benz C230 2006 V6-2.5L, Mercedes-Benz C240 2002-2005 V6-2.6L, Mercedes-Benz C280 2006-2007 V6-3.0L, Mercedes-Benz CLK320 2003-2005 V6-3.2L, Mercedes-Benz SLK280 2007 V6-3.0L, Mercedes-Benz C230 2002 V6-2.6L, Mercedes-Benz C240 2001-2002 V6-2.6L, Mercedes-Benz C320 2002 V6-3.2L",
    "source": "19"
  },
  {
    "zoren_no": "ZRM1104002",
    "oem_no": "67972, B5029M, E8530M, EH530M, F4541A, FG0979, P3227, P76500M, SP5029M, 2114704194",
    "car_maker": "Mercedes, Benz",
    "applications": "MERCEDES-BENZ CLS500 2006 V8-5.0L, MERCEDES-BENZ E320 05-03 V6-3.2L, MERCEDES-BENZ E350 09-06 V6-3.5L, MERCEDES-BENZ E500 06-03 V8-5.0L",
    "source": "19"
  },
  {
    "zoren_no": "ZRM1104001",
    "oem_no": "E8572M, P76676M, SP5045M, A42010, 2114701794, 2114700",
    "car_maker": "Mercedes, Benz",
    "applications": "Mercedes-Benz E55-AMG V8-5.5L 2003-2005",
    "source": "19"
  },
  {
    "zoren_no": "ZRM0004016",
    "oem_no": "2214708494",
    "car_maker": "Mercedes, Benz",
    "applications": "Mercedes-Benz CL500 2005-2011, Mercedes-Benz CL550 2007-2012, Mercedes-Benz S350 2006-2013, Mercedes-Benz S400 2010-2013, Mercedes-Benz S450 2008-2011, Mercedes-Benz S500 2006-2011, Mercedes-Benz S550 2007-2013, Mercedes-Benz S600 2006-2013, Mercedes-Benz S63 for amg 2008-2013",
    "source": "19"
  },
  {
    "zoren_no": "ZRM1501068",
    "oem_no": "218470094, 2184700394",
    "car_maker": "Mercedes, Benz",
    "applications": "C63 V8 6.3L 2008-2011, Benz E-Class E260L/E320L (W212) 2009-2016",
    "source": "22"
  },
  {
    "zoren_no": "ZRM1501114",
    "oem_no": "2044700294",
    "car_maker": "Mercedes, Benz",
    "applications": "C-klasse T modeli S204 C180CGI 2007-2014, C-klasse T modeli S204 C200CGI 2007-2014, C-klasse T modeli S204 C250CGI 2009-2014, Es-klasse W212 E200/E250 2009-2016, Es-klasse Cabriolet A207 E200CGI/E 250CGI 2010-2016, E-klasse Coupe C207E 200CGI 2010-2016",
    "source": "22"
  },
  {
    "zoren_no": "ZRM1501115",
    "oem_no": "2054701594",
    "car_maker": "Mercedes, Benz",
    "applications": "Mercedes-benz GLC X253 2012-2015, MERCEDES-BENZ C300 2015-2017, MERCEDES-BENZ C400 2015, MERCEDES-BENZ C450 AMG 2016, MERCEDES-BENZ E300 2017-2018, MERCEDES-BENZ GLC300 2016",
    "source": "22"
  },
  {
    "zoren_no": "ZRM1501129",
    "oem_no": "2044700894",
    "car_maker": "Mercedes, Benz",
    "applications": "Mercedes-Benz C300 3.0L 2008-2012, Mercedes-Benz GLK350 3.5L 2010-2012, Mercedes-Benz C250 3.5L 2012-2014, Mercedes-Benz C350 3.5L 2008-2011",
    "source": "22"
  },
  {
    "zoren_no": "ZRM1501130",
    "oem_no": "2044701394",
    "car_maker": "Mercedes, Benz",
    "applications": "Mercedes-Benz GLK350 3.5L 2010-2012, Mercedes-Benz C250 1.8/2.0L 2012-2015, Mercedes-Benz E550 3.5L 2010-2011, W204/212",
    "source": "22"
  },
  {
    "zoren_no": "ZRM1501131",
    "oem_no": "2114704594, A2114700000, A2114701794",
    "car_maker": "Mercedes, Benz",
    "applications": "Mercedes Benz A209 C209 CLS55, W211 E55 2003-2004, W211/CLS55AMG",
    "source": "22"
  },
  {
    "zoren_no": "ZRM1501132",
    "oem_no": "1714700990",
    "car_maker": "Mercedes, Benz",
    "applications": "Mercedes-Benz S550 5.5L 2007-2008, Mercedes-Benz CL550 5.5L 2007-2008, W216/W221/W171",
    "source": "24"
  },
  {
    "zoren_no": "ZRM1501133",
    "oem_no": "2114703994",
    "car_maker": "Mercedes, Benz",
    "applications": "Mercedes-Benz E500 5.0L 2002-2008, Mercedes-Benz E320 3.2L 2002-2008, Mercedes-Benz E55 AMG 5.2L/5.4L 2002-, Mercedes-Benz E280 3.0L 2007-2009, Mercedes-Benz CLS350 3.5L 2009-2011, W211, Mercedes-Benz CLK500 3.0L 2003-2006",
    "source": "24"
  },
  {
    "zoren_no": "ZRM1501134",
    "oem_no": "2114704094",
    "car_maker": "Mercedes, Benz",
    "applications": "MercedesBenz CLK550 AMG 5.5L 2004-2011, Mercedes-Benz C280 3.0L 2007-2007, Mercedes-Benz C230 2.5L 2007-2007",
    "source": "24"
  },
  {
    "zoren_no": "ZRM1294037",
    "oem_no": "A2044701394, 2044701394, 705656120, 72883, A2C53327635Z, 519700000229, V30090084, 7.05656.12.0",
    "car_maker": "Mercedes, Benz",
    "applications": "Mercedes-Benz E350 2.5L 2008-2009, Mercedes-Benz C350 3.5L 2008-2011, Mercedes-Benz C300 3.0L 2008-2012, Mercedes-Benz GLK350 3.5L, Mercedes-Benz C250 3.5L 2012-2015, Mercedes-Benz E550 3.5L 2010-2011",
    "source": "24"
  },
  {
    "zoren_no": "ZRM1501144",
    "oem_no": "1664701794, A1664701794, SP5163M, 2202-535849, 2202535849, FG1611",
    "car_maker": "Mercedes, Benz",
    "applications": "2012-2017 Mercedes-Benz ML350 4.7L/3.5L, 2015-2017 Mercedes-Benz ML400 3.0L, 2013-2016 Mercedes-Benz ML550 4.7L/3.5L, 2013-2016 Mercedes-Benz GL550 4.7L, 2012-2018 Mercedes-Benz GL63 AMG 5.5L, 2016-2018 Mercedes-Benz GLE400 5.5L",
    "source": "24"
  },
  {
    "zoren_no": "ZRM1294086",
    "oem_no": "A4474706500, A1664702395, A4474700694",
    "car_maker": "Mercedes, Benz",
    "applications": "Mercedes-Benz Metris 2.0L 2016-2020, Mercedes Vito W447 V 260 V-class 2016-2018",
    "source": "24"
  },
  {
    "zoren_no": "ZRM1293441",
    "oem_no": "A1664702994",
    "car_maker": "Mercedes, Benz",
    "applications": "Mercedes Benz W166 Gle 2.2 2015-2019, MERCEDES BENZ GLE250d GLE300d GLE350d 2016-2019, Mercedes-Benz ML350 2012-2014 3.0L, Mercedes-Benz GL350 2013-2016 3.0L Diesel",
    "source": "26"
  },
  {
    "zoren_no": "ZRM1194046",
    "oem_no": "1525.Q7",
    "car_maker": "Peugeot, Citroen",
    "applications": "Citroen Xantia 1.8L 1995-2003, Citroen Synergie MPV 1997-2002, Peugeot 806 MPV 1.8L 1995-2002, Peugeot 306 1.8 16V, Peugeot 406 1.6/1.8/2.0",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1054013",
    "oem_no": "9631944080, 9625452240, 1525.77, 9625452280",
    "car_maker": "Peugeot",
    "applications": "Peugeot 307 16V 1.6 2000-2001",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1292001",
    "oem_no": "9737409900",
    "car_maker": "Peugeot, Citroen",
    "applications": "Citroen C5 2.0L 2.3L 3.0, PEUGEOT 508 2.0 3.0",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1292002",
    "oem_no": "9670251480",
    "car_maker": "Peugeot, Citroen",
    "applications": "Peugeot 206 207 307 308 408, Citroen Sega C2 C4",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1292003",
    "oem_no": "",
    "car_maker": "Peugeot",
    "applications": "Peugeot 307 2016",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1293077",
    "oem_no": "1525.QA, 1607402180",
    "car_maker": "Peugeot, Citroen",
    "applications": "Peugeot 207 06-12, Citroën C2 03-09, Citroen C3 Picasso MPV 1.6L L4 2009-2017",
    "source": "30"
  },
  {
    "zoren_no": "ZRM1501165",
    "oem_no": "1525.Y1, E10207M, 0986580256, 09732009903, 9642124080, EF4014, XFP8014, 775072, 72162, 72162A2, 133333, 7506585, 44055z, FDB1043, 22300, 76585, 2250037, 7.00468.19.0, 39220, EFP533, FP5305, LFP314, V42-09-0003, 320900158, WG1012825",
    "car_maker": "Peugeot, Citroen",
    "applications": "CITROEN C3 I Pluriel 1.1 i 1.4 16V Bivalent 1.6 02-15, PEUGEOT 206 1.1 i 1.4 16V 1.6 2000-2009",
    "source": "30"
  },
  {
    "zoren_no": "ZRM1163034",
    "oem_no": "8200307403, 72024388R, 6001547605, 8200704685, 8200900036, 8200903680, 8200903683",
    "car_maker": "RENAULT, Dacia",
    "applications": "Renault Logan 2004-2007, Sandero 2009-2010, Dacia Duster 1.6 petrol 16V 105 bhp 4x4 2009->2013",
    "source": "31"
  },
  {
    "zoren_no": "ZRM1501015",
    "oem_no": "8200432671, 8300432671, 8200680583, DPS6104",
    "car_maker": "RENAULT",
    "applications": "RENAULT KANGOO 1.6 16V MPV 1997-2019",
    "source": "31"
  },
  {
    "zoren_no": "ZRM1163036",
    "oem_no": "172022047R, 775532, 72790, 7507414, 22118, 77414, 7.05656.67.0, 320900679, WG1013289, WG1354017, WG1778819",
    "car_maker": "RENAULT, Dacia",
    "applications": "Dacia Sandero 2008-2019",
    "source": "31"
  },
  {
    "zoren_no": "ZRM1501177",
    "oem_no": "172022377R, 172027232R, E10824M, 72791A2, 7507415E, 77415E, 320901113, WG1898866",
    "car_maker": "Renault, Dacia",
    "applications": "Dacia Sandero II 2012/10-2020/12, Dacia Logan MCV II 2012/02-2020/12 1.2L",
    "source": "31"
  },
  {
    "zoren_no": "ZRM1203042",
    "oem_no": "8200432671, 8200680583, 72405, 7507082, FDB1951, 77082, 7.02552.39.0, 39357, EFP671, FP5479, LFP444, 72405A2, 7507082E, 77082E, 320901273",
    "car_maker": "RENAULT",
    "applications": "RENAULT Kangoo Express 1.6 16V FC0S KCOL 2001-",
    "source": "31"
  },
  {
    "zoren_no": "ZRM1501205",
    "oem_no": "320900407, WG1013041, WG1025945, 172020029R",
    "car_maker": "RENAULT",
    "applications": "RENAULT FLUENCE 2012-2016, RENAULT MEGANE 2008-2010",
    "source": "31"
  },
  {
    "zoren_no": "ZRM1153104",
    "oem_no": "172021121R",
    "car_maker": "RENAULT",
    "applications": "RENAULT Dacia Duster 2012-2016",
    "source": "32"
  },
  {
    "zoren_no": "ZRM1163065",
    "oem_no": "172025272R",
    "car_maker": "RENAULT",
    "applications": "RENAULT Duster 2012-2021",
    "source": "32"
  },
  {
    "zoren_no": "ZRM1153077",
    "oem_no": "172020029R",
    "car_maker": "RENAULT",
    "applications": "RENAULT FLUENCE 2012-2016, RENAULT MEGANE 2008-2010",
    "source": "32"
  },
  {
    "zoren_no": "ZRM1162001",
    "oem_no": "6001547604, 8200306918, S200704684",
    "car_maker": "RENAULT, DACIA",
    "applications": "RENAULT DACIA LOGAN 2007-2009",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1162123",
    "oem_no": "E10365M, 8200683199, 8200027963, 0986580312, 1704200QAA, E10365M, 8200683298, 83080273",
    "car_maker": "RENAULT",
    "applications": "RENAULT Clio II III, Thalia MAGNETI MARELLI 2002-2017",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1501146",
    "oem_no": "172025758R-A",
    "car_maker": "RENAULT, DACIA",
    "applications": "DACIA DOKKER 2012-2020, DOKKER EXPRESS 2012-2013, LODGY 2012-2020",
    "source": "29"
  },
  {
    "zoren_no": "ZRM1163005",
    "oem_no": "8200130191, 8200683188",
    "car_maker": "RENAULT",
    "applications": "Renault Megane MK II 1.4/1.6/2.0 16V 2002-2017",
    "source": "29"
  },
  {
    "zoren_no": "ZRM0004013",
    "oem_no": "7L6919087F",
    "car_maker": "VW",
    "applications": "2004-2006 Volkswagen Touareg V6, 2004-2007 Volkswagen Touareg V8 left",
    "source": "34"
  },
  {
    "zoren_no": "ZRM0004014",
    "oem_no": "7L6919087G",
    "car_maker": "VW",
    "applications": "2004-2006 Volkswagen Touareg V6, 2004-2007 Volkswagen Touareg V8 RIGHT",
    "source": "34"
  },
  {
    "zoren_no": "ZRM0004015",
    "oem_no": "7L8919087B",
    "car_maker": "VW, AUDI",
    "applications": "AUDI Q7 (4LB) 3.0 TFSI quattro 2011-2015, VW TOUAREG (7LA, 7L6, 7L7) 3.6 V6 2005-2010, VW TOUAREG (7LA, 7L6, 7L7) 4.2 V8 2006-2010",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1074039",
    "oem_no": "1J0919087H, 1J0919091C, 1J0919098H, 1J0919087J, 1J0919051C, 6X0919051G, 8X0919051C",
    "car_maker": "VW",
    "applications": "2009-2017 Volkswagen CC 2.0L L4 Turbocharged",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1144012",
    "oem_no": "56D919051B, 3C8919051A",
    "car_maker": "VW",
    "applications": "2009-2010 Volkswagen CC 3.6L V6, 2013 Volkswagen CC 3.6L V6, 2006-2010 Volkswagen Passat 2.0L L4 Turbocharged, 2006-2008 Volkswagen Passat 3.6L V6, 2012-2016 Volkswagen Passat 3.6L V6, 2014-2016 Volkswagen Passat 1.8L L4 Turbocharged",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1144017",
    "oem_no": "8R0919051E, 8R0919051H",
    "car_maker": "VW, AUDI",
    "applications": "AUDI Q5 2.0L 2013-2017, Macan 2015-2018, SQ5 2014-2017",
    "source": "34"
  },
  {
    "zoren_no": "ZRM1095001",
    "oem_no": "16146752499, 16146752942, E8416M",
    "car_maker": "BMW",
    "applications": "BMW 325i 01-05 325ci 01-05 330ci 01-05 323i 99-00",
    "source": "37"
  },
  {
    "zoren_no": "ZRM1084007",
    "oem_no": "16141182842, 16141380504, 1415700100",
    "car_maker": "BMW",
    "applications": "BMW 3er E36 318i 93-98, 316i 90-93, 328i 95-98, 320i 93-99, 318is 92-95, M3 3.0 92-95",
    "source": "37"
  },
  {
    "zoren_no": "ZRM1084005",
    "oem_no": "161431183845, 16141184279, 16146750839",
    "car_maker": "BMW",
    "applications": "BMW 3 Touring (E46) 318 d 02-05 320 d 00-01 330 d 99-05 330 xd 03-05",
    "source": "37"
  },
  {
    "zoren_no": "16117195463",
    "oem_no": "16117195463",
    "car_maker": "BMW",
    "applications": "2007-2010 BMW E70 X5 3.0L L6",
    "source": "37"
  },
  {
    "zoren_no": "ZRM1184001",
    "oem_no": "4F0919051BA, 4F0919051BC, 4F0919087C, A2C53177497, 4F0919051AG",
    "car_maker": "VW, Audi",
    "applications": "Audi A6 4F2, C6 2.0L 2004-2011",
    "source": "38"
  },
  {
    "zoren_no": "ZRM1144025",
    "oem_no": "8R0919051N",
    "car_maker": "VW, Audi",
    "applications": "Audi Q5 2.0L 2011-2012, AUDI Q5 3.2L 2009-2012",
    "source": "38"
  },
  {
    "zoren_no": "16117195464",
    "oem_no": "16117195464",
    "car_maker": "BMW",
    "applications": "BMW X5 (2007-2008) -4.8i, BMW X5 (2009-2010) - xDrive48i",
    "source": "39"
  },
  {
    "zoren_no": "ZRM1094002",
    "oem_no": "16116755046",
    "car_maker": "BMW",
    "applications": "2000-2006 BMW X5",
    "source": "39"
  },
  {
    "zoren_no": "ZRM1501066",
    "oem_no": "16117159604, 16146766157",
    "car_maker": "BMW",
    "applications": "BMW E83 X3 2.0i 2.5i 3.0i N46 M54 2004-2010",
    "source": "39"
  },
  {
    "zoren_no": "ZRM1501067",
    "oem_no": "160-170-0794, 363-476-0232",
    "car_maker": "Mercedes, Benz",
    "applications": "Mercedes-Benz ML320 1998-2003 3.2L V6, Mercedes-Benz ML55 AMG 2000-2003 5.5L V8, Mercedes-Benz ML500 2002-2005 5.0L V8, Mercedes-Benz ML350 2003-2005 3.7L V6, Mercedes-Benz 1430 1999-2001 4.3L V8",
    "source": "39"
  },
  {
    "zoren_no": "ZRM1063004",
    "oem_no": "161173735, 7373503, 161173503",
    "car_maker": "BMW",
    "applications": "BMW 5 E60 2006-2010, BMW 525i 525Xi 528i 528i, 530i 530Xi",
    "source": "39"
  },
  {
    "zoren_no": "ZRM1154002",
    "oem_no": "16117197076, 16147163297, 705656160, A2C53101330Z, FG15051281, 519700000230, V20090470, 7.05656.16.0",
    "car_maker": "BMW",
    "applications": "BMW 330i 3.0L 2004-2007, 2004-2005 BMW 320i 2.2L, 2005-2011 BMW 120i 2.0L, 2006-2008 BMW 323i 2.5L, BMW 335i 2.0L 2007-2010, BMW 130i 3.0L 2012-2014, BMW X1 1.2L",
    "source": "39"
  },
  {
    "zoren_no": "ZRM1154003",
    "oem_no": "A2C53025280, E8688M, FG0917, 16147163298, P76486M",
    "car_maker": "BMW",
    "applications": "BMW 125i 2008-2013, BMW 128i 2008-2013, BMW 130i 2008-2013, 135i 2008-2013, 330i, 3310, X1 2013-2014",
    "source": "39"
  }





]; 
// 2. LOGIC SECTION (CODES)
// ==========================================

// DOM Elements
const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');
const resultCount = document.getElementById('resultCount');

// Function to render table rows
function renderTable(data) {
    tableBody.innerHTML = ''; // Clear current table

    // Check if no results
    if (data.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No results found</td></tr>';
        if(resultCount) resultCount.textContent = '0 records found';
        return;
    }

    // Update result count (FIXED: Added backticks ` `)
    if(resultCount) resultCount.textContent = `Showing ${data.length} records`;

    // Loop through data and create rows
    data.forEach(part => {
        const row = document.createElement('tr');
        
        // Create HTML for the row (Safe check || '' added to prevent "undefined")
        row.innerHTML = `
            <td>${part.zoren_no || ''}</td>
            <td>${part.oem_no || ''}</td>
            <td>${part.car_maker || ''}</td>
            <td>${part.applications || ''}</td>
            <td>${part.source || ''}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Function to filter data
function filterData(searchTerm) {
    // Trim removes spaces from start/end, toLowerCase makes it case-insensitive
    const lowerTerm = searchTerm.toLowerCase().trim();

    const filteredData = partsData.filter(part => {
        // Check if search term exists in any of the relevant fields
        // Added (|| "") to ensure code doesn't crash if a field is missing in your data
        return (
            (part.zoren_no || "").toLowerCase().includes(lowerTerm) ||
            (part.oem_no || "").toLowerCase().includes(lowerTerm) ||
            (part.car_maker || "").toLowerCase().includes(lowerTerm) ||
            (part.applications || "").toLowerCase().includes(lowerTerm)
        );
    });

    renderTable(filteredData);
}

// Event Listener for Search Input
if(searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        filterData(e.target.value);
    });
}

// Initial Render (Loads all data when page opens)
// Checks if data exists first to prevent errors
if (typeof partsData !== 'undefined' && partsData.length > 0) {
    renderTable(partsData);
} else {
    console.log("Waiting for data to be pasted...");
}
