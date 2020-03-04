json.extract! @business, :id, :business_name, :url, :latitude, :longitude, :phone, :price, :rating, :zipcode, :country, :state, :city, :address1, :address2, :address3, :is_claimed, :is_closed

json.photoUrls do
    json.array!(@business.business_photo) do |photo|
        json.photoUrl url_for(photo)
    end
end