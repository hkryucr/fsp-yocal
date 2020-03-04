# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user1 = User.create!(firstname: "henry", lastname: "ryu", password: "henry123", email: "henry@gmail.com", zipcode: "94538", birthday: Date.new(1984, 1, 27))
# user2 = User.create!(firstname: "billy", lastname: "jan", password: "billy123", email: "billy@gmail.com", zipcode: "94224", birthday: Date.new(1981, 12, 2))
# user3 = User.create!(firstname: "joy", lastname: "su", password: "joy123", email: "joy@gmail.com", zipcode: "93538", birthday: Date.new(1974, 1, 3))
# user4 = User.create!(firstname: "harry1", lastname: "kane", password: "harry1123", email: "harry1@gmail.com", zipcode: "94838", birthday: Date.new(1994, 4, 27))
# user5 = User.create!(firstname: "pepper99", lastname: "spice", password: "pepper99123", email: "pepper99@gmail.com", zipcode: "94222", birthday: Date.new(1922, 5, 9))
# user6 = User.create!(firstname: "alvin9", lastname: "lu", password: "alvin9123", email: "alvin9@gmail.com", zipcode: "94333", birthday: Date.new(1984, 11, 11))
# user7 = User.create!(firstname: "ben99", lastname: "weil", password: "ben99123", email: "ben99@gmail.com", zipcode: "94555", birthday: Date.new(1924, 8, 22))
# user8 = User.create!(firstname: "shark", lastname: "yung", password: "shark123", email: "shark@gmail.com", zipcode: "94928", birthday: Date.new(1984, 9, 27))
# user9 = User.create!(firstname: "angela", lastname: "hemon", password: "angela123", email: "angela@gmail.com", zipcode: "92458", birthday: Date.new(1985, 10, 2))
# user10 = User.create!(firstname: "ryan", lastname: "tran", password: "ryan123", email: "ryan@gmail.com", zipcode: "98938", birthday: Date.new(1887, 1, 8))
# user11 = User.create!(firstname: "fonsi23", lastname: "nomura", password: "fonsi23123", email: "fonsi23@gmail.com", zipcode: "92328", birthday: Date.new(2000, 2, 3))


