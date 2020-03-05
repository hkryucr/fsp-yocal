class CreateCategorizings < ActiveRecord::Migration[5.2]
  def change
    create_table :categorizings do |t|
      t.integer :business_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
  end
end
