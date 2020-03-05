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
end
