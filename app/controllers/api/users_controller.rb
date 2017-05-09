class Api::UsersController < ApplicationController
	def show
		@user = User.find(params[:id])
		@shirts = @user.shirts

		binding.pry



		respond_to do |format|
  		format.json  { render :json => @user.to_json(:include => [@shirts])}
		end


	end



	# private
 # # Get help
	# def user_params
	# 	params.require(:user)
	# 		.permit(:email, :name, :image, :bio, :user_shirt)
	# 		.merge(shirt_id: shirt_id.id, comment_id: comment_id.id, favorite_id: favorite_id.id)
	# end
end
