# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

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

require 'json'
# categories database
categories_json = JSON.parse(File.read(Rails.root.join('lib', 'seeds', 'categories.json')))
categories_json.each do |category|
  Category.create!(category)
end

# businesses, categorizing, hours database
biz_data = JSON.parse(File.read(Rails.root.join('lib', 'seeds', 'sf_businesses.json')))
biz_data.each do |biz| 
  cur_el = biz.deep_dup
  cur_el.delete("photos")
  cur_el.delete("categories")
  cur_el.delete("hours")

  cur_biz = Business.create!(cur_el)

  biz["categories"].each do |category|
    category_id = Category.find_by(name: category).id
    cur_categorizing = Categorizing.create(category_id: category_id, business_id: cur_biz.id)
  end

  biz["hours"].each do |hour|
    hour["business_id"] = cur_biz.id
    cur_hour = Hour.create(hour)
  end
  
  cur_biz.business_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'photos', "#{cur_biz[:business_name]}0.jpg")), filename: ("#{cur_biz[:business_name]}0.jpg"))
  cur_biz.business_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'photos', "#{cur_biz[:business_name]}1.jpg")), filename: ("#{cur_biz[:business_name]}0.jpg"))
  cur_biz.business_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'photos', "#{cur_biz[:business_name]}2.jpg")), filename: ("#{cur_biz[:business_name]}0.jpg"))
end

# reviews database
review_data = JSON.parse(File.read(Rails.root.join('lib', 'seeds', 'sf_reviews.json')))
user_ids = User.all.map(&:id)
review_data.each do |review|   
  ran_author_id = user_ids.sample
  business_id = Business.find_by(business_name: review["business_name"]).id
  cur_review = {
    "author_id"=> ran_author_id,
    "business_id"=> business_id,
    "business_name"=> review["business_name"],
    "rating"=> review["rating"],
    "text"=> review["text"]
  }
  review_made = Review.create!(cur_review)
end

# saved_business database
all_users = User.all
all_businesses = Business.all
all_users.each do |user|
  ran_num = (5..10).to_a.sample(1)[0]
  cur_selected_businesses = all_businesses.sample(ran_num)
  cur_selected_businesses.each do |selected_business|
    SavedBusiness.create!(user_id: user.id, business_id: selected_business.id)
  end
end