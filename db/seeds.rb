# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create!(firstname: "henry", lastname: "ryu", password: "henry123", email: "henry@gmail.com", zipcode: "94538", birthday: Date.new(1984, 1, 27))
user2 = User.create!(firstname: "billy", lastname: "jan", password: "billy123", email: "billy@gmail.com", zipcode: "94224", birthday: Date.new(1981, 12, 2))
user3 = User.create!(firstname: "joy", lastname: "su", password: "joy123", email: "joy@gmail.com", zipcode: "93538", birthday: Date.new(1974, 1, 3))
user4 = User.create!(firstname: "harry1", lastname: "kane", password: "harry1123", email: "harry1@gmail.com", zipcode: "94838", birthday: Date.new(1994, 4, 27))
user5 = User.create!(firstname: "pepper99", lastname: "spice", password: "pepper99123", email: "pepper99@gmail.com", zipcode: "94222", birthday: Date.new(1922, 5, 9))
user6 = User.create!(firstname: "alvin9", lastname: "lu", password: "alvin9123", email: "alvin9@gmail.com", zipcode: "94333", birthday: Date.new(1984, 11, 11))
user7 = User.create!(firstname: "ben99", lastname: "weil", password: "ben99123", email: "ben99@gmail.com", zipcode: "94555", birthday: Date.new(1924, 8, 22))
user8 = User.create!(firstname: "shark", lastname: "yung", password: "shark123", email: "shark@gmail.com", zipcode: "94928", birthday: Date.new(1984, 9, 27))
user9 = User.create!(firstname: "angela", lastname: "hemon", password: "angela123", email: "angela@gmail.com", zipcode: "92458", birthday: Date.new(1985, 10, 2))
user10 = User.create!(firstname: "ryan", lastname: "tran", password: "ryan123", email: "ryan@gmail.com", zipcode: "98938", birthday: Date.new(1887, 1, 8))
user11 = User.create!(firstname: "fonsi23", lastname: "nomura", password: "fonsi23123", email: "fonsi23@gmail.com", zipcode: "92328", birthday: Date.new(2000, 2, 3))