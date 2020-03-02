{
    entities: {
        users: {
            1: {
                id: 1,
                username: "henryryu",
                email: "henryryu@gmail.com",
                zipcode: "94538",
                birthday: "2020-02-26",
                imageUrl: "https://cdn.pixabay.com/photo/2015/10/01/16/43/toucan-967334_960_720.jpg"
            },
            2: {
                id: 2,
                username: "billyjan",
                email: "billyjan@gmail.com",
                zipcode: "94121",
                birthday: "2010-08-21",
                imageUrl: "https://cdn.pixabay.com/photo/2015/10/01/16/43/toucan-967334_960_720.jpg"
            }
        },
        businesses: {
            1: {
                id: 1,
                businessName: "Gary Danko",
                url: "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=wpr6gw4FnptTrk1CeT8POg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=wpr6gw4FnptTrk1CeT8POg",
                coordinateLatitude: "37.80587",
                coordinateLongitude: "-122.42058",
                phone: "+14157492060",
                price: "$$$$",
                rating: "4.5",
                imgUrl: "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
                zipcode: "93870",
                country: "US",
                state: "CA",
                city: "San Francisco",
                address1: "800 N Point St",
                address2: "",
                address3: "",
                isClaimed: true,
                isClosed: false,
                ownerId: 1
            },
            2: {
                id: 2,
                businessName: "Blue Bottle",
                url: "https://www.yelp.com/biz/blue-bottle-san-francisco?adjust_creative=wptTrk1CeT8POg",
                coordinateLatitude: "31.80587",
                coordinateLongitude: "-123.42055",
                phone: "+14157497890",
                price: "$$",
                rating: "4.0",
                imgUrl: "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKFe87aM5edjhhQ/o.jpg",
                zipcode: "94270",
                country: "US",
                state: "CA",
                city: "San Francisco",
                address1: "800 Battery St",
                address2: "",
                address3: "",
                isClaimed: true,
                isClosed: false,
                ownerId: 4
            }
        },
        savedBusinesses: {
            1: {
                id: 1,
                userId: 2,
                businessId: 3
            },
            2: {
                id: 2,
                userId: 2,
                businessId: 4
            },
            3: {
                id: 3,
                userId: 3,
                businessId: 3
            }
        },
        hours: {
            1: {
                id: 1,
                isOvernight: true,
                start: "0900",
                end: "1900",
                day: 0,
                hoursType: "regular",
                business_id: 3
            },
            2: {
                id: 2,
                isOvernight: true,
                start: "0900",
                end: "1900",
                day: 1,
                hoursType: "regular",
                business_id: 3
            },
            3: {
                id: 3,
                isOvernight: true,
                start: "0900",
                end: "1500",
                day: 2,
                hoursType: "regular",
                business_id: 3
            }
        },
        categories: {
            1: {
                id: 1,
                name: "Coffee"
            },
            2: {
                id: 2,
                name: "Chinese"
            },
            3: {
                id: 3,
                name: "Maxican"
            },
        },
        categorizing: {
            1: {
                id: 1,
                businessId: 2,
                categoryId: 3
            },
            2: {
                id: 2,
                businessId: 4,
                categoryId: 5
            }
        },
        friends: {
            1: {
                id: 1,
                userId: 2,
                friendId: 3
            },
            2: {
                id: 2,
                userId: 4,
                friendId: 5
            }
        },
        reviews: {
            1: {
                id: 1,
                userId: 2,
                businessId: 3,
                rating: 4,
                photoUrl: "www.google.com/pic.jpeg",
                text: "This is a great restaurant"
            },
            2: {
                id: 2,
                userId: 2,
                businessId: 3,
                rating: 5,
                photoUrl: "https://www.yelp.com/user_details?userid=W8UK02IDdRS2GL_66fuq6w",
                text: "Went back again to this place since the last time i visited the bay area 5 months ago, and nothing has changed. Still the sketchy Mission, Still the cashier..."
            }
        }
    
    },
    ui: {
        loading: true / false
    },
    errors: {
        login: ["Incorrect username/password combination"],
    },
    session: { currentUserId: 25 }
}
