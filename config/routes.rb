Rails.application.routes.draw do

  devise_for :users

  namespace :api do
  	resources :shirts
  end

  namespace :api do
  	resources :comments
  end


  root to: 'client#index'
  get '*path', to: 'client#index'
end
