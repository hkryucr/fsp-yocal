class SavedBusiness < ApplicationRecord
    validates :user_id, :business_id, presence: true

    belongs_to :business,
        foreign_key: :business_id,
        class_name: :Business

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
