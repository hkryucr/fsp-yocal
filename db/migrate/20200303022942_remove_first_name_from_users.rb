class RemoveFirstNameFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_name, :string
    remove_column :users, :last_name, :string
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string 

  end
end
