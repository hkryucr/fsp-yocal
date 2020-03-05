class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :business_id, null: false
      t.string :business_name, null: false
      t.string :rating
      t.text :text  
      t.timestamps
    end
    add_index :reviews, [:author_id, :business_id]
  end
end
