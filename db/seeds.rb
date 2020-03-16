# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
require 'json'

# demo = User.create!(firstname: "Guest", lastname: "User", password: "GuestUser", email: "GuestUser@gmail.com", zipcode: "94538", birthday: Date.new(1984, 1, 27))
# user1 = User.create!(firstname: "Henry", lastname: "Ryu", password: "henry123", email: "henry@gmail.com", zipcode: "94538", birthday: Date.new(1984, 1, 27))
# user2 = User.create!(firstname: "Neil", lastname: "Jan", password: "billy123", email: "billy@gmail.com", zipcode: "94224", birthday: Date.new(1981, 12, 2))
# user3 = User.create!(firstname: "Joy", lastname: "Su", password: "joy123", email: "joy@gmail.com", zipcode: "93538", birthday: Date.new(1974, 1, 3))
# user4 = User.create!(firstname: "Harry", lastname: "Kane", password: "harry1123", email: "harry1@gmail.com", zipcode: "94838", birthday: Date.new(1994, 4, 27))
# user5 = User.create!(firstname: "lin", lastname: "Sei", password: "pepper99123", email: "pepper99@gmail.com", zipcode: "94222", birthday: Date.new(1922, 5, 9))
# user6 = User.create!(firstname: "Alvin", lastname: "Lu", password: "alvin9123", email: "alvin9@gmail.com", zipcode: "94333", birthday: Date.new(1984, 11, 11))
# user7 = User.create!(firstname: "Bean", lastname: "Weil", password: "ben99123", email: "ben99@gmail.com", zipcode: "94555", birthday: Date.new(1924, 8, 22))
# user8 = User.create!(firstname: "Shark", lastname: "Yung", password: "shark123", email: "shark@gmail.com", zipcode: "94928", birthday: Date.new(1984, 9, 27))
# user9 = User.create!(firstname: "Angela", lastname: "Hemon", password: "angela123", email: "angela@gmail.com", zipcode: "92458", birthday: Date.new(1985, 10, 2))
# user10 = User.create!(firstname: "Ryan", lastname: "Train", password: "ryan123", email: "ryan@gmail.com", zipcode: "98938", birthday: Date.new(1887, 1, 8))
# user11 = User.create!(firstname: "Terry", lastname: "Hoo", password: "Terry123", email: "Terry@gmail.com", zipcode: "94538", birthday: Date.new(1984, 1, 27))
# user12 = User.create!(firstname: "Pilly", lastname: "Jan", password: "Pilly123", email: "pilly@gmail.com", zipcode: "94224", birthday: Date.new(1981, 12, 2))
# user13 = User.create!(firstname: "Choi", lastname: "Su", password: "Choi123", email: "Choi@gmail.com", zipcode: "93538", birthday: Date.new(1974, 1, 3))
# user14 = User.create!(firstname: "Larry", lastname: "Kane", password: "Larry1123", email: "Larry1@gmail.com", zipcode: "94838", birthday: Date.new(1994, 4, 27))
# user15 = User.create!(firstname: "Chef", lastname: "Tice", password: "cheaper99123", email: "cheaper99@gmail.com", zipcode: "94222", birthday: Date.new(1922, 5, 9))
# user16 = User.create!(firstname: "Bin", lastname: "Mu", password: "Bin9123", email: "Bin9@gmail.com", zipcode: "94333", birthday: Date.new(1984, 11, 11))
# user17 = User.create!(firstname: "Ken", lastname: "Weil", password: "Ken99123", email: "Ken99@gmail.com", zipcode: "94555", birthday: Date.new(1924, 8, 22))
# user18 = User.create!(firstname: "Thark", lastname: "Young", password: "Thark123", email: "Thark@gmail.com", zipcode: "94928", birthday: Date.new(1984, 9, 27))
# user19 = User.create!(firstname: "Angel", lastname: "Hemon", password: "angel123", email: "angel@gmail.com", zipcode: "92458", birthday: Date.new(1985, 10, 2))
# user20 = User.create!(firstname: "Bryan", lastname: "Tran", password: "Bryan123", email: "Bryan@gmail.com", zipcode: "98938", birthday: Date.new(1887, 1, 8))
# user21 = User.create!(firstname: "Kosi", lastname: "Mura", password: "fonsi23123", email: "Kosi23@gmail.com", zipcode: "92328", birthday: Date.new(2000, 2, 3))
# user22 = User.create!(firstname: "Sonsi", lastname: "Nare", password: "fonsi23123", email: "Sonsi23@gmail.com", zipcode: "92328", birthday: Date.new(2000, 2, 3))

