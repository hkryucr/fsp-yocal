class AddColumnsToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :review_date, :date
    add_column :reviews, :useful, :integer
    add_column :reviews, :funny, :integer
    add_column :reviews, :cool, :integer
  end
end
