# == Schema Information
#
# Table name: categorizings
#
#  id          :bigint           not null, primary key
#  business_id :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Categorizing < ApplicationRecord
    validates :business_id, :category_id, presence: true

    belongs_to :business,
        foreign_key: :business_id,
        class_name: :Business
    
    belongs_to :category,
        foreign_key: :category_id,
        class_name: :Category
end
