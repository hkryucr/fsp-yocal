# == Schema Information
#
# Table name: hours
#
#  id           :bigint           not null, primary key
#  is_overnight :boolean
#  start        :string
#  end          :string
#  day          :integer
#  business_id  :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Hour < ApplicationRecord
    validates :is_overnight, inclusion: { in: [ true, false ] }
    belongs_to :business,
        foreign_key: :business_id,
        class_name: :Business
end
