json.extract! business, :id, :business_name, :url, :latitude, :longitude, :phone, :price, :rating, :zipcode, :country, :state, :city, :address1, :address2, :address3, :is_claimed, :is_closed, :review_count

json.hourIds do 
    json.array! ((business.hours).map(&:id))
end

json.categoryIds do 
    json.array! (business.categories.map(&:id))
end

json.reviewIds do 
    json.array! (business.reviews.map(&:id))    
end

if (business.reviews[0])
    json.firstReview (business.reviews[0].text)
else
    json.firstReview ("")
end

json.categories (business.categories.map(&:name).join(", "))

json.savedUserIds do 
    json.array! (business.users_who_saved.map(&:id))
end

json.reviewAuthorsIds do 
    json.array! (business.review_authors.map(&:id))
end

json.photoUrls do
    json.array!(business.business_photo) do |photo|
        json.photoUrl url_for(photo)
    end
end