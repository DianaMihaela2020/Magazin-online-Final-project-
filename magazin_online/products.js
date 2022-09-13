const products = [
{
    "id": 1,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/0/0000206697431_1_.jpg",
    "pret": 40,
    "nume": "BIG STAR",
    "descriere": "Adidași BIG STAR"
},
{
    "id": 2,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/0/0000209942606_01_mg_kopia.jpg",
    "pret": 25,
    "nume": "BIG STAR",
    "descriere": "Teniși BIG STAR"
},
{
    "id": 3,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/0/0000200912455_1__1.jpg",
    "pret": 44,
    "nume": "BIG STAR",
    "descriere": "Teniși BIG STAR"
},
{
    "id": 4,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000300039946_pl.jpg",
    "pret": 48,
    "nume": "BIG STAR",
    "descriere": "Bascheți BIG STAR"
},
{
    "id": 5,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000300040485_is.jpg",
    "pret": 49,
    "nume": "BIG STAR",
    "descriere": "Teniși BIG STAR"
},
{
    "id": 6,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/0/0000209942309_01_kt.jpg",
    "pret": 52,
    "nume": "BIG STAR",
    "descriere": "Adidași BIG STAR",
},
{
    "id": 7,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209926446_mk.jpg",
    "pret": 53,
    "nume": "Calvin Klein",
    "descriere": "Sneakers CALVIN KLEIN JEANS"
},
{
    "id": 8,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/0/0000208536257_01_plj.jpg",
    "pret": 56,
    "nume": "Calvin Klein",
    "descriere": "Sneakers CALVIN KLEIN JEANS"
},
{
    "id": 9,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000300615461_st.jpg",
    "pret": 68,
    "nume": "Calvin Klein",
    "descriere": "Sneakers CALVIN KLEIN JEANS"
},
{
    "id": 10,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209927177_kt.jpg",
    "pret": 60,
    "nume": "Calvin Klein",
    "descriere": "Sneakers CALVIN KLEIN JEANS"
},
{
    "id": 11,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209926439_ph.jpg",
    "pret": 43,
    "nume": "Calvin Klein",
    "descriere": "Sneakers CALVIN KLEIN JEANS"
},
{
    "id": 12,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/0/0000209926262_01_pa_1.jpg",
    "pret": 42,
    "nume": "Calvin Klein",
    "descriere": "Sneakers CALVIN KLEIN JEANS"
},
{
    "id": 13,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000300217603_rz_1.jpg",
    "pret": 44,
    "nume": "Michael Kors",
    "descriere": "Sneakers MICHAEL KORS"
},
{
    "id": 14,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000300216415_rz.jpg",
    "pret": 45,
    "nume": "Michael Kors",
    "descriere": "Sneakers MICHAEL KORS"
},
{
    "id": 15,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209917765_rz_.jpg",
    "pret": 42,
    "nume": "Michael Kors",
    "descriere": "Sneakers MICHAEL KORS"
},
{
    "id": 16,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209917802_rz_.jpg",
    "pret": 41,
    "nume": "Michael Kors",
    "descriere": "Espandrile MICHAEL KORS"
},
{
    "id": 17,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/0/0000208566339_01_bs_kopia.jpg",
    "pret": 55,
    "nume": "Michael Kors",
    "descriere": "Espandrile MICHAEL KORS"
},
{
    "id": 18,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000300215456_rz.jpg",
    "pret": 58,
    "nume": "Michael Kors",
    "descriere": "Sneakers MICHAEL KORS"
},
{
    "id": 19,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209680676_is.jpg",
    "pret": 59,
    "nume": "Tommy Hilfiger",
    "descriere": "Sandale Tommy Hilfiger"
},
{
    "id": 20,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/0/0000206837004_01_tm.jpg",
    "pret": 60,
    "nume": "Tommy Hilfiger",
    "descriere": "Sandale Tommy Hilfiger"
},
{
    "id": 21,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209907889_ts.jpg",
    "pret": 61,
    "nume": "Tommy Hilfiger",
    "descriere": "Sneakers Tommy Hilfiger"
},
{
    "id": 22,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209909210_mg.jpg",
    "pret": 62,
    "nume": "Tommy Hilfiger",
    "descriere": "Sneakers Tommy Hilfiger"
},
{
    "id": 23,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/0/0000209250114_01_ki.jpg",
    "pret": 63,
    "nume": "Tommy Hilfiger",
    "descriere": "Adidași Tommy Hilfiger"
},
{
    "id": 24,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209907940_ts_1.jpg",
    "pret": 43,
    "nume": "Tommy Hilfiger",
    "descriere": "Sneakers Tommy Hilfiger"
},
{
    "id": 25,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209632330_mg.jpg",
    "pret": 42,
    "nume": "BOSS",
    "descriere": "Adidași BOSS"
},
{
    "id": 26,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000300035313_rz.jpg",
    "pret": 25,
    "nume": "BOSS",
    "descriere": "Adidași BOSS"
},
{
    "id": 27,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000300037966_is.jpg",
    "pret": 60,
    "nume": "BOSS",
    "descriere": "Adidași BOSS"
},
{
    "id": 28,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000300035351_pl.jpg",
    "pret": 34,
    "nume": "BOSS",
    "descriere": "Adidași BOSS"
},
{
    "id": 29,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000300036082_kt.jpg",
    "pret": 39,
    "nume": "BOSS",
    "descriere": "Adidași BOSS"
},
{
    "id": 30,
    "img": " https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209630848_sw.jpg",
    "pret": 33,
    "nume": "BOSS",
    "descriere": "Adidași BOSS"
},
{
    "id": 31,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01__0000209742107_swa.jpg",
    "pret": 32,
    "nume": "Versace Jeans Couture",
    "descriere": "Adiași Versace Jeans Couture"
},
{
    "id": 32,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209742480_rz.jpg",
    "pret": 31,
    "nume": "Versace Jeans Couture",
    "descriere": "Adiași Versace Jeans Couture"
},
{
    "id": 33,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209742459_rz.jpg",
    "pret": 30,
    "nume": "Versace Jeans Couture",
    "descriere": "Adiași Versace Jeans Couture"
},
{
    "id": 34,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209742527_rz_.jpg",
    "pret": 28,
    "nume": "Versace Jeans Couture",
    "descriere": "Adiași Versace Jeans Couture"
},
{
    "id": 35,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209755886_rz.jpg",
    "pret": 27,
    "nume": "Versace Jeans Couture",
    "descriere": "Adiași Versace Jeans Couture"
},
{
    "id": 36,
    "img": "https://www.epantofi.ro/media/catalog/product/cache/small_image/300x300/0/1/01_0000209742442_rz.jpg",
    "pret": 26,
    "nume": "Versace Jeans Couture",
    "descriere": "Adiași Versace Jeans Couture"
}
]
