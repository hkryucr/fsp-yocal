class AddReviewCreated < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :review_date, :date
    add_column :reviews, :review_date, :datetime
  end
end
