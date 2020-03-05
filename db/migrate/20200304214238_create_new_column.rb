class CreateNewColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :review_count, :integer
 
  end
end
