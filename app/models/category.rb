# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :categorization,
        foreign_key: :category_id,
        class_name: :Categorizing

    has_many :businesses,
        through: :categorization,
        source: :business
end
