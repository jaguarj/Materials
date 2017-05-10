class Api::ShirtsController < ApplicationController
  def index
  	@shirts = Shirt.all
  	render json: @shirts
  end

  def show
    # This is the controller action i want to hit for shirtsShow
  	@shirt = Shirt.find(params[:id])
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
    @shirt.update(shirt_params)
    if @shirt.save(shirt_params)
  		render json: @shirt, status: :ok
  	else
  		render json: @shirt.errors, status: :unproccesable_entity
  	end
  end

  def destroy
  	@shirt = current_user.shirts.find(params[:id])

  	@shirt.destroy

  	render json: '', status: :no_content

  end

  private

  def shirt_params
  	params.require(:shirt)
  	      .permit(:name, :image, :bio, :url)
  	      .merge(user_id: current_user.id)
  end
end
