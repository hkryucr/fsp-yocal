# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  author_id     :integer          not null
#  business_id   :integer          not null
#  business_name :string           not null
#  rating        :string
#  text          :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord
    validates :author_id, presence: true
    validates :business_id, presence: true
    validates :business_name, presence: true

    has_many_attached :review_photo

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    
    belongs_to :business,
        foreign_key: :business_id,
        class_name: :Business
    
end
