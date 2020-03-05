class CreateHours < ActiveRecord::Migration[5.2]
  def change
    create_table :hours do |t|
      t.boolean :is_overnight
      t.string :start
      t.string :end
      t.integer :day
      t.integer :business_id
      t.timestamps
    end
    add_index :hours, :business_id
  end
end
