class CreateSavedBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :saved_businesses do |t|
      t.integer :user_id
      t.integer :business_id
      t.timestamps
    end
    add_index :saved_businesses, [:user_id, :business_id], unique: true
  end
end
