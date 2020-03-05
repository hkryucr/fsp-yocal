json.extract! business, :id, :business_name, :url, :latitude, :longitude, :phone, :price, :rating, :zipcode, :country, :state, :city, :address1, :address2, :address3, :is_claimed, :is_closed

json.businessHourIds do 
    # debugger
    json.array! ((business.hours).map(&:id))
end

json.businessCategoryIds do 
    json.array! (business.categories.map(&:id))
end

json.businessReviewIds do 
    json.array! (business.reviews.map(&:id))    
end

json.usersWhoSaved do 
    json.array! (business.users_who_saved.map(&:id))
end


json.photoUrls do
    json.array!(business.business_photo) do |photo|
        json.photoUrl url_for(photo)
    end
end