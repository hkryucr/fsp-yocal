class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :business_name, null: false
      t.text :url
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :phone
      t.string :price
      t.string :rating, null: false
      t.string :zipcode, null: false
      t.string :country, null: false
      t.string :state, null: false
      t.string :city, null: false
      t.string :address1, null: false
      t.string :address2
      t.string :address3
      t.boolean :is_claimed, null: false
      t.boolean :is_closed, null: false

      t.timestamps
    end
    add_index :businesses, :business_name
    add_index :businesses, [:latitude, :longitude] 
  end
end
