class Api::ShirtsController < ApplicationController
  def index
  	@shirts = current_user.shirts
  	render json: @shirts
  end

  def show
  	@shirt = current_user.shirts.find(params[:id])
  	render json: @shirt
  end

  def create
  	@shirt = Shirt.new(shirt_params)

  	if @shirt.save
  		render json: @shirt, status: :created
  	else
  		render json: @shirt.errors, status: :unproccesable_entity
  	end
  end

  def update
  	@shirt = current_user.shirts.find(params[:id])

  	if @shirt.save
  		render json: @shirt, status: :ok
  	else
  		render json: @note.errors, status: :unproccesable_entity
  	end
  end

  def destroy
  	@shirt = current_user.shirts.find(params[:id])

  	@note.destroy

  	render json: '', status: :no_content

  end

  private

  def shirt_params
  	params.require(:shirt)
  	      .permit(:name, :image, :bio, :url)
  	      .merge(user_id: current_user.id)
  end
end
