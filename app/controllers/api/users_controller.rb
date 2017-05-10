class Api::UsersController < ApplicationController
	def show
		@user = User.find(params[:id])
		@shirts = @user.shirts

		render json: @user, include: [:shirts]
	end
end
