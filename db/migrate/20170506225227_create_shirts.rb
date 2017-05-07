class CreateShirts < ActiveRecord::Migration[5.0]
  def change
    create_table :shirts do |t|
      t.text :name
      t.text :image
      t.text :bio
      t.text :url
      t.integer :user_id
      t.integer :comment_id
      t.integer :favorite_id

      t.timestamps
    end
  end
end
