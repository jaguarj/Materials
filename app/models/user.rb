class User < ApplicationRecord
	has_many :shirts, dependent: :destroy
	has_many :comments, dependent: :destroy
	has_many :favorites
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100#" }
  # validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/

end