biz_data = [
  {
    "business_name"=> "Fog_Harbor_Fish_House",
    "url"=> "https://www.yelp.com/biz/fog-harbor-fish-house-san-francisco-2?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.809041,
    "longitude"=> -122.410233,
    "phone"=> "+14154212442",
    "price"=> "$$",
    "rating"=> 4.0,
    "zipcode"=> "94133",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "Pier 39",
    "address2"=> "Ste A-202",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media1.fl.yelpcdn.com/bphoto/Lv7tIRX3Bim9bKqtWifmNg/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/S9qcRPgU30Z_Y1bIZpzVYQ/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/L-q1jmqFT5GQHW63GesQuQ/o.jpg"
    ]
  },
  {
    "business_name"=> "The_House",
    "url"=> "https://www.yelp.com/biz/the-house-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.79851,
    "longitude"=> -122.40706,
    "phone"=> "+14159868612",
    "price"=> "$$$",
    "rating"=> 4.5,
    "zipcode"=> "94133",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "1230 Grant Ave",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media2.fl.yelpcdn.com/bphoto/UzrNIkdGTZ1-cXuQDsKUmA/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/Gb2XQgCm_Nz1uHMl8CuhuQ/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/5SCcuSSC7_ivmRFR3i_l5A/o.jpg"
    ]
  },
  {
    "business_name"=> "Liholiho_Yacht_Club",
    "url"=> "https://www.yelp.com/biz/liholiho-yacht-club-san-francisco-2?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.78818,
    "longitude"=> -122.41458,
    "phone"=> "+14154405446",
    "price"=> "$$$",
    "rating"=> 4.5,
    "zipcode"=> "94109",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "871 Sutter St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media3.fl.yelpcdn.com/bphoto/FK2X98w6z5naJyiQjsGTNA/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/u6kLNM8UYfW4fR7cBNfinA/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/Jfj-0Z1BQqawkjxFdI6rSg/o.jpg"
    ]
  },
  {
    "business_name"=> "Farmhouse_Kitchen_Thai_Cuisine",
    "url"=> "https://www.yelp.com/biz/farmhouse-kitchen-thai-cuisine-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.76026094,
    "longitude"=> -122.4112048,
    "phone"=> "+14158142920",
    "price"=> "$$",
    "rating"=> 4.0,
    "zipcode"=> "94110",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "710 Florida St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media1.fl.yelpcdn.com/bphoto/woO06sua7uMQNBf0wnjf8w/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/mvQ2-61OHoadQLBx1i7_Hg/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/AC0JE-nnMd-Ai3SlA7IPfg/o.jpg"
    ]
  },
  {
    "business_name"=> "The_Front_Porch",
    "url"=> "https://www.yelp.com/biz/the-front-porch-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.7438,
    "longitude"=> -122.422035,
    "phone"=> "+14156957800",
    "price"=> "$$",
    "rating"=> 4.0,
    "zipcode"=> "94110",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "65 29th St",
    "address2"=> "Ste A",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media1.fl.yelpcdn.com/bphoto/0fmMVyqSKOMIqtkQksUTUQ/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/27vu44QmHe62keiss_3JCQ/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/4AF7tHy5kCGaJUDAoPp6hA/o.jpg"
    ]
  },
  {
    "business_name"=> "Tuba_Authentic_Turkish_Restaurant",
    "url"=> "https://www.yelp.com/biz/tuba-authentic-turkish-restaurant-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.754898,
    "longitude"=> -122.422906,
    "phone"=> "+14158268822",
    "price"=> "$$",
    "rating"=> 4.5,
    "zipcode"=> "94110",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "1007 Guerrero St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media1.fl.yelpcdn.com/bphoto/xLnGt1Xzex00DtcVS1mqBA/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/ik2UiRAh9Vg3fEMnGCt15A/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/tJPQQS_Q8nJntlRaDe_c2Q/o.jpg"
    ]
  },
  {
    "business_name"=> "MaMo",
    "url"=> "https://www.yelp.com/biz/mamo-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.80384,
    "longitude"=> -122.43366,
    "phone"=> "+14156587150",
    "price"=> "$$",
    "rating"=> 4.5,
    "zipcode"=> "94123",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "3659 Buchanan St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media1.fl.yelpcdn.com/bphoto/noSbWaKTqJe3V7u-vGzzng/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/ZPyKJz5nAqzBWjWHZgDbnw/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/zkVsKaMMNq0tMaMfur-9qA/o.jpg"
    ]
  },
  {
    "business_name"=> "The_Cheesecake_Factory",
    "url"=> "https://www.yelp.com/biz/the-cheesecake-factory-san-francisco-2?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.7872658401153,
    "longitude"=> -122.407448,
    "phone"=> "+14153914444",
    "price"=> "$$",
    "rating"=> 3.0,
    "zipcode"=> "94102",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "251 Geary St",
    "address2"=> "",
    "address3"=> "Union Square",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media2.fl.yelpcdn.com/bphoto/nIYDxWlgNejmBgLwbHCt5A/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/o5Rkfa4FKm59POq5P9icOA/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/26qCT7hT_D-JwKAAcWmg-A/o.jpg"
    ]
  },
  {
    "business_name"=> "Son_&_Garden",
    "url"=> "https://www.yelp.com/biz/son-and-garden-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.783387,
    "longitude"=> -122.419016,
    "phone"=> "+14159137404",
    "price"=> "",
    "rating"=> 4.5,
    "zipcode"=> "94109",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "700 Polk St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media3.fl.yelpcdn.com/bphoto/GwNYDeFAhiYhS1zlyXIFAQ/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/5aQd0uSPDZNrtFPOGEUewA/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/aC6YaSSfr-uEmIGxz8TXZw/o.jpg"
    ]
  },
  {
    "business_name"=> "Limón_Rotisserie",
    "url"=> "https://www.yelp.com/biz/lim%C3%B3n-rotisserie-san-francisco-3?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.7570514,
    "longitude"=> -122.416461,
    "phone"=> "+14158212134",
    "price"=> "$$",
    "rating"=> 4.0,
    "zipcode"=> "94110",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "1001 S Van Ness Ave",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media4.fl.yelpcdn.com/bphoto/wvbMWakjpf0c-0QeucFl9Q/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/tmULJotuUa4enmcFeluv2A/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/OWEJCNPxpaetkQ-h4iKnuA/o.jpg"
    ]
  },
  {
    "business_name"=> "Zazie",
    "url"=> "https://www.yelp.com/biz/zazie-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.765244,
    "longitude"=> -122.4501138,
    "phone"=> "+14155645332",
    "price"=> "$$",
    "rating"=> 4.0,
    "zipcode"=> "94117",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "941 Cole St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media3.fl.yelpcdn.com/bphoto/uuRvEU-cqPk-XlDbFAQjKg/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/90GyOCSWPc_5e81ErFWaOw/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/ojbZa2Q2bqexgXXieD5NUA/o.jpg"
    ]
  },
  {
    "business_name"=> "Marufuku_Ramen_SF",
    "url"=> "https://www.yelp.com/biz/marufuku-ramen-sf-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.785155,
    "longitude"=> -122.432075,
    "phone"=> "+14158729786",
    "price"=> "$$",
    "rating"=> 4.5,
    "zipcode"=> "94115",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "1581 Webster St",
    "address2"=> "Ste 235",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media2.fl.yelpcdn.com/bphoto/2lUFO5HWD7_RLDWlT5Nvuw/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/WlwgKsyIHjuxOzxxQEfVgw/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/dF5pozJHzeT9KjbNBYuVpA/o.jpg"
    ]
  },
  {
    "business_name"=> "Kokkari_Estiatorio",
    "url"=> "https://www.yelp.com/biz/kokkari-estiatorio-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.796996,
    "longitude"=> -122.399661,
    "phone"=> "+14159810983",
    "price"=> "$$$",
    "rating"=> 4.5,
    "zipcode"=> "94111",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "200 Jackson St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media2.fl.yelpcdn.com/bphoto/7StMTfE2srlcIu2opeTb3g/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/Vsmvely8RlhObkY1w2ARng/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/ZVDRZBLhxRGp0bUxrSkbwQ/o.jpg"
    ]
  },
  {
    "business_name"=> "The_Pawn_Shop",
    "url"=> "https://www.yelp.com/biz/the-pawn-shop-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.78106,
    "longitude"=> -122.40834,
    "phone"=> "+14158748041",
    "price"=> "$$",
    "rating"=> 4.5,
    "zipcode"=> "94103",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "993 Mission St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media3.fl.yelpcdn.com/bphoto/X0jMCkLRLsjz6Hw5lmEPmQ/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/bmU1C9_OCfFw_2HF01XPsA/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/UCWJY-mnedKG2pc45aSFwA/o.jpg"
    ]
  },
  {
    "business_name"=> "Gary_Danko",
    "url"=> "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.80587,
    "longitude"=> -122.42058,
    "phone"=> "+14157492060",
    "price"=> "$$$$",
    "rating"=> 4.5,
    "zipcode"=> "94109",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "800 N Point St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media3.fl.yelpcdn.com/bphoto/CAprIoeKQAYV9oUw9xBbmA/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/FmXn6cYO1Mm03UNO5cbOqw/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/_dDCVo_vLpM79Y3mgyMiYg/o.jpg"
    ]
  },
  {
    "business_name"=> "um.ma",
    "url"=> "https://www.yelp.com/biz/um-ma-san-francisco-3?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.7655,
    "longitude"=> -122.46608,
    "phone"=> "+14155665777",
    "price"=> "$$",
    "rating"=> 4.0,
    "zipcode"=> "94122",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "1220 9th Ave",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media4.fl.yelpcdn.com/bphoto/9ILbI4cYVyeuVnTi4kGzjA/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/rOkRqrvjf94VaupVfQRAuw/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/ZK0T2vmPvZTLuqpv2BUrdg/o.jpg"
    ]
  },
  {
    "business_name"=> "Loló",
    "url"=> "https://www.yelp.com/biz/lol%C3%B3-san-francisco-4?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.7573462,
    "longitude"=> -122.4214034,
    "phone"=> "+14156435656",
    "price"=> "$$",
    "rating"=> 4.0,
    "zipcode"=> "94110",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "974 Valencia St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media1.fl.yelpcdn.com/bphoto/-_hqewRYasro3NpC-v4Fug/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/eccSoVl-ODsi2D-OQpoAwQ/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/rmNwjbWiV7jNtUlQDAGwQQ/o.jpg"
    ]
  },
  {
    "business_name"=> "Kitchen_Story",
    "url"=> "https://www.yelp.com/biz/kitchen-story-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.7642352,
    "longitude"=> -122.4306936,
    "phone"=> "+14155254905",
    "price"=> "$$",
    "rating"=> 4.0,
    "zipcode"=> "94114",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "3499 16th St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media3.fl.yelpcdn.com/bphoto/NFhzbxcz4No5Ny8_IHdPMw/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/26TX5C_xCv4wVPhYNKqFxQ/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/pNWtM7faDRojR_irK2ayEQ/o.jpg"
    ]
  },
  {
    "business_name"=> "Mona_Lisa_Restaurant",
    "url"=> "https://www.yelp.com/biz/mona-lisa-restaurant-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.798371,
    "longitude"=> -122.407778,
    "phone"=> "+14159894917",
    "price"=> "$$",
    "rating"=> 4.0,
    "zipcode"=> "94133",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "353 Columbus Ave",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media2.fl.yelpcdn.com/bphoto/LLD2tSu-kXgesqnk2DgeEQ/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/yNRD6FjP55uOzzZ_CAJGQQ/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/UiR52uh_1pAsqXhRMIF5Qw/o.jpg"
    ]
  },
  {
    "business_name"=> "Pier_Market_Seafood_Restaurant",
    "url"=> "https://www.yelp.com/biz/pier-market-seafood-restaurant-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.8099386456994,
    "longitude"=> -122.410550415516,
    "phone"=> "+14159897437",
    "price"=> "$$",
    "rating"=> 4.0,
    "zipcode"=> "94133",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "Pier 39",
    "address2"=> "Ste 103",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media3.fl.yelpcdn.com/bphoto/oiWv-yEYYS62vOvFC97sTw/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/jUd0e8SOimzC0gA9tNQLXQ/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/3TiGk_mslAm-G5W1wrUYAQ/o.jpg"
    ]
  },
  {
    "business_name"=> "Skool",
    "url"=> "https://www.yelp.com/biz/skool-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.7685096967036,
    "longitude"=> -122.402136325836,
    "phone"=> "+14152558800",
    "price"=> "$$",
    "rating"=> 4.0,
    "zipcode"=> "94103",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "1725 Alameda St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media4.fl.yelpcdn.com/bphoto/47i057bRXAm_sIvA2obD5A/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/o94h6AZQ1SIZzlOzDM8fdQ/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/zGnibX_hAmqBVE8G8yw85A/o.jpg"
    ]
  },
  {
    "business_name"=> "The_Dorian",
    "url"=> "https://www.yelp.com/biz/the-dorian-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.80065,
    "longitude"=> -122.4365,
    "phone"=> "+14158142671",
    "price"=> "$$",
    "rating"=> 4.0,
    "zipcode"=> "94123",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "2001 Chestnut St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media1.fl.yelpcdn.com/bphoto/QnVZPmkzjXOnkCzULOisnw/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/mli8xURjYm3BbQ_kJP83Gw/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/J6HEw1wtY8D16gLb2g7tcg/o.jpg"
    ]
  },
  {
    "business_name"=> "Scoma's_Restaurant",
    "url"=> "https://www.yelp.com/biz/scomas-restaurant-san-francisco-3?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.808952,
    "longitude"=> -122.418487,
    "phone"=> "+14157714383",
    "price"=> "$$$",
    "rating"=> 4.0,
    "zipcode"=> "94133",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "1965 Al Scoma Way",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media4.fl.yelpcdn.com/bphoto/5ZqAdIz1IhUDlmK6qP3WvA/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/8YV9OWxWZodaDSyH1RmU_A/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/eUzlbswyqPUqkMDTomczzQ/o.jpg"
    ]
  },
  {
    "business_name"=> "Sotto_Mare_Oysteria_&_Seafood",
    "url"=> "https://www.yelp.com/biz/sotto-mare-oysteria-and-seafood-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.79979,
    "longitude"=> -122.40834,
    "phone"=> "+14153983181",
    "price"=> "$$",
    "rating"=> 4.5,
    "zipcode"=> "94133",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "552 Green St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media2.fl.yelpcdn.com/bphoto/Efr_0zx4ID9jla5kxuIMNQ/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/SLCnOVt7Ge1lqY2kbMd64g/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/8xALlKvD-kRmWnxkAkEo_g/o.jpg"
    ]
  },
  {
    "business_name"=> "Nopa",
    "url"=> "https://www.yelp.com/biz/nopa-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.77483,
    "longitude"=> -122.43746,
    "phone"=> "+14158648643",
    "price"=> "$$$",
    "rating"=> 4.0,
    "zipcode"=> "94117",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "560 Divisadero St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media3.fl.yelpcdn.com/bphoto/Li0xXDEM78GMG1xCYgYYaA/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/vOQQ3p4GnyCEXcFS7FWRWg/o.jpg",
      "https://s3-media3.fl.yelpcdn.com/bphoto/aa1NjiuCL-dAUdLxktkGmQ/o.jpg"
    ]
  },
  {
    "business_name"=> "Noosh",
    "url"=> "https://www.yelp.com/biz/noosh-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.7880771447147,
    "longitude"=> -122.43393894285,
    "phone"=> "+14152315985",
    "price"=> "$$",
    "rating"=> 3.5,
    "zipcode"=> "94115",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "2001 Fillmore St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media3.fl.yelpcdn.com/bphoto/htZmQ5FmRZjYRujcb2T_WA/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/lLoHfrFy6aceGiF0EtePlw/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/O38_ihQzRCbdxJc-JlfAQQ/o.jpg"
    ]
  },
  {
    "business_name"=> "Thanh_Long",
    "url"=> "https://www.yelp.com/biz/thanh-long-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.76017,
    "longitude"=> -122.50609,
    "phone"=> "+14156651146",
    "price"=> "$$$",
    "rating"=> 4.0,
    "zipcode"=> "94122",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "4101 Judah St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media2.fl.yelpcdn.com/bphoto/BL84GADimiDmY2UDTWa38g/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/UBI2Z55GRrtq0ksb_iRwcg/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/XyNUSAzFM6mMinCzhJumHA/o.jpg"
    ]
  },
  {
    "business_name"=> "Lark",
    "url"=> "https://www.yelp.com/biz/lark-san-francisco-2?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.761243,
    "longitude"=> -122.434248,
    "phone"=> "+14154004623",
    "price"=> "$$",
    "rating"=> 4.0,
    "zipcode"=> "94114",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "4068 18th St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media4.fl.yelpcdn.com/bphoto/BiDUDWE3pDcZnRRvDk7ruA/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/IfH6kzBTZZmgDeVN__pMyw/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/R6YHvDguQXu-pClH2sCKUQ/o.jpg"
    ]
  },
  {
    "business_name"=> "House_Of_Prime_Rib",
    "url"=> "https://www.yelp.com/biz/house-of-prime-rib-san-francisco?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.79338,
    "longitude"=> -122.4225,
    "phone"=> "+14158854605",
    "price"=> "$$$",
    "rating"=> 4.0,
    "zipcode"=> "94109",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "1906 Van Ness Ave",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media4.fl.yelpcdn.com/bphoto/HLrjaMoAgYSac0vx71YpCA/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/pBewcPxzGqOQCoqFg7OSiw/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/3S2Kl9ZOS0icGjiwcHRWMw/o.jpg"
    ]
  },
  {
    "business_name"=> "Izakaya_KOU",
    "url"=> "https://www.yelp.com/biz/izakaya-kou-san-francisco-2?adjust_creative=zgBK-vCCnsGThf8hf5z3iA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=zgBK-vCCnsGThf8hf5z3iA",
    "latitude"=> 37.784139,
    "longitude"=> -122.432649,
    "phone"=> "+14154419294",
    "price"=> "$$",
    "rating"=> 4.0,
    "zipcode"=> "94115",
    "country"=> "US",
    "state"=> "CA",
    "city"=> "San Francisco",
    "address1"=> "1560 Fillmore St",
    "address2"=> "",
    "address3"=> "",
    "is_claimed"=> true,
    "is_closed"=> false,
    "photos"=> [
      "https://s3-media1.fl.yelpcdn.com/bphoto/a_VbSN_CoGYRiHCECSGpeQ/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/FLab9iH38-l6_r8Wl7Go6Q/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/OluVR6_wtfr8PPeCYxsEmQ/o.jpg"
    ]
  }
]


biz_data.each do |biz| 
  cur_el = biz.deep_dup
  cur_el.delete("photos")
  cur_biz = Business.create!(cur_el)
  cur_biz.business_photo.attach(io: File.open("/Users/henryryu/Desktop/fsp/photos/#{cur_biz[:business_name]}0.jpg"), filename: ("#{cur_biz[:business_name]}0.jpg"))
  cur_biz.business_photo.attach(io: File.open("/Users/henryryu/Desktop/fsp/photos/#{cur_biz[:business_name]}1.jpg"), filename: ("#{cur_biz[:business_name]}1.jpg"))
  cur_biz.business_photo.attach(io: File.open("/Users/henryryu/Desktop/fsp/photos/#{cur_biz[:business_name]}2.jpg"), filename: ("#{cur_biz[:business_name]}2.jpg"))
end