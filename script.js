// ======================================================
// 1. MODULE IMPORTS
// ======================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    onSnapshot, 
    query, 
    orderBy, 
    Timestamp 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ======================================================
// 2. STATIC DATABASE (ALL BRANDS MERGED & FIXED)
// ======================================================
const staticDatabase = [
  // ================= HYUNDAI / KIA =================
  { zoren: "ZRM0003011", oem: ["31110-09000", "E8678M"], name: "Fuel Pump Assembly", car_maker: "Hyundai", applications: "HYUNDAI SONATA 2.0 / KIA OPTIMA 2001-2005" },
  { zoren: "ZRM0003012", oem: ["31110-3K300"], name: "Fuel Pump Module", car_maker: "Hyundai", applications: "HYUNDAI Sonata" },
  { zoren: "ZRM0003013", oem: ["31110-2E300", "31110-2E000"], name: "Fuel Pump Assembly", car_maker: "Hyundai", applications: "HYUNDAI TUCSON 2005-2009 Kia Sportage" },
  { zoren: "ZRM0003027", oem: ["31110-17005"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Elantra Lavita (FC), 1.6L/1.8L, Hyundai Matrix (FC) 1.6 2001-2010" },
  { zoren: "ZRM0003031", oem: ["31110-0S100", "31110-0S000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Kia Cerato 2005-2012" },
  { zoren: "ZRM0003036", oem: ["31110-26510", "E8663M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai SANTA FÉ 2001-2006" },
  { zoren: "ZRM0003052", oem: ["31110-2H000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Elantra 2.0L 2007-2012" },
  { zoren: "ZRM0003088", oem: ["31110-26500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe 2.4L 2.7L 2001-2005" },
  { zoren: "ZRM0003101", oem: ["31110-3A400"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Trajet 2.0 2004/01 - 2008/07" },
  { zoren: "ZRM1003004", oem: ["31110-1C000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Getz 1.1L/1.3L/1.6L 2002-2008" },
  { zoren: "ZRM1003007", oem: ["31110-25000", "31110-25010"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Accent 1.3L 1.5L 1994-2000" },
  { zoren: "ZRM1003008", oem: ["31110-25600"], name: "Fuel Pump", car_maker: "Hyundai", applications: "HYUNDAI ACCENT 1994-2000 APMIRA KASA 2000-2006" },
  { zoren: "ZRM1123001", oem: ["31110-4M000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Sonata8 for KIA K5" },
  { zoren: "ZRM1123002", oem: ["31110-3R000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Sonata KIA Optima Hybrid 2.4L 2011-2013" },
  { zoren: "ZRM1123003", oem: ["31110-3R100"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Sonata Azera KIA OPTIMA 2010-2014" },
  { zoren: "ZRM1123004", oem: ["K30A-13-35ZB"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Kio Rio Saloon 2000-2005" },
  { zoren: "ZRM1123006", oem: ["31110-3Q700", "31110-3Q600", "E9120M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Kia Optima 11-15 Sonata 11-14 2.4 L4" },
  { zoren: "ZRM1123007", oem: ["31110-4R500", "E9122M", "31110-3L800"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Sonata & KIA Optima fg1631 2011-2013" },
  { zoren: "ZRM1153007", oem: ["31110-1H000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai i30 07-12 KIA CEED 06-12" },
  { zoren: "ZRM1163001", oem: ["31110-0Q000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "HYUNDAI Elantra 2008-" },
  { zoren: "ZRM1163002", oem: ["31110-2Z100", "31110-2Q500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "HYUNDAI Tucson iX35 2010-2013 Sportage 10" },
  { zoren: "ZRM1163007", oem: ["31110-1J000", "31110-0X000", "31110-1P000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai I20 Petrol 2009-2013 build 2010 Hyundai I10, 2008/11-2015/12, 1.2L" },
  { zoren: "ZRM1163008", oem: ["31110-1M500", "31110-1M000", "31110-1M200"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Elantra i10, i20 2008-2015 Kia Forte 2.0L-L4 2010-2013, I30 Kia Cerato, Forte, Sorento 2008" },
  { zoren: "ZRM1163010", oem: ["31110-B3000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Mistra" },
  { zoren: "ZRM1163011", oem: ["31110-2S200"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Tucson ix35 10-14 Kia Sportage III 10-14" },
  { zoren: "ZRM1163012", oem: ["31110-2W400", "31110-2W200", "31110-2W300"], name: "Fuel Pump", car_maker: "Hyundai", applications: "SANTA FÉ ix45 2.4L 2006-2017" },
  { zoren: "ZRM1163013", oem: ["31110-2W700"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai New SantaFe IX45 2.0T" },
  { zoren: "ZRM1163014", oem: ["31110-2P000", "31110-2P400"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai TUCSON (JM) ,2.0L/2.7L, 2004/08 - 2010/03 KIA SORENTO (XM) ,2.4L, 2009/11 - 2014 KIA Sportage 2.0L/2.7L,2004/09-2014" },
  { zoren: "ZRM1163015", oem: ["31110-2S100"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Tucson ix35 2010-2014 Kia Sportage 2010-2014" },
  { zoren: "ZRM1163016", oem: ["31110-C9000", "31110-A0000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Creta ix25 Cantus 1.6L ix25 2014-2018" },
  { zoren: "ZRM1164003", oem: ["31110-0U000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "VERNA 1.6L 2008" },
  { zoren: "ZRM1183004", oem: ["31110-2D030", "1000-110540", "31110-2D000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "HYUNDAI iX35 Tucson 10-13 Sportage 10" },
  { zoren: "ZRM1183007", oem: ["31110-4X000", "E10814M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "KIA RIO MK3 1.4 2011-2017 Hyundai Accent 2010 RIO LX UB 09/2011-on 4-D Hatch 1.4L G4FA" },
  { zoren: "ZRM1183011", oem: ["31110-1G000", "31110-0M000", "31110-1E000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Accent III 1.4gl, 2005/2011 Rio2005-2011" },
  { zoren: "ZRM1183012", oem: ["31110-3X000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai i30 GD 2011-2015, Veloster 2011-2015, Avante MD 2010-2015, KIA K3 2012" },
  { zoren: "ZRM1183013", oem: ["E8730M", "31110-1G500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Kia Accent Elantra Rio Rio5 06-11" },
  { zoren: "ZRM1183015", oem: ["31110-2C631", "E8529M", "69861", "P76527M", "FE0351", "FG0792", "SP3011M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Tiburon 2.7L V6 2003-2008" },
  { zoren: "ZRM1183024", oem: ["31110-2F000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "KIA CERATO Hatchback 2.0 2004-2009" },
  { zoren: "ZRM1183026", oem: ["31110-07150", "31110-07600", "31110-07000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Kia Morning Picanto 1.0i/1.1i 2004-2017" },
  { zoren: "ZRM1183027", oem: ["31110-2B000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe CM 2.7 V6 2006-2012" },
  { zoren: "ZRM1183034", oem: ["31110-1R500", "31110-2V500", "31110-1W500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Elantra 2015-2014, Elantra Coupe 2014, Elantra GT 2014, Veloster 2015-2012, Kia Forte 2015-2014, Forte5 2015-2014, Forte Koup 2015-2014 Carter" },
  { zoren: "ZRM1183039", oem: ["31110-2K600", "E8995M", "P77043M", "SP1392", "23010085", "FG1281", "31111-3L800", "P76753M", "SP3044M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Kia Soul 1.6L 2.0 2012-2013" },
  { zoren: "ZRM1293055", oem: ["31110-3X500", "E9073M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Elantra 1.8L 2011-2015" },
  { zoren: "ZRM1293100", oem: ["31110-0W000", "31110-1U000", "31110-5U000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe 2.7L 3.3L 2007-2009" },
  { zoren: "ZRM1501010", oem: ["31110-C1200", "31110-D6000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Sonata 5 Sonata 6 Kia Optima 2016-UP" },
  { zoren: "ZRM1501011", oem: ["31110-4Z500", "31110-4Z000", "E9217M", "FG1904", "SP3085M", "A30491"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe Sport 2013-2017 Kia Sorento 2014-2015" },
  { zoren: "ZRM1501021", oem: ["31110-4H500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai H-1 H1 MPV Wagon 2008-2018" },
  { zoren: "ZRM1183050", oem: ["31110-2V210", "31110-3X210", "31110-A1450", "31110-A7250", "31110-3X200"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hundai Elantra E130 2011-2015 KIA K3 Cerato 2013" },
  { zoren: "ZRM1501027 / ZRM1433005", oem: ["31110-F2100"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Elantra AD G4FG 1.6L 2015-2018" },
  { zoren: "ZRM1501036", oem: ["31110-C5000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "KIA Sorento 2.4L 2014-2017" },
  { zoren: "ZRM1501032", oem: ["31110-1W000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "KIA RIO III (UB) 1.25 CVVT 09/2011 -2018" },
  { zoren: "ZRM1501042 / ZRM1163060", oem: ["31110-B4000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "HYUNDAI grand i10 2015-2016, Grand Avega 2011-2016, Grand Santa Fe 2015-2016" },
  { zoren: "ZRM0003056", oem: ["31110-38200"], name: "Fuel Pump", car_maker: "Hyundai", applications: "KIA Optima 2001-2002, Sonata 2001-2005 2.7L/2.4L, HYUNDAI SONATA MK III 2.0L 16V 1996-1997 Saloon 2001-2004" },
  { zoren: "ZRM1123012", oem: ["31110-2S510"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Tucson 2012-2013 L4 2.0L/2.4L, KIA Sportage 2012-2013 L4 2.4L" },
  { zoren: "ZRM1183010", oem: ["31110-2G000", "31110-2G500", "31110-2G200"], name: "Fuel Pump", car_maker: "Hyundai", applications: "KIA Magentis 2.0L 2.7L 2005-2010" },
  { zoren: "ZRM1293163", oem: ["E8821M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "HYUNDAI SANTA FE V6-2.7L V6-3.3L 2009-2007" },
  { zoren: "ZRM1183058", oem: ["31110-1R000", "31110-2R000", "31110-1R100"], name: "Fuel Pump", car_maker: "Hyundai Kia", applications: "Kia RIO III 2011-2017, Hyundai Accent IV 2010-2017" },
  { zoren: "ZRM1501024 / ZRM1183091", oem: ["31110-2B900"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe 2006-2012" },
  { zoren: "ZRM1501070", oem: ["31110-02000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Atos 1.0L 1998-2002" },
  { zoren: "ZRM1501084", oem: ["27510-31000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai SM3 1992-1996" },
  { zoren: "ZRM1501093", oem: ["31110-4D600"], name: "Fuel Pump", car_maker: "KIA", applications: "KIA MPV VQ 2.7L, KIA Grand Carnival 2.7 3.5 3.8L 2005-2014" },
  { zoren: "ZRM1501094 / ZRM1183087", oem: ["31110-2J400", "31110-2J600", "E9000M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "KIA Borrego Mohave 3.8L V6 2008-2012" },
  { zoren: "ZRM1163021", oem: ["31110-2S000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Kia Sportage 2.0 Diesel 2010-2013, Hyundai Tucson 2.0 Diesel 2009-2013" },
  { zoren: "ZRM1183092", oem: ["31110-1R200"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Accent, KIA Rio III 2010-2017." },
  { zoren: "ZRM1501079", oem: ["31110-2E960", "31110-1F980"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Tucson Sportage 2004-2010 DIESEL" },
  { zoren: "ZRM1501099 / ZRM1293516", oem: ["31110-4Z000", "31110-4Z500", "WAITH SENSOR", "E9217M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe Sport 2.0T 2013-2017, Kia Sorento 3.3L 2014-2015" },
  { zoren: "ZRM1501108", oem: ["31110-3K600"], name: "Fuel Pump", car_maker: "Hyundai", applications: "ACCENT 2005-2008, SANATA 1989-2015" },
  { zoren: "ZRM1501110", oem: ["31110-A0000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Creta 1.6L 2015-2018" },
  { zoren: "ZRM1501111 / ZRM1283007", oem: ["31110-D3500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Tucson 1.6L 2015-2016, Kia Sportage 2.4L 2017-2021" },
  { zoren: "ZRM1501112", oem: ["31110-D7100"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai KIA Sportage / SEURPF116 / SEURPF119 2016-2020" },
  { zoren: "ZRM1501097 / ZRM1183084", oem: ["31110-1D000", "2000-A81480"], name: "Fuel Pump", car_maker: "Hyundai", applications: "KIA Carens III UN 2.0 2006-2010, KIA Carens III UN 2.0 CVVT 2009-2018" },
  { zoren: "ZRM1501125", oem: ["31110-C7000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai I20 ACTIVE 2015-2021" },
  { zoren: "ZRM1501123", oem: ["31110-F3500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Elantra Forte 1.4L 1.6L 2.0L 2017-2020" },
  { zoren: "ZRM1501124", oem: ["31110-J9500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Kona 1.6L/2.0L 2018-2020" },
  { zoren: "ZRM1501137", oem: ["31110-D7000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Kia Sportage 2015-2019 1.6L, Hyundai Tucson 2015/06-2020/12 1.6L 2WD" },
  { zoren: "ZRM1501155", oem: ["31110-C2500", "31110-D5500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "KIA Optima, Hyundai Sonata 1.6L 2.0L 2.4 L 2015-2020" },
  { zoren: "ZRM1293168", oem: ["31110-F9000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Yuena 1.4L 2016-2019" },
  { zoren: "ZRM1501122", oem: ["31110-3J000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai IX55 Veracruz 3.0L 2006-2023 V6 24V DIESEL" },
  { zoren: "ZRM1501139", oem: ["31110-D3100"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai TUCSON, KIA SPORTAGE 2015-" },
  { zoren: "ZRM1501167", oem: ["31110-F0000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai ELANTRA 1.6L L4 2016-2022" },
  { zoren: "ZRM1501172", oem: ["31110-B8500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe V6 3.3L 2013-2020" },
  { zoren: "ZRM1501175", oem: ["31120-H6000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Accent 2018-2021" },
  { zoren: "ZRM1501176", oem: ["31112-C6200", "31110-C6200", "31120-C6200", "DFG2311", "MM048", "809GE", "94460-C5000", "FHY21"], name: "Fuel Pump", car_maker: "KIA", applications: "Kia Sorento 2.0L/2.4L/3.3L 2016-2020" },
  { zoren: "ZRM1501178", oem: ["31110-D3000"], name: "Fuel Pump", car_maker: "Hyundai KIA", applications: "Hyundai Tucson 1.6T 2015/06-2020/12, KIA Sportage 1.6T 2015/09-2021/12" },
  { zoren: "ZRM1501180", oem: ["31110-C3500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Sonata 9th Generation 2015-2017 2.4L1.6T" },
  { zoren: "ZRM1501169", oem: ["31110-AA000", "31112-AA000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Elantra 2.0L 2021-2023" },
  { zoren: "ZRM1163006", oem: ["31110-2P900"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe 2009-2021, KIA Sorento 2009-2021 diesel" },
  { zoren: "ZRM1163022", oem: ["31110-2W900"], name: "Fuel Pump", car_maker: "Hyundai KIA", applications: "Hyundai Santa Fe 2012-2015, Kia Sorento 2012-2018 Diese" },
  { zoren: "ZRM1283012", oem: ["31110-A9900"], name: "Fuel Pump", car_maker: "KIA", applications: "KIA Carnival 2015-2023 2.2L DIESEL" },
  { zoren: "ZRM1183121", oem: ["31110-3J500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Veracruz 3.8L 2007-2012" },
  { zoren: "ZRM1083103", oem: ["F01R00S406", "LRC181BA0-1335XG"], name: "Fuel Pump", car_maker: "BESTUNE", applications: "BESTUNE X40/B30/SENIA R7/JUMPAL A70" },
  { zoren: "ZRM1501185", oem: ["31110-26350"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Santa Fe 2.4L 3.5L 2002-2006" },
  { zoren: "ZRM1501186", oem: ["31110-4H000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai (import) H-1 Travel (TQ) 2.5 CRDI 2007-2015" },
  { zoren: "ZRM1123022", oem: ["31110-B1000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Genesis 2015 -2016, Genesis G80 2017-2020" },
  { zoren: "ZRM1283014", oem: ["31110-A9500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "KIA SEDONA 2015-2021" },
  { zoren: "ZRM1433007", oem: ["31110-G3200", "31110-G3300"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai KIA Cerato 2018 -2021" },
  { zoren: "ZRM1123008", oem: ["31110-3Q500", "E9036M", "SP3037M", "8644M", "P77064M"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Sonata 2011-2015 2.4L" },
  { zoren: "ZRM15001193", oem: ["31110-B2500", "31111-B2000", "94460-B2000", "003-11782", "FG1898", "SP3303M"], name: "Fuel Pump", car_maker: "KIA", applications: "Kia Soul 2014 -2015 1.6L 2.0L" },
  { zoren: "ZRM1501194", oem: ["31110-4N000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai EON 2011-2018" },
  { zoren: "ZRM1501202", oem: ["31110-02500"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Prime MX, KIA VISTO, ATOS 2001-2012" },
  { zoren: "ZRM1501208", oem: ["31110-H9000", "31120-H9000", "31110-F9000"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Yuena 1.4L 2016-2019" },
  { zoren: "ZRM1123021", oem: ["31110-3R800"], name: "Fuel Pump", car_maker: "Hyundai", applications: "Hyundai Azera 14 2011-2014" },
  
  // ================= TOYOTA (FIXED FORMATTING) =================
  { zoren: "ZRM1501163", oem: ["23210-BZ150"], car_maker: "TOYOTA", applications: "AVANZA 1.5L 2011-2015 3SZVE", name: "Fuel Pump" },
  { zoren: "ZR1501164", oem: ["77020-52231", "292010-0014", "292010-0013"], car_maker: "TOYOTA", applications: "SIENTA 2005- 1NZFE", name: "Fuel Pump" },
  { zoren: "ZRM1501171", oem: ["77010-0K200", "77010-0K201"], car_maker: "TOYOTA", applications: "HILUX 4Runne 2GDFTV, 2015-2020 DIESEL", name: "Fuel Pump" },
  { zoren: "ZRM1501166", oem: ["77020-05080"], car_maker: "TOYOTA", applications: "Avensis T22 1.8L 2000- 2003", name: "Fuel Pump" },
  { zoren: "ZRM1183068", oem: ["77020-47081", "77020-02C70"], car_maker: "TOYOTA", applications: "PRIUS 04/2009-10/2015, PRIUS (PLUG-IN HYBRID) 01/2012-05/2015 2ZRFXE", name: "Fuel Pump" },
  { zoren: "ZRM1183089", oem: ["77020-08070"], car_maker: "TOYOTA", applications: "SIENNA 2010-2020 2GRFKS", name: "Fuel Pump" },
  { zoren: "ZRM1203054", oem: ["0580313058", "77240-02050"], car_maker: "TOYOTA", applications: "COROLLA 5/1997-10/2001 3ZZFE/4ZZFE", name: "Fuel Pump" },
  { zoren: "ZRM1183146", oem: ["77020-26080"], car_maker: "TOYOTA", applications: "HIACE 2019-2021 7GRFKS", name: "Fuel Pump" },
  { zoren: "ZRM1183069", oem: ["77020-02270"], car_maker: "TOYOTA", applications: "MATRIX 2008-2014 2AZFE", name: "Fuel Pump" },
  { zoren: "ZRM1183159", oem: ["77020-F4040"], car_maker: "TOYOTA", applications: "TOYOTA C-HR 2017- 2021 3ZRFAE", name: "Fuel Pump" },
  { zoren: "ZRM1183167", oem: ["77020-02A00"], car_maker: "TOYOTA", applications: "COROLLA MZEA12,ZRE212 2ZRFAE, 2019-2022", name: "Fuel Pump" },
  { zoren: "ZRM1203063", oem: ["PE11-12-35X", "77020-WB001"], car_maker: "TOYOTA", applications: "Yaris 1.5L, Yaris iA 1.5L 2015-2019", name: "Fuel Pump" },
  { zoren: "ZRM1501197", oem: ["77020-05111"], car_maker: "TOYOTA", applications: "AVENSIS 07/2003-10/2008 1AZFSE", name: "Fuel Pump" },
  { zoren: "ZRM1501198", oem: ["77020-08031"], car_maker: "TOYOTA", applications: "SIENNA 01/2003-11/2009 3MZFE", name: "Fuel Pump" },
  { zoren: "ZRM1183199", oem: ["77020-12A60"], car_maker: "TOYOTA", applications: "COROLLA 2019-2021, TOYOTA ALTIS 2019-2022, TOYOTA PRIUS 2015-2018, TOYOTA C-HR 2016-2018, COROLLA SPORT 2018-2020", name: "Fuel Pump" },
  { zoren: "ZRM1501098, ZRM1183165", oem: ["77020-0R070"], car_maker: "TOYOTA", applications: "HARRIER HEV 11/2021 - 2022, TOYOTA RAV4 11/2019- 2020", name: "Fuel Pump" },
  { zoren: "ZRM1073004", oem: ["23210-BZ130"], car_maker: "TOYOTA", applications: "Avanza F653 F654, Rush F700, 3SZVE 1NRVE 2NRVE", name: "Fuel Pump" },
  { zoren: "ZRM1183095", oem: ["77020-60540"], car_maker: "TOYOTA", applications: "LAND CRUISER 2007- 2015 1URFE, LEXUS LX570 URJ201 09/2015-, LEXUS LX450D/460/570 2007- 2015 URJ20, LEXUS LX450D/570 2007-2015 URJ201,VDJ201", name: "Fuel Pump" },
  { zoren: "ZRM1501199", oem: ["77020-42240"], car_maker: "TOYOTA", applications: "HARRIER 06/2020- M20AFKS, RAV4 2018-2020 A25AFKS", name: "Fuel Pump" },
  { zoren: "ZRM1501200", oem: ["77020-F4030"], car_maker: "TOYOTA", applications: "COROLLA 2019-2020 1ZRFE, C-HR 10/2016-2020 3ZRFA", name: "Fuel Pump" },
  { zoren: "ZRM1501201", oem: ["77020-02C21"], car_maker: "TOYOTA", applications: "COROLLA 1.8L 2019- 2022, C-HR 2016-2019 2ZRFXE", name: "Fuel Pump" },
  { zoren: "ZRM1183178", oem: ["77020-0R060", "77020-0R061"], car_maker: "TOYOTA", applications: "RAV4 2018-2020 A25AFXS", name: "Fuel Pump" },
  { zoren: "ZRM1501195", oem: ["77020-48040"], car_maker: "TOYOTA", applications: "LEXUS RX 1 1997-2003", name: "Fuel Pump" },

  // --- TOYOTA (Standard Format) ---
  { zoren: "ZRM0973001", oem: ["E8937M", "E8722M", "77020-06121", "77020-06190", "77020-06120", "77020-06401", "77020-06220", "77020-06321", "77020-33200", "77020-06191"], name: "Fuel Pump Assembly", car_maker: "Toyota", applications: "Toyota Camry 2007-2011 Solara 2006-2008" },
  { zoren: "ZRM0973002", oem: ["77020-06220", "77020-06190", "P76820M", "E8722M", "FG1169", "SP9043M", "P76820M", "69932", "77020-06221"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Camry L4 2.5L 2007-2011, Solara 2007-2008 I4 2.4L(2AZFE), Mongolyl4 2.5L (2ARFE)" },
  { zoren: "ZRM0973003", oem: ["77020-06050"], name: "Fuel Pump", car_maker: "Toyota", applications: "Camry 2003-2005" },
  { zoren: "ZRM0973004", oem: ["77020-0D040", "77020-0D010"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Vios YARIS 1.0L-1.5L 1998-2005" },
  { zoren: "ZRM0973005", oem: ["77020-12460", "77020-02190", "77020-12450"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Allex, NZE121, NZE124, ZZE122, ZZE124, Toyota Corolla Fielder, CE121, NZE120, NZE121, NZE124, ZZE122, ZZE124, Toyota Corolla Runx, NZE121, NZE124, ZZE122, ZZE124, 1ZZFE Toyota Corolla Fielder, CE121G, NZE121G, NZE124G, ZZE122G, ZZE124 2001-2007" },
  { zoren: "ZRM1183001", oem: ["77020-02181", "77020-02291"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA COROLLA MATRIX VIBE 1.8L / 2.4L 2005 – 2011" },
  { zoren: "ZRM1183002", oem: ["77020-04061", "77020-04060", "E8756M", "E8757M", "77020-04071"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Tacoma 4.0L 2005-2015" },
  { zoren: "ZRM1183003", oem: ["77020-0K080"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Vigo 2TR-FE Champ 2004-2016" },
  { zoren: "ZRM1183020", oem: ["77020-60392", "77020-60340", "77020-60382", "77020-60372", "77020-60351", "77020-60352", "77020-60341", "77020-60362"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA LAND CRUISER GRJ200,URJ20*,UZJ200,VDJ200 2007-2015 1GRFE/, 2UZFE" },
  { zoren: "ZRM1183031", oem: ["77020-0N010", "77020-0N011", "77020-0N040", "77020-30380"], name: "Fuel Pump", car_maker: "Toyota", applications: "2005-2017 Reiz , GRX121 , GRX122 , GRX131 , GRX132, 2.5 / 3.0L, 2005-2018 Crown , GRS182 , GRS188 , GRS202 , GRS208 , 2.5 / 3.0L" },
  { zoren: "ZRM1183032", oem: ["77020-0K390", "77020-0K380", "77020-0K381", "77020-0K400"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA 2016-2019 HILUX 2.7L 1TRFE 4Runner Truck TGN120/121/126/136" },
  { zoren: "ZRM1183033", oem: ["77020-60590", "77020-60490", "77020-60580"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA LAND CRUISER 2007-2015 LEXUS LX450D/460/570 2007-2015 3URFE /1URFE/1GRFE" },
  { zoren: "ZRM1183036", oem: ["77020-60440", "77020-60410", "77020-35151", "77020-35102", "77020-35170", "77020-35171", "77020-35150", "77020-60411", "77020-35171", "77020-35130", "77020-35131", "77020-60441"], name: "Fuel Pump", car_maker: "Toyota", applications: "4RUNNER 2009-2013 LAND CRUISER PRADA 2009-2013 GRJ150 LEXUS GX400/460 2009-2012 URJ150" },
  { zoren: "ZRM1183037", oem: ["77020-35072", "77020-35092", "77020-35112", "77020-35070", "77020-35090", "77020-35071", "77020-35170", "77020-60340", "77020-60382", "77020-35080", "77020-60342"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA HILUX SURF 2002-2009 4RUNNER 2002-2009 land cruiser prado 2002-2009 GRJ120L 1GR-FE" },
  { zoren: "ZRM1183041", oem: ["77020-60320", "77020-60490"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA LAND CRUISER 2007-2015 GRJ200,URJ20*,UZJ200,VDJ200 URJ200L- GNTEKV VX, GCC, LHD, 3URFE, ATM, 6FC, LUB, G, 08S 1URFE LEXUS LX450D/460/570 3URFE 2007-2011" },
  { zoren: "ZRM1183042", oem: ["23220-0V030", "77020-0E030"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA HIGHLANDER 2.7L 2009-2014 LEXUS RX350 2010-2015 Lexus Rx270 2009-" },
  { zoren: "ZRM1183047", oem: ["77020-02630"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA Corolla 2014-2019 1ZRFE" },
  { zoren: "ZRM1183049", oem: ["77704-0D040", "77704-0D080", "23220-0M020", "77020-52330", "77020-0D120"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Vios YARIS 1.5L 2008-2013" },
  { zoren: "ZRM1184007", oem: ["77020-0C120", "77020-0C170", "E9199M", "P77054M", "FG1624", "SP9175M"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Sequoia/Tundra 2012-2018 V8 5.7L Flex" },
  { zoren: "ZRM1501001", oem: ["77020-0D180", "77020-0D190"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Yaris NSP15 2013,12-2021 Toyota Yaris NCP150 2014,09-2021 Toyota Vios NSP15 2013,11-2021 Toyota Yais/Vios/Limo NCP150 2014,04-2021 6NRFE/ 7NRFE/ 1NZFE,/ 2NZFE,4NRFE/5NRFE" },
  { zoren: "ZRM1501002 / ZRM1184011", oem: ["77020-0C090"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA SEQUOIA 5.7L V8 5663CC 345 CID FLEX 2009-2012 TOYOTA TUNDRA 5.7L V8 5663CC 345 CID FLEX 2009-2012" },
  { zoren: "ZRM1501003 / ZRM1183080", oem: ["77020-0R020", "77020-0R010"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota RAV4 L4-2.5L V6-3.5L 2009-2018" },
  { zoren: "ZRM1501005 / ZRM1183067", oem: ["77020-0R030"], name: "Fuel Pump", car_maker: "Toyota", applications: "2009/03-2013/07 RAV4 2.0L 2.4L ACA32 ACA33 ACA37 1AZFE, 5F/1AZFE, 4FC /2AZFE, 5F/2AZFE, 4FC" },
  { zoren: "ZRM1501006", oem: ["77020-60202", "77020-60212", "77020-35060", "77020-60211"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA LAND CRUISER PRADO 09/2002-02/2010 GRJ12*,KDJ120,KZJ120,LJ12*,RZ J12*,TRJ12* 2TRFE, MTM, 5F, 5D" },
  { zoren: "ZRM1501007", oem: ["77020-02070", "77020-02080"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Avensis, ZZT250, ZZT251, ZZT251L 2003-2008 Toyota Corolla, ZZE120, ZZE120L, ZZE121, ZZE121L 2003-2008 1ZZFE, 3ZZFE, 4ZZFE" },
  { zoren: "ZRM1501014", oem: ["77020-48010", "77020-48051", "E8840M"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA Lexus RX330 350 3.3L V6 2005-2008" },
  { zoren: "ZRM1183030", oem: ["P76713M", "FG0932", "9500218", "9510020", "9530004", "77020-0C070", "77020-0C071", "77020-0C072", "77020-0C080", "77020-0C082"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA SEQUOIA 2008-2009 V8-4.7L TOYOTA TUNDRA 2007-2014 V6-4.0L V8-4.7L" },
  { zoren: "ZRM1501028", oem: ["77020-12700", "77020-12570", "77020-02320", "77020-12081", "77020-02220", "77020-02710", "77020-02680", "77020-12860"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Auris, ZRE151 Toyota Corolla, ZRE151 1ZRFAE, 1ZRFE 2003-2016" },
  { zoren: "ZRM1501035", oem: ["77020-0K150", "77020-0K070", "77020-0K140"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Fortuner 2008-2016 4.0 L GGN50L 1GR-FE Toyota HILUX 2002-2004" },
  { zoren: "ZRM1183094", oem: ["77020-26031", "77020-26010"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA HIACE 2006-2009 TOYOTA HILUX 2006-2015" },
  { zoren: "ZRM1501039", oem: ["77020-60670", "77020-60470"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA LAND CRUISER PRADO 08/2009-07/2017 GDJ150,GRJ150,KDJ150,LJ150,TRJ15* 1GDFT /1KDFTV, Diesel" },
  { zoren: "ZRM1501040", oem: ["77020-60650"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA LAND CRUISER PRADO 2017- GDJ150,GRJ150,KDJ150,LJ150,TRJ15 1GRFE," },
  { zoren: "ZRM1501044 / ZRM1183100", oem: ["77020-60430"], name: "Fuel Pump", car_maker: "Toyota", applications: "08/2009-07/2017 TOYOTA LAND CRUISER PRADO GDJ150,GRJ150,KDJ150,LJ150,TRJ15* 1GRFE," },
  { zoren: "ZRM1501045", oem: ["77020-12650"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA COROLLA FIELDER NZE1414G 1NZ-FE 2006-2012" },
  { zoren: "ZRM1501046", oem: ["77020-12670"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA BLADE AZE156H 2AZ-FE 2006-2009" },
  { zoren: "ZRM1501047", oem: ["77020-58020", "77020-28110", "77020-58030", "23220-28300", "77020-28091", "77020-58050"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Alphard /Vellfire HV 2AR-FE 2015-2018 01/2006-09/2019 TOYOTA ESTIMA 01/2006-09/2019 TOYOTA PREVIA, TARAGO 06/2006-09/2019 TOYOTA ESTIMA HYBRID 04/2008-12/2014 TOYOTA ALPHARD, HV, VELLFIRE" },
  { zoren: "ZRM1501063", oem: ["77020-06300", "77020-06282", "77020-06285", "77020-06286", "P76754M", "FG1969", "SP9169M", "77020-33363"], name: "Fuel Pump", car_maker: "Toyota", applications: "Lexus ES350 2016-2017 3.5L/V6 Camry 2012-2017 2.5L L4 Toyota Avalon 2013-2018 2.5L" },
  { zoren: "ZRM1501074", oem: ["23210-87403", "101961-6603", "23210-87Z03", "23210-B1040", "8223E", "23210-B1031"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Dahiatsu Terios A/T,TeriosM/T 1.5L 2005-2012" },
  { zoren: "ZRM1501069", oem: ["1525.GE", "77020-0H010", "77240-0H010"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Aygo 2005/07-2014/05 Peugeot 107 2005/06-2014/12 Peugeot 108 2014/05-2021/12 Citroën C1 II 2014/04-2021/12 Citroën C1 2005/06-2014/09" },
  { zoren: "ZRM1501023", oem: ["23210-B1010", "101961-9421"], name: "Fuel Pump", car_maker: "Daihatsu", applications: "05/2004-01/2016 TOYOTA PASSO 01/2006-06/2016 TOYOTA BB Daihatsu Sirion M3 2005-2017" },
  { zoren: "ZRM1501088", oem: ["23210-97201"], name: "Fuel Pump", car_maker: "Daihatsu", applications: "Daihatsu Charade 2003-2021 Daihatsu Copen 2003-2012 Daihatsu Sirion 2009-2021 Suzuki Jimny 2019-2021 Suzuki Alto 2004 -2008 Perodua Viva 2007-2011 Daihatsu YRV 2001-2017 Daihatsu Trevis 2006-2021 Daihatsu Cuore 1998-2003 TOYOTA DUET M100A,M101A,M110A,M111A 09/1998-04/2004" },
  { zoren: "ZRM1501077", oem: ["77010-0K041"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA HILUX 2KD 2004-2015 TGN1 /GGN2/GGN1 / KUN2 /KUN1" },
  { zoren: "ZRM1501089 / ZRM1183056", oem: ["77020-08040", "77020-08060"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA SIENNA 01/2003-11/2009 2GRFE" },
  { zoren: "ZRM1183171", oem: ["77020-0R050", "77020-42230"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota RAV4 2018-2020" },
  { zoren: "ZRM1183066", oem: ["77010-0K010", "77010-0K011"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA HILUX GGN15,25,35,KUN1*,2*,3*,LAN15,25,35,TGN1 2004-2012 2KDFTV, 1KDFTV, 5LE, DIESEL" },
  { zoren: "ZRM1501104 / ZRM1183137", oem: ["77020-0E130"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA LEXUS RX450H/350 2015-2019 HIGHLANDER, KLUGER 12/2013-10/2019 2GR" },
  { zoren: "ZRM1501102", oem: ["77020-0K020"], name: "Fuel Pump", car_maker: "Toyota", applications: "08/2004-05/2016 TOYOTA INNOVA, 01/2005-03/2012 TOYOTA FORTUNER 08/2004-03/2012 TOYOTA HILUX 1TR/2TR" },
  { zoren: "ZRM1501113 / ZRM1183106", oem: ["77020-33530", "77020-06520", "77020-06481"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA CAMRY 2.5L AXVA70 2017- 2018 CAMRY (HYBRID) 2017-2021" },
  { zoren: "ZRM1501117", oem: ["77020-60550"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA LAND CRUISER GRJ200,URJ202,UZJ200 VDJ200 2007-2016 LEXUS LX450D/460/570 URJ20*,VDJ201 2007-2015 1URFE/3URFE" },
  { zoren: "ZRM1501118", oem: ["77020-04090"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota Tacoma V6 3.5L 2015-2019 2GRFKS" },
  { zoren: "ZRM1501119", oem: ["77020-60640"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA LAND CRUISER PRADO 08/2017- GDJ15*,TRJ150 GDJ15*,GRJ150,KDJ150,TRJ150 2TRFE," },
  { zoren: "ZRM1501103 / ZRM1183102", oem: ["77020-60600", "77020-60601"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA LAND CRUISER PRADO 05/2010-05/2020 GRJ150L-GKA*KC,GRJ152, TRJ150L-GK*EKC,TRJ152" },
  { zoren: "ZRM1501120", oem: ["77020-0T010", "77020-0T020"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA VENZA 2.7L 3.5L 2008-2016 1ARFE" },
  { zoren: "ZRM1183064", oem: ["77020-0E111", "FG1992", "478GE", "A30507", "P77055M", "SP9177M", "SP8071M"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA HIGHLANDER 2.7L/3.5L 2013-2019 2GRFE" },
  { zoren: "ZRM1183074", oem: ["77020-0K420", "77020-0K470"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA FORTUNER 2.7L 2016-2021 FORTUNER (SUV) 2.7L 2021- 2TRFE" },
  { zoren: "ZRM1183082", oem: ["77020-0D380", "77020-0D410"], name: "Fuel Pump", car_maker: "Toyota", applications: "TOYOTA VIOS 2013-2020 YARIS 2013-2017 5NRF/7NRFE" },
  { zoren: "ZRM0973006", oem: ["77020-0K030"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota INNOVA,AVENSIS 2006-2010 2.0L 2.7L 2AD" },
  { zoren: "ZRM1501142", oem: ["77020-42010", "SP9038M", "7717552020", "7724132060"], name: "Fuel Pump", car_maker: "Toyota", applications: "RAV 4 1994-2007" },
  { zoren: "ZRM1501162", oem: ["77020-35120", "77020-35121"], name: "Fuel Pump", car_maker: "Toyota", applications: "Toyota FJ Cruiser 4.0L 2007-2014" },
  { zoren: "ZRM1183111", oem: ["77020-30351", "77020-53073", "77020-92010", "77020-50071", "77020-53083", "77020-53082", "77020-53081", "77020-53080", "SP9046M", "P76752M", "FG1174", "E8812M"], name: "Fuel Pump", car_maker: "Toyota", applications: "2005-2013 LEXUS IS250/350 2006-2013 LEXUS IS250/300 2005-2013 LEXUS IS250/350/2xxD 2009-2015 LEXUS IS250C 2GRFSE,4GRFS" },
  { zoren: "ZRM1501159", oem: ["77020-33391", "77020-33380"], name: "Fuel Pump", car_maker: "Toyota", applications: "Lexus ES250 ES350 ES300h 2.5L 3.5L 2012-2018" },
  { zoren: "ZRM1183063", oem: ["77020-0C061", "E8694M"], name: "Fuel Pump", car_maker: "Toyota", applications: "02/1999-09/2006 TOYOTA TUNDRA 09/2000-10/2007 TOYOTA SEQUOIA 1GRFE /2UZFE" },

  // ================= HONDA =================
  { zoren: "ZRM1093066", oem: ["E8566M", "150308", "17045-S5A-A00", "17045-S5A-A30", "17045-S5A-A31", "402-P8566M", "40655", "69961", "69962", "FG1394", "P76528M", "SP8011M", "118GE", "17045S5AA31", "535-2020", "F4577A"], name: "Fuel Pump", car_maker: "HONDA", applications: "HONDA CIVIC L4-2.0L 2002-2005" },
  { zoren: "ZRM1153016", oem: ["17045-T2A-A00", "E9145M", "FG1544", "17045-T2A-A01", "SP8966M", "P76836M"], name: "Fuel Pump", car_maker: "HONDA", applications: "Honda Accord 2.0L 2.4L 3.0L 2013-2017 / Acura TLX 2016-2019" },
  { zoren: "ZRM1501154", oem: ["17045-TBF-A00"], name: "Fuel Pump", car_maker: "HONDA", applications: "Honda Civic 1.5L 2.0L 2016-2020" },
  { zoren: "ZRM1501170", oem: ["17045-T9A-000"], name: "Fuel Pump", car_maker: "HONDA", applications: "Honda City 1.5L 2015-2019" },
  { zoren: "ZRM1303005", oem: ["17045-TR0-H00", "17045-TR0-A00", "17045-TR0-G01", "17045-TR0-A50"], name: "Fuel Pump", car_maker: "HONDA", applications: "Honda civic 1.8L 2012-2015 / Acura ILX 1.8 2.4L 2013-2022" },
  { zoren: "ZRM1153112", oem: ["17045-TLA-A02", "17045-TLA-A01"], name: "Fuel Pump", car_maker: "HONDA", applications: "Honda CR-V 2017-2024 / HR-V 2023-2024" },
  { zoren: "ZRM1103018", oem: ["17045-5S3-VA0", "E8720M", "SP8021M", "17045-S3V-A00", "FG0957"], name: "Fuel Pump", car_maker: "HONDA", applications: "Acura MDX 3.5L 2001-2002 / Honda Pilot 3.5L 2003-2004" },
  { zoren: "ZRM0943191", oem: ["17708-S4K-000", "17708SDGH01M1", "16010-SDG-H00", "17708-SEA-E01"], name: "Fuel Pump", car_maker: "HONDA", applications: "HONDA Accord 2003-2008" },
  { zoren: "ZRM1293552", oem: ["17045-TBA-A03", "FG2128"], name: "Fuel Pump", car_maker: "HONDA", applications: "HONDA CIVIC 2016-2021" },
  { zoren: "ZRM1501207", oem: ["17045-TA7-A01", "17045-TZ7-A00", "KA292100-6353"], name: "Fuel Pump", car_maker: "HONDA", applications: "Honda Acura TLX 2015-2020" },
  { zoren: "ZRM1103013", oem: ["17045-T7J-H01", "17708-T7J-H02"], name: "Fuel Pump", car_maker: "HONDA", applications: "Honda HR-V 2016-2021" },
  { zoren: "ZRM1153113", oem: ["17045-TVC-A04", "P77570M", "17045-TVC-A01", "17045-TVC-A03", "17045-TVC-A02"], name: "Fuel Pump", car_maker: "HONDA", applications: "HONDA ACCORD 2018-2022" },
  { zoren: "ZRM1153114", oem: ["P77524M", "17045-TVA-A03"], name: "Fuel Pump", car_maker: "HONDA", applications: "HONDA ACCORD 2018-2022" },
  { zoren: "ZRM1143007", oem: ["17045-TZ5-A10", "P77029M", "17045-TX4-A01"], name: "Fuel Pump", car_maker: "HONDA", applications: "HONDA ACURA RDX 2013-2018" },
  { zoren: "ZRM1103041", oem: ["G0930", "17045-S3V-A01", "17045-S9V-A00", "A27122", "AFS0943S", "E8657M", "P76306M"], name: "Fuel Pump", car_maker: "HONDA", applications: "ACURA MDX 2005-2006 / HONDA PILOT 2005-2008" },
  { zoren: "ZRM1103003", oem: ["E8922M", "17045-TA0-A00"], name: "Fuel Pump", car_maker: "HONDA", applications: "ACURA TSX 2009-2014 / HONDA ACCORD CROSSTOUR 2008-2012" },
  { zoren: "ZRM1103005", oem: ["SP8025M", "17045-SWA-A01", "17045-SXS-A01", "17045SWAA01", "17045SXSA01"], name: "Fuel Pump", car_maker: "HONDA", applications: "Honda CR-V 2007-2011" },
  { zoren: "ZRM1103008", oem: ["17045-S9A-000"], name: "Fuel Pump", car_maker: "HONDA", applications: "Honda SUV CRV 2003-2006" },
  { zoren: "ZRM1103009", oem: ["17045-SAA-H50"], name: "Fuel Pump", car_maker: "HONDA", applications: "honda Ajuste JAZZ 1.3L 1.5L 2003-2008 / FIT 2003-2008" },
  { zoren: "ZRM1103010", oem: ["17045-TG5-000"], name: "Fuel Pump", car_maker: "HONDA", applications: "HODNA Ajuste JAZZ 1.3L 1.5L 2009-2014 / FIT 2009-2014" },
  { zoren: "ZRM1353001", oem: ["17045-SNV-000", "17045-SNV-010", "17045-SNV-020", "17045-SNA-003", "17708-SNA-003", "17708-SNA-000"], name: "Fuel Pump", car_maker: "HONDA", applications: "Honda Civic FA1 1.3-2.0L 2011-2006" },

  // ================= NISSAN =================
  { zoren: "ZRM1083047", oem: ["17040-EE50C"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN Tiida 1.8L SC11 C11 Grand Livina" },
  { zoren: "ZRM1083062", oem: ["17040-KH40A", "17040-JR40D", "17040-JR50A"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN NAVARA D40T 2005-2007" },
  { zoren: "ZRM1083063 / ZRM1083176", oem: ["17040-5M300"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN Almera Pulsar Sentra 1.5-2.0L 2000-" },
  { zoren: "ZRM1083067", oem: ["17040-4FN0A", "17040-3RW0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Sentra Pulsar Tiida 2012-2016" },
  { zoren: "ZRM1083131", oem: ["17040-VZ00A", "17040-VZ10A", "17040-VZ10B"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN E25 URVAN 2.5 2008-2012" },
  { zoren: "ZRM1153002", oem: ["17040-9EG0B", "17040-9EG0C", "17040-1FC0B", "17040-EM30A", "17040-EM31A", "17040-ZR70B", "E8855M", "150314", "SP4099M", "SP4022M", "P77095M", "P76612M", "FG1149", "TU319", "40204"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Versa Cube 2009-2014 / VERSA 1.6L 2009-2011 / VERSA 1.8L 2007-2012" },
  { zoren: "ZRM1083030", oem: ["17040-JE20D"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan T31 X-Trail / J10 Qashqai 2WD 08-13" },
  { zoren: "ZRM1083031", oem: ["17040-JN00C", "17040-JN00A"], name: "Fuel Pump", car_maker: "Nissan", applications: "2008-2012 Nissan J32 Teana 2.0 2.5 3.0L8" },
  { zoren: "ZRM1083032", oem: ["17040-JE60D", "17040-JG00A", "17020-4214R-0175", "17040-JY10A", "17040-JA10A", "17040-JD02A", "17040-3ZB0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan QASHQAI 4WD Gas 2.0L 2007-2016 / Nissan X-Trail T31 Gas 2.5L 2007-2014" },
  { zoren: "ZRM1083033", oem: ["17040-JX30A", "17040-AX000", "17040-1FE1A"], name: "Fuel Pump", car_maker: "Nissan", applications: "2007-2012 NISSAN VERSA / NISSAN NV200/1.6L 2009 / TIIDA 2010" },
  { zoren: "ZRM1083034", oem: ["17040-EW80C"], name: "Fuel Pump", car_maker: "Nissan", applications: "TIIDA Sylphy Livna 1.6L" },
  { zoren: "ZRM1083035", oem: ["17040-CH000", "17040-9EH0C", "E9547M", "17040-35H0E", "5203E", "AR0034488AC"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Aprio 2008-2010 / Tiida 1.8L 1.6L 2007-2012" },
  { zoren: "ZRM1083106", oem: ["17040-JD01D", "17040-JD01A", "17040-JD03A", "17040-JD01B"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN Dualis Qashqai 1.6-2.0L 2007-2013" },
  { zoren: "ZRM1073129", oem: ["17040-1VA0A", "17040-3JY0A", "17040-3LT0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Evalia M20 2013- / NISSAN Serena 2013-" },
  { zoren: "ZRM1293187", oem: ["17040-3AN0E", "E9100M", "P77040M", "FG1538", "SP4094M", "17040-3AN0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Micra 18 / Versa 2012-2019 L4 1.6L / Versa Note 2014-2019" },
  { zoren: "ZRM1501100 / ZRM1153081", oem: ["17040-3KT1C", "17040-3JL0A", "17040-3KT1A", "17040-3KT1B", "17040-3KT1D", "17040-3KT1E", "17040-3KA1C"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Pathfinder 2013-2020 / Infiniti JX35 QX60 2013-2020" },
  { zoren: "ZRM1501136", oem: ["17040-1KH0A", "17040-5JJ1A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Frontier 2.5L D23X 2015-2018" },
  { zoren: "ZRM1083080", oem: ["17040-CG00B"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN Infiniti FX35 V6 2003-2008 / Infiniti QX70 2015" },
  { zoren: "ZRM1501138", oem: ["17040-1EK0B", "17040-1EK0A", "E9069M", "FG1648"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan 370Z 3.7L V6 2009-2015" },
  { zoren: "ZRM1501026", oem: ["17040-3TA0C", "E9183M", "17040-4RA0C", "P77017M", "17040-3TA0A", "17040-3TA0B", "17040-3TA0D", "17040-2790A", "SP4090M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Altima 3.5L 2013-2018 / Altima 2.5L 2013-2018 / Teana 2019-2022 / Maxima 2016-2023" },
  { zoren: "ZRM1293198", oem: ["17040-EB80C", "17040-4KJ0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Navara 4.0L 2005-2011 / Pathfinder 4.0L 2005-2010" },
  { zoren: "ZRM1501057", oem: ["0580313101", "CBA7617", "775635", "72617", "7507125", "77125", "17040-AV710", "320900443", "WG1013068", "WG1778897"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN PRIMERA 2002-2016" },
  { zoren: "ZRM1501049 / ZRM1093084", oem: ["17040-ED80A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan TIIDA C11 SC11 1.6 1.8L 2005-2011" },
  { zoren: "ZRM1501064", oem: ["17040-4BB1A", "17040-4BA2A", "17040-6FM0A", "17040-6FL0A", "17040-4EF1A", "17040-4BA1A"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN X-trail MK3 T32 1.6 2013-2018" },
  { zoren: "ZRM1501065", oem: ["17040-4ED0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN QASHQAI J11 1.2 2014-2018" },
  { zoren: "ZRM1073125", oem: ["17040-8U002"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Sentra 2000-2006 1.8L 2.0L 2.5L" },
  { zoren: "ZRM1073126", oem: ["17040-8N00B", "E8502M"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN SENTRA 2000-2004 L4-1.8L L4-2.5L" },
  { zoren: "ZRM1080001", oem: ["25060-JE60D", "25060-JH70A"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN X-TRAIL PRCMAKE T31Z 2007-2013" },
  { zoren: "ZRM1082001", oem: ["17040-4BA2A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Trail T32W S1 2015-04- / Trail T32WW S1 2017/04- / Trail T32H L2 L3 2016/08- / Trail ROGUE T32 S1 2014/08-" },
  { zoren: "ZRM1083004", oem: ["25060-VW00A", "17042-BW0000"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN URVAN 2.4L 2008-2010" },
  { zoren: "ZRM1083029", oem: ["17040-2FJ0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Kai Chen D50/R50" },
  { zoren: "ZRM1501092", oem: ["17040-Y2900"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Pickup ZG24" },
  { zoren: "ZRM1501085 / ZRM1293296", oem: ["17040-1LB3E", "17040-1LB1E", "17040-1LB1A", "17040-1LB4E", "17040-1LB1D", "17040-1LB0E", "17040-1LB7A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Patrol 5.6L Y62 2015-2017 / Infiniti QX56 Z62 2015-2016 / Infiniti QX80 Z62 2015-2016 VK56VD" },
  { zoren: "ZRM1501086 / ZRM1293295", oem: ["17040-1LB5D", "17040-5ZP0A", "17040-1LB8A", "17040-1LB5C", "17040-1LB2D", "17040-1LB5B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Infiniti QX56 2010-2016 / Infiniti QX80 2014-2016 / NISSAN PATROL 2005-2018 4.0L Y62 Y60" },
  { zoren: "ZRM1501087 / ZRM1293294", oem: ["17040-1LK0A", "17040-1LB2C", "17040-1LB0A", "17040-1LA0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan PATROL Y62/ 5.6L 2010-2016" },
  { zoren: "ZRM1293297", oem: ["17040-3ZD0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Infiniti QX56 5.6L 2011-2013 / QX80 5.6L 2014-2019 / Armada 5.6L 2017-2022" },
  { zoren: "ZRM1083071", oem: ["17040-1KT0B", "17040-1KT0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Juke HR15DE HR16DE 2011-2017" },
  { zoren: "ZRM1153015", oem: ["17040-3SG0C", "17040-3SG0E", "E9213M", "FG1549", "SP4097M", "17040-3SG0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN Sentra 1.8L 2013-2018" },
  { zoren: "ZRM1163004", oem: ["17040-95F0B", "27510-31100"], name: "Fuel Pump", car_maker: "Nissan", applications: "ALMERA I 1995-2000 1.4 GXLX / ALTIMA 2001-2006 2.5 / Almera II 2000-2016 / Almera II Hatchback 2000-2016" },
  { zoren: "ZRM1283145", oem: ["17040-ET00A", "17040-9AA0A", "E8752M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Sentra 2007-2012" },
  { zoren: "ZRM1293004", oem: ["17040-EA000", "E8743M", "17040-ZS00A", "17040-ZZ00A", "17040-ZP00A"], name: "Fuel Pump", car_maker: "Nissan", applications: "05-12 Nissan Frontier / 06-07 Pathfinder / 07-12 Xterra / 08-15 Suzuki Equator 09-12" },
  { zoren: "ZRM1343018", oem: ["17040-ZQ60A", "E8595M", "17040-7S000", "17040-7S00A", "17040-7S20A", "17040-ZE00A", "17040-ZE00B", "17040-ZQ60A", "17040-ZQ60C", "17040-ZH000", "17040-ZH00A", "17040-ZQ40B", "17040-ZE40B", "P76654M", "SP4021M"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN Titan 2004-2006 / Infiniti QX56 2004-2006 / Nissan Armada 2005-2006" },
  { zoren: "ZRM1083069", oem: ["17040-EW80A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan TIIDA 2004-2012" },
  { zoren: "ZRM1153005", oem: ["17040-CA000", "E8536M", "17040-1AA0B", "17040-1AA0C", "17040-1AA0A", "17040-CB00A", "17040-CB000"], name: "Fuel Pump", car_maker: "Nissan", applications: "MURANO 2003-2014 / 03-07 Nissan Murano 3.5L-V6" },
  { zoren: "ZRM1153006", oem: ["17040-1HM0A", "17040-1HJ0A", "17040-1HJ0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Sunny N17 / NISSAN March K13 2011-2017" },
  { zoren: "ZRM1153008", oem: ["E8755M", "EH755M", "150331", "17040-9N00A", "17040-JA00A", "17040-ZX01B", "17040-ZX00B", "17040-ZX00A", "17040-3NT0A", "17040-7Y000"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN MAXIMA 3.5L V6 (2009-2014) / ALTIMA 2.5L L4 (2010-2012) / ALTIMA 3.5L V6 (2007-2012) / Quest 2.5L 3.5L 04-09" },
  { zoren: "ZRM1153010", oem: ["E8856M/E8854 M", "P76755M", "17040JM10C", "FG1147", "FG1148", "SP4061M", "SP4108M", "17040JM10A"], name: "Fuel Pump", car_maker: "Nissan", applications: "2008-2013 for Nissan for Rogue L4 2.5L / 2014-2015 for Nissan for Rogue Select L4 2.5L" },
  { zoren: "ZRM1153011", oem: ["22571", "775043", "2250056", "17040-9U01B", "17040-9U01C", "17040-AX000", "17040-AX010", "QFP903", "39095", "EFP409", "FP5148", "LFP199", "WG1778395", "WG1796706", "17040-1KA0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN JUKE (F15) 1.6 06/2010-01/2013 / MARCH 1.2 16V 01/2003-06/2010 / NOTE 1.4 03/2006 -" },
  { zoren: "ZRM1153013", oem: ["17040-1KD0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Juke F15 F15E JF15 2010-2014" },
  { zoren: "ZRM1083037", oem: ["17040-JD00A", "0986580380"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN Qashqai / Qashqai Construction 02.2007 - 12.2014" },
  { zoren: "ZRM1083038", oem: ["E8496M", "67989", "67988", "P76171M", "FG0501", "P3386M", "170408J005", "170408J100", "170408J105"], name: "Fuel Pump", car_maker: "Nissan", applications: "2002-2003 Nissan Altima L4 2.5L / 2002-2003 Nissan Altima V6 3.5L" },
  { zoren: "ZRM1083041", oem: ["17040-CG000", "17040-EV10A", "E8534M", "P76334M", "E8540M"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN Infiniti FX35 FX45 2003-2008 / Nissan 350Z 2003-2009 / Infiniti G35 2003-2007 / M35 M45 2006-2008" },
  { zoren: "ZRM1083042", oem: ["17040-1FE1C", "17040-AX01A", "17040-AX000", "17040-1FE1A", "17040-1FA0A", "17040-1V10A", "17040-9EG0C", "17040-1FA1A", "17040-JX00A", "17040-EE500"], name: "Fuel Pump", car_maker: "Nissan", applications: "TIIDA C11 05-08 / TIIDA VERSA SC11 2005-2011 / SYLPHY 06-11 G10 G11 / BLUEBIRD/ALTIMA L31 02-10 / WINGROAD AD Y12 2006-2014" },
  { zoren: "ZRM1083043", oem: ["17040-3TS0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan L33 Teana 2014-2017" },
  { zoren: "ZRM1083044", oem: ["17040-3DN0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Tiida SUNNY MARCH 2011-2016" },
  { zoren: "ZRM1501009", oem: ["17040-3XA0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Urvan Nv350 2012-2016" },
  { zoren: "ZRM1093027", oem: ["17040-8H31B"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan X-Trail T30 QR25 2000-2007" },
  { zoren: "ZRM1093049", oem: ["17040-4M405"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Sunny N16 2003-2010" },
  { zoren: "ZRM1153004", oem: ["E8545M", "P76169M", "170407Y000", "17040ZD80B", "17040ZB00A", "FG0987", "17040-9j400"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Maxima Altima Quest 2.5L 3.5L 2004-2009" },
  { zoren: "ZRM1501016", oem: ["17040-VK01A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan D22 KA24 2009-2014" },
  { zoren: "ZRM1501025 / ZRM1083188", oem: ["17040-1CB0D", "17040-1CJ0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN Infiniti FX35 FX37 3.5L 2010-2013 / NISSAN Infiniti QX70 FX35 FX45 FX50 2009-2017" },
  { zoren: "ZRM1343046", oem: ["E8862M", "150315", "17040-ZH000", "17040-ZH00A", "17040-ZQ60B", "550-2120", "FG1277", "P76570M", "SP4023M"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN TITAN 5.6L (2005-2015) / NISSAN ARMADA 5.6L (2007-2015)" },
  { zoren: "ZRM1153122", oem: ["17040-1KM1A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Juke 1.5 F15 F15E JF15 YF15 2012-2016" },
  { zoren: "ZRM1083187", oem: ["17040-1MA0B"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN INFINITI M37 Q50 Q70 2011-2017" },
  { zoren: "ZRM1501187", oem: ["17040-4BA0C", "17040-4BA0B", "17040-4BA0A", "FG1932"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Rogue 2.5L L4 2014-2020" },
  { zoren: "ZRM1501190", oem: ["17040-6LB0B", "17040-6LB0A", "17040-6LB0C"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Sentra 2020-2024" },
  { zoren: "ZRM1501192", oem: ["17040-1JA2A", "17040-1JA3A", "17040-1JA0A"], name: "Fuel Pump", car_maker: "NISSAN", applications: "NISSAN QUEST 3.5L 2011-2017" },
  { zoren: "ZRM1083163", oem: ["17040-1BB0B", "17040-1BA0D", "17040-1BB0C", "25060-1BA1C"], name: "Fuel Pump", car_maker: "NISSAN", applications: "Infiniti EX35 EX37 3.5L 3.7L 2008-2013" },
  { zoren: "ZRM1083164", oem: ["17040-1NC0C"], name: "Fuel Pump", car_maker: "NISSAN", applications: "INFINITI G25 2011-2012 / G37 2008-2013 / M35 2009-2010 / M45 2008-2010 / Q40 2015 / Q60 2014-2015" },
  { zoren: "ZRM1501140 / ZRM1083188", oem: ["17040-1CJ0C", "17040-1CB0D", "17040-1CA0D", "17040-1CJ0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN Infiniti FX35 2009-2013 / FX37 2009-2013 / FX50 2009-2013 / FX-QX70 (S51) 2008-2017" },
  { zoren: "ZRM1501141", oem: ["17040-4BB2A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan X-Trail 2.5L 2014-2016 / X-Trail x iz T32 MR20DE 2.0L 2014-2019 / Qashqai J11. 2015-2019" },
  { zoren: "ZRM1501048", oem: ["17040-5RB0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "NISSAN KICKS 1.6L 2017-2020 / NISSAN MARCH 1.6L 2018-2020 / NISSAN VERSA 1.6L 2017-2021" },
  { zoren: "ZRM1501174", oem: ["17040-1HK0A", "17040-1HK0B", "E9100M", "SP4199M"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Micra 2015-2017 / Versa 1.6L 2012-2019" },
  { zoren: "ZRM1501022", oem: ["17040-5M500"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Bluebird Sylphy G10 2003-2005 / Sunny N16" },
  { zoren: "ZRM1293248", oem: ["17040-6CT0A", "17040-6CA0A"], name: "Fuel Pump", car_maker: "Nissan", applications: "Nissan Teana Altima 2.0L 2.5L L34 2019-2022" },
  { zoren: "ZRM1083191", oem: ["17040-1BA0A", "17040-1BA0B", "17040-1BA0C", "17040-1BB0C", "E8931M", "FG1630", "SP4140M"], name: "Fuel Pump", car_maker: "Nissan", applications: "INFINITI EX35 2008-2012 3.5L / INFINITI EX37 2013 3.5L / INFINITI QX50 2014-2017 3.7L" },
  { zoren: "ZRM1501213", oem: ["17040-6AU0A", "17040-4HK1A"], name: "Fuel Pump", car_maker: "NISSAN", applications: "Infiniti Q50 2016-2023 / Infiniti Q60 2017-2022" },
  { zoren: "ZRM1501210", oem: ["17040-5RL0A"], name: "Fuel Pump", car_maker: "NISSAN", applications: "Nissan Versa" },
  { zoren: "ZRM1501218", oem: ["17040-6HA0A"], name: "Fuel Pump", car_maker: "NISSAN", applications: "INFINITI Q50 2015-2019 / INFINITI Q60 2017-2018" },

  // ================= SUZUKI =================
  { zoren: "ZRM1501148 / ZRM1133023", oem: ["15100-78R01"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Suzuki jimny 2019-2023" },
  { zoren: "ZRM1133019", oem: ["15100-71L00", "15100-58M00", "15100-68P00"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Suzuki Swift 1.3L 1.5L 1.6L 2012-2017" },
  { zoren: "ZRM1501179 / ZRM1501188", oem: ["15100-68K01", "15100-M68K01", "15410-M79F01", "15100-M79F02", "101961-5863"], name: "Fuel Pump", car_maker: "Suzuki", applications: "SUZUKI ALTO 1.1L 04.2001-01.2005 / SUZUKI OMNI 3RD 02.2005-05.2019 / SUZUKI ZEN ESTILO 07.2006-08.2009 / SUZUKI WAGON R 01.2000-05.2010 / SUZUKI OMNI 2ND 10.2002-01.2005 / SUZUKI ALTO 0.8L 07.2000-05.2012" },
  { zoren: "ZRM1003023", oem: ["15100-81A13", "15100-81A02"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Suzuki Jimny 1.3L" },
  { zoren: "ZRM0873001", oem: ["15100-76A30", "101961-5510"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Suzuki Carry Every DB52" },
  { zoren: "ZRM1501038", oem: ["15100-74L00"], name: "Fuel Pump", car_maker: "Suzuki", applications: "SUZUKI SWIFT 1.2L 1.6L 2012-2016" },
  { zoren: "ZRM1003003", oem: ["15100-78F21", "15100-78F00", "15100-78851"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Suzuki Aerio 2002-2007" },
  { zoren: "ZRM1183005", oem: ["292010-0032", "15100-60K00", "15100-61J05", "292010-0871", "15100-60K01"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Suzuki APV 2005-2016 1.5L" },
  { zoren: "ZRM1183009", oem: ["15100-65J02", "15100-65842"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Suzuki Grand Vitara II JT 2.0 AWD 2005/10-2015/02 1995 ccm 103 KW" },
  { zoren: "ZRM1183028", oem: ["15100-63811", "15100-63J02", "15100-63840", "15100-63J20", "101962-1880"], name: "Fuel Pump", car_maker: "Suzuki", applications: "SUZUKI SWIFT ZC11S 11/2004-01/2010 1.3L / ZD21S 1.5L / SPORT RS416 EZ ZC31S 1.6L / SPORT ZC31S 1.6L / FZ ZC82S 1.4L / SPORT FZ ZC32S 1.6L" },
  { zoren: "ZRM1183057 / ZRM1501017", oem: ["15100-80840", "15100-65MB0", "FG1161", "A25529", "E8773M"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Suzuki SX4 L4-2.0L 2007-2013" },
  { zoren: "ZRM1501090", oem: ["15100-79J00"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Suzuki SX4 1.5L/1.6L 2009-2019" },
  { zoren: "ZRM1213021", oem: ["15100-78K00", "15100-79K00", "15100-78000"], name: "Fuel Pump", car_maker: "Suzuki", applications: "SUZUKI GRAND VITARA 2.4L 2006-2014" },
  { zoren: "ZRM1143042", oem: ["15100-61M00", "15100-60R00", "15100-68L00"], name: "Fuel Pump", car_maker: "Suzuki", applications: "Suzuki Vitara 1.6L 2015/02-2022/12" },

  // ================= ISUZU =================
  { zoren: "ZRM0943095", oem: ["E8400M", "P76555M", "SP4051M"], name: "Fuel Pump", car_maker: "Isuzu", applications: "Isuzu Amigo Rodeo Sport 1998-2003" },
  { zoren: "ZRM0943026", oem: ["E3963M", "67363", "323-00225", "953-5045", "530-2286", "SP6148M"], name: "Fuel Pump", car_maker: "CHEVROLET GMC", applications: "CHEVROLET C1500 SUBURBAN 1998-1999 / CHEVROLET C2500 SUBURBAN 1998-1999 / CHEVROLET K1500 SUBURBAN 1998-1999 / CHEVROLET K2500 SUBURBAN 1998-1999 / CHEVROLET TAHOE 1998-1999 / GMC C1500 SUBURBAN 1998-1999 / GMC C2500 SUBURBAN 1998-1999 / GMC K1500 SUBURBAN 1998-1999 / GMC K2500 SUBURBAN 1998-1999" },
  { zoren: "ZRM0943097", oem: ["E3558M", "FG0331", "19180102", "25348610", "K9142", "MU1145", "MU1737", "P76488M", "SP6617M", "19369923"], name: "Fuel Pump", car_maker: "HUMMER", applications: "HUMMER H2 2003" },

  // ================= MITSUBISHI =================
  { zoren: "ZRM1501018 / ZRM1183070", oem: ["1760A189", "1760A298", "1760A385", "1760A250", "1770A250"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "MITSUBISHI Outlander 2.0 2.4 4WD 2007-2012" },
  { zoren: "ZRM1183055", oem: ["1760A321", "1760A271", "1760A156", "1760A317"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Mitsubishi LANCER-EX 1992-2003" },
  { zoren: "ZRM1501019", oem: ["1760A156"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "MITSUBISHI Outlander 2007-2012 2WD" },
  { zoren: "ZRM1501020", oem: ["1760A168", "1760A221"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Mitsubishi L200 Triton strada 2013-2018" },
  { zoren: "ZRM1501030", oem: ["1760A297", "1760A227"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Pajero \\ montero V93 V95 V97 3.0L 3.5L 3.8L 2006-2014." },
  { zoren: "ZRM1501060", oem: ["MR497413"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Mitsubishi Lancer 2.0L L4 2002-2003" },
  { zoren: "ZRM1501037", oem: ["MR990881", "MD367152", "MR990883", "MR990882", "MN161533"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Mitsubishi Pajero Montero V73 6G72 V75 6G74" },
  { zoren: "ZRM1501095", oem: ["1760A354", "1760A408", "1760A576", "1760A573", "1760A418"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "MITSUBISHI MIRAGE/SPACE STAR 1.2L 2012-2022 MITSUBISHI ATTRAGE 2013-" },
  { zoren: "ZRM1183023", oem: ["1760A177", "1760A176", "E8732M", "FG1265", "SP4055M", "SP4056M", "P76624M"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "2006-2011 Mitsubishi Galant / 2007-2012 Mitsubishi Eclipse 2.4L/3.8L" },
  { zoren: "ZRM1501106", oem: ["1760A318", "1760A383", "1760A249"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Mitsubishi PajeroSport 2008-2018 / Mitsubishi Zinger 2.0L 2008-2015" },
  { zoren: "ZRM1501143", oem: ["1760A058", "SP4155M", "1760A095", "1760A097", "1760A059"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Mitsubishi para 2005-2006 Outlander 2.4L 4G69" },
  { zoren: "ZRM1501158", oem: ["MR586031", "MR512042", "101961-6480"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Mitsubishi Montero 2005- / Pinin 2005- / Pajero iO 2005- / TA-H76W CFA6400 H76/H77" },
  { zoren: "ZRM1501156", oem: ["MN135192", "E8547M"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "MITSUBISHI Lancer 2.0L-L4 2004-2007" },
  { zoren: "ZRM1501059", oem: ["1760A096", "1760A033", "SP4153M", "MR573235"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Mitsubishi Outlander AT 4G64 2001-2006" },
  { zoren: "ZRM1501189", oem: ["1760A093", "MN133064", "E8541M", "SP4062M", "2920580", "P76390M", "E8541M", "FG2206"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Mitsubishi Outlander 2003- 2.4L L4" },
  { zoren: "ZRM1183098", oem: ["1760A715", "1760A714"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Mitsubishi Xpander 2018-2023 1.5L 2WD" },
  { zoren: "ZRM1501191", oem: ["1760A094"], name: "Fuel Pump", car_maker: "Mitsubishi", applications: "Mitsubishi Outlander 2004-2006" },

  // ================= CHEVROLET / FORD / DODGE / JEEP / BMW / BENZ (NEW DATA) =================
  { zoren: "ZRM1293143", oem: ["E4005M", "SP6619M", "FG1057", "19256389", "19257093", "15756457"], name: "Fuel Pump", car_maker: "CHEVROLET GMC", applications: "CHEVROLET SILVERADO 1500 V8-4.8L 2010-2013 / CHEVROLET SILVERADO V8-5.3L 2010-2013 / CHEVROLET SILVERADO V8-6.2L 2010-2013 / GMC SIERRA 1500 V8-4.8L 2010-2013 / GMC SIERRA 1500 V8-5.2L 2010-2013 / GMC SIERRA 1500 V8-6.3L 2010-2013" },
  { zoren: "ZRM1501071", oem: ["13592601", "13582544", "13582546", "13523335", "13506854"], name: "Fuel Pump", car_maker: "CHEVROLET", applications: "2011-2015 Chevrolet Spark" },
  { zoren: "ZRM1501073", oem: ["13592646", "E4092M", "13589300", "13592648", "M100152"], name: "Fuel Pump", car_maker: "CHEVROLET", applications: "2014-2019 Chevrolet Impala" },
  { zoren: "ZRM1501135", oem: ["1525.HZ", "1613305280", "9657601480", "9684994480", "775530", "72467", "7507529", "77529", "QFP995", "347127", "320900777", "WG1407889", "WG1444390", "WG1778817"], name: "Fuel Pump", car_maker: "PEUGEOT", applications: "CITROEN C4 Grand Picasso 1.6L 2008-2013 / Caja PEUGEOT PARTNER 1.6L 2008-2010 / PEUGEOT PARTNER Tepee 2008-2010" },
  { zoren: "ZRM1293090", oem: ["E3837M", "P77024M"], name: "Fuel Pump", car_maker: "CHEVROLET", applications: "CHEVROLET SILVERADO 1500 V8-4.8L / CHEVROLET SILVERADO 1500 V8-5.3L / GMC SIERRA 1500 V8-4.8L / GMC SIERRA 1500 V8-5.3L / GMC Sierra 3500 6.0L / GMC Sierra 2500 6.0L / 2009-2013" },
  { zoren: "ZRM1293489", oem: ["E4049M", "P77297M"], name: "Fuel Pump", car_maker: "CHEVROLET", applications: "CHEVROLET EXPRESS 1500 2010-2014 / CHEVROLET EXPRESS 2500 2010-2016 / CHEVROLET EXPRESS 3500 2010-2016 / GMC SAVANA 1500 2010-2014 / GMC SAVANA 2500 2010-2016 / GMC SAVANA 3500 2010-2016" },
  { zoren: "ZRM1501204", oem: ["19420757", "FG1093", "PN3125", "69792"], name: "Fuel Pump", car_maker: "CHEVROLET", applications: "CHEVROLET EXPRESS 1500 2010-2014 / CHEVROLET EXPRESS 2500 2010-2016 / CHEVROLET EXPRESS 3500 2010-2016 / GMC SAVANA 1500 2010-2014 / GMC SAVANA 2500 2010-2016 / GMC SAVANA 3500 2010-2016" },
  { zoren: "ZRM1133005", oem: ["E7113M"], name: "Fuel Pump", car_maker: "Chrysler", applications: "Chrysler Cirrus 2000 L4-2.0L / Chrysler Cirrus 1999-2000 L4-2.4L / Chrysler Cirrus 1998-2000 V6-2.5L / Chrysler Sebring 1999-2000 V6-2.5L / Dodge Stratus 1998-2000 L4-2.0L / Dodge Stratus 1998-2000 L4-2.4L / Dodge Stratus 1998-2000 L4-2.5L / Plymouth Breeze 1998-2000 L4-2.0L / Plymouth Breeze 1998-2000 L4-2.4L" },
  { zoren: "ZRM1133006", oem: ["E7144M"], name: "Fuel Pump", car_maker: "Chrysler Dodge", applications: "Chrysler Town&Country 2001-2003 V6-3.3L / Chrysler Town&Country 2001-2003 V6-3.8L / Chrysler Voyager 2001-2003 L4-2.4L / Chrysler Voyager 2001-2003 V6-3.3L / Dodge Caravan 2001-2003 L4-2.4L / Dodge Caravan 2001-2003 V6-3.3L / Dodge Grand Caravan 2001-2003 V6-3.3L / Dodge Grand Caravan 2001-2003 V6-3.8L" },
  { zoren: "ZRM1293003", oem: ["E7196M", "5139031AD"], name: "Fuel Pump", car_maker: "Chrysler Dodge", applications: "CHRYSLER TOWN & COUNTRY 2005-2007 V6-3.3L / CHRYSLER TOWN & COUNTRY 2005-2007 V6-3.8L / DODGE CARAVAN 2005-2007 V6-3.3L / DODGE GRAND CARAVAN 2005-2007 V6-3.3L / DODGE GRAND CARAVAN 2005-2007 V6-3.8L" },
  { zoren: "ZRM1293011", oem: ["E7189M"], name: "Fuel Pump", car_maker: "Chrysler", applications: "CHRYSLER PT CRUISER L4-2.4L 2004-2010" },
  { zoren: "ZRM1293117", oem: ["E7210M", "68004475AB", "RL004475AB"], name: "Fuel Pump", car_maker: "chrysler DODGE", applications: "CHRYSLER 200 L4-2.4L 2011-2014 / CHRYSLER SEBRING L4-2.4L 2009-2010 / CHRYSLER SEBRING L4-2.4L 2007 / CHRYSLER SEBRING V6-2.7L 2007-2010 / CHRYSLER SEBRING V6-3.5L 2007-2010 / DODGE AVENGER L4-2.4L 2009-2014 / DODGE AVENGER V6-2.7L 2008-2009 / DODGE AVENGER V6-3.5L 2008-2010" },
  { zoren: "ZRM1293046", oem: ["E7234M"], name: "Fuel Pump", car_maker: "Chrysler Dodge", applications: "Chrysler Aspen 2008 V8-4.7L / Chrysler Aspen 2008-2009 V8-5.7L / DODGE Durango 2008-2009 V6-3.7L / DODGE Durango 2008 V8-4.7L" },
  { zoren: "ZRM1293061", oem: ["E3797M", "1293061", "P76699M", "19299715", "19206481", "19259394", "19168707", "5302905", "358301481", "M10133"], name: "Fuel Pump", car_maker: "Cadillac Chevrolet GMC", applications: "Cadillac Escalade ESV 2009-2014 V8-6.2L / Cadillac Escalade EXT 2009-2013 V8-6.2L / CHEVROLET AVALANCHE 2008-2013 V8-5.3L / CHEVROLET SUBURBAN 1500 2008-2014 V8-5.3L / GMC YUKON XL 1500 2008-2014 V8-5.3L / GMC YUKON XL 1500 2009-2014 V8-6.2L" },
  { zoren: "ZRM1293080", oem: ["P76893M", "M100100", "M100101", "MU2192", "MU2193", "A33221", "A33222", "13513408", "13513409", "13582487", "13582489", "SP6710M", "SP6711M", "P76893M", "P76894M", "M100266", "E3777M", "GM0516484", "M100265"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "GMC Sierra 1500 2014-2018 / Chevrolet Silverado 1500 2014-2018" },
  { zoren: "ZRM1293071", oem: ["E3689M", "19167486", "P76147M", "SP6019M", "EC689M", "FG0393", "EC61", "19331948"], name: "Fuel Pump", car_maker: "GMC", applications: "Hummer H2 V8-6.0L 2004-2007" },
  { zoren: "ZRM1293065", oem: ["E3715M"], name: "Fuel Pump", car_maker: "CHEVROLET", applications: "CHEVROLET HHR L4-2.2L 2006-2008 / CHEVROLET HHR L4-2.4L 2006-2008" },
  { zoren: "ZRM1293062", oem: ["E3611M", "SP6615M"], name: "Fuel Pump", car_maker: "CHEVROLET", applications: "PONTIAC GTO V8-5.7L 2004- / PONTIAC GTO V8-6.0L 2005-2006" },
  { zoren: "ZRM1294015", oem: ["E4042M", "P77016M"], name: "Fuel Pump", car_maker: "CHEVROLET", applications: "CHEVROLET SILVERADO 2500 HD 2016-2011 V8-6.0L / CHEVROLET SILVERADO 3500 HD 2016-2011 V8-6.0L / GMC SIERRA 2500 HD 2016-2011 V8-6.0L / GMC SIERRA 3500 HD 2016-2011 V8-6.0L" },
  { zoren: "ZRM1133012", oem: ["E3691M", "P76253M", "SP6033M", "67511", "MU1679", "FG1940", "19206468", "19330300", "19330301", "88965811"], name: "Fuel Pump", car_maker: "Cadillac", applications: "Cadillac CTS 2004-2005 V8-5.7L / Cadillac CTS 2006-2007 V8-6.0L" },
  { zoren: "ZRM0943041", oem: ["E3974M"], name: "Fuel Pump", car_maker: "Cadillac", applications: "CADILLAC DEVILLE 1998-1999 V8-4.6L / CADILLAC ELDORADO 1998-2002 V8-4.6L" },
  { zoren: "ZRM0943059", oem: ["E3935M"], name: "Fuel Pump", car_maker: "Cadillac", applications: "Cadillac DeVille 1997 V8-4.6L / Cadillac Eldorado 1997 V8-4.6L / Cadillac Seville 1997 V8-4.6L" },
  { zoren: "ZRM1293571 / ZRM1293237", oem: ["13584283", "13592334", "13592319", "E4007M", "13592337", "P76850M", "19303293", "13577471", "13585453", "13594059"], name: "Fuel Pump", car_maker: "Cadillac Chevrolet", applications: "Cadillac CTS 2010-2013 / Chevrolet Camaro 2010-2014" },
  { zoren: "ZRM1293273", oem: ["E4002M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Chevrolet Camaro V6 3.6L 2010-2015" },
  { zoren: "ZRM1294018", oem: ["E4044M", "P76868M", "F5055A", "M100106", "PN3214", "FG2020", "13585446"], name: "Fuel Pump", car_maker: "CHEVROLET", applications: "CHEVROLET SILVERADO 2500 HD V8-6.0L 2011-2016 / CHEVROLET SILVERADO 3500 HD V8-6.0L 2011-2016 / GMC SIERRA 2500 HD V8-6.0L 2011-2016 / GMC SIERRA 3500 HD V8-6.0L 2011-2016" },
  { zoren: "ZRM0943015", oem: ["E3501M"], name: "Fuel Pump", car_maker: "CHEVROLET GMC", applications: "CHEVROLET SILVERADO 1500 2003 V8-6.0L / CHEVROLET SILVERADO 2500 00-99 V8-5.3L / CHEVROLET SILVERADO 2500 03-99 V8-6.0L / CHEVROLET SILVERADO 2500 HD 03-01 V8-6.0L / CHEVROLET SILVERADO 2500 HD 03-01 V8-8.1L / CHEVROLET SILVERADO 3500 03-01 V8-6.0L / CHEVROLET SILVERADO 3500 03-01 V8-8.1L / GMC SIERRA 1500 03-99 V6-4.3L / GMC SIERRA 1500 03-99 V8-4.8L / GMC SIERRA 1500 03-99 V8-5.3L / GMC SIERRA 1500 03-01 V8-6.0L / GMC SIERRA 2500 00-99 V8-5.3L / GMC SIERRA 2500 03-99 V8-6.0L / GMC SIERRA 2500 HD 03-01 V8-6.0L / GMC SIERRA 2500 HD 03-01 V8-8.1L / GMC SIERRA 3500 03-01 V8-6.0L / GMC SIERRA 3500 03-01 V8-8.1L" },
  { zoren: "ZRM1303004", oem: ["E3746M", "E3746M", "M10087", "P76218M", "P76217M", "FG0515", "FG0516", "67508", "SP6007M", "8191533740", "19153374", "M10167", "M100131", "19418261"], name: "Fuel Pump", car_maker: "CHEVROLET GMC ISUZU", applications: "CHEVROLET TRAILBLAZER EXT L6-4.2L 2006-2005 / CHEVROLET TRAILBLAZER EXT V8-5.3L 2006-2005 / G-MC ENVOY 2005-2006 / ISUZU ASCENDER L6-4.2L 2006-2005 / ISUZU ASCENDER V8-5.3L 2006-2005" },
  { zoren: "ZRM1501080", oem: ["654663731", "GM8408 4129"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Chevrolet EPICA 2.5L 2006-2011" },
  { zoren: "ZRM1293052", oem: ["E3834M", "69965", "SP6629M", "19206584", "FG0908"], name: "Fuel Pump", car_maker: "CHEVROLET", applications: "CHEVROLET SILVERADO 1500 V8-4.8L 2007-2008 / SILVERADO 1500 V8-5.3L 2007-2008 / GMC SIERRA 1500 V8-4.8L 2007-2008 / GMC SIERRA 1500 V8-5.3L 2007-2008" },
  { zoren: "ZRM1501034", oem: ["13503670", "13503671"], name: "Fuel Pump", car_maker: "CHEVROLET", applications: "Chevrolet Cruze 2010-2013 1.4L/1.8L" },
  { zoren: "ZRM1304002", oem: ["E7241M", "5136021AE", "5136021AD", "5136021AF"], name: "Fuel Pump", car_maker: "Chrysler", applications: "Chrysler 300 (2005-2010) V6-2.7L / Chrysler 300 (2005-2010) V6-3.5L / Chrysler 300 (2005-2010) V8-5.7L / Chrysler 300 (2005) V8-6.1L / Dodge Challenger 2009-2010 V6-3.5L / Dodge Challenger 2009-2010 V8-5.7L / Dodge Charger 2006-2010 V6-2.7L / Dodge Charger 2006-2010 V6-3.5L / Dodge Charger 2006-2010 V8-5.7L / Dodge Magnum 2005-2008 V6-2.7L / Dodge Magnum 2005-2008 V6-3.5L / Dodge Magnum 2005-2008 V8-5.7L" },
  { zoren: "ZRM1304009", oem: ["E7192M", "05136022AG"], name: "Fuel Pump", car_maker: "Chrysler DODGE", applications: "CHRYSLER 300 2005-2010 V6-2.7L/V6-3.5L / CHRYSLER 300 2011-2016 V6-3.6L / CHRYSLER 300 2005-2017 V8-5.7L / CHRYSLER 300 2005-2010 V8-6.1L / CHRYSLER 300 2014 V8-6.4L / DODGE CHARGER 2015-2017 V6-3.6L / DODGE CHALLENGER 2011-2017 V8-5.7L / DODGE CHALLENGER 2008-2010 V8-6.1L / DODGE CHALLENGER 2015 V8-6.4L / DODGE CHARGER 2007-2010 V6-2.7L/V6-3.5L / DODGE CHARGER 2011-2014 V6-3.6L / DODGE CHARGER 2007-2016 V8-5.7L / DODGE CHARGER 2006-2010 V8-6.1L / DODGE MAGNUM 2005-2008 V6-2.7L/V6-3.5L / DODGE MAGNUM 2006-2008 V8-6.1L" },
  { zoren: "ZRM1304004", oem: ["E7184M", "P7184M", "P832M", "P76267M", "FG1082", "EG184M", "67742", "520-2530", "5135549AA", "150112", "402-P7184M", "7657E", "SP7037M", "39127", "FP22024", "090GE", "F3195A", "RL135549AC", "EG184MC"], name: "Fuel Pump", car_maker: "Chrysler Dodge", applications: "Chrysler Aspen 2007 V8-4.7L / Chrysler Aspen 2007 V8-5.7L / Dodge Durango 2004-2007 V8-3.7L / Dodge Durango 2004-2007 V8-4.7L / Dodge Durango 2004-2007 V8-5.7L" },
  { zoren: "ZRM1304005", oem: ["04581410AB", "E7264A", "5136023AA", "5136023AB", "5136023AC"], name: "Fuel Pump", car_maker: "Chrysler Dodge", applications: "Chrysler 300C 2005-2019 All Models / Dodge Challenger 2008-2019 All Models / Dodge Charger 2006-2019 All Models / Dodge Magnum 2005-2008 All Models" },
  { zoren: "ZRM1294094", oem: ["E4012M", "M100028", "M10250", "FG1288", "P76855M", "SP6644M", "13505204", "13578372"], name: "Fuel Pump", car_maker: "Buick Chevrolet Cadillac", applications: "2010- 2011Buick LaCrosse / 2010-2015 Buick Allure / 2014 -2015Chevrolet Malibu / 2014-2018 Cadillac XTS 3.6L / 2014-2017 Buick Regal 2.0L / 2016-2016 Chevrolet Malibu Limited" },
  { zoren: "ZRM1293339", oem: ["52030306AB"], name: "Fuel Pump", car_maker: "JEEP", applications: "Jeep Wrangler 2.0L 2018-2023" },
  { zoren: "ZRM1304007", oem: ["E7165M", "E7186M", "5104694ab", "5202370", "FG0817", "5202340", "358300261", "P76259M", "PN3036"], name: "Fuel Pump", car_maker: "Dodge", applications: "DODGE RAM 1500 2004-2006 V6-3.7L / DODGE RAM 1500 2004-2006 V8-4.7L / DODGE RAM 1500 2004-2006 V8-5.7L / DODGE RAM 2500 2005-2007 V8-5.7L / DODGE RAM 3500 2005-2007 V8-5.7L" },
  { zoren: "ZRM1343009", oem: ["E7161M"], name: "Fuel Pump", car_maker: "Dodge", applications: "DODGE RAM 1500 V6-3.7L 2002-2003 / DODGE RAM 1500 V8-4.7L 2002-2003 / DODGE RAM 1500 V8-5.9L 2002-2003" },
  { zoren: "ZRM1343010", oem: ["E7168M"], name: "Fuel Pump", car_maker: "DODGE", applications: "DODGE DAKOTA V6-3.9L 2003 / DODGE DAKOTA V8-4.7L 2003 / DODGE DAKOTA V8-5.9L 2003" },
  { zoren: "ZRM1343002", oem: ["E7117M"], name: "Fuel Pump", car_maker: "DODGE", applications: "DODGE DURANGO V6-3.9L 1998-1999 / DODGE DURANGO V8-4.7L 2000-2003 / DODGE DURANGO V8-5.2L 1998-2000 / DODGE DURANGO V8-5.9L 1998-2003" },
  { zoren: "ZRM1343029", oem: ["E7160M"], name: "Fuel Pump", car_maker: "DODGE", applications: "DODGE DAKOTA V6-3.9L 2003 / DODGE DAKOTA V8-4.7L 2003 / DODGE DAKOTA V8-5.9L 2003" },
  { zoren: "ZRM1343022", oem: ["E7116M"], name: "Fuel Pump", car_maker: "DODGE", applications: "DODGE DAKOTA 1997-1999 L4-2.5L / DODGE DAKOTA 1997-1999 V6-3.9L / DODGE DAKOTA 1997-1999 V8-5.2L / DODGE DAKOTA 1998-1999 V8-5.9L" },
  { zoren: "ZRM1293115", oem: ["E7280M", "FG1560", "A46228", "A30509", "C0524M", "P77057M", "SP7224M", "68181986AB", "68166589AC", "V33090012"], name: "Fuel Pump", car_maker: "DODGE JEEP CHRYSLER", applications: "CHRYSLER 200 L4-2.4L 2015-2016 / DODGE DART L4-2.0L 2013-2014 / DODGE DART L4-2.4L 2013-2016 / JEEP CHEROKEE L4-2.4L 2014-2016" },
  { zoren: "ZRM1293051", oem: ["E4048M", "FG0933", "SP6626M", "P76722M"], name: "Fuel Pump", car_maker: "CHEVROLET GMC", applications: "CHEVROLET EXPRESS 1500 V6-4.3L 2010-2014 / CHEVROLET EXPRESS 2500 V8-4.8L 2010-2016 / CHEVROLET EXPRESS 2500 V8-6.0L 2010-2016 / CHEVROLET EXPRESS 3500 V8-4.8L 2010-2016 / CHEVROLET EXPRESS 3500 V8-6.0L 2010-2016 / GMC SAVANA 1500 V6-4.3L 2010-2014 / GMC SAVANA 2500 V8-4.8L 2010-2016 / GMC SAVANA 2500 V8-6.0L 2010-2016 / GMC SAVANA 3500 V8-4.8L 2010-2016 / GMC SAVANA 3500 V8-6.0L 2010-2016" },
  { zoren: "ZRM1293469", oem: ["E4036M", "13585191", "13585472", "13591799", "FG1716", "M100084", "M100149", "MU2130", "SP6720M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Chevrolet Captiva Sport 2012-2015 L4-2.4L V6-3.0L" },
  { zoren: "ZRM1293178", oem: ["P77025M", "P77545M", "68109894AE", "68217192AE", "68231311AA", "68231311AB", "A30484", "B13112067TG", "C0796M", "E7360M", "FG1863", "M635722", "SP7247M"], name: "Fuel Pump", car_maker: "JEEP", applications: "JEEP CHEROKEE 2014-2018" },
  { zoren: "ZRM1293157", oem: ["E7270M", "5145594AA", "6819307M", "68197317AA", "SP7118M", "5145594AA", "RL145594AA", "SP7223M", "P76702", "FG1354", "SP7118M", "68050948AA"], name: "Fuel Pump", car_maker: "DODGE", applications: "DODGE RAM 1500 2015-2017 V6-3.6L / DODGE RAM 1500 2013 V6-3.6L / DODGE RAM 1500 2011-2012 V6-3.7L / DODGE RAM 1500 2013 V8-4.7L / DODGE RAM 1500 2011-2017 V8-5.7L" },
  { zoren: "ZRM1293027", oem: ["E7252M", "68050962AA", "68253232AA"], name: "Fuel Pump", car_maker: "Dodge", applications: "DODGE RAM 1500 V6-3.7L 2009-2010 / DODGE RAM 1500 V8-5.7L 2009-2010" },
  { zoren: "ZRM1293038", oem: ["E7269M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Dodge Journey V6-3.6L 2011-2018" },
  { zoren: "ZRM1293042", oem: ["E7259M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Dodge Ram 1500 V8-4.7L 2008" },
  { zoren: "ZRM1293045", oem: ["E7255M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Dodge Journey 2009-2010 V6-3.5L / Dodge Journey 2008-2011 V6-3.6L" },
  { zoren: "ZRM1304003", oem: ["E7182M"], name: "Fuel Pump", car_maker: "Dodge", applications: "DODGE RAM 1500 2004-2007 V6-3.7L / DODGE RAM 1500 2004-2007 V8-4.7L / DODGE RAM 1500 2004-2008 V8-5.7L / DODGE RAM 2500 2005-2009 V8-5.7L / DODGE RAM 3500 2005-2008 V8-5.7L" },
  { zoren: "ZRM0944011", oem: ["92181830", "25369168", "92181807", "92183879", "92159903", "92181802"], name: "Fuel Pump", car_maker: "Buick", applications: "Buick Royaum Holden Commodore 2003-2007" },
  { zoren: "ZRM1292015", oem: ["13592492", "13592469", "13579886"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "CHEVROLET" },
  { zoren: "ZRM1293041", oem: ["F 00H K00 470"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET EXPRESS 1500 2010-2014 / EXPRESS 2500 2010-2016 / EXPRESS 3500 2010-2016 / GMC SAVANA 1500 2010-2014 / SAVANA 2500 2010-2016 / SAVANA 3500 2010-2016" },
  { zoren: "ZRM1293060", oem: ["E3756M", "P76280M", "SP6032M"], name: "Fuel Pump", car_maker: "BUICK", applications: "Buick LaCrosse Pontiac Grand Prix V8 5.3 2008-2009" },
  { zoren: "ZRM1293067", oem: ["E3675M", "M10105", "MU1421", "TS1016", "A33053", "19167488", "19167489", "19303421", "19303422", "19332069", "19332070"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET AVALANCHE 2500 2004-2006 V8-8.1L / SUBURBAN 2500 2004-2007 V8-6.0L / SUBURBAN 2500 2004-2007 V8-8.1L / GMC YUKON XL 2500 2004-2007 V8-6.0L / GMC YUKON XL 2500 2004-2006 V8-8.1L" },
  { zoren: "ZRM1293069", oem: ["E3748M"], name: "Fuel Pump", car_maker: "BUICK GMC", applications: "BUICK ENCLAVE 2008 V6-3.6L / GMC ACADIA 2007-2008 V6-3.6L / SATURN OUTLOOK V6-3.6L 2007-2008" },
  { zoren: "ZRM1293184", oem: ["E3818M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET SILVERADO 1500 2009-2013 / GMC SIERRA 2500 V8-6.0L 2009-2013" },
  { zoren: "ZRM0943012", oem: ["E3966M", "P75041M", "P75048M", "P74978M", "FG0272", "FG0403", "SP6086M", "SP6158M", "SP6168M", "MU1368", "MU1369", "MU1523", "MU1524", "MU1648", "MU1649", "MU1368", "19121637", "19121638", "19153721", "19153722", "25320657", "25320658", "25323846", "25323847", "25328032", "25328033", "25332986", "25332987", "25344820", "25344821", "88965393", "88965394", "88965395", "88965396"], name: "Fuel Pump", car_maker: "Chevrolet GMC ISUZU", applications: "CHEVROLET SILVERADO 1500 1999-2004 V6-4.3L / CHEVROLET SILVERADO 1500 1999-2003 V8-4.8L / CHEVROLET SILVERADO 1500 1999-2003 V8-5.3L / CHEVROLET SILVERADO 1500 2003 V8-6.0L / CHEVROLET SILVERADO 1500 HD 2001-2003 V8-6.0L / CHEVROLET SILVERADO 2500 1999-2000 V8-5.3L / CHEVROLET SILVERADO 2500 1999-2003 V8-6.0L / CHEVROLET SILVERADO 2500 HD 2001-2003 V8-6.0L / CHEVROLET SILVERADO 2500 HD 2001-2003 V8-8.1L / CHEVROLET SILVERADO 3500 2001-2003 V8-6.0L / CHEVROLET SILVERADO 3500 2001-2003 V8-8.1L / GMC SIERRA 1500 1999-2004 / GMC SIERRA 2500 1999-2003 / GMC SIERRA 3500 2001-2003" },
  { zoren: "ZRM0943016", oem: ["E3966M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Express / GMC Savana 1500/2500/3500 1997-20002" },
  { zoren: "ZRM0943017", oem: ["E3965M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "1998-1999 Chevrolet P30 V8 5,7 L. / 1998-1999 GMC P3500 V8 5.7L" },
  { zoren: "ZRM0943020", oem: ["E3956M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET C3500 1998-2000 V8-5.7L / CHEVROLET C3500 2000 V8-7.4L / CHEVROLET C3500HD 1998-2000 V8-7.4L / CHEVROLET C3500HD 2001-2002 V8-8.1L / CHEVROLET K3500 1998-2000 V8-5.7L / CHEVROLET K3500 1998-2000 V8-7.4L / CHEVROLET K3500PICKUP 1998-2000 / GMC C3500 1998-2000 V8-5.7L / GMC C3500 1998 V8-7.4L / GMC C3500HD 1998-2000 V8-7.4L / GMC C3500HD 02-01 V8-8.1L / GMC K3500 1998-2000 V8-5.7L / GMC K3500 1998-2000 V8-7.4L / GMC TRUCK K35/K3500 PICK UP 1998-2000 350(5.7) 454(7.4L)" },
  { zoren: "ZRM0943022", oem: ["E3929M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET BLAZER 1996 V6-4.3L / GMC JIMMY 1996 V6-4.3L" },
  { zoren: "ZRM0943074", oem: ["E3918M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Buick Skylark 1994-1995 V6-3.1L / Buick Skylark 1993 V6-3.3L / Chevrolet Beretta 1993-1995 L4-2.2L / Chevrolet Beretta 1993-1994 L4-2.3L / Chevrolet Beretta 1993-1995 V6-3.1L / Chevrolet Cavalier 1993-1994 L4-2.2L / Chevrolet Cavalier 1993-1994 V6-3.1L / Chevrolet Corsica 1993-1995 L4-2.2L / Chevrolet Corsica 1993-1995 V6-3.1L / Chevrolet Achieva 1993-1995 L4-2.3L / Chevrolet Achieva 1994-1995 V6-3.1L / Chevrolet Achieva 1993 V6-3.3L / Pontiac Grand am 1993-1995 L4-2.3L" },
  { zoren: "ZRM0943075", oem: ["E3919M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Buick Skylark 1996-1998 L4-2.4L / Buick Skylark 1996-1998 V6-3.1L / Chevrolet Cavalier 1996-1998 L4-2.2L / Chevrolet Cavalier 1996-1998 L4-2.4L / Oldsmobile Achieva 1996-1998 L4-2.4L / Oldsmobile Achieva 1996-1998 V6-3.1L / Pontiac Grand am 1996-1998 L4-2.4L / Pontiac Grand am 1996-1998 V6-3.1L / Pontiac Sunfire 1996-1998 L4-2.2L / Pontiac Sunfire 1996-1998 L4-2.4L" },
  { zoren: "ZRM0943080", oem: ["E3940M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Chevrolet Astro 1997-1999 V6-4.3L / GMC Safari 1997-1999 V6-4.3L" },
  { zoren: "ZRM0943081", oem: ["MU1615", "MU1518", "MU1321", "MU170", "E3508M", "P74832M", "SP6170M", "FG0324", "67307", "15205627", "19121628"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CADILLAC ESCALADE 2002-2003 V8-5.3L / CADILLAC ESCALADE 2002-2003 V8-6.0L / CHEVROLET TAHOE 2000-2003 V8-4.8L / GMC YUKON 2000-2003 V8-4.8L / GMC YUKON 2000-2003 V8-5.3L / GMC YUKON 2001-2003 V8-6.0L" },
  { zoren: "ZRM0943110", oem: ["E3584M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Chevrolet Express 1500 2003 V6-4.3L / Chevrolet Express 1500 2003 V8-5.3L / Chevrolet Express 2500 2003 V6-4.3L / Chevrolet Express 2500 2003 V8-4.8L / Chevrolet Express 2500 2003 V8-5.3L / Chevrolet Express 2500 2003 V8-6.0L / Chevrolet Express 3500 2003 V8-6.0L / GMC Savana1500 2003 V6-4.3L / GMC Savana1500 2003 V8-5.3L / GMC Savana2500 2003 V6-4.3L / GMC Savana2500 2003 V8-4.8L / GMC Savana2500 2003 V8-5.3L / GMC Savana2500 2003 V8-6.0L / GMC Savana3500 2003 V8-6.0L" },
  { zoren: "ZRM0943090", oem: ["E3559M", "88966962", "25340156", "10355739"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET TAHOE 2002-2004 V8-5.3L / GMC YUKON 2002-2004 V8-5.3L" },
  { zoren: "ZRM1293166", oem: ["E3768M", "19299717", "1234773", "150234", "19179869", "19206650", "2920543", "530-2490", "A30011", "B11112100TG", "C0290M", "FG1054", "FP22052S", "M2496229", "MU1711", "SP6107M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Cadillac Escalade 2009-2014 V8-6.2L / Chevrolet Tahoe 2008-2014 V8-5.3L / Chevrolet Tahoe 2009 V8-6.2L / GMC Yukon 2008-2014 V8-5.3L / GMC Yukon 2009-2014 V8-6.2L" },
  { zoren: "ZRM1294027", oem: ["19301236", "19352773", "19260077", "19211074", "E4037M", "MU2175", "MU2253", "M100071", "SP6684M", "P76852M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Chevrolet Express 3500 (2010-2016) V8-4.8L / Chevrolet Express 3500 (2010-2016) V8-6.0L / GMC Savana 3500 (2010-2016) V8-4.8L / GMC Savana 3500 (2010-2016) V8-6.0L" },
  { zoren: "ZRM1293155", oem: ["SP6646M", "P76851M", "19301219", "E4009M", "M10272", "67795", "19301219", "19256387", "M10266", "19420763"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Chevrolet Silverado 1500 (2010-2013) V8 4.8L / Chevrolet Silverado 1500(2010-2013) V8 5.3L / GMC Sierra 1500(2010-2013) V8 4.8L / GMC Sierra 1500(2010-2013) V8 5.3L" },
  { zoren: "ZRM1293073", oem: ["96830394", "20895923", "4817842", "4805901", "96629370", "4814207"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "CHEVROLET CAPTIVA (C100 C140)2006.06 - /2016" },
  { zoren: "ZRM0943057", oem: ["E3930M", "P74817M", "FG0038", "SP6028M", "MU1605", "MU28"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET TAHOE 1995 V8-5.7L / GMC YUKON 1995 V8-5.7L" },
  { zoren: "ZRM0943062", oem: ["E3994M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Chevrolet C1500 SUBURBAN 1998-1999 V8-5.7L / Chevrolet C2500 SUBURBAN 1998-1999 V8-5.7L / Chevrolet C2500 SUBURBAN 1998-1999 V8-7.4L / Chevrolet K1500 SUBURBAN 1998-1999 V8-5.7L / Chevrolet K2500 SUBURBAN 1998-1999 V8-5.7L / Chevrolet K2500 SUBURBAN 1998-1999 V8-7.4L / GMC C1500 SUBURBAN 1998-1999 V8-5.7L / GMC C2500 SUBURBAN 1998-1999 V8-5.7L / GMC C2500 SUBURBAN 1998-1999 V8-7.4L / GMC K1500 SUBURBAN 1998-1999 V8-5.7L / GMC K2500 SUBURBAN 1998-1999 V8-7.4L" },
  { zoren: "ZRM0943065", oem: ["E3920M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET S10 1996 V6-4.3L / GMC SONAMA 1996 V6-4.3L" },
  { zoren: "ZRM0943067", oem: ["E3950M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Chevrolet Cavalier 1999-2000 I4-2.2L / Chevrolet Cavalier 1999-2000 I4-2.4L / Chevrolet Malibu 1998-1999 L4-2.4L / Chevrolet Malibu 1998-1999 V6-3.1L / Oldsmobile Alero 1999 L4-2.4L / Oldsmobile Alero 1999 V6-3.4L / Oldsmobile Cutlass 1999 V6-3.1L / Pontiac Grand am 1999 L4-2.4L / Pontiac Grand am 1999 V6-3.4L / Pontiac Sunfire 1999-2000 L4-2.2L / Pontiac Sunfire 1999-2000 L4-2.4L" },
  { zoren: "ZRM0943070", oem: ["E3925M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET BLAZER 1996 V6-4.3L / GMC JIMMY 1996 V6-4.3L / OLDSMOBILE BRAVADA 1996 V6-4.3L" },
  { zoren: "ZRM0943050", oem: ["E3556M", "19331260", "19180099", "19369909", "25345024", "P1245M", "P75023M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Chevrolet Avalanche 1500 5.3L 2002-2003" },
  { zoren: "ZRM0003025", oem: ["96344792"], name: "Fuel Pump", car_maker: "DAEWOO", applications: "DAEWOO Lanos Saloon 1.3 1.5 1.6 16V 1997-2002" },
  { zoren: "ZRM0943161", oem: ["P74928M"], name: "Fuel Pump", car_maker: "BUICK", applications: "BUICK CENTURY V6-3.1L 2000-2005 / BUICK REGAL V6-3.8L 2000-2004 / CHEVROLET IMPALA 2000-2005 V6-3.4L / CHEVROLET IMPALA 2000-2005 V6-3.8L / CHEVROLET MONTE CARLO 2000-2005 V6-3.4L / CHEVROLET MONTE CARLO 2000-2005 V6-3.8L / OLDSMOBILE INTRIGUE V6-3.5L 2001-2002 / PONTIAC GRAND PRIX V6-3.1L 2001-2003 / PONTIAC GRAND PRIX V6-3.8L 2001-2003" },
  { zoren: "ZRM0943058", oem: ["E3973M"], name: "Fuel Pump", car_maker: "BUICK", applications: "BUICK REGAL 1998-1999 V6-3.8L / PONTIAC GRAND PRIX 1998-2000 V6-3.8L" },
  { zoren: "ZRM1293072", oem: ["E3617M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "CHEVROLET SILVERADO 3500 V8-6.0L 2004-2006 / CHEVROLET SILVERADO 3500 V8-8.1L 2004-2006 / G-MC SIERRA 3500 V8-6.0L 2004-2006 / G-MC SIERRA 3500 V8-8.1L 2004-2006 / G-MC SIERRA 3500 CLASSIC 2007 V8-6.0L / G-MC SIERRA 3500 CLASSIC 2007 V8-8.1L" },
  { zoren: "ZRM1293084", oem: ["E3815M", "P77023M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Chevrolet Silverado 1500 2009 V8-4.8L / Chevrolet Silverado 1500 2009 V8-5.3L / GMC Sierra 1500 2009 V8-4.8L / GMC Sierra 1500 2009 V8-5.3L" },
  { zoren: "ZRM1293104", oem: ["E3790M", "EP1031", "M100059", "M10059", "MU2114", "MU2209", "A30461", "A46024", "15969626", "19167429", "19329336", "19370465", "23240487", "22753589", "22783658", "22833390", "22957143", "84084766", "CFG1371", "SP6657M", "P76830M", "M3520868", "69787"], name: "Fuel Pump", car_maker: "GMC", applications: "BUICK ENCLAVE 2009-2017 V6-3.6L / CHEVROLET TRAVERSE 2009-2017 V6-3.6L / GMC ACADIA 2009-2016 V6-3.6L / GMC ACADIA LIMITED 2017 V6-3.6L / SATURN OUTLOOK 2009-2010 V6-3.6L" },
  { zoren: "ZRM1293105", oem: ["E3610M", "MU1657", "FG0809-11B1", "P76262M", "FE10043", "MU1657", "122GE", "67567", "67517", "6239E", "39113", "19149059", "19207718", "19256622"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Cadillac Escalade ESV 2004-2006 V8-6.0L / Cadillac Escalade ESV 2007 V8-6.2L / Cadillac Escalade EXT 2004-2006 V8-6.0L / Cadillac Escalade EXT 2007 V8-6.2L / Chevrolet Avalanche 2007 V8-5.3L / Chevrolet Avalanche 2007 V8-6.0L / Chevrolet Avalanche 1500 2004-2006 V8-5.3L / Chevrolet Suburban 1500 2004-2007 V8-5.3L / Chevrolet Suburban 1500 2006-2007 V8-6.0L / GMC Yukon XL 1500 2004-2005 V8-5.3L / GMC Yukon XL 1500 2007 V8-5.3L / GMC Yukon XL 1500 2004-2007 V8-6.0L / GMC Yukon XL 1500 2007 V8-6.2L" },
  { zoren: "ZRM1293106", oem: ["E3581M", "P76262M", "19168127", "88965556", "19370394", "MU1639", "19149062", "19168126", "19168127", "19207716", "88965556"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Cadillac Escalade 2004-2005 V8-5.3L / Cadillac Escalade 2006 V8-6.0L / Cadillac Escalade 2007 V8-6.2L / Chevrolet Tahoe 2004-2007 V8-4.8L / Chevrolet Tahoe 2004-2007 V8-5.3L / GMC Yukon 2004-2007 V8-4.8L / GMC Yukon 2004-2007 V8-5.3L / GMC Yukon 2004-2006 V8-6.0L / GMC Yukon 2007 V8-6.2L" },
  { zoren: "ZRM1293107", oem: ["E3705M", "19133546", "19168418", "19208960", "FG0816", "SP6087M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Chevrolet Tahoe 2005-2007 V8-5.3L / GMC Yukon 2005-2007 V8-5.3L" },
  { zoren: "ZRM1293109", oem: ["E3684M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET SILVERADO 1500 2004-2006 V8-4.8L / CHEVROLET SILVERADO 1500 2004-2006 V8-5.3L / CHEVROLET SILVERADO 1500 2006 V8-6.0L / GMC SIERRA 1500 2004-2006 V8-4.8L / GMC SIERRA 1500 2004-2006 V8-5.3L / GMC SIERRA 1500 2004-2006 V8-6.0L / GMC SIERRA 1500 CLASSIC 2007 V8-4.8L / GMC SIERRA 1500 CLASSIC 2007 V8-5.3L / GMC SIERRA 1500 CLASSIC 2007 V8-6.0L" },
  { zoren: "ZRM0943036", oem: ["E3552M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Chevrolet Venture 2002-2005 V6-3.4L / Oldsmobile Silhouette 2002-2004 V6-3.4L / Pontiac Montana 2002-2005 V6-3.4L" },
  { zoren: "ZRM0943037", oem: ["E3972M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CADILAC ESCALADE 1999-2000 V8-5.7L / CHEVROLET TAHOE 1998-2000 V8-5.7L / GMC YUKON 1998-2000 V8-5.7L" },
  { zoren: "ZRM0943047", oem: ["E3510M", "19331256", "19153718", "19369905", "5302238", "P74833M", "MU1620"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET SUBURBAN 2500 2000-2001 V8-6.0L / CHEVROLET SUBURBAN 2500 2001 V8-8.1L / GMC YUKON XL 2500 2000-2001 V8-6.0L / GMC YUKON XL 2500 2001 V8-8.1L" },
  { zoren: "ZRM0943051", oem: ["E3506M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET ASTRO 2000-2005 V6-4.3L / GMC SAFARI 2000-2005 V6-4.3L" },
  { zoren: "ZRM0943053", oem: ["E3369M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Chevrolet Camaro 1999-2002 V6-3.8L / Pontiac Firebird 1999-2002 V6-3.8L" },
  { zoren: "ZRM0943056", oem: ["E3912M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Buick Riviera 1995-1996 V6-3.8L / Oldsmobile Aurora 1995-1996 V8-4.0L" },
  { zoren: "ZRM0944018", oem: ["E3549M", "E3549M", "SP3549M", "P75053M", "P1556M", "MU1837", "FG0387", "88966952", "88966950", "88965822", "2202510465", "19206120", "19206122", "19206124", "F2550A", "15013514", "P1556M", "P1557M", "150093A", "USEP3549M", "SP3549M", "19368752", "MU1835", "19368754", "FG0411", "SKEFP021", "GM0516860", "PN3030"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "BUICK RAINIER 2004 L6-4.2L / BUICK RAINIER 2004 V8-5.3L / CHEVR-OLET SSR 2003-2004 V8-5.3L / CHEVR-OLET TRAILBLAZER 2002-2004 L6-4.2L / CHEVR-OLET TRAILBLAZER EXT 2002-2004 L6-4.2L / CHEVR-OLET TRAILBLAZER EXT 2003-2004 V8-5.3L / G-MC ENVOY 2002-2004 L6-4.2L / G-MC ENVOY XL 2002-2004 L6-4.2L / G-MC ENVOY XL 2003-2004 V8-5.3L / G-MC ENVOY XUV 2004 L6-4.2L / G-MC ENVOY XUV 2004 V8-5.3L / IS-UZU ASCENDER 2003-2004 L6-4.2L / IS-UZU ASCENDER 2003-2004 V8-5.3L / OLDSMOB-ILE BRAVADA 2002-2004 L6-4.2L" },
  { zoren: "ZRM1292016", oem: ["13592486", "13592475"], name: "Fuel Pump", car_maker: "BUICK", applications: "BUICK ENCORE 14-UP" },
  { zoren: "ZRM1293034", oem: ["E3817M", "19420737", "19206535", "19206536", "19368798", "19368800", "19206528", "19206529"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "2009 Chevrolet Silverado1500 V8-4.8L / 2009 Chevrolet Silverado1500 V8-5.3L / 2009 Chevrolet Silverado1500 V8-6.0L / 2009 GMC Sierra1500 V8-4.8L / 2009 GMC Sierra1500 V8-5.3L / 2009 GMC Sierra1500 V8-6.0L" },
  { zoren: "ZRM1293075", oem: ["92250121", "92193776", "92159797", "EFP299"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "GM Holden Comodoro 2006-2017 / Estadista 2006-2010" },
  { zoren: "ZRM1243003", oem: ["E3612M", "P76251M", "96494164", "SP6608M", "MU1467", "1598cc"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Chevrolet Aveo 2004-2005 L4 1.6L / Pontiac 2005 L4 1.6L" },
  { zoren: "ZRM1293002", oem: ["E3609M", "GM0517270", "19331937", "PN3040", "P76232M", "FG0340", "19331960", "MU1415"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET SILVERADO 1500 2005-2006 V6-4.3L / CHEVROLET SILVERADO 1500 2004-2006 V8-4.8L/V8-5.3L / CHEVROLET SILVERADO 1500 2004-2007 V8-6.0L / CHEVROLET SILVERADO 1500Classic 2007 V8-5.3L/V8-6.0L / CHEVROLET SILVERADO 1500HD 2005-2006 V8-6.0L / CHEVROLET SILVERADO 2500 2004 V8-6.0L / CHEVROLET SILVERADO 2500HD 2004-2006 V8-6.0L/V8-8.1L / GMC SIERRA 1500 2005-2006 V6-4.3L/V8-6.0L / GMC SIERRA 1500 2004-2006 V8-4.8L/V8-5.3L / GMC SIERRA 1500Classic 2007 V6-4.3L/V8-4.8L/V8-5.3L/V8-6.0L / GMC SIERRA 1500 HD 2005-2006 V8-6.0L / GMC SIERRA 1500 HD CLASSIC 2007 V8-6.0L / GMC SIERRA 2500 2004 V8-6.0L / GMC SIERRA 2500HD 2004-2006 V8-6.0L/V8-8.1L / GMC SIERRA 2500 HD CLASSIC 2007 V8-6.0L/V8-8.1L" },
  { zoren: "ZRM1293039", oem: ["E7253M"], name: "Fuel Pump", car_maker: "CHRYSLER", applications: "CHRYSLER 200 L4-2.4L (2011-2014) / CHRYSLER SEBRING L4-2.4L (2008-2010) / DO-DGE AVENGER L4-2.4L (2008-2014)" },
  { zoren: "ZRM1293455", oem: ["68405631AC", "68405631AC", "941GE", "68643777AA", "68494734AC", "68494734AB", "68494734AA", "A2C18099702", "68405631AD"], name: "Fuel Pump", car_maker: "Chrysler Dodge", applications: "Chrysler 300 2020-2022 5.7L / Chrysler 300 2020-2023 3.6L / Dodge Challenger 2020-2022 5.7L/6.4L/3.6L / Dodge Charger 2020-2023 5.7L/6.4L/3.6L" },
  { zoren: "ZRM1333005", oem: ["E7194M"], name: "Fuel Pump", car_maker: "CHRYSLER", applications: "CHRYSLER PACIFICA 2004-2006" },
  { zoren: "ZRM1293056", oem: ["E3710M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "CHEVROLET UPLANDER V6-3.5L 2006 / CHEVROLET UPLANDER V6-3.9L 2007 / PONTIAC MONTANA V6-3.9L 2007" },
  { zoren: "ZRM1293070", oem: ["E3765M", "M100058+M10012", "5+M10191+69451", "69977+P76299M+", "P76786M+FG1153", "+19181000", "19256376+192593", "98+19300964+SP6", "050M", "F2776A", "13551499", "19368768", "PN3156", "P76299M", "FG1153", "M100125"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Cadillac Escalade 2009-2012 V8-6.0L / Cadillac Escalade 20082 V8-6.2L / Chevrolet Tahoe 2008-2009 V8-4.8L / Chevrolet Tahoe 2008-2009 V8-5.3L / Chevrolet Tahoe 2008-2011 V8-6.03L / GMC YUKON 2008-2009 V8-4.8L / GMC YUKON 2008-2009 V8-5.3L / GMC YUKON 2008-2013 V8-6.0L / GMC YUKON 2008 V8-6.2L" },
  { zoren: "ZRM0944019", oem: ["E3614M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET COLORADO 2004-2005 L4-2.8L / CHEVROLET COLORADO 2004-2005 L5-3.5L / GMC CANYON 2004-2005 L4-2.8L / GMC CANYON 2004-2005 L5-3.5L" },
  { zoren: "ZRM0003004", oem: ["96449569"], name: "Fuel Pump", car_maker: "DAEWOO", applications: "Chevrolet Jingcheng Lefeng / Daewoo Lanos 2005-2006" },
  { zoren: "ZRM0943117", oem: ["25324949", "BACT9350A", "BA9350A", "BA9350B", "BAC9350C", "BAT9350A", "92148190", "25324948", "25337050", "AUC9H307NB"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Holden 1997-2002" },
  { zoren: "ZRM1293097", oem: ["E3747M", "19206532", "150232A", "PN3104", "F2758A", "P76298M", "19368776", "M10206", "FG1058", "19206582", "19370398", "5302175", "P76298M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET SILVERADO 1500 2007-2008 V8-4.8L / CHEVROLET SILVERADO 1500 2007-2008 V8-5.3L / CHEVROLET SILVERADO 1500 2007-2008 V8-6.0L / CHEVROLET SILVERADO 1500 CLASSIC 2007 V8-4.8L / CHEVROLET SILVERADO 1500 CLASSIC 2007 V8-6.0L / GMC SILVERADO 1500 2007-2008 V8-4.8L / GMC SILVERADO 1500 2007-2008 V8-5.3L / GMC SILVERADO 1500 2007-2008 V8-6.0L / GMC SILVERADO 1500 2007-2008 V8-6.2L / GMC SILVERADO 1500CLASSIC 2007 V8-4.8L / GMC SILVERADO 1500CLASSIC 2007 V8-6.0L" },
  { zoren: "ZRM0943072", oem: ["E3978M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "PONTIAC GRAND PRIX 1997 V6-3.1L / PONTIAC GRAND PRIX 1997 V6-3.8L" },
  { zoren: "ZRM1293125", oem: ["E3706M", "M10107", "MU1474", "67544", "FG0815", "P76273M", "SP6603M", "19208962", "19208963"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Chevrolet Avalanche 2007 V8-5.3L / Chevrolet Avalanche 1500 2005-2006 V8-5.3L / Chevrolet Suburban 1500 2005-2007 V8-5.3L / GMC Yukon XL 1500 2005-2007 V8-5.3L" },
  { zoren: "ZRM0943096", oem: ["E3953M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET BLAZER V6-4.3L 1997-1998 / GMC JIMMY V6-4.3L 1997-1998 / OLDSMOBILE BRAVADA V6-4.3L 1997-1998" },
  { zoren: "ZRM0943043", oem: ["E3967M", "MU1748", "MU152", "FG0092", "19177231", "25314341"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET C1500 SUBURBAN V8-5.7L 1998-1999 / C2500 SUBURBAN V8-5.7L 1998-1999 / C2500 SUBURBAN V8-7.4L 1998-1999 / K1500 SUBURBAN V8-5.7L 1998-1999 / K2500 SUBURBAN V8-5.7L 1998-1999 / K2500 SUBURBAN V8-7.4L 1998-1999 / GMC C1500 SUBURBAN V8-5.7L 1998-1999 / C2500 SUBURBAN V8-5.7L 1998-1999 / C2500 SUBURBAN V8-7.4L 1998-1999 / K1500 SUBURBAN V8-5.7L 1998-1999 / K2500 SUBURBAN V8-5.7L 1998-1999 / K2500 SUBURBAN V8-7.4L 1998-1999" },
  { zoren: "ZRM0943091", oem: ["E3560M", "88966963"], name: "Fuel Pump", car_maker: "BUICK", applications: "BUICK RIVIERA V6-3.8L 1996" },
  { zoren: "ZRM1303001", oem: ["E3707M"], name: "Fuel Pump", car_maker: "Chevrolet GMC Buick", applications: "Chevrolet Trailblazer 05-07 / GMC Envoy 05-07 / Buick Rainier 05-07 / Saab 9-7x 05-07 / Isuzu Ascender 05-07 / Chevrolet SSR 05-06" },
  { zoren: "ZRM1293113", oem: ["92203241"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Holden VE V6-3.0L 2009-2013" },
  { zoren: "ZRM0003155", oem: ["E3624S"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Chevrolet S10 V6-4.3L 1992-1994 / GMC Jimmy V6-4.3L 1992-1994 / GMC Sonoma V6-4.3L 1992-1993 / Oldsmobile Bravada V6-4.3L 1992" },
  { zoren: "ZRM0944013", oem: ["92159902"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "Holden WK caprice V6 2003-2004 / Holden COMMODORE V6 2002-2004" },
  { zoren: "ZRM1293086", oem: ["P76894M", "FG1831", "SP6711M", "FG1831", "M100265", "E4127M", "13582487"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "GMC Sierra 1500 2014-2017 / Chevrolet Silverado 1500 2014-2017" },
  { zoren: "ZRM0943063", oem: ["E3932M"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET TAHOE V8-5.7L 1996-1997 / GMC YUKON V8-5.7L 1996-1997" },
  { zoren: "ZRM1293026", oem: ["E3678M", "19133519", "19303380", "19331939", "2920525", "530-2275", "66074", "830791", "88965414", "A30008", "C0246M", "E3678M", "M3480498", "MU1436", "RE0912S", "SP61435M", "TU466", "USEP3678M", "FG0402", "M10030", "P76088M", "19331946"], name: "Fuel Pump", car_maker: "Chevrolet GMC", applications: "CHEVROLET EXPRESS 1500 V6-4.3L 2005-2008 / EXPRESS 1500 V8-5.3L 2004-2007 / EXPRESS 2500 V6-4.3L 2005 / EXPRESS 2500 V8-4.8L 2004-2008 / EXPRESS 2500 V8-5.3L 2004-2005 / EXPRESS 2500 V8-6.0L 2004-2008 / EXPRESS 3500 V8-4.8L 2004-2008 / EXPRESS 3500 V8-6.0L 2004-2008 / CHEVROLET TRUCK EXPRESS 1500 VAN 325 (5.3L) 2004 / CHEVROLET TRUCK EXPRESS 3500 VAN 294 (4.8L) 2004 / GMC SAVANA 1500 V6-4.3L 2005-2008 / GMC SAVANA 1500 V8-5.3L 2004-2007 / GMC SAVANA 2500 V6-4.3L 2005 / GMC SAVANA 2500 V8-4.8L 2004-2008 / GMC SAVANA 2500 V8-5.3L 2004-2005 / GMC SAVANA 2500 V8-6.0L 2004-2008 / GMC SAVANA 3500 V8-4.8L 2004-2008 / GMC SAVANA 3500 V8-6.0L 2004-2008" },
  { zoren: "ZRM1293033", oem: ["E3717M", "19153049"], name: "Fuel Pump", car_maker: "Chevrolet PONTIAC SATURN", applications: "CHEVROLET UPLANDER V6-3.5L 2005-2006 / CHEVROLET UPLANDER V6-3.9L 2006-2007 / PONTIAC MONTANA V6-3.5L 2005-2006 / PONTIAC MONTANA V6-3.9L 2006-2007 / SATURN V6-3.5L 2005-2006 / SA-URN V6-3.9L 2006-2007" },
  { zoren: "ZRM1501033", oem: ["0580200039", "13586327", "13577234", "0580200103", "F01R00S294", "13586317", "0580200039", "0580200045"], name: "Fuel Pump", car_maker: "Chevrolet Cruze", applications: "Chevrolet Cruze 1.4 1.6 2006-2016" },
  { zoren: "ZRM1501096", oem: ["E4034M", "13321034", "13579908", "13510671", "19421048", "FG1739"], name: "Fuel Pump", car_maker: "Chevrolet Cruze", applications: "Chevrolet Chevy Cruze L4 1.4L 1.8L 2011-2015 / Buick Verano 2.0L/2.4L 2012-2016 / Buick Cascada 2016-" },
  { zoren: "ZRM1292021", oem: ["13582421", "13503108A", "13588158", "13583142"], name: "Fuel Pump", car_maker: "Chevrolet Cruze", applications: "CHEVROLET CRUZ 2015-" },
  { zoren: "ZRM1501126", oem: ["13584225", "13296120", "F01R00S296"], name: "Fuel Pump", car_maker: "Chevrolet Cruze", applications: "Chevrolet Cruze 2010-2013" },
  { zoren: "ZRM1293115", oem: ["E7280M", "FG1560", "A46228", "A30509", "C0524M", "P77057M", "SP7224M", "68181986AB", "68166589AC", "V33090012"], name: "Fuel Pump", car_maker: "DODGE JEEP CHRYSLER", applications: "CHRYSLER 200 L4-2.4L 2015-2016 / DODGE DART L4-2.0L 2013-2014 / DODGE DART L4-2.4L 2013-2016 / JEEP CHEROKEE L4-2.4L 2014-2016" },
  { zoren: "ZRM1293051", oem: ["E4048M", "FG0933", "SP6626M", "P76722M"], name: "Fuel Pump", car_maker: "CHEVROLET GMC", applications: "CHEVROLET EXPRESS 1500 V6-4.3L 2010-2014 / CHEVROLET EXPRESS 2500 V8-4.8L 2010-2016 / CHEVROLET EXPRESS 2500 V8-6.0L 2010-2016 / CHEVROLET EXPRESS 3500 V8-4.8L 2010-2016 / CHEVROLET EXPRESS 3500 V8-6.0L 2010-2016 / GMC SAVANA 1500 V6-4.3L 2010-2014 / GMC SAVANA 2500 V8-4.8L 2010-2016 / GMC SAVANA 2500 V8-6.0L 2010-2016 / GMC SAVANA 3500 V8-4.8L 2010-2016 / GMC SAVANA 3500 V8-6.0L 2010-2016" },
  { zoren: "ZRM1293469", oem: ["E4036M", "13585191", "13585472", "13591799", "FG1716", "M100084", "M100149", "MU2130", "SP6720M"], name: "Fuel Pump", car_maker: "Chevrolet", applications: "Chevrolet Captiva Sport 2012-2015 L4-2.4L V6-3.0L" },
  { zoren: "ZRM1293178", oem: ["P77025M", "P77545M", "68109894AE", "68217192AE", "68231311AA", "68231311AB", "A30484", "B13112067TG", "C0796M", "E7360M", "FG1863", "M635722", "SP7247M"], name: "Fuel Pump", car_maker: "JEEP", applications: "JEEP CHEROKEE 2014-2018" },
  { zoren: "ZRM1304007", oem: ["E7165M", "E7186M", "5104694ab", "5202370", "FG0817", "5202340", "358300261", "P76259M", "PN3036"], name: "Fuel Pump", car_maker: "Dodge", applications: "DODGE RAM 1500 2004-2006 V6-3.7L / DODGE RAM 1500 2004-2006 V8-4.7L / DODGE RAM 1500 2004-2006 V8-5.7L / DODGE RAM 2500 2005-2007 V8-5.7L / DODGE RAM 3500 2005-2007 V8-5.7L" },
  { zoren: "ZRM1343009", oem: ["E7161M"], name: "Fuel Pump", car_maker: "Dodge", applications: "DODGE RAM 1500 V6-3.7L 2002-2003 / DODGE RAM 1500 V8-4.7L 2002-2003 / DODGE RAM 1500 V8-5.9L 2002-2003" },
  { zoren: "ZRM1343010", oem: ["E7168M"], name: "Fuel Pump", car_maker: "DODGE", applications: "DODGE DAKOTA V6-3.9L 2003 / DODGE DAKOTA V8-4.7L 2003 / DODGE DAKOTA V8-5.9L 2003" },
  { zoren: "ZRM1343002", oem: ["E7117M"], name: "Fuel Pump", car_maker: "DODGE", applications: "DODGE DURANGO V6-3.9L 1998-1999 / DODGE DURANGO V8-4.7L 2000-2003 / DODGE DURANGO V8-5.2L 1998-2000 / DODGE DURANGO V8-5.9L 1998-2003" },
  { zoren: "ZRM1343029", oem: ["E7160M"], name: "Fuel Pump", car_maker: "DODGE", applications: "DODGE DAKOTA V6-3.9L 2003 / DODGE DAKOTA V8-4.7L 2003 / DODGE DAKOTA V8-5.9L 2003" },
  { zoren: "ZRM1343022", oem: ["E7116M"], name: "Fuel Pump", car_maker: "DODGE", applications: "DODGE DAKOTA 1997-1999 L4-2.5L / DODGE DAKOTA 1997-1999 V6-3.9L / DODGE DAKOTA 1997-1999 V8-5.2L / DODGE DAKOTA 1998-1999 V8-5.9L" },
  { zoren: "ZRM1293157", oem: ["E7270M", "5145594AA", "6819307M", "68197317AA", "SP7118M", "5145594AA", "RL145594AA", "SP7223M", "P76702", "FG1354", "SP7118M", "68050948AA"], name: "Fuel Pump", car_maker: "DODGE", applications: "DODGE RAM 1500 2015-2017 V6-3.6L / DODGE RAM 1500 2013 V6-3.6L / DODGE RAM 1500 2011-2012 V6-3.7L / DODGE RAM 1500 2013 V8-4.7L / DODGE RAM 1500 2011-2017 V8-5.7L" },
  { zoren: "ZRM1293027", oem: ["E7252M", "68050962AA", "68253232AA"], name: "Fuel Pump", car_maker: "Dodge", applications: "DODGE RAM 1500 V6-3.7L 2009-2010 / DODGE RAM 1500 V8-5.7L 2009-2010" },
  { zoren: "ZRM1293038", oem: ["E7269M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Dodge Journey V6-3.6L 2011-2018" },
  { zoren: "ZRM1293042", oem: ["E7259M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Dodge Ram 1500 V8-4.7L 2008" },
  { zoren: "ZRM1293045", oem: ["E7255M"], name: "Fuel Pump", car_maker: "Dodge", applications: "Dodge Journey 2009-2010 V6-3.5L / Dodge Journey 2008-2011 V6-3.6L" },
  { zoren: "ZRM1304003", oem: ["E7182M"], name: "Fuel Pump", car_maker: "Dodge", applications: "DODGE RAM 1500 2004-2007 V6-3.7L / DODGE RAM 1500 2004-2007 V8-4.7L / DODGE RAM 1500 2004-2008 V8-5.7L / DODGE RAM 2500 2005-2009 V8-5.7L / DODGE RAM 3500 2005-2008 V8-5.7L" }
];

// ======================================================
// ======================================================
// 3. DOMContentLoaded: Entry Point
// ======================================================
document.addEventListener("DOMContentLoaded", () => {
    
    // 3A. FIREBASE CONFIGURATION
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
    let db;
    try {
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        console.log("Firebase Connected Successfully");
    } catch (e) {
        console.error("Firebase Connection Failed:", e);
    }

    // ======================================================
    // 4. UNIVERSAL DATA NORMALIZER (THE FIX)
    // This forces all different data formats into ONE standard format
    // ======================================================
    const staticDatabase = (typeof rawData !== 'undefined' ? rawData : []).map(item => {
        
        // 1. Grab OEM from ANY possible key name
        let rawOem = item.oem || item.oem_no || item.oem_number || item.OEM_NO || item.OEM || [];
        let oemArray = [];

        // 2. Force it into an Array
        if (Array.isArray(rawOem)) {
            oemArray = rawOem;
        } else if (typeof rawOem === 'string') {
            // Split by comma, slash, or space to separate multiple numbers
            oemArray = rawOem.split(/[\s,/]+/).map(s => s.trim());
        } else if (typeof rawOem === 'number') {
            oemArray = [rawOem.toString()];
        }

        return {
            // Handle Zoren No variations
            zoren: (item.zoren || item.zoen_no || item.zoren_no || item.ZOREN_NO || "N/A").toString().toUpperCase().trim(),
            
            // Handle Maker variations
            car_maker: (item.car_maker || item.brand || item.CAR_MAKER || "Unknown").trim(),
            
            // Handle Application variations
            applications: (item.applications || item.application || item.APPLICATIONS || "").trim(),
            
            // Default Name
            name: (item.name || "Fuel Pump").trim(),
            
            // The fixed OEM Array
            oem: oemArray.filter(x => x && x.length > 1) // Remove empty or single char junk
        };
    });

    let cloudData = []; // Store cloud parts here

    // Hide loading message
    const loadingMessage = document.getElementById("loadingMessage");
    if(loadingMessage) loadingMessage.style.display = 'none';

    // ======================================================
    // 5. SEARCH FUNCTION (Updated for Array Searching)
    // ======================================================
    function searchLogic(data, q) {
        if (!q) return data; 
        const lowerQ = q.toLowerCase().trim();

        return data.filter(item => {
            // Search Zoren (Exact or Partial)
            if (item.zoren.toLowerCase().includes(lowerQ)) return true;
            
            // Search Car Maker
            if (item.car_maker.toLowerCase().includes(lowerQ)) return true;

            // Search Applications (Description)
            if (item.applications.toLowerCase().includes(lowerQ)) return true;

            // Search INSIDE the OEM Array
            // This checks EVERY number in the list for the search term
            if (item.oem.some(num => num.toLowerCase().includes(lowerQ))) return true;

            return false;
        });
    }

    // Helper: Highlight Text
    function highlightMatch(text, query) {
        if (!query || !text) return text;
        const strText = text.toString(); 
        const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${safeQuery})`, 'gi');
        return strText.replace(regex, '<span class="highlight">$1</span>');
    }

    // ======================================================
    // 6. RENDER RESULTS
    // ======================================================
    function renderResults(results, query) {
        const box = document.getElementById("result");
        const countBox = document.getElementById("resultCount");
        if (!box) return; 
        box.innerHTML = ""; 

        // Update Count
        if(countBox) {
            countBox.innerText = results.length > 0 
                ? `Found ${results.length} matches` 
                : "No matches found";
        }

        if (results.length === 0) {
            box.innerHTML = `
                <div class='col-span-full p-8 bg-red-50 rounded-xl border border-red-100 text-center'>
                    <p class="text-xl text-red-500 font-bold">❌ No Record Found</p>
                    <p class="text-gray-500 mt-2">Try searching for a partial number (e.g. "31110")</p>
                </div>`;
            return;
        }

        // Limit results for speed if query is empty (show first 50)
        const displayData = (query === "") ? results.slice(0, 50) : results;

        displayData.forEach(p => {
            // Build OEM Badges
            let oemHtml = `<div class="flex flex-wrap gap-2 mt-2">`;
            p.oem.forEach(num => {
                // Highlight match inside OEM number
                oemHtml += `<span class="bg-blue-50 text-blue-700 text-xs font-mono px-2 py-1 rounded border border-blue-100">${highlightMatch(num, query)}</span>`;
            });
            oemHtml += `</div>`;

            const isCloud = p.id ? `<span class="ml-2 text-[10px] bg-green-100 text-green-800 py-0.5 px-2 rounded-full">NEW</span>` : '';

            const cardHtml = `
                <div class="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
                    <div class="flex justify-between items-start mb-2">
                         <h3 class="font-bold text-gray-800 text-lg">${highlightMatch(p.car_maker, query)}</h3>
                         <span class="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded">${highlightMatch(p.zoren, query)}</span>
                    </div>
                    
                    <p class="text-sm text-gray-600 mb-3 line-clamp-2" title="${p.applications}">
                        ${highlightMatch(p.applications, query)}
                    </p>
                    
                    <div class="mt-auto pt-3 border-t border-gray-50">
                        <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">OEM Numbers</span>
                        ${oemHtml}
                    </div>
                    ${isCloud}
                </div>
            `;
            box.innerHTML += cardHtml;
        });
    }

    // ======================================================
    // 7. INITIALIZE
    // ======================================================

    // 1. Render all data immediately
    renderResults(staticDatabase, ""); 

    // 2. Setup Search Listeners
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        const handleSearch = () => {
            const q = searchInput.value.trim();
            const combined = [...cloudData, ...staticDatabase];
            renderResults(searchLogic(combined, q), q);
        };

        // Search on Type (Real-time)
        searchInput.addEventListener("input", handleSearch);
        
        // Search on Enter
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") { e.preventDefault(); handleSearch(); }
        });

        // Search on Button Click
        if (searchBtn) searchBtn.onclick = handleSearch;
    }

    // 3. Connect to Cloud (If available)
    if (db) {
        try {
            const q = query(collection(db, "inventory"), orderBy("createdAt", "desc"));
            onSnapshot(q, (snapshot) => {
                cloudData = snapshot.docs.map(doc => {
                    const d = doc.data();
                    // Ensure cloud data also follows the correct structure
                    let rawOem = d.oem || [];
                    return {
                        id: doc.id,
                        zoren: (d.zoren || "").toUpperCase(),
                        car_maker: d.car_maker || "",
                        applications: d.applications || "",
                        name: d.name || "Fuel Pump",
                        oem: Array.isArray(rawOem) ? rawOem : [rawOem.toString()]
                    };
                });
                
                // Update display when cloud data arrives
                const inputVal = searchInput ? searchInput.value.trim() : "";
                const combined = [...cloudData, ...staticDatabase];
                renderResults(searchLogic(combined, inputVal), inputVal);
            });
        } catch (err) {
            console.log("Running in offline mode (Static Data Only)");
        }
    }
});
