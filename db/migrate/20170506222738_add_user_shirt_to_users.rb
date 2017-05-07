class AddUserShirtToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :user_shirt, :text
  end
end
