class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.date :published_date
      t.integer :user_id
      t.integer :shirt_id

      t.timestamps
    end
  end
end