# User.all.each_with_index do |user, idx|
#   user.user_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'user_photos', "user#{idx}.jpg")), filename: ("user_#{idx}.jpg"))
# end

# # categories database
# categories_json = JSON.parse(File.read(Rails.root.join('lib', 'seeds', 'categories.json')))
# categories_json.each do |category|
#   Category.create!(category)
# end

# # businesses, categorizing, hours database
# biz_data = JSON.parse(File.read(Rails.root.join('lib', 'seeds', 'sf_businesses.json')))
# biz_data.each do |biz| 
#   cur_el = biz.deep_dup
#   cur_el.delete("photos")
#   cur_el.delete("categories")
#   cur_el.delete("hours")

#   cur_biz = Business.create!(cur_el)

#   biz["categories"].each do |category|
#     category_id = Category.find_by(name: category).id
#     cur_categorizing = Categorizing.create(category_id: category_id, business_id: cur_biz.id)
#   end

#   biz["hours"].each do |hour|
#     hour["business_id"] = cur_biz.id
#     cur_hour = Hour.create(hour)
#   end

#   (0...biz["photos"].length).each do |idx|
#     cur_biz.business_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'photos', "#{cur_biz[:business_name]}#{idx}.jpg")), filename: ("#{cur_biz[:business_name]}_#{idx}.jpg"))
#   end
  
#   ran_selected_photos = (0..128).to_a.sample((9 - biz["photos"].length))
#   ran_selected_photos.each_with_index do |photo_idx, idx|
#     cur_biz.business_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_photos', "photo_#{photo_idx}.jpg")), filename: ("#{cur_biz[:business_name]}_#{idx+3}.jpg"))
#   end
# end

# # reviews database
# Review.delete_all

review_data = JSON.parse(File.read(Rails.root.join('lib', 'seeds', 'sf_reviews.json')))
user_ids = User.all.map(&:id)
review_data.each_with_index do |review, idx|   
  if (idx >= 12)
    next
  end
  ran_author_id = user_ids.sample
  business_id = Business.find_by(business_name: review["business_name"]).id

  cur_review = {
    "author_id"=> ran_author_id,
    "business_id"=> business_id,
    "business_name"=> review["business_name"],
    "rating"=> review["rating"],
    "text"=> review["text"],
    "review_date"=> review["time_created"],
    "useful"=> review["useful"],
    "funny"=> review["funny"],
    "cool"=> review["cool"]
  }
  
  review_made = Review.create!(cur_review)

  # ran_num = (0..3).to_a.sample(1)[0]
  # ran_selected_photos = (0..128).to_a.sample(ran_num)
  # ran_selected_photos.each_with_index do |photo_idx, idx|
  #   review_made.review_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_photos', "photo_#{photo_idx}.jpg")), filename: ("review_photo_#{review_made.id}_#{idx}.jpg"))
  # end
end

# saved_business database
# all_users = User.all
# all_businesses = Business.all
# all_users.each do |user|
#   ran_num = (5..30).to_a.sample(1)[0]
#   cur_selected_businesses = all_businesses.sample(ran_num)
#   cur_selected_businesses.each do |selected_business|
#     SavedBusiness.create!(user_id: user.id, business_id: selected_business.id)
#   end
# end