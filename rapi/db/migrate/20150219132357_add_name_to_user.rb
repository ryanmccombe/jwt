class AddNameToUser < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_index :users, :email
  end
end
