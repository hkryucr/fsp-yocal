# == Schema Information
#
# Table name: businesses
#
#  id            :bigint           not null, primary key
#  business_name :string           not null
#  url           :text
#  latitude      :float            not null
#  longitude     :float            not null
#  phone         :string
#  price         :string
#  rating        :string           not null
#  zipcode       :string           not null
#  country       :string           not null
#  state         :string           not null
#  city          :string           not null
#  address1      :string           not null
#  address2      :string
#  address3      :string
#  is_claimed    :boolean          not null
#  is_closed     :boolean          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  review_count  :integer
#
class Business < ApplicationRecord
    validates :business_name, :latitude, :longitude, :rating, :zipcode, :country, :state, :city, :address1, presence: true
    validates :is_claimed, :is_closed, inclusion: { in: [ true, false ] }

    has_many_attached :business_photo

    has_many :reviews,
        foreign_key: :business_id,
        class_name: :Review
    
    has_many :categorization,
        foreign_key: :business_id,
        class_name: :Categorizing

    has_many :categories,
        through: :categorization,
        source: :category

    has_many :hours,
        foreign_key: :business_id,
        class_name: :Hour

    has_many :saved_relational_businesses,
        foreign_key: :business_id,
        class_name: :SavedBusiness
    
    has_many :users_who_saved,
        through: :saved_relational_businesses,
        source: :user

    has_many :review_authors,
        through: :reviews,
        source: :author

    # def search_term_generator
    #     Business.all.includes(:categories).map(&:categories)
    # end

    def search_form(keyword)
        search_result = []
        search_result += Business.where( '(business_name LIKE ?) AND ', keyword )
        search_result += Business.where( '(business_name LIKE ?) AND ', keyword )
        search_result += Business.where( '(business_name LIKE ?) AND ', keyword )
    end


    # def self.in_bounds(bounds)    
        # Bench.where('(lat BETWEEN ? AND ?) AND (lng BETWEEN ? AND ?)', bounds[:southWest][:lat].to_f, bounds[:northEast][:lat].to_f, bounds[:southWest][:lng].to_f, bounds[:northEast][:lng].to_f)
    # end

    def self.in_bounds(bounds)
        bounds = JSON.parse(bounds)

        self.where('latitude < ?', bounds["northEast"]["lat"].to_f)
        .where('latitude >?', bounds["southWest"]["lat"].to_f)
        .where('longitude < ?', bounds["northEast"]["lng"].to_f)
        .where('longitude > ?', bounds["southWest"]["lng"].to_f)
    end
end
