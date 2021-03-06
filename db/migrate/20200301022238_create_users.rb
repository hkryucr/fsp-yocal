class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :email, null: false, unique: true
      t.string :zipcode, null: false
      t.date :birthday
      t.timestamps
    end
  end
end
