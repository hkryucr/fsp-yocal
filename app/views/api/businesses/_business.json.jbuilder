json.extract! business, :id, :business_name, :url, :latitude, :longitude, :phone, :price, :rating, :zipcode, :country, :state, :city, :address1, :address2, :address3, :is_claimed, :is_closed, :review_count

json.HourIds do 
    # debugger
    json.array! ((business.hours).map(&:id))
end

json.CategoryIds do 
    json.array! (business.categories.map(&:id))
end

json.ReviewIds do 
    json.array! (business.reviews.map(&:id))    
end

json.savedUserIds do 
    json.array! (business.users_who_saved.map(&:id))
end

json.ReviewAuthorsIds do 
    json.array! (business.review_authors.map(&:id))
end

json.photoUrls do
    json.array!(business.business_photo) do |photo|
        json.photoUrl url_for(photo)
    end
end