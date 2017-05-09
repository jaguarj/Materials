class RemoveForeignIds < ActiveRecord::Migration[5.0]
  def change
  	remove_column :users, :user_shirt, :text
  	remove_column :users, :shirt_id, :integer
  	remove_column :users, :comment_id, :integer
  	remove_column :users, :favorite_id, :integer
  	remove_column :users, :img, :text
  	remove_column :shirts, :comment_id, :integer
  	remove_column :shirts, :favorite_id, :integer
  end
end
