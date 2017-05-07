class AddForeignKeyShirtIdToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :shirt_id, :integer
  end
end
