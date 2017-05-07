class Api::CommentsController < ApplicationController
  def index
  	@comments = current_user.comments
  	render json: @notes
  end

  def show
  	@comment = current_user.comments.find(params[:id])
  	render json: @comment
  end

  def create
  	@comment = Comment.new(note_params)

  	if @comment.save
  		render json: @comment, status: :created
  	else
  		render json: @comment.errors, status: :unprocessable_entity
  	end
  end

  def update
  	@comment = current_user.comments.find(params[:id])

  	if @comment.save
  		render json: @comment, status: :ok
  	else
  		render json: @comment.errors, status: :unprocessable_entity
  	end
  end

  def destroy
  	@comment = current_user.comments.find(params[:id])

  	@comment.destroy

  	render json: '', status: :no_content
  end

  private

  def comment_params
  	params.require(:comment)
  	      .permit(:content)
  	      .merge(user_id: current_user.id)
  end

end
