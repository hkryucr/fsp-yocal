class Business < ApplicationRecord
    validates :business_name, :latitude, :longitude, :rating, :zipcode, :country, :state, :city, :address1, presence: true
    validates :is_claimed, :is_closed, inclusion: { in: [ true, false ] }

    has_many_attached :business_photo

end